"""Klass8 tutor voice service.

POST /tts  {"text": "...", "lang": "en"|"fr", "voice": "bf_emma", "speed": 0.92}
           header X-Voice-Key: <shared key>          -> audio/mpeg (MP3, mono)
           header X-May-Make: 0 gives only a clip already made, else 429
           header X-Voice-Priority: low for the overnight warmer
GET  /health                                         -> {"ok": true}

The server has two cores, so new speech is made one piece at a time, in the
order it was asked for, by one worker thread. Students' pieces go before the
warmer's. Every clip is kept on disk (/cache), so a sentence is only ever
spoken once; the lesson texts are spoken ahead of time by warm.py.

All the model's work stays on that one thread and the freed memory is handed
back after each piece, so memory stays level instead of growing until the
container is stopped.
"""
import ctypes
import gc
import hashlib
import io
import itertools
import os
import queue
import threading
from concurrent.futures import Future

import numpy as np
import soundfile as sf
import torch
from fastapi import FastAPI, Header, HTTPException
from fastapi.responses import Response
from kokoro import KPipeline
from pydantic import BaseModel

torch.set_num_threads(int(os.environ.get('VOICE_THREADS', '2')))
KEY = os.environ.get('VOICE_KEY', '')
DEFAULT_VOICE = {'en': os.environ.get('VOICE_EN', 'bf_emma'), 'fr': os.environ.get('VOICE_FR', 'ff_siwis')}
DEFAULT_SPEED = float(os.environ.get('VOICE_SPEED', '0.92'))
MAX_TEXT = 1200
CACHE = os.environ.get('VOICE_CACHE_DIR', '/cache')
REPO = 'hexgrad/Kokoro-82M'

app = FastAPI()
_pipes = {}
_jobs = queue.PriorityQueue()
_order = itertools.count()

try:
    _libc = ctypes.CDLL('libc.so.6')
except OSError:
    _libc = None


def cache_path(text, lang, voice, speed):
    voice = voice or DEFAULT_VOICE[lang]
    key = hashlib.sha256(f'1|{lang}|{voice}|{speed:.2f}|{text}'.encode()).hexdigest()
    return os.path.join(CACHE, key[:2], key + '.mp3')


def read_kept(path):
    try:
        with open(path, 'rb') as f:
            return f.read()
    except FileNotFoundError:
        return None


def lang_code(lang, voice):
    return 'f' if lang == 'fr' else ('a' if voice.startswith('a') else 'b')


def pipe(code):
    # One model for every language, so French does not load a second copy.
    if code not in _pipes:
        model = next(iter(_pipes.values())).model if _pipes else True
        _pipes[code] = KPipeline(lang_code=code, repo_id=REPO, model=model)
    return _pipes[code]


def speak(text, lang, voice, speed):
    voice = voice or DEFAULT_VOICE[lang]
    with torch.inference_mode():
        parts = [audio for _, _, audio in pipe(lang_code(lang, voice))(text, voice=voice, speed=speed)]
    if not parts:
        raise ValueError('no audio')
    gap = np.zeros(int(24000 * 0.12), dtype=np.float32)
    wav = np.concatenate([np.concatenate([p.numpy() if hasattr(p, 'numpy') else p, gap]) for p in parts])
    buf = io.BytesIO()
    sf.write(buf, wav, 24000, format='MP3')
    return buf.getvalue()


def make(text, lang, voice, speed):
    path = cache_path(text, lang, voice, speed)
    mp3 = read_kept(path)  # asked for twice while waiting in line
    if mp3 is not None:
        return mp3
    mp3 = speak(text, lang, voice, speed)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + '.part'
    with open(tmp, 'wb') as f:
        f.write(mp3)
    os.replace(tmp, path)
    return mp3


def worker():
    # Load the voices before the first student asks, so nobody waits for that.
    for lang in ('en', 'fr'):
        voice = DEFAULT_VOICE[lang]
        try:
            with torch.inference_mode():
                list(pipe(lang_code(lang, voice))('Ready.', voice=voice, speed=DEFAULT_SPEED))
        except Exception as e:  # noqa: BLE001
            print('voice preload failed', lang, e, flush=True)
    while True:
        _, _, job, done = _jobs.get()
        if done.set_running_or_notify_cancel():
            try:
                done.set_result(make(*job))
            except Exception as e:  # noqa: BLE001
                done.set_exception(e)
        gc.collect()
        if _libc is not None:
            _libc.malloc_trim(0)


threading.Thread(target=worker, daemon=True).start()


class Req(BaseModel):
    text: str
    lang: str = 'en'
    voice: str | None = None
    speed: float | None = None


@app.get('/health')
def health():
    return {'ok': True, 'waiting': _jobs.qsize()}


@app.post('/tts')
def tts(
    req: Req,
    x_voice_key: str = Header(default=''),
    x_may_make: str = Header(default='1'),
    x_voice_priority: str = Header(default=''),
):
    if not KEY or x_voice_key != KEY:
        raise HTTPException(401, 'bad key')
    text = ' '.join(req.text.split())
    if not text or len(text) > MAX_TEXT or req.lang not in ('en', 'fr'):
        raise HTTPException(400, 'bad request')
    speed = min(1.3, max(0.7, req.speed or DEFAULT_SPEED))
    mp3 = read_kept(cache_path(text, req.lang, req.voice, speed))
    if mp3 is not None:
        return Response(mp3, media_type='audio/mpeg', headers={'x-voice-cache': 'hit'})
    if x_may_make == '0':
        raise HTTPException(429, 'not made yet')
    done = Future()
    _jobs.put((1 if x_voice_priority == 'low' else 0, next(_order), (text, req.lang, req.voice, speed), done))
    try:
        mp3 = done.result(timeout=120)
    except TimeoutError:
        done.cancel()
        raise HTTPException(503, 'busy')
    return Response(mp3, media_type='audio/mpeg', headers={'x-voice-cache': 'new'})
