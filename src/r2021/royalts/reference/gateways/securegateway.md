---
uid: royalts_reference_securegateway
name: Secure Gateway
order: 9980
---

## ![](/images/RoyalTS/Application/SVG_PageSecureGateway_32.svg#img_header) Secure Gateway
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
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port
Specify the TCP port of the Secure Gateway (default port is 22).

#### Test
Click to test the Secure Gateway connectivity..

#### Prefer Keyboard-Interactive Authentication
If checked, keyboard-interactive authentication is preferred over password authentication.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
