---
uid: royalts_reference_connections_windows-events
name: Windows Events View
order: 9870
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsEvents/SVG_PluginIcon_32.svg#img_header) Windows Events View
The **Windows Events View** can be used to display Windows Events from one or more computers using custom query filters.

## Dashboard
The **Windows Events View** is shown in the **Dashboard** panel when you select a Windows Events View in the **Navigation** panel.

![WindowsEvents_Dashboard](/r2022/images/RoyalTS/Plugins/Connections/WindowsEvents/windowsevents_dashboard.png)

## Dashboard Features
- List of windows events from one or more computers.
- Grid search and customization, including sort, filter and group.
- Details panel to show more details about the selected event.

> [!Important]
> The Windows Events View relies on WMI. Ensure that all the necessary firewall ports for WMI are open and that the credentials set in the connection properties have the permission to view the events.

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Windows Events plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The Windows Events View plugin does not offer any plugin settings at this time.

## Connection Properties
The Windows Events View Properties dialog is shown:
- for a new Windows Event Views by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Windows Events View** entry from the list of available objects.
- for an existing Windows Events View by selecting a Windows Events View and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Windows Events Views were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsEvents/SVG_PluginIcon_32.svg#img_header) Windows Events Properties
The **Windows Events** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsEvents/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure grid and auto refresh settings.

#### Auto Refresh (in sec.)
If enabled, the data will be refreshed automatically.

#### Limit Number of Records
If checked, the number of records can be limited. The limit is on a per computer basis. If the view is configured to show records from 3 computers and you limit the number of records to 100, the grid will display 300 records.

#### Show Details Panel
If checked, the details panel is shown.

#### Max. Column Width
If checked, the columns will use all available horizontal space.

#### Show Horizontal Lines
If checked, horizontal lines are shown in the grid.

#### Show Vertical Lines
If checked, vertical lines are shown in the grid.

## ![](/r2022/images/RoyalTS/Plugins/Connections/WindowsEvents/SVG_ViewFilter_32.svg#img_header) Filter
The **Filter** page allows you to configure basic filtering or an advanced WMI query filter.

### Basic
#### Event Log
Select the Event Log to retrieve the events from. You may enter a custom Event Log name as well.

#### Event Level
Whether or not to filter for a specific event level.

#### Event ID
You can include all IDs, a specific ID or a range of IDs.

#### Time Range
Query events for a specific time frame or relative time range.

> [!Tip]
> When you do not specify a time range in the basic filter page, make sure you limit the number of records using other query elements or using the advanced filter. Otherwise, the number of records may be very high resulting in slow performance or high memory usage.

#### Advanced
On the advanced tab, you can specify your own WQL-Where-Clause. The toolbar features helpers and a link to the WQL query documentation as well as a test button to verify if the query can be executed successfully.

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
