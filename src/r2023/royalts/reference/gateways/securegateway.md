---
uid: royalts_reference_securegateway
name: Secure Gateway
order: 9980
---

## ![](/r2023/images/RoyalTS/Application/SVG_PageSecureGateway_32.svg#img_header) Secure Gateway

Some connection types support connecting through a Secure Gateway.

## Usage of Secure Gateway

A Secure Gateway can be used to access computers through an SSH tunnel (port forwarding). [Royal Server](xref:royalts_intro_royalserver) or an SSH server with tunneling support can be used.

## Object Properties

The Secure Gateway Properties dialog is shown:

- for a new Secure Gateway object by clicking the **Secure Gateway** command in the **Add** group on the **Edit** ribbon tab.
- for an existing Secure Gateway objects by selecting a Secure Gateway object and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Secure Gateway objects were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Secure Gateway Properties

The **Secure Gateway** page allows you to configure the computer name (IP address or FQDN) where the Secure Gateway (SSH server with tunneling support) is installed and running. [Royal Server](xref:royalts_intro_royalserver) already includes a Secure Gateway component.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername-gw.md)]

> [!Tip]
> You can specify multiple computer names (IP addresses) separated by semicolons for failover/fallback in case a server is not available.

#### Port

Specify the TCP port of the Secure Gateway (default port is 22).

#### Test

Click to test the Secure Gateway connectivity..

[!include[description.md](~/royalts/_shared/description.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]

## ![](/r2023/images/RoyalTS/Application/SVG_PageSecurity_32.svg#img_header) Security

The **Security** page allows you to adjust security settings and allowed algorithms.

### General

#### Authentication Agent

Select the SSH authentication agent to use:
- None
- OpenSSH Agent
- Pageant
- Legacy Pageant

> [!Note]
> Agent forwarding is currently not supported.

#### Fingerprint

Shows the fingerprint of the server.

#### Prefer Keyboard-Interactive Authentication

If checked, keyboard-interactive authentication is preferred over password authentication.

> [!Note]
> You may need to enable this option when your servers requires multi-factor authentication (MFA).

#### Use Strict Key Exchange

Gets or sets a value indicating whether to enable strict key exchange extension (compatible with OpenSSH 9.6).

[!include[rebexciphers.md](~/royalts/_shared/rebexciphers.md)]
[!include[dependent-gateway.md](~/royalts/_shared/dependent-gateway.md)]

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
