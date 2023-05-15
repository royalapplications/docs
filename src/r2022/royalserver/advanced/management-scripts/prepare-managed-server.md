---
uid: royalserver_advanced_management_scripts_prepare
name: Prepare a Managed Server
order: 5120
---

# Prepare a Managed Server

In the topic [Configuration of Managed Servers](xref:royalserver_introduction_configuration) we have listed the required changes to set up a managed server.

You can do this manually or use our script. You can find it in
`<royal-server-installation-directory>\scripts\prepare_server.ps1`. For each step, the script is asking for permission to do the necessary changes.

The script is doing the following steps:

- it creates two Windows Firewall rules for Windows Management Instrumentation (both DCOM and WMI) and
- it enables ps-remoting for PowerShell Remoting.
