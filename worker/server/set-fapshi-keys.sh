#!/bin/bash
# Opens mobile money payments: asks for the Fapshi service's API user and key
# (the key is not shown), checks them with Fapshi, saves them in
# /opt/klass8-api/.env and restarts the API. Run it on the server with
#   ssh -t root@72.61.177.234 /opt/klass8-api/set-fapshi-keys.sh
# Nothing is saved unless Fapshi accepts the keys.
set -eu
ENV_FILE=/opt/klass8-api/.env
WEBHOOK_URL=https://klass8.ebenesaid.com/v1/billing/fapshi-webhook

ask_yes() { # question, default (yes|no)
  local a
  read -rp "$1 [$2]: " a
  a=${a:-$2}
  case "$a" in y | Y | yes | YES | Yes) return 0 ;; *) return 1 ;; esac
}

echo "Klass8 payments with Fapshi"
echo
echo "Are these keys for real money (live) or for testing (sandbox)?"
read -rp "Type live or sandbox [live]: " MODE
MODE=${MODE:-live}
case "$MODE" in live) BASE=https://live.fapshi.com ;; sandbox) BASE=https://sandbox.fapshi.com ;; *) echo "Type live or sandbox. Nothing changed."; exit 1 ;; esac

read -rp "Fapshi API user (from your service in the Fapshi dashboard): " API_USER
read -rsp "Fapshi API key (it is not shown as you paste it): " API_KEY; echo
case "$API_USER$API_KEY" in *[[:space:]]* | "") echo "The API user or key is empty or has spaces in it. Nothing changed."; exit 1 ;; esac

echo "Checking the keys with Fapshi..."
CODE=$(curl -s -o /tmp/fapshi-check.json -w "%{http_code}" -m 20 -H "apiuser: $API_USER" -H "apikey: $API_KEY" "$BASE/balance" || true)
if [ "$CODE" != "200" ]; then
  echo "Fapshi did not accept these keys for $MODE (answer $CODE). Check that you copied the $MODE API user and key of the right service. Nothing changed."
  rm -f /tmp/fapshi-check.json
  exit 1
fi
SERVICE=$(python3 -c 'import json;d=json.load(open("/tmp/fapshi-check.json"));print(d.get("service",""))' 2>/dev/null || true)
rm -f /tmp/fapshi-check.json
echo "Fapshi accepted the keys${SERVICE:+ for the service \"$SERVICE\"}."

# The webhook secret: kept if there is one already, otherwise made here.
SECRET=$(grep "^FAPSHI_WEBHOOK_SECRET=" "$ENV_FILE" 2>/dev/null | cut -d= -f2- || true)
[ -n "$SECRET" ] || SECRET=$(openssl rand -hex 24)

echo
echo "Has Fapshi switched on Direct Pay for this service? Fapshi keeps it off on live"
echo "until you ask them. Answer no if you are not sure: students then pay on Fapshi's"
echo "own payment page, which always works."
if ask_yes "Direct Pay switched on" no; then DIRECT=on; else DIRECT=off; fi

echo
echo "Start the platform charges now? Each student's first month stays free; after it,"
echo "they pay 350 FCFA a month or 3,500 FCFA a year to keep using Klass8."
if ask_yes "Start the platform charges" yes; then PAYWALL=on; else PAYWALL=off; fi

umask 077
sed -i "/^FAPSHI_API_USER=/d;/^FAPSHI_API_KEY=/d;/^FAPSHI_WEBHOOK_SECRET=/d;/^FAPSHI_ENV=/d;/^FAPSHI_DIRECT_PAY=/d;/^PAYWALL=/d" "$ENV_FILE"
{
  printf "FAPSHI_ENV=%s\n" "$MODE"
  printf "FAPSHI_API_USER=%s\n" "$API_USER"
  printf "FAPSHI_API_KEY=%s\n" "$API_KEY"
  printf "FAPSHI_WEBHOOK_SECRET=%s\n" "$SECRET"
  printf "FAPSHI_DIRECT_PAY=%s\n" "$DIRECT"
  printf "PAYWALL=%s\n" "$PAYWALL"
} >> "$ENV_FILE"
unset API_KEY
chmod 600 "$ENV_FILE"
echo "Saved. Restarting the API..."
/opt/klass8-api/restart.sh
echo
curl -s -m 10 http://127.0.0.1:8787/v1/billing/plans | python3 -c 'import json,sys;d=json.load(sys.stdin);print("Payments open:", d["paymentsOpen"], "| checkout:", "prompt on the phone" if d["checkout"]=="prompt" else "Fapshi payment page", "| paywall:", d["paywall"])'
echo
echo "Last step, in the Fapshi dashboard: open this service's settings and set"
echo "  Webhook URL:    $WEBHOOK_URL"
echo "  Webhook secret: $SECRET"
echo "Then save. Payments are confirmed even without it (Klass8 checks open payments"
echo "every 3 minutes), but the webhook makes the course open within seconds."
