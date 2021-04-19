---
uid: royalts_reference_connections_rdp
name: Remote Desktop
order: 10000
---

# ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PluginIcon_32.svg#img_header) Remote Desktop 
The **Remote Desktop** connection *(based on Microsoft RDP ActiveX)* can be used to connect to remote computers or Hyper-V guests using the remote desktop protocol (RDP) which is built into Windows.

## Dashboard
The **Remote Desktop Dashboard** is shown in the **Dashboard** panel when you select a Remote Desktop connection in the **Navigation** panel. Depending on the Hyper-V configuration of your connection you will either see the **Hyper-V** dashboard pane, the **Sessions** dashboard pane, or both.

![RemoteDesktop_Dashboard](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/remotedesktop_dashboard.png)

## Hyper-V Features
-   List of all hosted Hyper-V guests (or instances) and their state.
-   Grid search and customization, including sort, filter and group.
-   **Start, Pause, Save State and Shut Down** Hyper-V guests directly from the **Dashboard**.
-   **Add** a new **Remote Desktop** connection based on the original settings combined with the guest properties.  
    Royal TS assumes the guest name as the host name for the new connection.
-   **Add** a new **Hyper-V Instance** connection based on the selected guest.  
    Royal TS creates a new **Remote Desktop** connection configured to connect directly to the Hyper-V guest.
-   **Connect (Ad Hoc)** allows you to connect directly to the selected Hyper-V guest.

> [!Important]
> The Hyper-V dashboard pane relies on **WMI**. Ensure that all the necessary firewall ports for WMI are open and that the user account running Royal TS (beware of UAC) or the credentials set in the Remote Desktop connection have local administrative rights on the remote **Hyper-V host computer**.

## Sessions Features
-   List of all terminal services sessions and their state.
-   Grid search and customization, including sort, filter and group.
-   Send a message to appear on the desktop of the selected remote session(s).
-   Reset a selected remote session (similar to a forced log off).
-   Restart the remote server.

> [!Important]
> The **Sessions** dashboard pane relies on **RPC communication**. Ensure that all the necessary firewall ports for RPC communication are open and that the user account running Royal TS (beware of UAC) have local administrative rights on the remote computer.

## Royal Server Support
The dashboard data can also be gathered using a Royal Server. For more information about Royal Server, click [here](xref:royalts_intro_royalserver).

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on Dashboard for the Remote Desktop plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
To configure the Remote Desktop plugin settings, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Settings** for the Remote Desktop plugin:

#### Client Version
Specify which RDP client version should be used. If **Automatic** (Default) is selected, the latest version available will be used.

### Disconnect and Reconnect
#### Fast Smart Reconnect
If checked, Royal TS will use the faster reconnect method introduced in RDP 8 whenever possible. Disable this setting in case you experience issues with smart reconnect.

#### Force Smart Reconnect on all Sessions
If checked, Royal TS will invoke smart reconnect on all sessions as soon as it is invoked on one. Disable this setting in case you experience issues with smart reconnect.

