#!/bin/bash
# Makes a Klass8 account an admin (or, with --remove, takes that away).
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh
# First sign up in the app with your own phone number and password: this only
# marks that account as an admin. No password is asked for or shown here.
set -eu
ACTION=add
[ "${1:-}" = "--remove" ] && ACTION=remove
run() { docker exec klass8-api node --disable-warning=ExperimentalWarning server/make-admin.mjs "$@"; }

read -rp "Phone number of the account (the one you log in with): " PHONE
WHO=$(run find "$PHONE") || { echo "$WHO"; exit 1; }
echo "Account: $WHO"
if [ "$ACTION" = add ]; then Q="Make this account an admin"; else Q="Take admin away from this account"; fi
read -rp "$Q? [yes]: " OK
case "${OK:-yes}" in y | Y | yes | YES | Yes) ;; *) echo "Nothing changed."; exit 0 ;; esac
run "$ACTION" "$PHONE"
