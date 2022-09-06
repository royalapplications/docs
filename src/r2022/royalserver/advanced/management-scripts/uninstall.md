---
name: Cleanup an Installation
order: 5000
---

# Cleanup an Installation

Royal Server is installed via an MSI package. Uninstalling Royal Server is just a matter of seconds.

Additionally Royal Server is changing the machine where it is running:

- it stores settings in the Windows Registry
- it creates multiple local Windows User Groups
- it creates a Windows EventLog `Royal Server Log`
- it creates two Windows Firewall Rules
- it creates a settings file under `%APPDATA%\RoyalServer\`
- it creates two default certificates and registers them with the Royal Server application
- it creates a configuration database
- it creates a logging directory for requests and responses
- it creates an appsettings.json file
- it creates Performance Counters

You can either remove these items manually or use our script for this. You can find it in `<royal-server-installation-directory>\scripts\cleanup_installation.ps1`. For each step, the script is asking for permission to do the necessary changes.
