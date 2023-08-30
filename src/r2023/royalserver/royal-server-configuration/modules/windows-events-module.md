---
uid: royalserver_modules_windows-events
name: Windows Events Module
order: 8030
---

# Windows Events Module

The Windows Events Module allows you to query the Windows EventLog in a very flexible way.

> **WMI or CIM**  
> The Hyper-V module can be executed via WMI or CIM. If WMI is used, dynamic high ports are required for the binary communication between Royal Server and the managed host. If CIM is configured, WinRM is used as a transport mechanism. Please configure any managed server upfront via the PowerShell script `prepare_server.ps1` which is located in the `./scripts` directory of the Royal Server installation directory.

## Features

- Get log entries of one or more Windows Event Logs
- Very flexible query language

## Usage

Add a [Windows Events View](xref:royalts_reference_connections_windows-events) connection in RoyalTS and assign a Royal Server object to it.
