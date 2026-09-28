:; set -eo pipefail
:; ./build.sh "$@"
:; exit $?

@ECHO OFF
pwsh -ExecutionPolicy ByPass -NoProfile .\docfx.ps1 %*
