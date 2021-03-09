## ![](/images/RoyalTS/Application/SVG_PageCredential_32.svg#img_header) Credentials
The **Credentials** page allows you to assign a credential to the object. You can specify username and password, assign a predefined credential or you specify a credential by name (ideal when you share your configuration). You can also use the credentials defined in the parent folder.

[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

#### Omit Domain
When checked, Royal TS will omit the  domain portion of the username (domain\username or username@domain).

> [!Note]
> The **Omit Domain** checkbox is not available for all object types!

#### Automatic Logon
When checked, Royal TS will use the credentials to log on to the connection automatically. This setting applies only to connection types supporting automatic logon and is ignored if a connection doesn't support automatic logon.

> [!Note]
> To access the configured credentials through replacement tokens (for example in Auto Fill or Key Sequence Task configurations), use the replacement tokens $EffeciveUsername$ and $EffectivePassword$.

See also: [Working with Credentials](xref:royalts_tutorials_credentials), [Credential](xref:royalts_reference_organization_credential), [About shared documents](https://www.royalapps.com/go/kb-all-teamsharing)