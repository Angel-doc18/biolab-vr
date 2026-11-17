#!/bin/bash
# Makes the sign-in Google's reviewers use to check Klass8 for the Play Store
# (or gives it a new password). Run it on the server:
#   ssh -t root@72.61.177.234 /opt/klass8-api/play-review.sh
# It prints the email and a new random password ONCE: copy both into Play
# Console > App content > App access. Run it again any time for a new password.
set -eu
EMAIL="${1:-review@klass8.com}"
PASSWORD="K8-$(openssl rand -base64 18 | tr -dc 'A-Za-z0-9' | head -c 14)"
docker exec -e K8_REVIEW_PASSWORD="$PASSWORD" klass8-api node --disable-warning=ExperimentalWarning server/play-review.mjs "$EMAIL"
echo
echo "Copy these into Play Console > App content > App access:"
echo "  Username: $EMAIL"
echo "  Password: $PASSWORD"
echo "  Instructions: Sign in with \"I already have an account\" using this email and password."
unset PASSWORD
