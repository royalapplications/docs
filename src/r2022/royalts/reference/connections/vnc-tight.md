---
uid: royalts_reference_connections_vnc-tight
name: VNC (Tight)
order: 9980
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/VncTight/SVG_PluginIcon_32.svg#img_header) VNC (Tight)
The **VNC** connection, based on TightVNC, can be used to connect to remote computers using [TightVNC](http://www.tightvnc.com/). Connections based on this plugin require the TightVNC client application to be installed.

## Dashboard
The dashboard included in this plugin allows you to:
- Edit Properties (opens the properties dialog of the selected connection).
- Start Unattached (to start the VNC viewer application without tracking the process).
- Open the Plugin Settings
- Open the TightVNC homepage

## Dashboard Settings
This plugin does not offer any dashboard settings.

## Plugin Settings
To configure the VNC (UltraVNC) plugin settings, open the Plugins Management and click on **Settings** for the VNC (based on TightVNC) plugin:

#### Viewer Path
Browse or let Royal TS search for the TightVNC viewer application (tvnviewer.exe).

## Connection Properties
The VNC (TightVNC Integrated) Properties dialog is shown:

- for a new VNC connection by clicking the **VNC** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the TightVNC based plugin is set as the default plugin.
- for a new VNC connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the VNC (based on TightVNC) entry from the list of available objects.
- for an existing VNC connection by selecting a VNC connection which is configured to use the TightVNC based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple VNC connections which are configured to use the TightVNC based plugin were selected in the **Folder / Document Dashboard** and the **Properties** command in the **Edit** group on the Home ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2022/images/RoyalTS/Plugins/Connections/VncTight/SVG_PluginIconConnection_32.svg#img_header) VNC Properties
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

## ![](/r2022/images/RoyalTS/Plugins/Connections/VncTight/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced VNC settings.

#### Encoding
Specify which encoding should be used for the VNC connection.

#### Scale by
Scales the remote display (in percent).

#### Compression
If checked, a custom compression value can be set.

> [!Note]
> Custom Compression is not available for all encodings.

#### JPEG Quality
If checked, the JPEG quality level can be set.

#### CopyRect Encoding
The CopyRect encoding is efficient when something is being moved. CopyRect could also be used to efficiently transmit a repeated pattern.

#### Limit to 256 Colors
Check this option to force 256 color display. This should be used for slow connections with limited bandwidth.

#### Disable Clipboard Redirection
If checked, clipboard content is not transferred.

#### Shared Session
Share the server with other viewers, i.e. allow several viewers to connect simultaneously to the server.

#### Deiconify on Remote Bell
The VNC viewer window is restored if minimized when a remote bell event is raised.

> [!Note]
> Deiconify on remote bell only works for VNC viewers in external window mode.

## ![](/r2022/images/RoyalTS/Plugins/Connections/VncTight/SVG_PageInput_32.svg#img_header) Input
The **Input** page allows you to configure the mouse behavior.

#### View Only
The remote session is a view only session and doesn't accept any mouse or keyboard input.

#### Swap Mouse Buttons
If checked, mouse button 2 and 3 are swapped in the remote session.

#### Mouse Cursor
Configure how the mouse cursor is handled for the VNC connection.

#### Local Cursor Shape
Configure shape of the local cursor.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
