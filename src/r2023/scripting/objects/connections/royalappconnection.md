---
uid: scripting_object_royalappconnection
name: RoyalAppConnection
order: 8500
---

# RoyalAppConnection
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
### URI
Type: `string`, Default Value: `Empty String`  
The target URI for the connection object (computer name, URL, ...).  
### Command
Type: `string`, Default Value: `Empty String`  
The command that will be executed to start the external application.  
### Arguments
Type: `string`, Default Value: `Empty String`  
The command line arguments that will be passed to the executable.  
### WorkingDirectory
Type: `string`, Default Value: `Empty String`  
The working directory the command will be started from.  
### Port
Type: `int`, Default Value: `0`  
A port can be specified and used by a replacement token in the arguments.  
### EmbedMethod
Type: `int`, Default Value: `0`  
0 = Window   
 1 = Client Area  
### DoNotStart
Type: `bool`, Default Value: `false`  
If set to true, Royal TS will not start the process and assumes that it's already running.  
### IsConnectionTemplate
Type: `bool`, Default Value: `false`  
If set to true, the connection object is a template.  
### ID
Type: `Guid`, Default Value: `Guid.Empty`  
The unique object identifier (GUID) of the object.  
### ExternalID
Type: `string`, Default Value: `Empty String`  
The external unique object identifier (GUID) of the object.  
## Advanced
### CommandLineMatchString
Type: `string`, Default Value: `Empty String`  
The command line string Royal TS will look for embedding or tracking (in case a different process is started and needs to be tracked).  
### KillOnDisconnect
Type: `bool`, Default Value: `true`  
If set to true, Royal TS will kill the process when the connection is disconnected.  
### LoadProfile
Type: `bool`, Default Value: `true`  
If set to true, the external application will load the profile of the runas user.  
### MaxWaitTime
Type: `int`, Default Value: `10`  
The maximum amount of time (in seconds) Royal TS will wait for the external application to launch before it closes the connection.  
### MinWaitTime
Type: `int`, Default Value: `0`  
The minimum amount of time (in seconds) Royal TS will wait for the external application before it is tracked and embedded after launch.  
### ProcessNameToTrack
Type: `string`, Default Value: `Empty String`  
The process name of the external application Royal TS will look for embedding or tracking.  
### RunElevated
Type: `bool`, Default Value: `false`  
If set to true, Royal TS will start the process elevated.  
### StartHidden
Type: `bool`, Default Value: `false`  
If set to true, the external application is started hidden at first and will be visible right before it is embedded.  
### StartUnattached
Type: `bool`, Default Value: `false`  
If set to true, the external application will be started unattached (without tracking in Royal TS), similar to a shortcut.  
### UseCredentials
Type: `bool`, Default Value: `false`  
If set to true, the external application will be started using the configured credentials (similar to runas).  
### UsePortForLocalForwarding
Type: `bool`, Default Value: `false`  
If set to true, Royal TS will use the specified port instead of a dynamic port for local forwarding.  
### WindowTitleMatchSkip
Type: `int`, Default Value: `0`  
The number of matching Window Titles to skip before the window is embedded.  
### WindowTitleMatchString
Type: `string`, Default Value: `Empty String`  
The window title Royal TS will look for embedding the external application.  
## Credentials
### CredentialAutologon
Type: `bool`, Default Value: `true`  
Whether or not to automatically logon to the connection. Connections which do not support automatic logon will ignore this setting.  
### CredentialFromParent
Type: `bool`, Default Value: `false`  
Use the Credential values from the parent folder.  
### CredentialId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object to this object by specifying the credential object's GUID.  
### CredentialKeyContent
Type: `byte[]`, Default Value: `new byte[] { }`  
Assign a key file to the object by embedding the key file's content.  
### CredentialKeyFile
Type: `string`, Default Value: `Empty String`  
Assign a key file to the object by specifying the key file's full path.  
### CredentialKeyMode
Type: `int`, Default Value: `0`  
0 = Path to file   
 1 = Embedded  
### CredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Use credentials from the parent folder   
 2 = Specify username and password   
 3 = Use an existing credential   
 4 = Specify a credential name   
 5 = Use credential from context connection (only for Connection Templates)  
### CredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object to this object by specifying the credential object's name.  
### CredentialOmitDomain
Type: `bool`, Default Value: `false`  
Whether or not to omit the domain portion of the username.  
### CredentialPassphrase
Type: `string`, Default Value: `Empty String`  
Assign a key file passphrase to the object.  
### CredentialPassword
Type: `string`, Default Value: `Empty String`  
Assign a password to the object.  
### CredentialUsername
Type: `string`, Default Value: `Empty String`  
Assign a username to the object.  
## Key Sequence
### KeySequence
Type: `string`, Default Value: `Empty String`  
The key sequence to be executed after the connection was successfully established.  
### KeySequenceEnabled
Type: `bool`, Default Value: `false`  
If set to true, the configured key sequence will be executed after the connection was successfully established.  
### KeySequenceFromParent
Type: `bool`, Default Value: `false`  
Use the Key Sequence values from the parent folder.  
### KeySequenceId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a key sequence task object to this connection by specifying the task object's GUID.  
### KeySequenceMode
Type: `int`, Default Value: `0`  
0 = Specify a key sequence   
 1 = An existing key sequence task is assigned using the task's GUID   
 2 = Specify a key sequence task by name   
 3 = Use key sequence from parent.  
### KeySequenceName
Type: `string`, Default Value: `Empty String`  
Assign a key sequence task object to this object by specifying the key sequence task object's name.  
## Plugin for macOS
### PlugInOSX
Type: `string`, Default Value: `Empty String`  
The plug in ID used for this connection for macOS.  
### UseGlobalPlugInOSX
Type: `bool`, Default Value: `true`  
If set to true, the connection will use the application default plug in for the connection type on macOS.  
## Plugin for Windows
### PlugInWin
Type: `string`, Default Value: `Empty String`  
The plug in ID used for this connection for Windows.  
### UseGlobalPlugInWin
Type: `bool`, Default Value: `true`  
If set to true, the connection will use the application default plug in for the connection type on Windows.  
## Connect Task
### PreConnectTaskFromParent
Type: `bool`, Default Value: `false`  
Use the Connect Task values from the parent folder.  
### PreConnectTaskMode
Type: `int`, Default Value: `1`  
0 = Use connect task from parent folder   
 1 = Use an existing task   
 2 = Specify a task name.  
### PreConnectTaskName
Type: `string`, Default Value: `Empty String`  
Assign a task object to this object as connect task by specifying the task object's name.  
### PreConnectTaskId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a task object to this object as connect task by specifying the task object's GUID.  
### PreConnectTaskWait
Type: `bool`, Default Value: `false`  
If set to true, the connection will be started after the task finished.  
### PreConnectTaskConditionFirst
Type: `bool`, Default Value: `false`  
If set to true, the task will only be executed if it is the first connection in a folder to be connected.  
### PreConnectTaskConditionAbort
Type: `bool`, Default Value: `false`  
If set to true, the connection will be closed when the task fails (exit code <> 0).  
## Disconnect Task
### PostDisconnectTaskFromParent
Type: `bool`, Default Value: `false`  
Use the Disconnect Task values from the parent folder.  
### PostDisconnectTaskMode
Type: `int`, Default Value: `1`  
0 = Use disconnect task from parent folder   
 1 = Use an existing task   
 2 = Specify a task name.  
### PostDisconnectTaskName
Type: `string`, Default Value: `Empty String`  
Assign a task object to this object as disconnect task by specifying the task object's name.  
### PostDisconnectTaskId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a task object to this object as disconnect task by specifying the task object's GUID.  
### PostDisconnectTaskWait
Type: `bool`, Default Value: `false`  
If set to true, the connection will be closed after the task finished.  
### PostDisconnectTaskConditionLast
Type: `bool`, Default Value: `false`  
If set to true, the task will only be executed if it is the last active connection in a folder.  
## Window Mode
### DisplayMode
Type: `int`, Default Value: `0`  
0 = Embedded (Tabbed)   
 1 = External Window   
 2 = Full Screen (where supported).  
