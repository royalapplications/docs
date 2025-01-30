---
uid: scripting_object_royalmanagementendpoint
name: RoyalManagementEndpoint
order: 7500
---

# RoyalManagementEndpoint
## General
### CustomImageName
Type: `string`, Default Value: `Empty String`  
A custom image name from a pre-defined set of images  
### Name
Type: `string`, Default Value: `Empty String`  
The display name of the object.  
### Description
Type: `string`, Default Value: `Empty String`  
The description text of the object.  
### Favorite
Type: `bool`, Default Value: `false`  
Whether or not the object is a favorite.  
### ColorFromParent
Type: `bool`, Default Value: `false`  
Use the Color value from the parent folder.  
### Color
Type: `string`, Default Value: `Empty String`  
Assign a custom color as hex string to the object (#FF0000 for red). Empty string is the default color value (no custom color assigned).  
### ColorName
Type: `string`, Default Value: `Empty String`  
Assign a color from a color palette to the object. If both, a color name and a custom color (hex string) are provided, the color name is preferred.  
### ID
Type: `Guid`, Default Value: `Guid.Empty`  
The unique object identifier (GUID) of the object.  
### ExternalID
Type: `string`, Default Value: `Empty String`  
The external unique object identifier (GUID) of the object.  
## Gateway
### DependsOnSecureGatewayID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign another secure gateway dependency. The configured secure gateway tunnel will be established and used before the tunnel for this gateway is established.  
### SecureGatewayCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as Gateway credential by specifying the credential object's GUID.  
### SecureGatewayCredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Specify username and password   
 2 = Use an existing credential   
 3 = Specify credential name   
### SecureGatewayCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as Gateway credential by specifying the credential object's name.  
### SecureGatewayFingerprint
Type: `string`, Default Value: `Empty String`  
The fingerprint of the server to trust.  
### SecureGatewayHost
Type: `string`, Default Value: `Empty String`  
The server host name or IP address used to establish tunnel connections (SSH Server with tunneling support).  
### SecureGatewayPassword
Type: `string`, Default Value: `Empty String`  
The password for the Gateway server.  
### SecureGatewayPort
Type: `int`, Default Value: `22`  
The SSH server listener port.  
### SecureGatewayPreferKeyboardInteractiveOverPasswordAuthentication
Type: `bool`, Default Value: `false`  
If set to true, keyboard interactive authentication is preferred over password authentication.  
### SecureGatewayUsername
Type: `string`, Default Value: `Empty String`  
The username for the Gateway server.  
## Security
### SecureGatewayEncryptionKeyAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all encryption key algorithms in the order they should be negotiated if enabled.  
### SecureGatewayHostKeyAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all host key algorithms in the order they should be negotiated if enabled.  
### SecureGatewayKeyExchangeAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all key exchange algorithms in the order they should be negotiated if enabled.  
### SecureGatewayMacAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all MAC algorithms in the order they should be negotiated if enabled.  
### SSHAuthAgent
Type: `int`, Default Value: `0`  
SSH Authentication Agent: 0 = None   
 1 = OpenSSH Agent   
 2 = Pageant   
 3 = Legacy Pageant  
### UseStrictKeyExchange
Type: `bool`, Default Value: `true`  
Gets or sets a value indicating whether to enable strict key exchange extension (compatible with OpenSSH 9.6).  
## Royal Server
### RoyalServerFingerprint
Type: `string`, Default Value: `Empty String`  
The fingerprint of the server to trust.  
### RoyalServerHost
Type: `string`, Default Value: `Empty String`  
The server host name or IP address where Royal Server is installed und running.  
### RoyalServerPort
Type: `int`, Default Value: `54899`  
The Royal Server listener port.  
### RoyalServerProtocol
Type: `int`, Default Value: `1`  
0 = Http   
 1 = Https  
### RoyalServerTimeout
Type: `int`, Default Value: `60`  
The client request timeout in seconds.  
### RoyalServerCredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Specify username and password   
 2 = Use an existing credential   
 3 = Specify credential name   
### RoyalServerUsername
Type: `string`, Default Value: `Empty String`  
The username for the Royal Server.  
### RoyalServerPassword
Type: `string`, Default Value: `Empty String`  
The password for the Royal Server.  
### RoyalServerCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as Royal Server credential by specifying the credential object's GUID.  
### RoyalServerCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as Royal Server credential by specifying the credential object's name.  
## Custom Fields
### CustomField1FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField1 value from the parent folder.  
### CustomField2FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField2 value from the parent folder.  
### CustomField3FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField3 value from the parent folder.  
### CustomField4FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField4 value from the parent folder.  
### CustomField5FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField5 value from the parent folder.  
### CustomField6FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField6 value from the parent folder.  
### CustomField7FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField7 value from the parent folder.  
### CustomField8FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField8 value from the parent folder.  
### CustomField9FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField9 value from the parent folder.  
### CustomField10FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField10 value from the parent folder.  
### CustomField11FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField11 value from the parent folder.  
### CustomField12FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField12 value from the parent folder.  
### CustomField13FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField13 value from the parent folder.  
### CustomField14FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField14 value from the parent folder.  
### CustomField15FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField15 value from the parent folder.  
### CustomField16FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField16 value from the parent folder.  
### CustomField17FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField17 value from the parent folder.  
### CustomField18FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField18 value from the parent folder.  
### CustomField19FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField19 value from the parent folder.  
### CustomField20FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField20 value from the parent folder.  
### CustomField1
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField2
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField3
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField4
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField5
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField6
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField7
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField8
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField9
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField10
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField11
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField12
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField13
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField14
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField15
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField16
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField17
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField18
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField19
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField20
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
## Custom Properties
### CustomPropertiesFromParent
Type: `bool`, Default Value: `false`  
Use the Custom Properties from the parent folder.  
### CustomProperties
Type: `string`, Default Value: `Empty String`  
Custom properties allow you to collect additional information for an object.  
## Notes
### NotesFromParent
Type: `bool`, Default Value: `false`  
Use the Notes value from the parent folder.  
### Notes
Type: `string`, Default Value: `Empty String`  
Store HTML formatted notes to the object.  
## Changes
### Created
Type: `DateTime`, Default Value: `DateTime.Now`  
The date and time the object was created.  
### CreatedBy
Type: `string`, Default Value: `Empty String`  
The user who initially created the object.  
### Modified
Type: `DateTime`, Default Value: `DateTime.Now`  
The last date and time the object was modified.  
### ModifiedBy
Type: `string`, Default Value: `Empty String`  
The user who last modified the object.  

