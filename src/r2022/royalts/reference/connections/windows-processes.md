---
uid: royalts_reference_connections_windows-processes
name: Windows Processes
order: 9860
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsProcesses/SVG_PluginIcon_32.svg#img_header) Windows Processes
The **Windows Processes** connection can be used to display Windows processes from one or more computers.

## Dashboard
The **Windows Processes** are shown in the **Dashboard** panel when you select a Windows Processes connection in the **Navigation** panel.

![WindowsProcesses_Dashboard](/r2022/images/RoyalTS/Plugins/Connections/WindowsProcesses/windowsprocesses_dashboard.png)

## Dashboard Features
- List of windows processes from one or more computers.
- Grid search and customization, including sort, filter and group.
- Ability to issue a kill process command for the selected process.

> [!Important]
> The Windows Processes connection relies on WMI. Ensure that all the necessary firewall ports for WMI are open and that the credentials set in the connection properties have the permission to manage processes on the remote computer(s).

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Windows Processes plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The Windows Processes connection plugin does not offer any plugin settings at this time.

## Connection Properties
The Windows Processes Properties dialog is shown:
- for a new Windows Processes connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Windows Processes** entry from the list of available objects.
- for an existing Windows Processes connection by selecting a Windows Processes connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Windows Processes connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also:[Bulk Operations](xref:royalts_tutorials_bulk)

## Windows Events Properties
The **Windows Processes** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsProcesses/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure grid and auto refresh settings.

#### Auto Refresh (in sec.)
If enabled, the data will be refreshed automatically.

#### Max. Column Width
If checked, the columns will use all available horizontal space.

##### Show Horizontal Lines
If checked, horizontal lines are shown in the grid.

#### Show Vertical Lines
If checked, vertical lines are shown in the grid.

#### Get Process Owner
If checked, the process owner will be shown in the grid. Enabling this setting may impact the performance.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[royalserver.md](~/royalts/_shared/royalserver.md)]
[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
