#!/usr/bin/env python3
"""Speaks the lesson texts ahead of time, overnight, so lessons play at once.

Run by cron at 21:00 UTC (22:00 in Cameroon). It goes through texts.json in
order (pieces already on disk come back in milliseconds) and stops at 06:00 UTC.
Its pieces are sent at low priority, so a student's piece is always made first.
`python3 warm.py now` runs it at once, whatever the hour.
"""
import datetime
import json
import os
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = dict(line.strip().split('=', 1) for line in open(os.path.join(HERE, '.env')) if '=' in line)['VOICE_KEY']
STOP_HOUR_UTC = 6


def late():
    if 'now' in sys.argv[1:]:
        return False
    h = datetime.datetime.now(datetime.timezone.utc).hour
    return STOP_HOUR_UTC <= h < 21


pieces = json.load(open(os.path.join(HERE, 'texts.json')))
made = hits = failed = 0
start = time.time()
for p in pieces:
    if late():
        break
    req = urllib.request.Request(
        'http://127.0.0.1:8880/tts',
        data=json.dumps({'text': p['text'], 'lang': p['lang']}).encode(),
        headers={'content-type': 'application/json', 'x-voice-key': KEY, 'x-voice-priority': 'low'},
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as res:
            if res.headers.get('x-voice-cache') == 'hit':
                hits += 1
            else:
                made += 1
    except Exception as e:  # noqa: BLE001
        failed += 1
        print('failed:', str(e)[:120], flush=True)
        time.sleep(5)
print(f'{datetime.datetime.now(datetime.timezone.utc):%Y-%m-%d %H:%M} made {made}, already done {hits}, failed {failed}, '
      f'{len(pieces)} in total, {round((time.time() - start) / 60)} min', flush=True)
