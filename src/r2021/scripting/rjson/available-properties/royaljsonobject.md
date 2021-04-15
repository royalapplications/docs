---
order: 9980
name: RoyalJSONObject
---

# RoyalJSONObject

## Type
- **Required**: Yes
- **Data Type**: Enumeration
- **Applies To**: All object types
- **Description**: The type of the object.
- **Supported Values**:
	- Folder
	- Credential
	- DynamicCredential
	- ToDo
	- CommandTask
	- KeySequenceTask
	- SecureGateway
	- RoyalServer
	- RemoteDesktopGateway
	- RemoteDesktopConnection
	- TerminalConnection
	- WebConnection
	- VNCConnection
	- FileTransferConnection
	- TeamViewerConnection
	- ExternalApplicationConnection
	- PerformanceConnection
	- VMwareConnection
	- HyperVConnection
	- WindowsEventsConnection
	- WindowsServicesConnection
	- WindowsProcessesConnection
	- TerminalServicesConnection
	- PowerShellConnection
- **Example**: `"Type": "Folder"`

## Name
- **Required**: Yes
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The (display) name of the object.
- **Example**: `"Name": "My Folder"`

## ID
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The ID of the object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the ID of the resulting object. If you pass in any other string, a GUID will be generated for the object and the string you pass in will be stored as external ID.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"ID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"ID": "0001"`

## ComputerName
- **Data Type**: String
- **Applies To**: All connection types, Credential, Secure Gateway, Royal Server, Remote Desktop Gateway
- **Description**: The computer name (IP address/FQDN) of this object. Can also be used to set the URL of web connections and credentials.
- **Example**: `"ComputerName": "vm01.local"`
- **Example 2**: `"ComputerName": "10.0.0.1"`
- **Example 3**: `"ComputerName": "https://www.royalapplications.com/"`

