---
name: Windows Services Module
order: 8000
---

# Windows Services Module

The Windows Services Module allows you to work with Windows Services.

> **WMI or CIM**  
> The Hyper-V module can be executed via WMI or CIM. If WMI is used, dynamic high ports are required for the binary communication between Royal Server and the managed host. If CIM is configured, WinRM is used as a transport mechanism. Please configure any managed server upfront via the PowerShell script `prepare_server.ps1` which is located in the `./scripts` directory of the Royal Server installation directory.

## Features

- Get a list of Windows Services
- Start service
- Stop a service
- Restart a service
- Change the start mode of a service
