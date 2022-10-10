---
uid: royalts_reference_connections_external-app
name: External Application
order: 9900
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/ExternalApp/SVG_PluginIcon_32.svg#img_header) External Application
The **External Application** connection can be used to integrate external applications (executables) into Royal TS.

## Dashboard
The **External Application Dashboard** is shown in the **Dashboard** panel when you select an External Application connection in the **Navigation** panel. It can be configured to show windows of currently running processes. Use the **Connect (Ad Hoc)** button in the toolbar to create a new ad hoc external application connection based on the selection. You can move the resulting connection to your document by using drag & drop.

![ExternalApp_Dashboard](/r2022/images/RoyalTS/Plugins/Connections/ExternalApp/externalapp_dashboard.png)

## Dashboard Features
Enumerates and shows a list of all windows available from the currently running processes.

- **Open in Explorer** opens the folder containing the selected executable.
- **End Process** kills the selected process.
- **Connect (Ad Hoc)** creates an Ad Hoc External Application connection and tries to embed the selected window.
- **Search** for a process in the grid.
- **Refresh** updates the list of available windows.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the External Application plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The External Application plugin does not offer any plugin settings at this time.

## Connection Properties
The External Application Properties dialog is shown:
- for a new External Application connection by clicking the **External Application** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing External Application connection by selecting an External Application connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple External Application connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## External Application Properties
The **Terminal Connection** page allows you to configure basic connection settings, such as host name and the connection type (Telnet, SSH or Serial Port).
[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Command
Specify the executable (.exe file) or click on the browse button '...' to browse for an executable on your computer or your network.

#### Arguments
Specify any command line arguments if necessary.

#### Working Directory
Specify the working directory.

> [!Note]
To securely inject a username or password from an assigned credential, use the [replacement tokens](xref:royalts_advanced_tokens) menu of the fly-out button at the right.

#### Window Picker
The window picker can be used to populate the required fields to start the application based on a running application.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/ExternalApp/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced external application settings.

### Options
#### Run Elevated
If checked, Royal TS will start the process elevated. Embedded window mode will not be available when Royal TS was not started as administrator (elevated).

#### Use Credentials
If checked, Royal TS will start the process running as the user configured in the Credential settings page. Ensure the user has the right to log on locally on this machine.

#### Load Profile
If checked, Royal TS will load the user profile for the configured credential.

#### Start Unattached
If checked, Royal TS will not track (embed) the process of the application. The process will be started independently (like starting an application using a shortcut).

#### Start Hidden
Royal TS will start the process hidden so that the main window will not be shown until available to embed into the tab. This setting should only be used when you plan to embed the external app in a tab.

#### Kill on Disconnect
Royal TS will kill the process when the external app connection is disconnected.

### Process Tracking
#### Window Title Match
Enter the window title or part of the window title to identify the window Royal TS should embed into the tab. Optional: Leave empty if you want Royal TS to use the main window of the process.

#### Process Name to Track
Enter the process name (other than the configured command) to identify the process Royal TS should track or embed into the tab. Optional: Leave empty if you want Royal TS to use the original process provided in the command field.

#### Command Line Match
Enter the command line or part of the command line to identify the process Royal TS should track or embed into the tab. Optional: Leave empty if you want Royal TS to use the original process provided in the command field.

#### Min. Wait Time
The minimum amount of time (in seconds) to wait before Royal TS grabs the window of the external application.

#### Max. Wait Time
The maximum amount of time (in seconds) to wait before Royal TS stops trying to grab the window of the external application. When the max. wait time expires, Royal TS will cancel the connection attempt.

### Secure Gateway
#### Computer Name
Specify a computer name or IP address to use in the command line arguments. By using the $URI$ replacement tokens, local port forwarding can be used for external applications.

#### Port
Specify a port to use in the command line arguments. By using the $Port$ replacement tokens, local port forwarding can be used for external applications.

#### Use Port for local forwarding
Royal TS use the specified port instead of a dynamic port for local forwarding. This can be helpful if the destination port is known but cannot be specified in the arguments.

> [!Note]
> You can use a secure gateway for port forwarding if the application allows you to specify a computer name or port to connect to. You can use the replacement tokens $URI$ and $Port$ in the arguments.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
