---
uid: scripting_object_royalrdsconnection
name: RoyalRDSConnection
order: 9100
---

# RoyalRDSConnection
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
### RDPPort
Type: `int`, Default Value: `3389`  
The target RDP port for this connection. The default value is 3389.  
### AdditionalArguments
Type: `string`, Default Value: `Empty String`  
Additional arguments to be used with wfreerdp.exe.  
### AllowBackgroundInput
Type: `bool`, Default Value: `false`  
If set to true, background input mode is enabled. When background input is enabled the client can accept input when the client does not have focus.  
### AuthenticationLevel
Type: `int`, Default Value: `0`  
0 = Connect And Do Not Warn Me   
 1 = Do Not Connect   
 2 = Warn Me  
### BitmapPersistence
Type: `bool`, Default Value: `true`  
If set to true, bitmap caching is used. This can improve performance but requires additional disk space.  
### Compression
Type: `bool`, Default Value: `true`  
If set to true, compression is used.  
### ConnectToAdministerOrConsole
Type: `bool`, Default Value: `false`  
If set to true, the session is used for administrative purposes on a Windows Server 2008-based server, or to the console session on a Windows Server 2003-based server.  
### DisableUdpTransport
Type: `bool`, Default Value: `false`  
If set to true, UDP transport will be disabled.  
### EnableAutoReconnect
Type: `bool`, Default Value: `true`  
If set to true, the client control automatically reconnects to a session in the event of a network disconnection.  
### EnableGlyphCache
Type: `bool`, Default Value: `false`  
If set to true, glyph caching is enabled.  
### GrabFocusOnConnect
Type: `bool`, Default Value: `false`  
If set to true, the client control will grab the focus upon connect.  
### KeepAliveInterval
Type: `int`, Default Value: `0`  
The interval to send keep alive packets (0 = off).  
### LoadBalanceInfo
Type: `string`, Default Value: `Empty String`  
The load balancing cookie that will be placed in the X.224 Connection.  
### MaxReconnectAttempts
Type: `int`, Default Value: `3`  
The number of times to try to reconnect during automatic reconnection. A value between 0 to 200 is allowed.  
### NetworkLevelAuthentication
Type: `bool`, Default Value: `true`  
If set to true, network level authentication (credsspsupport) is enabled and required. Applies to Windows Vista or later / Windows Server 2008 or later.  
### PasswordContainsSmartCardPin
Type: `bool`, Default Value: `false`  
Indicates that the password contains a smart card personal identification number (PIN). Minimum requirement: RDP Version 6 or higher.  
### PublicMode
Type: `bool`, Default Value: `false`  
If set to true, the client control does not cache any data to the local system. Use public mode, for example, when connecting to a business server from a system in a conference center.  
### RemoteGuardMode
Type: `bool`, Default Value: `false`  
When Remote Guard Mode is enabled, credentials are not sent to the remote PC.  
### RestrictedAdminMode
Type: `bool`, Default Value: `false`  
When Restricted Admin Mode is enabled, the user authenticated on the remote device may not be able to connect to other remote devices, as delegation is restricted and connections to other remote devices are made using the local computer account.  
### SessionTakeoverWarning
Type: `bool`, Default Value: `false`  
When Session Takeover Warning is enabled, the client first checks for terminal sessions and warns the user if a session is already active with the same username.  
### TCPACKTimeout
Type: `int`, Default Value: `9`  
The connection timeout in seconds. Advanced setting for high latency links. Use if you encounter timeout failures with your connection.  
### TLSEncryption
Type: `bool`, Default Value: `false`  
If set to true transport layer security (TLS) is enabled.  
### UseCredentialManager
Type: `bool`, Default Value: `false`  
If set to true, credentials will be added to the Windows Credential Manager instead of sending them to the server.  
### UseRedirectionServerName
Type: `bool`, Default Value: `false`  
Gets and sets whether to use the redirection server name.  
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
## Display Options
### AutomaticallyCalculateScaleFactor
Type: `bool`, Default Value: `true`  
If set to true, automatically calculates the remote screen's scale factor based on the local display. Applies only to Royal TSX on macOS.  
### ColorDepth
Type: `int`, Default Value: `32`  
8 = 8bpp (256 colors)   
 15 = 15bpp (High color)    
 16 = 16bpp (High color)   
 24 = 24bpp (True color)   
 32 = 32 bpp (Highest Quality)  
