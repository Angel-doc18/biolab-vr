#!/bin/sh
# Deploys the Klass8 API and the tutor's voice server to Klass8's own server
# (the Hostinger VPS that also runs the ebenesaid sites, which this never touches).
#
#   sh worker/deploy.sh api      the API (worker/src + worker/server) on 127.0.0.1:8787
#   sh worker/deploy.sh voice    the voice server (worker/voice) on 127.0.0.1:8880
#
# Both run in Docker on the network "klass8"; nginx (site "klass8") passes
# https://klass8.ebenesaid.com/v1/ to the API. Secrets stay in
# /opt/klass8-api/.env and /opt/klass8-voice/.env on the server (chmod 600).
set -eu
HOST=${KLASS8_HOST:-root@72.61.177.234}
cd "$(dirname "$0")"

case "${1:-}" in
  api)
    tar czf - Dockerfile .dockerignore package.json package-lock.json src server migrations assets |
      ssh "$HOST" 'set -eu
        mkdir -p /opt/klass8-api/data/backups && chown -R 1000:1000 /opt/klass8-api/data
        rm -rf /opt/klass8-api/build && mkdir /opt/klass8-api/build && tar xzf - -C /opt/klass8-api/build
        cd /opt/klass8-api/build && docker build -q -t klass8-api . >/dev/null
        docker network inspect klass8 >/dev/null 2>&1 || docker network create klass8 >/dev/null
        docker rm -f klass8-api >/dev/null 2>&1 || true
        docker run -d --name klass8-api --restart unless-stopped --network klass8 --cpus 1 --memory 512m \
          --env-file /opt/klass8-api/build/server/settings.env --env-file /opt/klass8-api/.env \
          -p 127.0.0.1:8787:8787 -v /opt/klass8-api/data:/data klass8-api >/dev/null
        for i in $(seq 1 30); do curl -sf http://127.0.0.1:8787/v1/health && exit 0; sleep 1; done
        docker logs --tail 30 klass8-api; exit 1'
    ;;
  voice)
    tar czf - -C voice Dockerfile server.py warm.py |
      ssh "$HOST" 'set -eu
        tar xzf - -C /opt/klass8-voice && cd /opt/klass8-voice && docker build -q -t klass8-voice . >/dev/null
        docker network inspect klass8 >/dev/null 2>&1 || docker network create klass8 >/dev/null
        docker rm -f klass8-voice >/dev/null 2>&1 || true
        docker run -d --name klass8-voice --restart unless-stopped --network klass8 --cpus 2 --cpu-shares 256 --memory 3g \
          --env-file .env -e VOICE_EN=bm_fable -e VOICE_FR=ff_siwis -e VOICE_SPEED=0.92 \
          -p 127.0.0.1:8880:8880 -v /opt/klass8-voice/models:/models -v /opt/klass8-voice/cache:/cache klass8-voice >/dev/null
        for i in $(seq 1 90); do curl -sf http://127.0.0.1:8880/health && exit 0; sleep 2; done
        docker logs --tail 30 klass8-voice; exit 1'
    ;;
  *)
    echo 'usage: sh worker/deploy.sh api|voice' >&2
    exit 2
    ;;
esac
