---
uid: royalts_reference_connections_vnc
name: VNC (Integrated)
order: 9990
---

# ![](/r2023/images/RoyalTS/Plugins/Connections/VncTightIntegrated/SVG_PluginIcon_32.svg#img_header) VNC (Integrated)

The **VNC** connection, based on TightVNC, can be used to connect to remote computers using [TightVNC](http://www.tightvnc.com/). This plugin does not require you to install any viewer application.

## Dashboard

The dashboard included in this plugin allows you to:

- Start the VNC connection.
- Edit Properties (opens the properties dialog of the selected connection).
- Open the TightVNC homepage

## Dashboard Settings

This plugin does not offer any dashboard settings.

## Plugin Settings

This plugin does not offer any plugin settings.

## Connection Properties

The VNC (TightVNC Integrated) Properties dialog is shown:

- for a new VNC connection by clicking the **VNC** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the TightVNC Integrated based plugin is set as the default plugin.
- for a new VNC connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the VNC (based on integrated TightVNC) entry from the list of available objects.
- for an existing VNC connection by selecting a VNC connection which is configured to use the TightVNC based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple VNC connections which are configured to use the TightVNC based plugin were selected in the **Folder / Document Dashboard** and the **Properties** command in the **Edit** group on the Home ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2023/images/RoyalTS/Plugins/Connections/VncTightIntegrated/SVG_PluginIconConnection_32.svg#img_header) VNC Properties

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port

Specify the TCP port for the VNC connection. The default VNC port is 5900.

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/VncTightIntegrated/SVG_PageAdvanced_32.svg#img_header) Advanced

The **Advanced** page allows you to configure advanced VNC settings.

#### Encoding

Specify which encoding should be used for the VNC connection.

#### Scaling

How the remote session view should be scaled.

- Stretch (keep aspect ratio)
- Zoom factor

#### Compression

If checked, a custom compression value can be set.

#### JPEG Quality

If checked, the JPEG quality level can be set.

#### CopyRect Encoding

The CopyRect encoding is efficient when something is being moved. CopyRect could also be used to efficiently transmit a repeated pattern.

#### Shared Session

Share the server with other viewers, i.e. allow several viewers to connect simultaneously to the server.

#### Clipboard Transfer

If checked, clipboard content is transferred.

#### Tight Security

If checked (default), Tight security is enabled. Disabling this option will also disable UTF8 clipboard transfers.

> [!Note]
> Some settings like Custom Compression or JPEG Quality are not available for all encodings.

## ![](/r2023/images/RoyalTS/Plugins/Connections/VncTightIntegrated/SVG_PageInput_32.svg#img_header) Input

The **Input** page allows you to configure the mouse behavior.

#### Interaction Mode

Configure how input is handled.

- Mouse and Keyboard
- Mouse only
- View only

#### Tracking

Configure how mouse movement is tracked.

- Track Mouse
- Track only Mouseclicks

#### Local Cursor

Configure the behavior of the local cursor.

- Hide
- Show

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