### ExternalScreenMode
Type: `int`, Default Value: `0`  
0 = Remember Screen   
 Any other number indicates the display number.  
### ExternalScreen
Type: `int`, Default Value: `0`  
Specifies on which Screen the External Window will be shown (Windows).  
### ExternalScreenOSX
Type: `int`, Default Value: `0`  
Specifies on which Screen the External Window will be shown (macOS).  
### ExternalPositionMode
Type: `int`, Default Value: `0`  
0 = Remember position   
 1 = Custom left and right coordinates  
### ExternalTop
Type: `int`, Default Value: `0`  
Specifies the last known position (top) of the external window.  
### ExternalLeft
Type: `int`, Default Value: `0`  
Specifies the last known position (left) of the external window.  
### ExternalWidth
Type: `int`, Default Value: `0`  
Specifies the last known width of the external window.  
### ExternalHeight
Type: `int`, Default Value: `0`  
Specifies the last known height of the external window.  
### ExternalSizeMode
Type: `int`, Default Value: `0`  
0 = Remember Size   
 1 = Custom width and height   
 2 = Maximize  
### MinimizeMainWindow
Type: `bool`, Default Value: `false`  
If set to true, the main window will be minimized after the connection was established.  
### FixedSize
Type: `bool`, Default Value: `false`  
Specifies whether or not the control or form should be expanded automatically to fill the container or maximized form  
## Dashboard
### DashboardUseAppSettings
Type: `bool`, Default Value: `true`  
If set to true, the plugin default settings for the dashboard are used.  
### DashboardUseWebPageTemplate
Type: `bool`, Default Value: `false`  
If set to true, a web page template is used to show a web page in the dashboard.  
### DashboardWebPageTemplate
Type: `Guid`, Default Value: `Guid.Empty`  
The Web Page template to use in the dashboard when DashboardUseWebPageTemplate is set to true.  
### DashboardAutoShowWindows
Type: `bool`, Default Value: `true`  
If set to true, the dashboard will show processes and windows automatically.  
### DashboardFilterProcesses
Type: `bool`, Default Value: `false`  
If set to true, the dashboard will only show processes which match the configuration of the connection.  
## Royal Server
### ManagementEndpointFromParent
Type: `bool`, Default Value: `false`  
Use the Royal Server values from the parent folder.  
### ManagementEndpointID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Royal Server object to this object by specifying the Royal Server object's GUID.  
### ManagementEndpointName
Type: `string`, Default Value: `Empty String`  
Assign a Royal Server object to this object by specifying the Royal Server object's name.  
## Secure Gateway
### SecureGatewayFromParent
Type: `bool`, Default Value: `false`  
Use the Secure Gateway values from the parent folder.  
### SecureGatewayUsageMode
Type: `int`, Default Value: `0`  
0 = Never   
 1 = Always   
 2 = On Demand  
### SecureGatewayID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Secure Gateway or Royal Server object to this object by specifying the Secure Gateway or Royal Server object's GUID.  
## Remote Desktop Gateway
### RDSGatewayFromParent
Type: `bool`, Default Value: `false`  
Use the Remote Desktop Gateway values from the parent folder.  
### RDSGatewayUsageMode
Type: `int`, Default Value: `0`  
0 = Never   
 1 = Always   
 2 = On Demand  
### RDSGatewayID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Remote Desktop Gateway object to this object by specifying the Remote Desktop Gateway object's GUID.  
### RDSGatewayName
Type: `string`, Default Value: `Empty String`  
Assign a Remote Desktop Gateway object to this object by specifying the Remote Desktop Gateway object's name.  
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

