---
uid: royalts_reference_connections_windows-services
name: Windows Services
order: 9850
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsServices/SVG_PluginIcon_32.svg#img_header) Windows Services
The **Windows Services** connection can be used to display Windows services from one or more computers.

## Dashboard
The **Windows Services** are shown in the **Dashboard** panel when you select a Windows Services connection in the **Navigation** panel.

![WindowsServices_Dashboard](/r2022/images/RoyalTS/Plugins/Connections/WindowsServices/windowsservices_dashboard.png)

## Dashboard Features
- List of windows services from one or more computers.
- Grid search and customization, including sort, filter and group.
- Ability to start, stop and restart one or more services.

> [!Important]
> The Windows Services connection relies on WMI. Ensure that all the necessary firewall ports for WMI are open and that the credentials set in the connection properties have the permission to manage services on the remote computer(s).

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Windows Services plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The Windows Services connection plugin does not offer any plugin settings at this time.

## Connection Properties
The Windows Services Properties dialog is shown:
- for a new Windows Services connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Windows Services** entry from the list of available objects.
- for an existing Windows Services connection by selecting a Windows Services connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Windows Services connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsServices/SVG_PluginIcon_32.svg#img_header) Windows Services Properties
The **Windows Services** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsServices/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure grid and auto refresh settings.

#### Auto Refresh (in sec.)
If enabled, the data will be refreshed automatically.

#### Show Details Panel
If checked, the details panel is shown.

#### Max. Column Width
If checked, the columns will use all available horizontal space.

##### Show Horizontal Lines
If checked, horizontal lines are shown in the grid.

#### Show Vertical Lines
If checked, vertical lines are shown in the grid.

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsServices/SVG_ViewFilter_32.svg#img_header) Filter
The **Filter** page allows you to configure basic filtering or an advanced WMI query filter.

You can specify your own WQL-Where-Clause. The toolbar features helpers and a link to the WQL query documentation as well as a test button to verify if the query can be executed successfully.

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
