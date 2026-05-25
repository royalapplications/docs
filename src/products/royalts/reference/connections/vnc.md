---
uid: royalts_reference_connections_vnc
name: VNC (RoyalVNC)
order: 9990
---

# VNC (RoyalVNC)

The **Royal VNC** connection can be used to connect to remote computers using VNC or Apple Remote Desktop. RealVNC and UltraVNC authentication methods are supported by this plugin; the separate UltraVNC plugin is no longer available in Royal TS V26.

## Dashboard

The dashboard included in this plugin allows you to:

- Start the VNC connection.
- Edit Properties (opens the properties dialog of the selected connection).

## Plugin Settings

To configure the Royal VNC plugin settings, open the [Plugins Management](xref:royalts_intro_plugins) and click **Settings** for the Royal VNC plugin.

#### Enable Debug Logging

If checked, Royal TS enables verbose debug logging for Royal VNC connections. This can drastically reduce performance and should only be enabled for troubleshooting.

## Connection Properties

The Royal VNC Properties dialog is shown:

- for a new VNC connection by clicking the **VNC** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when Royal VNC is set as the default plugin.
- for a new VNC connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the Royal VNC entry from the list of available objects.
- for an existing VNC connection by selecting a VNC connection which is configured to use the Royal VNC plugin and clicking **Properties** in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple VNC connections which are configured to use the Royal VNC plugin were selected in the **Folder / Document Dashboard** and the **Properties** command in the **Edit** group on the Home ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## VNC Properties

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port

Specify the TCP port of the remote VNC server. The default VNC port is 5900.

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## Advanced

The **Advanced** page allows you to configure scaling, clipboard transfer, session sharing, and execution options for the Royal VNC connection.

#### Scaling

Configure how the remote session view should be scaled.

- **Stretch** scales the remote view while maintaining the aspect ratio.
- A custom zoom factor can be selected for fixed scaling.

#### Scaling Mode

Select whether scaling should prioritize speed or quality.

- **Fast**
- **High Quality**

#### Clipboard Transfer

If checked, clipboard content is transferred between the local and remote host.

#### Shared Session

Share the server with other viewers, i.e. allow several viewers to connect simultaneously to the server.

#### In-Process Execution

If enabled, the VNC connection is executed in the Royal TS process.

## Input

The **Input** page allows you to configure how the VNC connection handles mouse and keyboard input.

#### Interaction Mode

Configure how input is handled.

- **Mouse and Keyboard**
- **View only**

#### Enable Windows Key

Redirects the Windows key to the remote session. This enables shortcuts like ALT+TAB in the remote session.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
