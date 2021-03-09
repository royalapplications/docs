---
uid: royalserver_introduction_configuration
name: Managed Server Configuration
order: 10020
---

# Configuration of Managed Servers

Each server that should be managed by Royal Server needs to have two basic things configured:

1.  Enable-PSRemoting
2.  Firewall should let through Royal Server traffic

### 1. Enable-PSRemoting

Most of the Management Endpoint modules are based on WMI. To enable the proper configuration for remote WMI calls, you need to execute the Enable-PSRemoting command in an elevated PowerShell console.

### 2. Firewall Settings

In case the Windows Firewall is enabled the following two rules must be enabled:

- Windows Management Instrumentation (WMI-In), and
- Windows Management Instrumentation (DCOM-In)

For the above two steps, we have also prepared a PowerShell script (in `<royal-server-installation-dir>\scripts\prepare_server.ps1`). See the [Preparing a Managed Server](xref:royalserver_advanced_management-scripts_pepare) chapter.
