---
uid: royalts_reference_connections_terminal-services
name: Terminal Services
order: 9840
---

# ![](/r2023/images/RoyalTS/Plugins/Connections/TerminalServices/SVG_PluginIcon_32.svg#img_header) Terminal Services

The **Terminal Services** connection can be used to display terminal sessions from one or more computers and provide basic management tasks.

## Dashboard

The **Terminal Services Dashboard** is shown in the **Dashboard** panel when you select a Terminal Services connection in the **Navigation** panel.

![TerminalServices_Dashboard](/r2023/images/RoyalTS/Plugins/Connections/TerminalServices/terminalservices_dashboard.png)

## Dashboard Features

- List of all terminal services sessions and their state.
- Grid search and customization, including sort, filter and group.
- Send a message to appear on the desktop of the selected remote session(s).
- Reset a selected remote session (similar to a forced log off).
- Restart the remote server.

> [!Important]
> The Terminal Services connection relies on RPC communication. Ensure that all the necessary firewall ports for RPC communication are open and that the user account running Royal TS (beware of UAC) have local administrative rights on the remote computer.

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings

To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Terminal Services plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings

The Terminal Services plugin does not offer any plugin settings at this time.

## Connection Properties

The Terminal Services Properties dialog is shown:

- for a new Terminal Services connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Terminal Services** entry from the list of available objects.
- for an existing Terminal Services connection by selecting a Terminal Services connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Terminal Services connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2023/images/RoyalTS/Plugins/Connections/TerminalServices/SVG_PluginIcon_32.svg#img_header) Terminal Services Properties

The **Terminal Services** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/TerminalServices/SVG_PageDisplayOptions_32.svg#img_header) Display Options

The **Display Options** page allows you to configure grid and auto refresh settings.

#### Auto Refresh (in sec.)

If enabled, the data will be refreshed automatically.

#### Max. Column Width

If checked, the columns will use all available horizontal space.

#### Show Horizontal Lines

If checked, horizontal lines are shown in the grid.

#### Show Vertical Lines

If checked, vertical lines are shown in the grid.

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
