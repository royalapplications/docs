---
uid: royalserver_modules_vmware
name: VMware Module
order: 8040
---

# VMware Module

The VMware Module is offering basic virtual machine instance management for VMs hosted in ESXi or vCenter.

## Features

- Get a list of virtual machine instances
- Get a list of ESXi hosts and their SSH service state
- Start or stop the SSH service on a selected ESXi host
- Power On or Power Off a VM
- Shutdown or Reboot a guest
- Suspend or Reset a VM
- Terminate a VM
- Change the notes of a VM (not implemented in Royal TS yet)
- Get a screenshot of the VM (not implemented in Royal TS yet)
- Enable connections to a VM via VNC (if enabled), to the VM Console or to the host (via SSH)

## Usage

Add a [VMware](xref:royalts_reference_connections_vmware) connection in Royal TS and assign a Royal Server object to it. The account used for the VMware connection needs permission to manage host services to start or stop SSH.
