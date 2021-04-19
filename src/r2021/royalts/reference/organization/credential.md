---
uid: royalts_reference_organization_credential
name: Credential
order: 9970
---

# ![](/r2021/images/RoyalTS/Application/SVG_PageCredential_32.svg#img_header) Credential
**Credentials** are used to store username and password in a secure manner. By using and assigning credentials to connections, you can easily share your connections document while having all your credentials stored in a separate, private document.

## Usage of Credentials
- Assign credentials to connections by name instead of configuring connections to use username and password. This allows easy and secure file sharing in teams as no credentials are stored with the connections.
- Simply store username and password in credential objects to quickly and easily access them using the Navigation or Credentials panel.
- Use credentials in our Web Browser Extensions to automatically log on to web sites.

> [!Tip]
> You can create credentials in any documents, including the Application document. It's strongly recommended to encrypt and password protect your document as soon as you create a credential with a password in it.

See also: [Work with Credentials](xref:royalts_tutorials_credentials), [Security](xref:royalts_intro_security)

## Credential Properties
The Credential Properties dialog is shown:

- for a new credential by clicking the **Credential** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing credential by selecting a credential and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple credentials were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. 
 
See also: [Bulk Operations](xref:royalts_tutorials_bulk)

> [!Tip]
> Assigning credentials to connections using the name is recommended when a team of users share the same configuration file. Each user can define a credential with the same name in his own personal and protected document.
> 
> This makes sharing files across team members very easy while keeping credentials safe.
> 
> See [Working with Personal Credentials in a Shared Document](xref:royalts_tutorials_credentials#working-with-personal-credentials-and-a-shared-document) for more information.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Username
Enter the username for the credential. For domain accounts use the "domain\username" syntax.

#### Password
Enter the password for the credential.

[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2021/images/RoyalTS/Application/SVG_PageKeyFile_32.svg#img_header) Private Key File
The **Private Key File** tab page allows you to configure a path to a private key file and a passphrase. These settings are optional and only used by connection types supporting these settings (Terminal connections using SSH protocol, for example).

#### Private Key File
The path to the private key file.

#### Passphrase
The passphrase used for the private key file.

[!include[autofill.md](~/royalts/_shared/autofill.md)]
[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
