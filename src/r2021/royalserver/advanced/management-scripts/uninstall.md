---
name: Cleanup an Installation
order: 5000
---

# Cleanup an Installation

Royal Server is installed via an MSI package. Uninstalling Royal Server is just a matter of seconds.

Additionally Royal Server is changing the machine where it is running:

- it stores settings in the Windows Registry
- it creates a local group `Royal Server Users`
- it creates a local group `Royal Server Gateway Users`
- it creates a Windows EventLog `Royal Server Log`
- it creates a Firewall Rule `Royal Server Modules`
- it creates a Firewall Rule `Royal Server Secure Gateway (SSH tunnel)`
- it creates a settings file under `%APPDATA%\RoyalServer\`

You can either remove these items manually or use our script for this. You can find it in `<royal-server-installation-directory>\scripts\cleanup_installation.ps1`. For each step, the script is asking for permission to do the necessary changes.