#### Close tab when user logs off, reboots or disconnects
If checked, Royal TS will also close tabs when a log off, reboot or disconnect from within the session is initiated.  
This setting is only effective when **Keep tabs open when disconnected remotely** in the [User Interface](xref:royalts_reference_options#-user-interface) option is checked.

#### Auto Reconnect on Disconnected Tab
If checked, the automatic reconnect feature will be enabled when the disconnected tab is shown.

#### Always Reconnect
If checked, the automatic reconnect feature will always be enabled when the disconnected tab is shown, including events like signing out the remote session or rebooting the remote computer.

### Advanced
#### Set Domain to '.' for Local Accounts:
If checked, a dot ('.') will be used as domain for local account user names if no domain is specified.

#### Disable Click Detection
If checked, Royal TS will not be able to detect clicks inside a remote session. This should only be used for troubleshooting.

## Connection Properties
The Remote Desktop Properties dialog is shown:
- for a new Remote Desktop connection by clicking the **Remote Desktop** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing Remote Desktop connection by selecting a Remote Desktop connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Remote Desktop connections were selected in the **Folder / Document Dashboard** and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked.  
  See also: [Bulk Operations](xref:royalts_tutorials_bulk)

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port
Specify the TCP port for the remote desktop connection. The default RDP port is 3389.

#### Console/Admin Session
Similar to the /console or /admin switch from the original terminal services client (mstsc.exe).

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageDisplayOptions_32.svg#img_header) Display Options
#### Color Depth
The color depth (in bits per pixel) for the control's connection.

> [!Note]
> Higher color depth needs more bandwidth. If you are working with slow connections, reduce the color depth.

#### Desktop Size
Select one of the predefined desktop sizes or specify your own desktop width and height.

#### Resize Mode
Configure how Royal TS handles session window resize events.

- **Scroll Bars**  
  Decreasing the window size will show scroll bars in the remote session.
- **Smart Sizing**  
  Decreasing the window size will scale down the remote session.
- **Smart Reconnect**  
  Changing the window size will force a reconnect, so that the remote desktop will adapt to the new size.

> [!Note]
> Keep in mind that a large desktop size and high color depth drastically increases memory usage of Royal TS - especially when you connect to many servers at the same time.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]

### Dashboard Settings
#### Automatically show Hyper-V instances
If checked, the Hyper-V dashboard will automatically retrieve instance information from the remote host.

#### Automatically show terminal sessions
If checked, the Sessions dashboard will automatically retrieve terminal session information from the remote host.

#### Use configured credentials
If checked, Royal TS will also use the configured credentials to retrieve the dashboard information if necessary.

