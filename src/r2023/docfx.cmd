:; set -eo pipefail
:; ./build.sh "$@"
:; exit $?

@ECHO OFF
"C:\Program Files\PowerShell\7\pwsh.exe" -ExecutionPolicy ByPass -NoProfile .\docfx.ps1 %*
