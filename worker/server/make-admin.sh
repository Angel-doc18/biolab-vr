#!/bin/bash
# Looks after Klass8 admin accounts. Admins are their own accounts (not a
# student, parent or teacher account) and sign in on the usual sign-in page.
# Run it on the server:
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh            (list, then choose)
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh add        (a new admin)
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh add cto name@example.com "Full Name"
#                                                     (asks only for the password)
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh role       (ceo, cto or admin)
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh password   (a new password)
#   ssh -t root@72.61.177.234 /opt/klass8-api/make-admin.sh off|on     (stop or allow sign-in)
# The password is typed here without being shown, passed to the container from
# the environment (never on a command line), and stored as a salted hash.
set -eu
run() { docker exec "$@"; }
node_cmd=(node --disable-warning=ExperimentalWarning server/make-admin.mjs)

ask_password() {
  local p1 p2
  read -rsp "Password (at least 10 characters, not shown): " p1; echo
  read -rsp "The same password again: " p2; echo
  if [ "$p1" != "$p2" ]; then echo "The two passwords are not the same. Nothing changed."; exit 1; fi
  PASSWORD="$p1"
}

ACTION="${1:-}"
if [ -z "$ACTION" ]; then
  run klass8-api "${node_cmd[@]}" list
  echo
  read -rp "What now? add / role / password / off / on / nothing [nothing]: " ACTION
  ACTION="${ACTION:-nothing}"
fi

case "$ACTION" in
  list)
    run klass8-api "${node_cmd[@]}" list ;;
  add)
    ROLE="${2:-}"; LOGIN="${3:-}"; NAME="${4:-}"
    if [ -z "$NAME" ]; then read -rp "Admin's full name: " NAME; fi
    if [ -z "$LOGIN" ]; then read -rp "Email or phone number they will sign in with: " LOGIN; fi
    if [ -z "$ROLE" ]; then read -rp "Role: ceo (the founder), cto, or admin [admin]: " ROLE; fi
    ROLE="${ROLE:-admin}"
    echo "Making the $ROLE account for $NAME ($LOGIN)."
    ask_password
    K8_ADMIN_PASSWORD="$PASSWORD" run -e K8_ADMIN_PASSWORD klass8-api "${node_cmd[@]}" add "$NAME" "$LOGIN" "$ROLE" ;;
  role)
    read -rp "Email or phone number of the admin: " LOGIN
    read -rp "New role: ceo, cto or admin: " ROLE
    run klass8-api "${node_cmd[@]}" role "$LOGIN" "$ROLE" ;;
  password)
    read -rp "Email or phone number of the admin: " LOGIN
    ask_password
    K8_ADMIN_PASSWORD="$PASSWORD" run -e K8_ADMIN_PASSWORD klass8-api "${node_cmd[@]}" password "$LOGIN" ;;
  off | on)
    read -rp "Email or phone number of the admin: " LOGIN
    run klass8-api "${node_cmd[@]}" "$ACTION" "$LOGIN" ;;
  nothing)
    echo "Nothing changed." ;;
  *)
    echo "Choose add, role, password, off, on or list."; exit 1 ;;
esac
