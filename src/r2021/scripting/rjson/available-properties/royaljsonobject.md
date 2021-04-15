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