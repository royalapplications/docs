---
uid: scripting_object_royalvncconnection
name: RoyalVNCConnection
order: 9000
---

# RoyalVNCConnection
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
### Port
Type: `int`, Default Value: `5900`  
The target VNC port for this connection.  
### PhysicalAddress
Type: `string`, Default Value: `Empty String`  
The MAC address for this connection.  
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
### AdditionalArguments
Type: `string`, Default Value: `Empty String`  
Additional arguments to pass to the vnc viewer application.  
### ColorDepth
Type: `int`, Default Value: `24`  
8 = 8bpp (256 colors)   
 16 = 16bpp (High color)   
 24 = 24bpp (True color)  
### Compression
Type: `int`, Default Value: `-1`  
The compression level for zip/tight encodings:   
 -1 = off   
 0 = fast   
 9 = best  
### CopyRect
Type: `bool`, Default Value: `true`  
If set to true, copy rect encoding is used.  
### DeiconifyOnBell
Type: `bool`, Default Value: `false`  
If set to true, the VNC connection window will be de-iconified on remote bell event (only works in external mode).  
### DisableClipboardTransfer
Type: `bool`, Default Value: `false`  
If set to true, clipboard transfer is disabled.  
### EightBitMode
Type: `bool`, Default Value: `false`  
If set to true, the number of colors is limited to 256.  
### Encoding
Type: `string`, Default Value: `Empty String`  
The encoding algorithm used for the VNC connection.  
### GdiRenderQuality
Type: `int`, Default Value: `1`  
0 = Low (Fast)   
 1 = Medium   
 2 = High (Slow)  
### HideToolbar
Type: `bool`, Default Value: `false`  
If set to true, the toolbar in the viewer will be hidden (if supported).  
### JpegQuality
Type: `int`, Default Value: `-1`  
The JPEG quality level for zip/tight encodings:   
 -1 = off   
 0 = poor   
 9 = best  
### NoStatus
Type: `bool`, Default Value: `true`  
If set to true (default), the /nostatus argument is passed to the UltraVNC viewer.  
### Scale
Type: `int`, Default Value: `-1`  
Viewer display scaling (-1 = auto or percentage).  
### ScaleMode
Type: `int`, Default Value: `0`  
0 = Stretch, keep aspect ratio   
 1 = Stretch   
 2 = No scaling (show scrollbars)  
### ScaleOSX
Type: `bool`, Default Value: `true`  
Display scaling (on macOS).  
### ScreenQuality
Type: `int`, Default Value: `0`  
The quality level when displaying remote screens:   
 0 = Adapt quality to network conditions (faster)   
 1 = Show the screen at full quality (more detailed)  
### SharedConnection
Type: `bool`, Default Value: `false`  
If set to true, the VNC connection is a shared connection  
### SSHTunnelEnabled
Type: `bool`, Default Value: `false`  
If set to true, an SSH tunnel is established for the connection.  
### SSHTunnelHost
Type: `string`, Default Value: `Empty String`  
The host name used to establish the ssh tunnel.  
### TightSecurity
Type: `bool`, Default Value: `true`  
If set to true, Tight security is enabled  
### TightVncEngine
Type: `int`, Default Value: `0`  
0 = GlavSoft TightVNC   
 1 = GlavSoft Legacy  
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
## Input
### EmulateThreeMouseButtons
Type: `bool`, Default Value: `false`  
If set to true, a 3rd mouse button is emulated with 2 button click.  
### EnableWindowsKey
Type: `bool`, Default Value: `false`  
Redirects the Windows key to the remote session  
### InteractionMode
Type: `int`, Default Value: `0`  
0 = Mouse and Keyboard   
 1 = Mouse only   
 2 = View only  
### KeyboardMode
Type: `int`, Default Value: `1`  
0 = None (View only)   
 1 = Forward keyboard shortcuts only if not in use locally   
 2 = Forward keyboard shortcuts even if in use locally   
 3 = Forward all keyboard shortcuts and hotkeys  
### LocalCursorMode
Type: `int`, Default Value: `0`  
0 = Hide   
 1 = Show  
### LocalCursorShape
Type: `int`, Default Value: `2`  
0 = Do not show   
 1 = Normal dot   
 2 = Arrow, 3 = Small dot  
### PanningMode
Type: `int`, Default Value: `0`  
0 = Continuosly with the cursor   
 1 = When the cursor reaches an edge   
 2 = Only when the scroll bars are adjusted  
### RemoteCursorMode
Type: `int`, Default Value: `0`  
0 = Track remote cursor locally   
 1 = Let remote server deal with cursor   
 2 = Don't show remote cursor  
### SwapMouseButtons
Type: `bool`, Default Value: `false`  
If set to true, the mouse buttons 2 and 3 are swapped.  
### TrackingMode
Type: `int`, Default Value: `0`  
0 = Track Mouse   
 1 = Track only Mouseclicks  
### ViewOnly
Type: `bool`, Default Value: `false`  
If set to true, the VNC connection is a view only connection.  
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