## URL
- **Data Type**: String
- **Applies To**: See [ComputerName](#computername)
- **Description**: Alias for [ComputerName](#computername).
- **Example**: `"URL": "vm01.local"`
- **Example 2**: `"URL": "10.0.0.1"`
- **Example 3**: `"URL": "https://www.royalapplications.com/"`

## Port
- **Data Type**: Integer
- **Applies To**: Most connection types
- **Description**: The port of this object.
- **Example**: `"Port": 5900`

## Description
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The description of the object.
- **Example**: `"Description": "Interesting object"`

## Favorite
- **Data Type**: Boolean
- **Applies To**: All object types
- **Description**: Specifies whether or not the object is a favorite.
- **Example**: `"Favorite": true`

## ColorFromParent
- **Data Type**: Boolean
- **Applies To**: All object types
- **Description**: Specifies whether or not the object gets its color from its parent.
- **Example**: `"ColorFromParent": false`

## Color
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The color of the object, specified as Hex (HTML) color (i.e. #FFFFFF for white).
- **Supported Values**:
	- Hex Color String
- **Example**: `"Color": "#FF0000"`

## IconName
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: The icon library icon name of the object.
- **Example**: `"IconName": "Flat/Objects/User ID"`

## Notes
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The notes of the object.
- **Example**: `"Notes": "Notes support <strong>HTML</strong>"`




## Path
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The folder path of the object. This may be used as an alternative to nesting objects in Folder objects. The [`Path`](#path) property takes precedence over folder nesting, so if both are used, the object will be placed in the folder pointed to by the [`Path`](#path) property.
- **Supported Values**:
	- A folder path either in \*NIX (`This/Is/A/Test`) or in Windows (`This\Is\A\Test`) format
- **Example**: `"Path": "Path/To/Object"`
- **Example 2**: `"Path": "Path\To\Object"`

## CustomField1
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 1 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField1": "Text in this field won't be encrypted"`

## CustomField2
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 2 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField2": "Text in this field won't be encrypted"`

## CustomField3
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 3 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField3": "Text in this field won't be encrypted"`

## CustomField4
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 4 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField4": "Text in this field won't be encrypted"`

## CustomField5
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 5 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField5": "Text in this field won't be encrypted"`

## CustomField6
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 6 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField6": "Text in this field won't be encrypted"`

## CustomField7
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 7 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField7": "Text in this field won't be encrypted"`

## CustomField8
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 8 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField8": "Text in this field won't be encrypted"`

## CustomField9
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 9 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField9": "Text in this field won't be encrypted"`

## CustomField10
- **Data** Type: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 10 (non-protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField10": "Text in this field won't be encrypted"`

## CustomField11
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 11 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField11": "Text in this field will be encrypted"`

## CustomField12
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 12 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField12": "Text in this field will be encrypted"`

## CustomField13
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 13 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField13": "Text in this field will be encrypted"`

## CustomField14
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 14 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField14": "Text in this field will be encrypted"`

## CustomField15
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 15 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField15": "Text in this field will be encrypted"`

## CustomField16
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 16 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField16": "Text in this field will be encrypted"`

## CustomField17
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 17 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField17": "Text in this field will be encrypted"`

## CustomField18
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 18 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField18": "Text in this field will be encrypted"`

## CustomField19
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 19 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField19": "Text in this field will be encrypted"`

## CustomField20
- **Data Type**: String
- **Applies To**: All object types except To-Do
- **Description**: Custom Field 20 (protected).
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"CustomField20": "Text in this field will be encrypted"`

## TODO: STYLING BELOW !!!

## Properties
- **Data Type**: Key/Value pairs
- **Applies To**: All object types
- **Description**: Can be used to specify properties of the object that aren't exposed in the RoyalJSON object model. To be able to use this, knowledge of the RoyalDocument data model is required. Documentation is [available here](~/scripting/objects/index.html).
- **Example**: `"Properties": { "IsExpanded": "True" }`

## CustomProperties
- **Data Type**: Key/Value pairs
- **Alternative Data Type**: Array of [RoyalJSONCustomProperty](~/scripting/rjson/available-properties/royaljsondocument.html)
- **Applies To**: All object types
- **Description**: The custom properties of the object. You can either pass in key/value pairs or an array of objects of type RoyalJSONCustomProperty. If using key/value pairs, the key will be the name of the custom property and the value will be its value. All custom properties specified that way will be of type "Text". It's not possible to specify a different type when using key/value pairs. If using an array of objects instead, specify the name of the custom property using `Name`, the value using `Value` and the type using `Type` (Supported types are: `Text`, `Protected`, `URL`, `Email`, `Address`, `Phone`, `Date`, `YesNo`, `Header`)
- **Example**: `"CustomProperties": { "PIN Code": "1234" }`
- **Alternate Example**: `"CustomProperties": [ { "Name": "PIN Code", "Value": "1234", "Type": "Protected" } ]`

## CredentialsFromParent
- **Data Type**: Boolean
- **Applies To**: Most object types that support credentials
- **Description**: Specifies whether or not to use the credentials of the parent folder.
- **Example**: `"CredentialsFromParent": true`

## CredentialsFromContextConnection
- **Data Type**: Boolean
- **Applies To**: Remote Desktop Gateway, Command Task
- **Description**: Specifies whether or not to use the credentials of the context connection.
- **Example**: `"CredentialsFromContextConnection": false`

## CredentialID
- **Data Type**: String
- **Applies To**: All object types that support credentials
- **Description**: The ID of the credential that is assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"CredentialID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"CredentialID": "0001"`

## CredentialName
- **Data Type**: String
- **Applies To**: Most object types that support credentials
- **Description**: The name of the credential that is assigned to this object.
- **Example**: `"CredentialName": "Administrator"`

## Username
- **Data Type**: String
- **Applies To**: All object types that support credentials, Credential
- **Description**: The username of this object.
- **Example**: `"Username": "administrator"`

## Password
- **Data Type**: String
- **Applies To**: All object types that support credentials, Credential
- **Description**: The password of this object.
- **Example**: `"Password": "!dfhe8yr498hh@"`

## KeyFilePath
- **Data Type**: String
- **Applies To**: All object types that support private key files, Credential
- **Description**: The private key file path of this object.
- **Example**: `"KeyFilePath": "/Path/To/Key/File"`
- **Example 2**: `"KeyFilePath": "c:\Path\To\Key\File"`

## KeyFileContent
- **Data Type**: String
- **Applies To**: All object types that support private key files, Credential
- **Description**: The content of the private key file of this object.
- **Example**: `"KeyFileContent": "-----BEGIN RSA PRIVATE KEY----- ..."`

## KeyFilePassphrase
- **Data Type**: String
- **Applies To**: All object types that support private key files, Credential
- **Description**: The passphrase of this object's private key file.
- **Example**: `"KeyFilePassphrase": "^234hsd9344hf@"`

## AutoFillElements
- **Data Type**: Array of [RoyalJSONAutoFillElement](~/scripting/rjson/available-properties/royaljsonautofillelement.html)
- **Applies To**: Credential, Web connection
- **Description**: The auto fill elements for the credential or web connection.
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"AutoFillElements": [ { "Element": "#username", "Action": "Fill", "Value": "$$EffectiveUsername$$" } ]`

## AutoFillDelay
- **Data Type**: Integer
- **Applies To**: Credential, Web connection
- **Description**: The delay in milliseconds before the auto fill script is executed.
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"AutoFillDelay": 200`

## RetryAutoFillUntilSuccess
- **Data Type**: Boolean
- **Applies To**: Credential, Web connection
- **Description**: Whether or not auto fill is retried until all fields have been found.
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"RetryAutoFillUntilSuccess": true`

## Objects
- **Data Type**: Array of [RoyalJSONObject](~/scripting/rjson/available-properties/royaljsonobject.html)
- **Applies To**: Folder
- **Description**: An array of objects that will be direct descendants of the current folder.
- **Example**: `"Objects": [ { "Type": "Credential", "Name": "A Credential" } ]`

## Status
- **Data Type**: Enumeration
- **Applies To**: To-Do
- **Description**: The status of this To-Do item.
- **Supported Values**:
	- Active
	- Completed
- **Example**: `"Status": "Completed"`

## NoConfirmationRequired
- **Data Type**: Boolean
- **Applies To**: Key Sequence Task, Command Task
- **Description**: Specifies whether or not user confirmation is required to run this task.
- **Example**: `"NoConfirmationRequired": true`

## CommandMac
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The command this task executes on macOS.
- **Example**: `"CommandMac": "ping"`

## ArgumentsMac
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The arguments required to run this task on macOS.
- **Example**: `"ArgumentsMac": "$URI$"`

## WorkingDirectoryMac
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The working directory of this task for macOS.
- **Example**: `"WorkingDirectoryMac": "/Path/To/Working/Directory"`

## CommandWindows
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The command this task executes on Windows.
- **Example**: `"CommandWindows": "ping"`

## ArgumentsWindows
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The arguments required to run this task on Windows.
- **Example**: `"ArgumentsWindows": "$URI$"`

## WorkingDirectoryWindows
- **Data Type**: String
- **Applies To**: Command Task
- **Description**: The working directory of this task for Windows.
- **Example**: `"WorkingDirectoryWindows": "c:\Path\To\Working/Directory"`

## KeySequence
- **Data Type**: String
- **Applies To**: Key Sequence Task, All connection types, Folder
- **Description**: The key sequence that will be executed before the connection is established if set on a connection or a folder. The key sequence that the key sequence task executes if set on a key sequence task object.
- **Example**: `"KeySequence": "{WAIT:5000}abc{ENTER}"`

## UseSSL
- **Data Type**: Boolean
- **Applies To**: VMware connection, Royal Server
- **Description**: Specifies whether or not to use SSL for this object.
- **Example**: `"UseSSL": "true"`

## SecureGatewayPort
- **Data Type**: Integer
- **Applies To**: Secure Gateway, Royal Server
- **Description**: The Secure Gateway port.
- **Example**: `"Port": 22`

## SecureGatewayCredentialID
- **Data Type**: String
- **Applies To**: Secure Gateway, Royal Server
- **Description**: The ID of the credential that is assigned to the Secure Gateway. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Secure Gateway Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"SecureGatewayCredentialID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"SecureGatewayCredentialID": "0001"`

## SecureGatewayCredentialName
- **Data Type**: String
- **Applies To**: Secure Gateway, Royal Server
- **Description**: The name of the credential that is assigned to the Secure Gateway.
- **Example**: `"SecureGatewayCredentialName": "root"`

## SecureGatewayUsername
- **Data Type**: String
- **Applies To**: Secure Gateway, Royal Server
- **Description**: The username of the Secure Gateway.
- **Example**: `"SecureGatewayUsername": "root"`

## SecureGatewayPassword
- **Data Type**: String
- **Applies To**: Secure Gateway, Royal Server
- **Description**: The password of the Secure Gateway.
- **Example**: `"SecureGatewayPassword": "!dfhe8yr498hh@"`

## RemoteDesktopGatewayComputerName
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: The computer name (IP address/FQDN) of the Remote Desktop Gateway.
- **Example**: `"RemoteDesktopGatewayComputerName": "rdg-01.local"`
- **Example 2**: `"RemoteDesktopGatewayComputerName": "10.0.1.5"`

## RemoteDesktopGatewayCredentialsFromConnection
- **Data Type**: Boolean
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: Specifies whether or not to use the credentials of the connection for the Remote Desktop Gateway.
- **Example**: `"RemoteDesktopGatewayCredentialsFromConnection": false`

## RemoteDesktopGatewayCredentialID
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: The ID of the credential that is assigned to the Remote Desktop Gateway. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Remote Desktop Gateway Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"RemoteDesktopGatewayCredentialID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"RemoteDesktopGatewayCredentialID": "0001"`

## RemoteDesktopGatewayCredentialName
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: The name of the credential that is assigned to the Remote Desktop Gateway.
- **Example**: `"RemoteDesktopGatewayCredentialName": "Administrator"`

## RemoteDesktopGatewayUsername
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: The username of the Remote Desktop Gateway.
- **Example**: `"RemoteDesktopGatewayUsername": "administrator"`

## RemoteDesktopGatewayPassword
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Remote Desktop Gateway
- **Description**: The password of the Remote Desktop Gateway.
- **Example**: `"RemoteDesktopGatewayPassword": "!dfhe8yr498hh@"`

## ConnectTaskFromParent
- **Data Type**: Boolean
- **Applies To**: All connection types, Folder
- **Description**: Specifies whether or not to use the connect task from the parent folder of this object.
- **Example**: `"ConnectTaskFromParent": false`

## ConnectTaskID
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The ID of the command task that is to be assigned to this object as connect task. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Connect Task ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"ConnectTaskID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"ConnectTaskID": "0001"`

## ConnectTaskName
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The name of the command task that is to be assigned to this object as connect task.
- **Example**: `"ConnectTaskName": "root"`

## DisconnectTaskFromParent
- **Data Type**: Boolean
- **Applies To**: All connection types, Folder
- **Description**: Specifies whether or not to use the disconnect task from the parent folder of this object.
- **Example**: `"DisconnectTaskFromParent": false`

## DisconnectTaskID
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The ID of the command task that is to be assigned to this object as disconnect task. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Disconnect Task ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"DisconnectTaskID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"DisconnectTaskID": "0001"`

## DisconnectTaskName
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The name of the command task that is to be assigned to this object as disconnect task.
- **Example**: `"DisconnectTaskName": "root"`

## KeySequenceFromParent
- **Data Type**: Boolean
- **Applies To**: All connection types, Folder
- **Description**: Specifies whether or not to use the connect key sequence from the parent folder of this object.
- **Example**: `"KeySequenceFromParent": false`

## KeySequenceID
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The ID of the key sequence task that is to be assigned to this object as connect key sequence. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Key Sequence ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"KeySequenceID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"KeySequenceID": "0001"`

## KeySequenceName
- **Data Type**: String
- **Applies To**: All connection types, Folder
- **Description**: The name of the key sequence task that is to be assigned to this object as connect key sequence.
- **Example**: `"KeySequenceName": "root"`

## SecureGatewayFromParent
- **Data Type**: Boolean
- **Applies To**: All connection types that support Secure Gateways, Folder
- **Description**: Specifies whether or not to use the Secure Gateway from the parent folder of this object.
- **Example**: `"SecureGatewayFromParent": false`

## SecureGatewayID
- **Data Type**: String
- **Applies To**: All connection types that support Secure Gateways, Folder
- **Description**: The ID of the Secure Gateway that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Secure Gateway ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"SecureGatewayID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"SecureGatewayID": "0001"`

## RoyalServerFromParent
- **Data Type**: Boolean
- **Applies To**: All connection types that support Royal Server, Folder
- **Description**: Specifies whether or not to use the Royal Server from the parent folder of this object.
- **Example**: `"RoyalServerFromParent": false`

## RoyalServerID
- **Data Type**: String
- **Applies To**: All connection types that support Royal Server, Folder
- **Description**: The ID of the Royal Server that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Royal Server ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"RoyalServerID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"RoyalServerID": "0001"`

## RemoteDesktopGatewayFromParent
- **Data Type**: Boolean
- **Applies To**: Remote Desktop connection, Folder
- **Description**: Specifies whether or not to use the Remote Desktop Gateway from the parent folder of this object.
- **Example**: `"RemoteDesktopGatewayFromParent": true`

## RemoteDesktopGatewayID
- **Data Type**: String
- **Applies To**: Remote Desktop connection, Folder
- **Description**: The ID of the Remote Desktop Gateway that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Remote Desktop Gateway ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential.
- **Supported Values**:
	- GUID formatted as string
	- String
- **Example**: `"RemoteDesktopGatewayID": "041471cd-1202-40a6-84e3-83f3ceb57a99"`
- **Example 2**: `"RemoteDesktopGatewayID": "0001"`

## RemoteDesktopGatewayUsage
- **Data Type**: Enumeration
- **Applies To**: Remote Desktop connection, Folder
- **Description**: The usage mode of the Remote Desktop Gateway.
- **Supported Values**:
	- Never
	- Always
	- OnDemand
- **Example**: `"RemoteDesktopGatewayUsage": "Always"`

## MACAddress
- **Data Type**: String
- **Applies To**: Most connection types
- **Description**: The physical (MAC) address of this connection.
- **Example**: `"MACAddress": "FF:FF:FF:FF:FF:FF"`

## WindowMode
- **Data Type**: Enumeration
- **Applies To**: Most connection types
- **Description**: The window mode of this connection.
- **Supported Values**:
	- Embedded
	- External
	- FullScreen
- **Example**: `"WindowMode": "External"`

## ConsoleSession
- **Data Type**: Boolean
- **Applies To**: Remote Desktop connection
- **Description**: Specifies whether or not to connect to the console/admin session of this Remote Desktop connection.
- **Example**: `"ConsoleSession": true`

## NLA
- **Data Type**: Boolean
- **Applies To**: Remote Desktop connection
- **Description**: Specifies whether or not to use NLA (Network Level Authentication) for this Remote Desktop connection.
- **Example**: `"NLA": true`

## ResizeMode
- **Data Type**: Enumeration
- **Applies To**: Remote Desktop connection
- **Description**: The resize mode of this Remote Desktop connection.
- **Supported Values**:
	- ScrollBars
	- SmartSizing
	- SmartReconnect
- **Example**: `"ResizeMode": "SmartReconnect"`

## HyperVMode
- **Data Type**: Enumeration
- **Applies To**: Remote Desktop connection
- **Description**: The Hyper-V mode of this Remote Desktop connection.
- **Supported Values**:
	- None
	- HyperVHost
	- HyperVInstance
- **Example**: `"HyperVMode": "HyperVInstance"`

## HyperVPort
- **Data Type**: Integer
- **Applies To**: Remote Desktop connection
- **Description**: The Hyper-V port of this Remote Desktop Connection.
- **Example**: `"HyperVPort": 2179`

## HyperVInstanceID
- **Data Type**: String
- **Applies To**: Remote Desktop connection
- **Description**: The Hyper-V Instance ID (VM ID) of this Remote Desktop connection.
- **Example**: `"HyperVInstanceID": "12345"`

## UseEnhancedHyperVSessionMode
- **Data Type**: Boolean
- **Applies To**: Remote Desktop connection
- **Description**: Specifies whether or not to use enhanced Hyper-V session mode for this Remote Desktop connection.
- **Example**: `"UseEnhancedHyperVSessionMode": false`

## TerminalConnectionType
- **Data Type**: Enumeration
- **Applies To**: Terminal connection
- **Description**: The connection type of this terminal connection.
- **Supported Values**:
	- SSH
	- Telnet
	- SerialPort
	- CustomTerminal
- **Example**: `"TerminalConnectionType": "SSH"`

## SerialPortName
- **Data Type**: String
- **Applies To**: Terminal connection
- **Description**: The serial port name of this terminal connection.
- **Example**: `"SerialPortName": "COM1"`

## BaudRate
- **Data Type**: Integer
- **Applies To**: Terminal connection
- **Description**: The baud rate of the serial port connection.
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"BaudRate": 9600`

## DataBits
- **Data Type**: Integer
- **Applies To**: Terminal connection
- **Description**: The standard length of data bits per byte of the serial port connection.
- **Supported Values**: 5 through 8
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"DataBits": 8`

## Parity
- **Data Type**: Enumeration
- **Applies To**: Terminal connection
- **Description**: The parity bit for the serial port connection.
- **Supported Values**:
	- None
	- Odd
	- Even
	- Mark
	- Space
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"Parity": "None"`

## StopBits
- **Data Type**: Enumeration
- **Applies To**: Terminal connection
- **Description**: The number of stop bits used for the serial port connection.
- **Supported Values**:
	- None
	- One
	- Two
	- OnePointFive
- **Supported since**: Royal TS 5.1, Royal TSX 4.1.2
- **Example**: `"StopBits": "One"`

## CustomCommand
- **Data Type**: String
- **Applies To**: Terminal connection
- **Description**: The custom command of this terminal connection.
- **Example**: `"CustomCommand": "ls -lh /"`

## FileTransferConnectionType
- **Data Type**: Enumeration
- **Applies To**: File Transfer connection
- **Description**: The connection type of this file transfer connection.
- **Supported Values**:
	- FTP
	- FTPWithImplicitSSL
	- FTPWithExplicitTLSSSL
	- SFTP
	- SCP
- **Example**: `"FileTransferConnectionType": "SFTP"`

## PassiveMode
- **Data Type**: Boolean
- **Applies To**: File Transfer connection
- **Description**: Specifies whether or not to use passive mode for this FTP file transfer connection.
- **Example**: `"PassiveMode": true`

## TeamViewerConnectionType
- **Data Type**: Enumeration
- **Applies To**: TeamViewer connection
- **Description**: The connection type of this TeamViewer connection.
- **Supported Values**:
	- RemoteControl
	- FileTransfer
	- Meeting
	- VPN
	- ManagementConsole
	- PromptForType
- **Example**: `"TeamViewerConnectionType": "SFTP"`

## UseCIM
- **Data Type**: Boolean
- **Applies To**: Some management connections
- **Description**: Specifies whether or not to use CIM for this management connection.
- **Example**: `"UseCIM": true`

## Script
- **Data Type**: String
- **Applies To**: PowerShell connection
- **Description**: The script of this PowerShell connection.
- **Example**: `"Script": "Write-Host \"Hello World\""`