[!include[royalserver.md](~/royalts/_shared/royalserver.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageAdvanced_32.svg#img_header) Advanced
### Authentication
#### Authentication Level
Specifies the authentication level to use for the connection.
- **Connect and do not warn me if server authentication fails**  
  No authentication of the server.
- **Do not connect, if server authentication fails**  
  Server authentication is required and must complete successfully for the connection to proceed.
- **Connect, but warn me if server authentication fails**  
  Attempt authentication of the server. If authentication fails, the user will be prompted with the option to cancel the connection or to proceed without server authentication.

#### Network Level Authentication
If the computer you want to connect to requires Network Level Authentication, you need to check this option.

> [!Note]
> NLA is enabled by default on Vista/Windows 2008 or later.

#### Use Credential Manager
When checked, Royal TS will create a credential entry in the Windows Credential Manager instead of submitting the credentials to the server.

#### Restricted Admin Mode
In this mode, credentials won't be sent to the remote server, which can protect you if you connect to a remote server that has been compromised. However, connections made from the remote server might not be authenticated by other servers, which might impact app functionality and compatibility.

> [!Note]
> Experimental: Microsoft does not provide an official (public) API for setting the restricted admin mode on the ActiveX control Our implementation is experimental. There's no guarantee that it will always work.

### Connection
#### Compression
Specifies whether compression is enabled.

#### Bitmap Caching
Bitmap caching can improve performance but requires additional memory and disk resources.

#### Public Mode
When enabled, the RDP client does not cache any data on the local system. Use public mode, for example, when connecting to a business server from a system in a conference center.

#### Background Input
When background input is enabled the client accepts mouse input even when Royal TS or the external client window is not active.

#### Session Takeover Warning
When Session Takeover Warning is enabled, the client first checks for terminal sessions and warns the user if a session is already active with the same username.

#### Automatic Reconnect
Specifies whether to enable the client to reconnect automatically to a session in the event of a network disconnection. If checked, enter the number of times to try to reconnect during automatic reconnection.

#### Load Balance Info
Specifies the load balancing cookie that will be placed in the X.224 Connection Request packet.

> [!Tip]
> This field is often used for Azure based connections. After importing .rdp files created by the Azure portal, you may find specific load balancing cookies in your configuration.

## ![](/r2021/images/RoyalTS/Application/SVG_PageRDSGateway_32.svg#img_header) Remote Desktop Gateway
The **Remote Desktop Gateway** page allows you to setup your connection to use a Remote Desktop Gateway.

#### Gateway Mode
- **Use Gateway from parent**  
  The remote desktop gateway configuration from the parent folder will be used.
- **Use an existing Gateway**  
  Allows you to select an existing remote desktop gateway object.
- **Specify Gateway settings**  
  Allows you to configure the gateway settings below.

#### Use Gateway Server
Specifies when to use a Remote Desktop Gateway server.
- **Never**  
  Do not use a Remote Desktop Gateway server.
- **Always**  
  Always use a Remote Desktop Gateway server
- **On demand**  
  Use a Remote Desktop Gateway server if a direct connection cannot be made to the Remote Desktop Session Host server.

#### Gateway Server
Specifies the host name of the Remote Desktop Gateway server.

#### Logon Method
Specify the Logon Method for the gateway server.
- **Ask for credentials on connect**  
  No credentials configured. Connections that require credentials may prompt the user to enter credentials upon connecting or will fail to connect.
- **Use from this connection**  
  The same credentials as configured in the Credentials page are used for gateway authentication.
- **Smart card**  
  Smart card logon is used for gateway authentication.
- **Specify username and password**  
  Provide a Username and Password. For domain accounts use the syntax "domain\username"
- **Use an existing credential**  
  Choose an existing credential from the drop-down list. You may also Add a new credential or Edit the selected credential.
- **Specify a credential name**  
  Enter or choose a credential name.

> [!Note]
> Assigning existing credentials using the name is recommended when a team of users share the same configuration file.
> Each user can define a credential with the same name in his own personal and protected document.
> This makes sharing files across team members very easy while keeping credentials safe.
> See Work with [Personal Credentials in a Shared Document](xref:royalts_tutorials_credentials#working-with-personal-credentials-and-a-shared-document) for more information.

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageHyperV_32.svg#img_header) Hyper-V
The **Hyper-V** page allows you to setup your connection as a Hyper-V host to display the Hyper-V management in the Dashboard and optionally allows you to configure a target instance you want to connect to by default.

#### Hyper-V Mode
Specifies whether or not the remote host is a Hyper-V mode host.
- **This is a standard RDP connection (Default)**  
  The Sessions dashboard pane is shown in the Dashboard panel but not the Hyper-V dashboard pane.
- **This is a Hyper-V host, show VM instances in dashboard**  
  The Sessions dashboard pane and the Hyper-V dashboard pane is shown in the Dashboard panel.

> [!Note]
> Use the Connect (Ad Hoc) button in the Hyper-V dashboard pane toolbar to connect directly to the console of a selected instance. There's no need to have any Hyper-V tools or vmconnect.exe as Royal TS seamlessly integrates Hyper-V remote control.

- **This is a Hyper-V host, connect to a specific instance**  
  The Hyper-V dashboard pane is shown in the Dashboard panel for the configured instance.
 
#### Port
The Hyper-V proxy port. By default, Hyper-V hosts listen to port 2179.

#### Instance
Enter an instance ID (GUID) or click on the browse button (...) on the right to show the Hyper-V instance picker.

> [!Note]
> Instance browsing relies on WMI. Ensure that all the necessary firewall ports for WMI are open and that the user account running Royal TS (beware of UAC) or the credentials set in the Remote Desktop connection have local administrative rights on the remote Hyper-V host computer.

#### Enhanced Session Mode
Local resources, like audio, printers, clipboard, drives, USB devices, etc. can be redirected. Enhanced session mode requires a supported guest operating system, and may require additional configuration inside the virtual machine. See also: [Enhanced Session Mode](https://technet.microsoft.com/en-us/library/dn282274.aspx)

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PagePerformance_32.svg#img_header) Performance
The **Performance** page allows you to configure various Remote Desktop settings which will directly impact the connection performance.

#### Connection Speed
On Windows 7/Windows Server 2008R2 you need to set the Connection Speed to LAN in order to enable RemoteFX. On Windows 8/Windows Server 2012 this isn't a requirement anymore but you should set it to LAN speed if you are connecting to the server with a high speed connection. The connection speed setting will affect the bandwidth usage in your RDP connections.

#### Text Cursor Blinking
If checked, blinking for the text cursor is allowed.

#### Mouse Cursor Shadow
If checked, the shadow is displayed for the mouse cursor.

#### Desktop Background
If not checked, no wallpaper is displayed in the remote session.

#### Font Smoothing
If checked, allows "Clear Type" to render text.

#### Desktop Composition (Aero)
If checked, allows "Aero" user interface to be rendered.

#### Show Window Contents while Dragging
If not checked, only the window outline is displayed when a window is moved.

#### Menu Animations
If not checked, menu and window animations are not displayed.

#### Visual Styles
If not checked, themes are ignored and not displayed.

#### DirectX
If checked, DirectX is available in the remote session.

#### Hardware Acceleration
If checked, hardware acceleration will be used where supported. Overview thumbnails may not work with hardware acceleration enabled.

#### Bandwidth Detection
Specifies if bandwidth changes are automatically detected.

> [!Note]
> Font Smoothing and Desktop Composition (Aero) requires Windows Vista/Windows 2008 or later. 
> DirectX requires Windows 7/Windows 2008R2 or later on the client and on the server as well as DirectX capabilities on the client.
> Bandwidth Detections is new in RDP8 (included since Windows 8/Windows 2012) and is required on both, the client and the server.

#### Cache Size
Caching and memory management drastically changed in RDP version 8 (when connecting from a Windows 8/Server 20112 to another Windows 8/Server 2012) and will take much more client side memory as with previous RDP versions. The cache size setting allows you to configure how much client side memory Royal TS should use for RDP 8 connections.

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageRedirection_32.svg#img_header) Redirection
The Redirection page allows you to configure device and resource redirection for use in the remote session.

#### Printers
If checked, redirection of printers is allowed.

#### Clipboard
If checked, clipboard sharing is allowed.

#### Smart Cards
If checked, redirection of smart cards is allowed.

#### Ports
If checked, redirection of local ports (for example, COM and LPT) is allowed.

#### Devices
If checked, device redirection is enabled.

#### POS Devices
If checked, redirection of Point of Service device is allowed.

> [!Note]
> Devices and POS Devices requires Windows Vista/Windows 2008 or later.

#### Drive Redirection
- **No Drives**  
  Redirection of local disk drives is not allowed.
- **All Drives**  
  Redirection of local disk drives is allowed for all drives.
- **Specific Drives**  
  Redirection of local disk drives is only allowed for a list of drives.

#### Audio
Select the audio redirection mode.
- **Bring to this computer**  
  All audio from the remote computer is played on this computer.
- **Leave at remote computer**  
  All audio from the remote computer is played on the remote computer.
- **Do not play**  
  Audio is disabled on the remote computer.

#### Record Audio from this Computer
pecifies whether the default audio input device is redirected from the client to the remote session.

> [!Note]
> Record Audio from this computer requires Windows 7/Windows 2008R2 or later.

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageInput_32.svg#img_header) Input
The **Input** page allows you to configure keyboard behavior and keyboard layout in the remote session.

#### Accelerator Passthrough
If checked, keyboard accelerators will be passed to the remote session.

#### Windows Keys Passthrough
If checked, Microsoft Windows key combinations (like Alt-Tab) will be passed to the remote session.

> [!Note]
> If this option is enabled, windows key combinations will have no effect locally when a remote session is active and has the input focus. You can use certain keyboard shortcuts (for example Ctrl + Shift + N to focus the Navigation panel) to move the input focus back to Royal TS and allow local windows key combinations.

#### Keyboard Layout
Specify a predefined or custom keyboard layout in your remote session.

> [!Note]
> This setting will only be effective for freshly logged on sessions. Changing this setting will not affect sessions where a user is already logged on. Ensure you log off the user before you change this setting.

## ![](/r2021/images/RoyalTS/Plugins/Connections/RemoteDesktop/SVG_PageStartProgram_32.svg#img_header) Program
The **Program** page allows you to configure the program to be started on the remote server upon connection.

#### Program
Specifies the program to be started on the remote server upon connection.

#### Working Directory
Specifies the working directory of the start program.

#### Maximize
Specifies whether the program should be maximized.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
