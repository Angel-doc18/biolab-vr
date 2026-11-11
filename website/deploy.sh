#!/bin/sh
# Builds the public website and puts it live at https://klass8.ebenesaid.com/
# (files in /var/www/klass8/site on Klass8's server; the web app is at /app).
#
#   sh website/deploy.sh
#
# The nginx site "klass8" serves / and the pages (/features, /pricing, ...)
# from /var/www/klass8/site, and /app from the web app in /var/www/klass8/app.
set -eu
HOST=${KLASS8_HOST:-root@72.61.177.234}
cd "$(dirname "$0")"
node build.js
tar czf - -C dist . | ssh "$HOST" 'set -eu
  rm -rf /var/www/klass8/site.new && mkdir -p /var/www/klass8/site.new
  tar xzf - -C /var/www/klass8/site.new
  chmod -R a+rX /var/www/klass8/site.new
  rm -rf /var/www/klass8/site.old
  [ -d /var/www/klass8/site ] && mv /var/www/klass8/site /var/www/klass8/site.old
  mv /var/www/klass8/site.new /var/www/klass8/site
  echo "site updated $(date -u +%FT%TZ)"'
