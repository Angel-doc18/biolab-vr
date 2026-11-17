#!/bin/bash
# Tests Klass8's Direct Pay against Fapshi's SANDBOX (test money only): the
# check Fapshi asks for before it switches Direct Pay on for the live service.
#   ssh -t root@72.61.177.234 /opt/klass8-api/fapshi-sandbox-test.sh
# It asks for the SANDBOX API user and key (from the sandbox/test service in
# the Fapshi dashboard, not the live ones). They are used for this run only:
# not saved and not printed. The live keys and real payments are not touched.
set -eu
read -rp "Sandbox API user: " U
read -rsp "Sandbox API key (hidden as you type): " K
echo
if [ -z "$U" ] || [ -z "$K" ]; then echo "Both are needed. Nothing was sent."; exit 1; fi
echo "Sending 3 test payments to Fapshi's sandbox test numbers (about a minute)..."
printf '%s\n%s\n' "$U" "$K" | docker exec -i klass8-api node --disable-warning=ExperimentalWarning server/fapshi-sandbox-test.mjs
unset U K
