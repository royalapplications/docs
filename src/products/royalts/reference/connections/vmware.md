---
uid: royalts_reference_connections_vmware
name: VMware
order: 9820
---

# ![](/r2023/images/RoyalTS/Plugins/Connections/VMware/SVG_PluginIcon_32.svg#img_header) VMware

The **VMware** connection can be used to display VMware guest instances from one or more computers and provide basic management tasks as well as the ability to connect to the guest instance console.

## Dashboard

The **VMware Dashboard** is shown in the **Dashboard** panel when you select a VMware connection in the **Navigation** panel.

![VMware_Dashboard](/r2023/images/RoyalTS/Plugins/Connections/VMware/vmware_dashboard.png)

## Dashboard Features

- List of all hosted VMware guests (or instances) and their state.
- Grid search and customization, including sort, filter and group.
- Power On, Power Off, Suspend and Reset VMware guests directly from the Dashboard.
- Connect (Ad Hoc) allows you to connect directly to the selected VMware guest using VNC or the console.

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings

To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the VMware plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings

The VMware plugin does not offer any plugin settings at this time.

## Connection Properties

The VMware Properties dialog is shown:

- for a new VMware connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **VMware** entry from the list of available objects.
- for an existing VMware connection by selecting a VMware connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple VMware connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2023/images/RoyalTS/Plugins/Connections/VMware/SVG_PluginIcon_32.svg#img_header) VMware Properties

The **VMware** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Service Port

Configure the port to access vCenter or ESXi. Default port is 443.

#### Use HTTPS

Whether or not to use https to communicate with the VMware host.

#### Ignore Certificate Errors

If enabled, connection will succeed even when the certificate is invalid (expired or self-signed).

[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/VMware/SVG_PageDisplayOptions_32.svg#img_header) Display Options

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
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/VMware/SVG_PageDisplayOptions_32.svg#img_header) Advanced

The **Advanced** page allows you to configure VMware connection settings such as port configuration or instance filtering.

### SSH Port

The SSH port is used for ad hoc Terminal connections to the VMware host.  
The default port is 22.

### Automatically connect to Virtual Machine Console

If checked, a VMRC connection to the specified Virtual Machine ID is established immediately.

### Virtual Machine ID

Specify a Virtual Machine ID (Management Object Reference) to directly start a vmware Remote Console session using the Connect command.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
