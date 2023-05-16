#!/usr/bin/env bash

# To start the built-in webserver use ./docfx.sh -serve

echo $(bash --version 2>&1 | head -n 1)

/usr/local/bin/pwsh -ExecutionPolicy ByPass -NoProfile ./docfx.ps1 $@
