#!/usr/bin/env bash

echo $(bash --version 2>&1 | head -n 1)

/usr/local/bin/pwsh -ExecutionPolicy ByPass -NoProfile ./docfx.ps1 $@
