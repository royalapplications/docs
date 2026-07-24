---
uid: royalts_reference_connections_proxmox
name: Proxmox
order: 9825
---

# Proxmox

The **Proxmox** connection can be used to access a Proxmox VE host or cluster and open a console for a virtual machine or LXC container.

## Plugin Settings

The Proxmox plugin does not offer any plugin settings at this time.

## Connection Properties

The Proxmox Properties dialog is shown:

- for a new Proxmox connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Proxmox** entry from the list of available objects.
- for an existing Proxmox connection by selecting a Proxmox connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Proxmox connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Proxmox Properties

The **Proxmox** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### API Port

Configure the port used to access the Proxmox VE API. The default port is 8006.

#### Use HTTPS

Whether or not to use HTTPS to communicate with the Proxmox VE API.

#### Ignore Certificate Errors

If enabled, the connection will succeed even when the certificate is invalid, expired, or self-signed.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]

## Advanced

The **Advanced** page allows you to configure the SSH port used for ad hoc Terminal connections.

### SSH Port

The SSH port is used for ad hoc Terminal connections to the Proxmox host. The default port is 22.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