### DesktopHeight
Type: `int`, Default Value: `0`  
Specifies the remote desktop height in pixels.  
### DesktopWidth
Type: `int`, Default Value: `0`  
Specifies the remote desktop width in pixels.  
### DoNotShowConnectionBar
Type: `bool`, Default Value: `false`  
If set to true, the connection bar will not be displayed in Full Screen mode.  
### LocalZoom
Type: `bool`, Default Value: `false`  
If set to true, scale factor and zooming is applied locally.  
### PinConnectionBar
Type: `bool`, Default Value: `true`  
Tracks if the connection bar is pinned or not.  
### ScaleFactor
Type: `int`, Default Value: `100`  
Specifies the remote desktop scaling factor in percent.  
### SmartReconnect
Type: `bool`, Default Value: `false`  
If set to true, the client control reconnects when the window was resized. Only works when SmartSizing is false and no desktop width or height is set.  
### SmartSizing
Type: `bool`, Default Value: `false`  
If set to true, the display will be scaled down to fit the client area of the control. Note that scroll bars do not appear when the SmartSizing property is enabled. Unlike most other properties, this property can be set when the control is connected.  
### UseRetinaResolution
Type: `bool`, Default Value: `false`  
If set to true, the full retina resolution is used, otherwise the display will be scale up. Applies only to Royal TSX on macOS.  
## Gateway
### GatewayCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as gateway server credential by specifying the credential object's GUID.  
### GatewayCredentialMode
Type: `int`, Default Value: `0`  
0 = Ask for credentials on connect   
 1 = Use from this connection   
 2 = Smart card   
 3 = Specify username and password   
 4 = Use an existing credential   
 5 = Specify a credential name  
### GatewayCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as gateway server credential by specifying the credential object's name.  
### GatewayCredentialSharing
Type: `bool`, Default Value: `false`  
If enabled, the remote desktop gateway credentials are passed on to the remote desktop server.  
### GatewayHostName
Type: `string`, Default Value: `Empty String`  
The terminal service gateway server computer name.  
### GatewayMode
Type: `int`, Default Value: `0`  
0 = Specify Gateway   
 1 = Use an existing Gateway Object  
### GatewayPassword
Type: `string`, Default Value: `Empty String`  
The password for the gateway server. Only works with XP SP3, Vista SP1, Windows 2008 or later.  
### GatewayTransportType
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = RPC   
 2 = HTTP  
### GatewayUsageMethod
Type: `int`, Default Value: `0`  
0 = Never   
 1 = Always   
 2 = On Demand  
### GatewayUserName
Type: `string`, Default Value: `Empty String`  
The username for the gateway server. Only works with XP SP3, Vista SP1, Windows 2008 or later.  
## Hyper-V
### HyperVEnhancedSessionMode
Type: `bool`, Default Value: `false`  
If set to true, the Hyper-V enhanced session mode is used.  
### HyperVInstance
Type: `string`, Default Value: `Empty String`  
The GUID of the Hyper-V Instance.  
### HyperVMode
Type: `int`, Default Value: `0`  
0 = Standard RDP connection   
 1 = Hyper-V Host (shows dashboard)   
 2 = Hyper-V Instance  
### HyperVPort
Type: `int`, Default Value: `2179`  
The TCP port of the Hyper-V RDP connection proxy. Default = 2179.  
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
## Keyboard
### AcceleratorPassthrough
Type: `bool`, Default Value: `true`  
If set to true, keyboard accelerators are passed to the server.  
### EnableConvenienceKeyForwards
Type: `bool`, Default Value: `true`  
If set to true, certain macOS native keyboard shortcuts are passed to the remote session as their Windows equivalents.  
### EnableWindowsKey
Type: `bool`, Default Value: `false`  
If set to true, Windows key combinations are passed to the server.  
### KeyboardLayoutStr
Type: `string`, Default Value: `Empty String`  
The name of the active input locale identifier (formerly called the keyboard layout) to use for the connection. If this property is not set, the control uses the default layout.  
### SendUnicodeKeyboardEvents
Type: `bool`, Default Value: `false`  
If set to true, the Windows key can be used in the remote session.  
## Performance
### AllowDesktopComposition
Type: `bool`, Default Value: `false`  
If set to true, 'Aero' user interface is allowed to be rendered. May only work when using Windows Vista or later.  
### AllowFontSmoothing
Type: `bool`, Default Value: `true`  
If set to true, 'ClearType' to render text is allowed. May only work when connecting to Windows Vista or later.  
### AllowFullWindowDrag
Type: `bool`, Default Value: `true`  
If set to true, the window content is displayed when a window is moved, otherwise only the window outline is displayed.  
### AllowMenuAnimations
Type: `bool`, Default Value: `true`  
If set to true, menu animations are shown.  
### AllowMouseCursorShadow
Type: `bool`, Default Value: `true`  
If set to true, a shadow is displayed for the cursor.  
### AllowTextCursorBlinking
Type: `bool`, Default Value: `true`  
If set to true, blinking for the text cursor is allowed.  
### AllowThemes
Type: `bool`, Default Value: `true`  
If set to true, Windows themes are displayed.  
### AllowWallpaper
Type: `bool`, Default Value: `true`  
If set to true, the wallpaper is displayed in the remote session.  
### BandwidthDetection
Type: `bool`, Default Value: `true`  
If set to true, bandwidth changes are automatically detected.  
### CacheSize
Type: `int`, Default Value: `0`  
0 = Full Cache Mode   
 1 = Small Cache Mode   
 2 = Thin Client Cache Mode  
