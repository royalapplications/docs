---
uid: royalserver_modules_windows-processes
name: Windows Processes Module
order: 8020
---

# Windows Processes Module

The Windows Processes Module allows you to work with running Windows Processes.

> **WMI or CIM**  
> The Hyper-V module can be executed via WMI or CIM. If WMI is used, dynamic high ports are required for the binary communication between Royal Server and the managed host. If CIM is configured, WinRM is used as a transport mechanism. Please [configure any managed server](../../advanced/management-scripts/prepare-managed-server.md) upfront via the PowerShell script `prepare_server.ps1` which is located in the `./scripts` directory of the Royal Server installation directory.

## Features

- Get a list of Windows Processes
- Terminate a process

## Usage

Add a [Windows Processes](xref:royalts_reference_connections_windows-processes) connection in RoyalTS and assign a Royal Server object to it.
