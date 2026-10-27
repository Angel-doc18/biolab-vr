"""Klass8 tutor voice service.

POST /tts  {"text": "...", "lang": "en"|"fr", "voice": "bf_emma", "speed": 0.92}
           header X-Voice-Key: <shared key>          -> audio/mpeg (MP3, mono)
           header X-May-Make: 0 gives only a clip already made, else 429
GET  /health                                         -> {"ok": true}

One request is spoken at a time (the server has two cores), so a burst of
requests queues instead of slowing everything else on the machine. Every clip
is kept on disk (/cache), so a sentence is only ever spoken once; the lesson
texts are spoken ahead of time by warm.py.
"""
import hashlib
import io
import os
import threading

import numpy as np
import soundfile as sf
import torch
from fastapi import FastAPI, Header, HTTPException
from fastapi.responses import Response
from kokoro import KPipeline
from pydantic import BaseModel

torch.set_num_threads(int(os.environ.get('VOICE_THREADS', '2')))
KEY = os.environ.get('VOICE_KEY', '')
LANG_CODE = {'en-gb': 'b', 'en-us': 'a', 'fr': 'f'}
DEFAULT_VOICE = {'en': os.environ.get('VOICE_EN', 'bf_emma'), 'fr': os.environ.get('VOICE_FR', 'ff_siwis')}
DEFAULT_SPEED = float(os.environ.get('VOICE_SPEED', '0.92'))
MAX_TEXT = 1200
CACHE = os.environ.get('VOICE_CACHE_DIR', '/cache')

app = FastAPI()
_pipes = {}
_lock = threading.Lock()


def cache_path(text, lang, voice, speed):
    voice = voice or DEFAULT_VOICE[lang]
    key = hashlib.sha256(f'1|{lang}|{voice}|{speed:.2f}|{text}'.encode()).hexdigest()
    return os.path.join(CACHE, key[:2], key + '.mp3')


def cached_or_spoken(text, lang, voice, speed, make=True):
    path = cache_path(text, lang, voice, speed)
    if os.path.exists(path):
        with open(path, 'rb') as f:
            return f.read(), 'hit'
    if not make:
        raise HTTPException(429, 'not made yet')
    with _lock:
        if os.path.exists(path):
            with open(path, 'rb') as f:
                return f.read(), 'hit'
        mp3 = speak(text, lang, voice, speed)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + '.part'
    with open(tmp, 'wb') as f:
        f.write(mp3)
    os.replace(tmp, path)
    return mp3, 'new'


def pipe(code):
    if code not in _pipes:
        _pipes[code] = KPipeline(lang_code=code, repo_id='hexgrad/Kokoro-82M')
    return _pipes[code]


def speak(text, lang, voice, speed):
    voice = voice or DEFAULT_VOICE[lang]
    code = 'f' if lang == 'fr' else ('a' if voice.startswith('a') else 'b')
    parts = [audio for _, _, audio in pipe(code)(text, voice=voice, speed=speed)]
    if not parts:
        raise ValueError('no audio')
    gap = np.zeros(int(24000 * 0.12), dtype=np.float32)
    wav = np.concatenate([np.concatenate([p.numpy() if hasattr(p, 'numpy') else p, gap]) for p in parts])
    buf = io.BytesIO()
    sf.write(buf, wav, 24000, format='MP3')
    return buf.getvalue()


class Req(BaseModel):
    text: str
    lang: str = 'en'
    voice: str | None = None
    speed: float | None = None


@app.get('/health')
def health():
    return {'ok': True}


@app.post('/tts')
def tts(req: Req, x_voice_key: str = Header(default=''), x_may_make: str = Header(default='1')):
    if not KEY or x_voice_key != KEY:
        raise HTTPException(401, 'bad key')
    text = ' '.join(req.text.split())
    if not text or len(text) > MAX_TEXT or req.lang not in ('en', 'fr'):
        raise HTTPException(400, 'bad request')
    speed = min(1.3, max(0.7, req.speed or DEFAULT_SPEED))
    mp3, how = cached_or_spoken(text, req.lang, req.voice, speed, make=x_may_make != '0')
    return Response(mp3, media_type='audio/mpeg', headers={'x-voice-cache': how})
