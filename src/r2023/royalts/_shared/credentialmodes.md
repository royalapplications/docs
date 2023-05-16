#### Do not use any credentials
When selected, no credentials are configured for the object. Connections that require credentials may prompt to enter credentials or fail to connect.

#### Use credentials from the parent folder *(not always available)*
When selected, Royal TS will look for a configured credential in the parent folder.
> [!Note]
> Not available for Royal Server objects, Secure Gateway objects, Remote Desktop Gateway objects and Key Sequence Tasks

#### Use from this connection *(not always available)*
When selected, the username and password is used from the context connection object.

#### Specify username and password
When selected, a username and password can be provided. For domain accounts use the syntax "domain\username" (without the quotes).

#### Use an existing credential
When selected, assign an existing credential to the object using the drop-down list. Use the add button to add a new credential. Use the edit button to edit the selected credential.

> [!Tip]
> The drop-down list supports sorting and filtering "as you type" to easily find the correct credential.

#### Specify a credential name
When selected, enter or choose a credential name you want to assign to the object during connect-time.  
If you enter '**?**' (without the quotes) as credential name, Royal TS will prompt for credentials by showing the credential picker dialog.

> [!Note]
> Assigning a credential by name is recommended when a team of users share the same configuration file. Each user can define his own credential as long as it is using the same name and saves the credential in his own personal and protected document. This makes sharing files across team members very easy while keeping credentials safe.
