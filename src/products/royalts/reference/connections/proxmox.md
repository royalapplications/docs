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

### Authentication

The **Authentication** group selects the credential Royal TS uses for Proxmox VE API requests. API-token authentication is useful when password authentication requires an interactive MFA or OTP challenge.

#### Authentication Mode

- **Username and Password** uses the effective credential configured on the **Credentials** page. This is the default and preserves the behavior of existing connections.
- **API Token** uses the token ID and secret configured in this group. The token is used for inventory, details, performance, power operations, notes, console-ticket requests, and all other Proxmox REST calls.

#### API Token ID

Enter the complete token identifier in `user@realm!tokenid` format, for example `royalts@pve!royalts`.

#### API Token Secret

Enter the secret displayed when the API token is created. Royal TS stores the value encrypted and honors the document's **Hide passwords** lockdown policy.

> [!NOTE]
> Existing connections that store `user@realm!tokenid` as the credential username and the token secret as the credential password remain supported.

#### API-token behavior

The credential on the **Credentials** page remains available when **API Token** is selected:

- Host SSH always uses the normal credential and never receives the API-token secret.
- Instance SSH uses the credential selected for that instance connection.
- Web UI auto-login uses the normal credential to request an interactive `PVEAuthCookie`. If no password is configured or MFA prevents ticket creation, Royal TS opens the requested Proxmox page without a seeded cookie so you can sign in interactively.
- Native VM/container console connections try the API token first. Proxmox VE 9.0.13 and later support token-authenticated console tickets and WebSockets. After a 401 or 403 authentication rejection on an older server, Royal TS retries once with the normal credential and a newly issued ticket. TLS, routing, timeout, and unrelated permission failures do not trigger a password retry.

When a Royal Server management endpoint is assigned, the token ID and secret are transported through the protected destination-credential fields. They are not included in module arguments or logs. The installed Royal Server must include a Proxmox module that supports token authentication and the console `AuthHeader` response contract.

#### Required Proxmox permissions

The token requires the following privileges for the corresponding Royal TS features:

| Royal TS capability | Privilege | Suggested path |
| --- | --- | --- |
| Inventory, status, configuration, and performance | `VM.Audit` | `/vms`, a pool, or selected guests |
| QEMU guest-agent network and filesystem details | `VM.GuestAgent.Audit` on Proxmox VE 9; `VM.Monitor` on Proxmox VE 8 | `/vms` |
| Start, stop, restart, reset, suspend, and resume | `VM.PowerMgmt` | `/vms` |
| Edit guest notes | `VM.Config.Options` | `/vms` |
| VM/container native console | `VM.Console` | `/vms` |
| Cluster-node resolution and datacenter tag styling | `Sys.Audit` | `/` |

For a privilege-separated token (`privsep=1`), assign the required roles to both the backing user and the token. A token's effective permissions cannot exceed those of its backing user. A least-privilege configuration can use a `RoyalTSVM` role with the applicable VM privileges and a `RoyalTSClusterAudit` role containing `Sys.Audit`.

For example, on Proxmox VE 9:

```shell
pveum role add RoyalTSVM -privs "VM.Audit VM.GuestAgent.Audit VM.PowerMgmt VM.Console VM.Config.Options"
pveum role add RoyalTSClusterAudit -privs "Sys.Audit"
pveum acl modify /vms -user royalts@pve -role RoyalTSVM
pveum acl modify / -user royalts@pve -role RoyalTSClusterAudit
pveum user token add royalts@pve royalts -privsep 1
pveum acl modify /vms -token 'royalts@pve!royalts' -role RoyalTSVM
pveum acl modify / -token 'royalts@pve!royalts' -role RoyalTSClusterAudit
```

On Proxmox VE 8, use `VM.Monitor` instead of `VM.GuestAgent.Audit`. A broader built-in alternative is `PVEVMAdmin` on `/vms` together with `PVEAuditor` on `/`. `PVEVMUser` alone is insufficient because it does not include `VM.Config.Options` for editing notes.

Proxmox displays a newly generated token secret only once. Set an appropriate expiration date and rotate or revoke the token through the normal Proxmox administration workflow.

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