### EnableGraphicsPipeline
Type: `bool`, Default Value: `false`  
If set to true, the RDP Graphics Pipeline is enabled.  
### EnableHardwareMode
Type: `bool`, Default Value: `false`  
If checked, hardware acceleration will be used where supported.  
### NetworkConnectionType
Type: `int`, Default Value: `0`  
0 = Not specified   
 1 = Modem (56 kbps)   
 2 = Low-speed broadband (256 kbps - 2 Mbps)   
 3 = Satellite (2-16 Mbps with high latency)   
 4 = High-speed broadband (2-10 Mbps)   
 5 - WAN (>10 Mbps with high latency)   
 6 - LAN (> 10 Mbps with low latency)  
### RedirectDirectX
Type: `bool`, Default Value: `false`  
If set to true, DirectX is redirected.  
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
## Program
### MaximizeShell
Type: `bool`, Default Value: `false`  
If set to true, the programs launched with the StartProgram property should be maximized.  
### StartProgram
Type: `string`, Default Value: `Empty String`  
The program to be started on the remote server upon connection. Remarks: If the value of this property is not set, the session user's shell command will be run. The shell command will be read from the following registry value on the server: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WinLogon\Shell  
### WorkDir
Type: `string`, Default Value: `Empty String`  
Specifies the working directory of the start program.  
## Proxy Settings
### ProxyCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as proxy server credential by specifying the credential object's GUID.  
### ProxyCredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Use the same credentials from the connection   
 2 = Specify username and password   
 3 = Use an existing credential   
 4 = Specify a credential name  
### ProxyCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as proxy server credential by specifying the credential object's name.  
### ProxyMode
Type: `int`, Default Value: `0`  
Specifies the proxy mode for the file transfer connection:   
 0 = No proxy   
 1 = SOCKS   
 2 = HTTP  
### ProxyPassword
Type: `string`, Default Value: `Empty String`  
The password for the proxy server.  
### ProxyPort
Type: `int`, Default Value: `8080`  
Specifies the proxy port for this connection.  
### ProxyServer
Type: `string`, Default Value: `Empty String`  
Specifies the proxy server for the connection.  
### ProxyUserName
Type: `string`, Default Value: `Empty String`  
The username for the proxy server.  
## Redirection
### AudioCaptureRedirectionMode
Type: `bool`, Default Value: `false`  
If set to true, audio capture (the microphone) is redirected.  
### AudioRedirectionMode
Type: `int`, Default Value: `0`  
0 = Bring to this computer   
 1 = Leave at remote computer   
 2 = Do not play  
### Drives
Type: `string`, Default Value: `Empty String`  
A string representing the driveletters which should be redirected (e.g. 'CEH' for the drives C:, E: and H:). If empty, all drives are redirected if drive redirection is enabled  
### RedirectClipboard
Type: `bool`, Default Value: `true`  
If set to true, the clipboard is shared and redirected.  
### RedirectDevices
Type: `bool`, Default Value: `false`  
If set to true, devices are redirected.  
### RedirectDrives
Type: `bool`, Default Value: `false`  
If set to true, local disk drives are redirected.  
### RedirectPorts
Type: `bool`, Default Value: `false`  
If set to true, local ports (such as COM and LPT ports) are redirected.  
### RedirectPOSDevices
Type: `bool`, Default Value: `false`  
If set to true, POS (Point of Service) devices are redirected.  
### RedirectPrinters
Type: `bool`, Default Value: `false`  
If set to true, printers are redirected.   
### RedirectSmartCards
Type: `bool`, Default Value: `false`  
If set to true, smart cards are redirected.  
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
### UseMultiMon
Type: `bool`, Default Value: `false`  
If set to true, multiple monitors are used in full screen mode.  
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
### DashboardAutoHyperVInfo
Type: `bool`, Default Value: `true`  
If set to true, the dashboard will automatically show hyper-v instances.  
### DashboardHyperVPerformanceInfo
Type: `bool`, Default Value: `false`  
If set to true, the dashboard will show additional hyper-v performance information for instances.  
### DashboardAutoSessionInfo
Type: `bool`, Default Value: `true`  
If set to true, the dashboard will automatically show the remote sessions.  
### DashboardUseCredential
Type: `bool`, Default Value: `false`  
If set to true, the dashboard will use the configured credentials to retrieve the dashboard data.  
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

