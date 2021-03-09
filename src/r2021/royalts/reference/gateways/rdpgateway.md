---
uid: royalts_reference_rdpgateway
name: Remote Desktop Gateway
order: 9970
---

## ![](/r2021/images/RoyalTS/Application/SVG_PageRDSGateway_32.svg#img_header) Remote Desktop Gateway
Remote Desktop connection types support connecting through a Remote Desktop Gateway.

## Usage of a Remote Desktop Gateway
A Remote Desktop Gateway is a Windows server role which allows you to connect to computers using the remote desktop protocol which are not directly accessible. Once you created a Remote Desktop Gateway object in Royal TS, you can assign it to folders or Remote Desktop connections for easier management.

## Object Properties
The Remote Desktop Gateway Properties dialog is shown:
- for a new Remote Desktop Gateway object by clicking the **Remote Desktop Gateway** command in the **Add** group on the **Edit** ribbon tab.
- for an existing Remote Desktop Gateway object by selecting a Remote Desktop Gateway object and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Remote Desktop Gateway objects were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also:[Bulk Operations](xref:royalts_tutorials_bulk)

## Remote Desktop Gateway Properties
The **Remote Desktop Gateway** page allows you to configure the computer name (IP address or FQDN) where the Remote Desktop Gateway server role is installed and running.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]

#### Smart Card
When selected, smart card authentication is required.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
