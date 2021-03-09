---
uid: royalts_reference_royalserver
name: Royal Server
order: 9990
---

# ![](/r2021/images/RoyalTS/Application/SVG_PageManagementEndpoint_32.svg#img_header) Royal Server
Some connection types and dashboards support [Royal Server](xref:royalts_intro_royalserver).

## Usage of Royal Server
After you created a Royal Server object in one of your documents you can assign the object to individual connections or assign it at the folder level and let connections inherit the setting from the parent folder.

## Object Properties
The Royal Server Properties dialog is shown:
- for a new Royal Server object by clicking the **Royal Server** command in the **Add** group on the **Edit** ribbon tab.
- for an existing Royal Server object by selecting a Royal Server object and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Royal Server objects were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

See also: [Introducing Royal Server](xref:royalts_intro_royalserver)

## Royal Server Properties
The **Royal Server** page allows you to configure the computer name (IP address or FQDN) where Royal Server is installed and running, the port and whether or not to use SSL (recommended).

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port
Specify the TCP port of the Royal Server.

#### Use SSL
If checked, communication between Royal TS and the Royal Server is secured by secure socket layer (SSL). The default port is 54899.

#### Test
Click to test the Royal Server configuration.

[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2021/images/RoyalTS/Application/SVG_PageCredential_32.svg#img_header) Royal Server Credentials
The **Credentials** page allows you to assign a credential to the object. You can specify username and password, assign a predefined credential or you specify a credential by name (ideal when you share your configuration). You can also use the credentials defined in the parent folder.

[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

See also: [Working with Credentials](xref:royalts_tutorials_credentials), [Credential](xref:royalts_reference_organization_credential), [About shared documents](https://www.royalapps.com/go/kb-all-teamsharing)

## ![](/r2021/images/RoyalTS/Application/SVG_PageSecureGateway_32.svg#img_header) Secure Gateway
The **Secure Gateway** page allows you to configure and test the Secure Gateway component included in Royal Server. A Secure Gateway can be used to access computers through an SSH tunnel (port forwarding).

#### Port
Specify the TCP port of the Secure Gateway (default port is 22).

#### Test
Click to test the Secure Gateway connectivity.

#### Prefer Keyboard-Interactive Authentication
If checked, keyboard-interactive authentication is preferred over password authentication.

## ![](/r2021/images/RoyalTS/Application/SVG_PageCredential_32.svg#img_header) Secure Gateway Credentials
The **Credentials** page allows you to assign a credential to the object. You can specify username and password, assign a predefined credential or you specify a credential by name (ideal when you share your configuration). You can also use the credentials defined in the parent folder.

[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

See also: [Working with Credentials](xref:royalts_tutorials_credentials), [Credential](xref:royalts_reference_organization_credential), [About shared documents](https://www.royalapps.com/go/kb-all-teamsharing)

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
