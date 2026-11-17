# Makes the Klass8 Google Play upload key and adds the 4 signing secrets to
# GitHub, in one go. Run it in PowerShell on your own computer:
#
#   powershell -ExecutionPolicy Bypass -File C:\Users\pc\dev\biolab-vr-run\store\play\setup-signing.ps1
#
# You choose the password; it is typed without being shown, and it is never
# printed or saved anywhere except inside the key file and GitHub's encrypted
# secrets. The GitHub account signed in with "gh" must be an ADMIN of
# Angel-doc18/biolab-vr (only admins can add secrets).
# Keep the folder Documents\klass8-play-key and the password safe (a USB key or
# your Google Drive). If they are lost, Google can reset the upload key.
#
# -KeyOnly: only makes the key and the file keystore-base64.txt, for the
# repository OWNER to paste into GitHub herself (on a personal repository only
# the owner can add secrets):
#   powershell -ExecutionPolicy Bypass -File C:\Users\pc\dev\biolab-vr-run\store\play\setup-signing.ps1 -KeyOnly
param([switch]$KeyOnly)
$ErrorActionPreference = 'Stop'
$repo = 'Angel-doc18/biolab-vr'
$openssl = 'C:\Program Files\Git\usr\bin\openssl.exe'
$dir = Join-Path $HOME 'Documents\klass8-play-key'
$ks = Join-Path $dir 'klass8-upload.keystore'

if (-not (Test-Path $openssl)) { throw "OpenSSL was not found at $openssl (it comes with Git for Windows)." }
if (-not $KeyOnly) {
  if ((Invoke-Quiet gh @('auth', 'status')) -ne 0) { throw 'Sign in to GitHub first with: gh auth login' }
  $admin = gh api "repos/$repo" --jq '.permissions.admin'
  if ($admin -ne 'true') { throw "The GitHub account signed in here cannot add secrets to $repo (only its owner can). Run this again with -KeyOnly and give the owner the file it makes." }
}

New-Item -ItemType Directory -Force $dir | Out-Null
if (Test-Path $ks) {
  Write-Host "A Klass8 upload key already exists at $ks. It is kept; only the GitHub secrets are set again."
}

# Runs a program and judges it by its exit code only: Windows PowerShell 5 would
# otherwise treat its normal progress messages (OpenSSL's dots, gh's "Set secret")
# as errors and stop.
function Invoke-Quiet {
  param([string]$exe, [string[]]$argv)
  $old = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try { & $exe @argv 2>&1 | Out-Null } finally { $ErrorActionPreference = $old }
  return $LASTEXITCODE
}

function Read-Secret($prompt) {
  $s = Read-Host $prompt -AsSecureString
  $b = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($s)
  try { [Runtime.InteropServices.Marshal]::PtrToStringBSTR($b) } finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($b) }
}

$p1 = Read-Secret 'Keystore password (at least 8 characters, not shown)'
if (-not (Test-Path $ks)) {
  $p2 = Read-Secret 'The same password again'
  if ($p1 -ne $p2) { throw 'The two passwords are not the same. Nothing was made.' }
}
if ($p1.Length -lt 8) { throw 'The password must have at least 8 characters. Nothing was made.' }

$env:K8_KEY_PASS = $p1
try {
  if (-not (Test-Path $ks)) {
    Write-Host 'Making the upload key...'
    $key = Join-Path $dir 'key.pem'
    $cert = Join-Path $dir 'cert.pem'
    if ((Invoke-Quiet $openssl @('req', '-x509', '-newkey', 'rsa:2048', '-keyout', $key, '-out', $cert, '-days', '10000', '-subj', '/CN=Klass8/O=Klass8/C=CM', '-passout', 'env:K8_KEY_PASS')) -ne 0) { throw 'OpenSSL could not make the key.' }
    if ((Invoke-Quiet $openssl @('pkcs12', '-export', '-in', $cert, '-inkey', $key, '-passin', 'env:K8_KEY_PASS', '-name', 'klass8', '-out', $ks, '-passout', 'env:K8_KEY_PASS')) -ne 0) { throw 'OpenSSL could not make the keystore.' }
    Remove-Item $key, $cert -Force   # the private key now lives only inside the password-protected keystore
    if (-not (Test-Path $ks)) { throw 'The key file was not made.' }
  }
  # Check the password opens the key before sending anything to GitHub.
  if ((Invoke-Quiet $openssl @('pkcs12', '-in', $ks, '-passin', 'env:K8_KEY_PASS', '-noout')) -ne 0) { throw 'This password does not open the key file. Nothing was sent to GitHub.' }

  if ($KeyOnly) {
    $out = Join-Path $dir 'keystore-base64.txt'
    [IO.File]::WriteAllText($out, [Convert]::ToBase64String([IO.File]::ReadAllBytes($ks)))
    Write-Host ''
    Write-Host "Done. The key is in $dir"
    Write-Host "Give the owner of Angel-doc18 the file $out and the password, privately (not in a group chat)."
    Write-Host 'Once she has added the 4 secrets, delete keystore-base64.txt (keep the keystore and the password).'
    return
  }
  Write-Host 'Adding the 4 secrets to GitHub...'
  $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($ks))
  foreach ($pair in @(@('KLASS8_UPLOAD_KEYSTORE', $b64), @('KLASS8_UPLOAD_KEY_ALIAS', 'klass8'), @('KLASS8_UPLOAD_STORE_PASSWORD', $p1), @('KLASS8_UPLOAD_KEY_PASSWORD', $p1))) {
    if ((Invoke-Quiet gh @('secret', 'set', $pair[0], '--repo', $repo, '--body', $pair[1])) -ne 0) { throw "GitHub did not accept the secret $($pair[0])." }
  }
} finally {
  Remove-Item Env:K8_KEY_PASS -ErrorAction SilentlyContinue
  $p1 = $null; $p2 = $null
}

Write-Host ''
Write-Host 'Done. The 4 signing secrets are on GitHub.'
Write-Host "Back up this folder and keep the password safe: $dir"
Write-Host 'Then tell Claude: secrets added.'
