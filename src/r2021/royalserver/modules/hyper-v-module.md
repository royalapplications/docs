---
name: Hyper-V Module
order: 8080
---

# Hyper-V Module

The Hyper-V Module is offering basic Hyper-V instance management.

> **WMI or CIM**  
> The Hyper-V module can be executed via WMI or CIM. If WMI is used, dynamic high ports are required for the binary communication between Royal Server and the managed host. If CIM is configured, WinRM is used as a transport mechanism. Please configure any managed server upfront via the PowerShell script `prepare_server.ps1` which is located in the `./scripts` directory of the Royal Server installation directory.

## Features

- Get a list of Hyper-V instances
- Start an instance
- Stop an instance
- Save the state of an instance
- Pause an instance
- Get Instance Details
- Get network Details
- Get a screenshot of the VM

## Usage

Add a [Hyper-V](xref:royalts_reference_connections_hyper-v) connection in RoyalTS and assign a Royal Server object to it.
