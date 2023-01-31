---
uid: royalts_reference_connections_hyper-v
name: Hyper-V
order: 9830
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/HyperV/SVG_PluginIcon_32.svg#img_header) Hyper-V
The **Hyper-V** connection can be used to display Hyper-V guest instances from one or more computers and provide basic management tasks as well as the ability to connect to the Hyper-V guest instance console.

## Dashboard
The **Hyper-V Dashboard** is shown in the **Dashboard** panel when you select a Hyper-V connection in the **Navigation** panel.

![HyperV_Dashboard](/r2022/images/RoyalTS/Plugins/Connections/HyperV/hyperv_dashboard.png)

## Dashboard Features
- List of all hosted Hyper-V guests (or instances) and their state.
- Grid search and customization, including sort, filter and group.
- Start, Pause, Save State and Shut Down Hyper-V guests directly from the Dashboard.
- Add a new Remote Desktop connection based on the original settings combined with the guest properties.  
  Royal TS assumes the guest name as the host name for the new connection.
- Add a new Hyper-V Instance connection based on the selected guest.  
  Royal TS creates a new Remote Desktop connection configured to connect directly to the Hyper-V guest.
- Connect (Ad Hoc) allows you to connect directly to the selected Hyper-V guest.

> [!Important]
> The Hyper-V connection relies on WMI. Ensure that all the necessary firewall ports for WMI are open and that the user account running Royal TS (beware of UAC) or the credentials set in the Remote Desktop connection have local administrative rights on the remote Hyper-V host computer.

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Hyper-V plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The Hyper-V plugin does not offer any plugin settings at this time.

## Connection Properties
The Hyper-V Properties dialog is shown:
- for a new Hyper-V connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the Hyper-V entry from the list of available objects.
- for an existing Hyper-V connection by selecting a Hyper-V connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Hyper-V connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2022/images/RoyalTS/Plugins/Connections/HyperV/SVG_PluginIcon_32.svg#img_header) Hyper-V Properties
The **Hyper-V** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Use CIM
Use CIM instead of WMI for accessing the computer.

#### Enhanced Session Mode
Local resources, like audio, printers, clipboard, drives, USB devices, etc. can be redirected.
> [!Important]
> If your Hyper-V host or guest system doesn't support this feature, Royal TS may fail to establish a session.

[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/HyperV/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure grid and auto refresh settings.

#### Auto Refresh (in sec.)
If enabled, the data will be refreshed automatically.

#### Show Details Panel
If checked, the details panel is shown.

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
