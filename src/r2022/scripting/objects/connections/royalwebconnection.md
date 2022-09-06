---
uid: scripting_object_royalwebconnection
name: RoyalWebConnection
order: 8700
---

# RoyalWebConnection
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
### AutoFillDelay
Type: `int`, Default Value: `200`  
Specify the delay in milliseconds before the auto fill is executed.  
### AutoFillMapping
Type: `string[]`, Default Value: `new string[] { }`  
Mapping configuration to automatically fill forms when connected (DEPRECATED - use AutoFillMappingX instead)  
### AutoRefresh
Type: `bool`, Default Value: `false`  
If set to true, the web page will be refreshed automatically. Requires the AutoRefreshIntervalInSeconds to be set.  
### AutoRefreshIntervalInSeconds
Type: `int`, Default Value: `60`  
The number of seconds the web page will be reloaded. Requires the AutoRefresh property set to true.  
### BrowserHeight
Type: `int`, Default Value: `0`  
The height of the browser control. If height is 0, it will occupy the whole height of the parent area.  
### BrowserWidth
Type: `int`, Default Value: `0`  
The width of the browser control. If width = 0, it will occupy the whole width of the parent area.  
### ClearCache
Type: `bool`, Default Value: `false`  
If set to true, the web browser cache (including cookies) is cleared when the connection is closed.  
### CookieStorageMode
Type: `int`, Default Value: `0`  
0 = Use global cookie storage   
 1 = Use isolated cookie storage  
### CustomUserAgentString
Type: `string`, Default Value: `Empty String`  
The custom User Agent String for the browser.  
### IgnoreCertificateErrors
Type: `bool`, Default Value: `false`  
If set to true, certificate errors are ignored.  
### OpenLinksInBrowser
Type: `bool`, Default Value: `false`  
If set to true, all links will be opened in the default browser.  
### OpenPopupsInBrowser
Type: `bool`, Default Value: `false`  
If set to true, all popups will be opened in the default browser.  
### RetryAutoFillUntilSuccess
Type: `bool`, Default Value: `false`  
If set to true, auto fill is executed for each request until it was successful.  
### ScriptErrorsSuppressed
Type: `bool`, Default Value: `false`  
If set to true, web browser dialog boxes (such as script error messages) are not displayed.  
### ShowToolbar
Type: `bool`, Default Value: `false`  
If set to true, the web browser toolbar is shown.  
### Timeout
Type: `int`, Default Value: `60`  
The number of seconds after which a timeout occurs.  
### UseBasicAuth
Type: `bool`, Default Value: `false`  
If set to true, basic authentication is used to authenticate using the configured credential.  
### WebKitEngineMode
Type: `int`, Default Value: `1`  
0 = Legacy (WebView)   
 1 = Modern (WKWebView)  
### ZoomFactor
Type: `int`, Default Value: `100`  
The initial zoom factor (25% - 500%).  
## Content
### Content
Type: `string`, Default Value: `Empty String`  
A custom content HTML code to load instead of the web page.  
### UseCustomContent
Type: `bool`, Default Value: `false`  
If set to true, a custom content page will be loaded instead of the specified URL.  
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
## Engine
### AdditionalPluginDirs
Type: `string[]`, Default Value: `new string[] { }`  
Specify additional plugin directories (in each line) to search for additional plugins.  
### AllowClipboardAccess
Type: `bool`, Default Value: `true`  
If enabled, the Clipboard can be accessed using JavaScript.  
### AllowCloseWindow
Type: `bool`, Default Value: `true`  
If enabled, a new Window can be closed using JavaScript.  
### AllowJavaScript
Type: `bool`, Default Value: `true`  
If enabled, JavaScript is allowed in the browser.  
### AllowOpenWindow
Type: `bool`, Default Value: `true`  
If enabled, a new Window can be created using JavaScript.  
### AllowPlugins
Type: `bool`, Default Value: `true`  
If enabled, plugins can be loaded.  
### AllowZooming
Type: `bool`, Default Value: `true`  
If enabled, the zoom factor can be changed in the browser.  
### CachePath
Type: `string`, Default Value: ``  
Specify a custom path to cache browser files and cookies.  
### CustomCSS
Type: `string`, Default Value: ``  
Specify one or more style rules which should be applied to the document.  
### DisableBuiltInPlugins
Type: `bool`, Default Value: `false`  
If enabled, built-in plugins (such as the built-in PDF plugin) will be disabled.  
### DisableGPU
Type: `bool`, Default Value: `false`  
Disables the GPU when the browser renders a page.  
### DisableSpellChecker
Type: `bool`, Default Value: `false`  
Disables the browser built-in spell checker.  
### DisableWebSecurity
Type: `bool`, Default Value: `false`  
Disables same-origin policy enforcement.  
### DisableXSSAuditor
Type: `bool`, Default Value: `false`  
Disables same-origin policy enforcement.  
### ExtraCommandLineArgs
Type: `string`, Default Value: ``  
Extra command line args separated with space, eg: '--disable-databases --disable-local-storage'. Note that only switches affecting Chromium are supported. Switches for the Chrome browser, like '--enable-cloud-devices' have no effect.  
### Language
Type: `string`, Default Value: ``  
The Chromium UI language in ISO format (en or en-US).  
### LoadImages
Type: `bool`, Default Value: `true`  
If enabled, images are automatically loaded.  
### PreventCrossSiteTracking
Type: `bool`, Default Value: `true`  
Prevents cross-site tracking.  
### ProxyBypass
Type: `string`, Default Value: `Empty String`  
The proxy bypass host list.  
### ProxyCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as proxy server credential by specifying the credential object's GUID.  
### ProxyCredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use a credential   
 1 = Use from this connection   
 2 = Specify username and password   
 3 = Use an existing credential   
 4 = Specify a credential name  
### ProxyCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as proxy server credential by specifying the credential object's name.  
### ProxyDirectMode
Type: `bool`, Default Value: `false`  
Ignores the proxy settings of system.  
### ProxyHostname
Type: `string`, Default Value: `Empty String`  
Specifies the host name of the proxy server.  
### ProxyMode
Type: `int`, Default Value: `0`  
0 = Do not use a proxy server   
 1 = HTTP   
 2 = Socks4   
 3 = Socks4A   
 4 = Socks5   
 5 = Use Secure Gateway as Proxy  
### ProxyPassword
Type: `string`, Default Value: `Empty String`  
The password for the proxy server.  
### ProxyPort
Type: `int`, Default Value: `8080`  
Specifies the proxy port to be used.  
### ProxyUserName
Type: `string`, Default Value: `Empty String`  
The username for the proxy server.  
### ScanCommonPlugins
Type: `bool`, Default Value: `true`  
If enabled, commonly used plugins (QuickTime, Media Player, Acrobat, etc.) will be searched on the system and loaded.  
### UseDedicatedEngine
Type: `bool`, Default Value: `false`  
If enabled, a new web browser engine will be created for isolation.  
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
### DashboardShowPage
Type: `bool`, Default Value: `true`  
If set to true, the dashboard will load the web page of the configured URL.  
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

