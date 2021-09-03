---
uid: royalts_reference_connections_terminal-rebex
name: Terminal (Rebex)
order: 9960
---

# ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PluginIcon_32.svg#img_header) Terminal (Rebex)
The **Terminal** connection based on Rebex can be used to connect to remote computers using Telnet or Secure Shell (SSH). It can also be used to connect to devices using the Serial Port.

## Dashboard
The **Terminal Dashboard** is shown in the **Dashboard** panel when you select a Terminal connection based on the Rebex plugin in the **Navigation** panel. The dashboard will show files with the extension .ans (ANSI recordings) and files with the extension .log. Logging and recording configuration can be found in [Logging](#logging).

![Rebex_Dashboard](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/rebex_dashboard.png)

## Dashboard Features
- Click the **Open in Explorer** button to open the folder containing the selected file in Windows Explorer.
- Copy path to clipboard context menu.
- Grid search and customization, including sort, filter and group.
- **Delete File** allows you to directly delete a recording or log file from the **Dashboard**.
- **Play/Pause, Decrease Speed and Increase Speed** buttons are used to control recording playback. Only available for **ANSI recordings** (.ans files).
- The **Export** drop down menu allows you to export a recording to a different file format.
- The **Options** drop down menu allows you to change the ANSI viewer settings: Console Size and Use Smaller Font.
- Click **Refresh** to refresh the file list.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Terminal plugin based on Rebex.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
To configure the plugin settings, open the Plugins Management and click on **Settings** for the Terminal plugin based on Rebex:

#### Keep Alive
Configure the interval Royal TS sends a keep alive packet to the remote session (in ms).

#### Mouse wheel speed
Configure the mouse wheel speed when scrolling back the screen buffer using the mouse wheel

#### Player size reduction
Configure the font size reduction for the recordings player in the dashboard.

#### Trigger Delay
The delay in ms to wait until triggers (such as text highlighting) are invoked.

#### Don't show warning when pasting new lines
If not checked, a warning is shown when you paste text containing new line characters.

## Connection Properties
The Terminal (Rebex) Properties dialog is shown:
- for a new Terminal connection by clicking the **Terminal** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the Rebex based plugin is set as the default plugin.
- for a new Terminal connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Terminal (based on Rebex.net)** entry from the list of available objects.
- for an existing Terminal connection by selecting a Terminal connection which is configured to use the Rebex based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Terminal connections which are configured to use the Rebex based plugin were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PluginIconConnection_32.svg#img_header) Terminal Properties
The **Terminal Connection** page allows you to configure basic connection settings, such as host name and the connection type (Telnet, SSH or Serial Port).
[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Connection Type
Select one of the supported connection types: SSH Connection, Telnet Connection or Serial Port.

[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port
Specify the TCP port for the connection.

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure font settings as well as tab appearance settings based on the connection status.

### Text
#### Font
Select the font used for the terminal control.

#### Font Size
Select the font size used for the terminal control.

#### Disable Bold and Italic Styles
If checked, bold and italic styles are rendered as regular style.

#### Font is Bold
If checked, the terminal will print all characters bold.

#### Blinking Text
The Rebex based terminal connection does not support blinking text display. Specify how blinking text sequences should be displayed in the terminal control.

#### Font Rendering
- **Default (Rebex)**  
  This is the default rendering mode. Depending on the font, character spacing might be bigger than expected.
- **Compact (PuTTY)**  
  This rendering mode reduces the cell size and mimics the rendering to be more like PuTTY. This rendering mode is more compact and may not work well with all fonts.
 

### Advanced
#### SGR Mode
SGR Mode is how the terminal control appearance of the "Select Graphics Rendition" sequence (\e[1m).

#### Auto-Adjust Terminal Size
Enables or displays automatic terminal size adjustment based on the font size.

#### Show Pre-Authentication Banner
If checked, Royal TS will show a pre-authentication banner.

#### Show Window Title
If checked, Window Title ANSI sequences are processed and shown in the tab caption or window title.

#### Scrollback Reset on Display Activity
If checked, scrollback is reset on display activity (when data is received).

#### Data Received Indicator
If checked, Royal TS will show a * character at the end of the tab caption to indicate that data was received.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageColors_32.svg#img_header) Colors
The **Colors** page allows you to modify the terminal palette and colors for different text styles.

#### Color Scheme
- **ANSI Palette**  
  The ANSI Palette color scheme (default) allows you to adjust the ANSI palette (Normal Colors and Bright Colors). In this mode, you can also configure custom **Text Highlighting** using regular expressions.
- **Monochrome**  
  Selecting Monochrome will not display any color in the terminal.
- **Custom Palette and Text Colors**  
  The colors returned by the server are ignored but you can specify your own colors for different text styles.

#### Normal and Bright Colors
Adjust the ANSI color palette for individual colors.

#### Cursor Colors
Configure the background color of the cursor and the corsor appearance. You can also enable or disable cursor blinking and configure the blinking interval of the cursor.

#### Text Highlighting
Configure regular expression based highlighting rules.

> [!Note]
> Text highlighting is only available in **ANSI Palette** color scheme.

[!include[terminalpalette.md](~/royalts/_shared/terminalpalette.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced Terminal settings.

#### Encoding
Select one of the supported encoding settings.

#### Terminal Type
Select one of the following terminal types: Ansi (Default), Wyse 60 compatible, Pick compatible.

#### Auto Wrap
Switch auto wrap on, off or to behave like in DOS.

#### Backspace Wrap
Switch backspace wrap on, off or to behave like in DOS.

#### SSH Remote Command
In SSH, you don't have to run a general shell session on the server. Instead, you can choose to run a single specific command (such as a mail user agent, for example). [Replacement tokens](xref:royalts_advanced_tokens) are supported.

#### Local Echo
Enable or disable local echo.

#### Disable Bell
If checked, the bell action (beep) is disabled.

#### Force Non-Destructive Backspace
If checked, Royal TS will treat incoming destructive backspace characters (7F) as non-destructive backspace characters (08)

#### Ignore Substitute Character
If checked, Royal TS will ignore substitute characters (1A), otherwise Royal TS will replace each substitute character with a question mark.

#### Implicit CR in LF
If checked, Royal TS implies a carriage return in every received linefeed.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageSecurity_32.svg#img_header) Security
The **Security** page allows you to adjust security settings and allowed algorithms.

### General
#### Authentication Method
Select the authentication method to use.

> [!Note]
> You may need to switch to `Keyboard Interactive` authentication when your servers requires multi-factor authentication (MFA).

#### Fingerprint
Contains the stored fingerprint of the remote SSH host. Click on the button with the check mark to verify the fingerprint.

#### Fingerprint Mismatch Warning
If checked, Royal TS will display a warning if the fingerprint doesn't match.

[!include[rebexciphers.md](~/royalts/_shared/rebexciphers.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageInput_32.svg#img_header) Input
The **Input** page allows you to configure keyboard behavior in the remote session.

### Keyboard
#### Terminal Name
Default is xterm. Allows you to set a custom terminal name.

#### Function Keys
Specify how to encode function keys such as F1-F20, INS, Del, Home, etc.

#### Home and End Key
Specify the behavior of the Home and End key.

> [!Note]
> In Standard mode the, the behavior is determined by the selected Function Keys mode.
 
#### Backspace Sequence
Specify the backspace key sequence 0x08 (^H) or 0x7F (^?).

#### New Line Sequence
Specify the new line sequence CR or CRLF for outgoing data.

#### Cursor Key Mode
Specify the initial cursor key mode Normal or Application.

#### Ignore Remote Cursor Key Mode
If checked, Royal TS will ignore cursor key mode changes requested by the remote server.

#### Keyboard Scrolling
If checked, the following keyboard shortcuts are supported for scrolling:
- SHIFT + PAGE UP
- SHIFT + PAGE DOWN

### Other
#### Mouse Paste Enabled
Specify the initial mouse paste mode. You can easily switch on or off mouse paste from the Actions tab while connected.

#### Selection Mode
Specify the initial selection mode. You can easily switch on or off mouse paste from the Actions tab while connected.

#### Scrollback Lines
Specify the number of lines kept in the scrollback buffer. The maximum value is 99999.

#### Character Substitution
If checked, characters like smart quotes, ticks and long dashes are replaced with regular quotes, ticks and dashes.

#### Direct Send to Server for Key Sequences
If checked, key sequence tasks are sent to the server directly instead of simulating keyboard input.

#### Character Paste Delay
If checked, character paste delay will be enabled. You can quickly enable or disable character paste delay using the ribbon's actions tab while connected.

#### Character Paste Delay in ms
The time span in ms between each character when pasted from the clipboard.

#### Line Paste Delay
If checked, line paste delay will be enabled. You can quickly enable or disable line paste delay using the ribbon's actions tab while connected.

#### Line Paste Delay in ms
The time span in ms between each line when pasted from the clipboard.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageSerial_32.svg#img_header) Serial Port
The **Serial Port** page allows you to configure the port settings to connect to devices using RS232.

#### Port Name
Set the port for communications.

> [!Important]
> The Port Name must begin with COM.

#### Handshake
Set the handshaking protocol for serial port transmission of data.

#### Baud Rate
Set the speed of the serial port communication.

#### New Line
Set the value that represents the end of the line. Default is \n.

#### Data Bits
Set the standard length of data bits per byte.

#### Parity
Set the parity checking protocol.

#### Stop Bits
Set the standard number of stop bits per byte.

#### Read Timeout
Set the number of milliseconds before a time-out occurs when a read operation does not finish.

#### Write Timeout
Set the number of milliseconds before a time-out occurs when a write operation does not finish.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageProxy_32.svg#img_header) Proxy Settings
The **Proxy Settings** page allows you to configure a proxy server used to connect to the remote server.

#### Proxy Mode
- No proxy (direct connect): (No proxy server will be used to connect to the remote server)
- Socks 4
- Socks 4a
- Socks 5
- HTTP Connect

#### Proxy Server
Specify the proxy server name (FQDN) or IP address to use.

#### Port
Specify the proxy server port to use.

### Credential Mode
[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalRebex/SVG_PageLogging_32.svg#img_header) Logging
The **Logging** page allows you to configure ANSI session recordings and logging. Recordings as well as log files can be viewed using the Dashboard.

#### Path
Specify a path where the recordings should be stored. Click on the browse button (...) to browse for a folder.

#### Open in Explorer
Click on the button to open the configured folder.

#### Create Sub-Directory with Connection Name
If checked, Royal TS will create a sub directory for using the connection name in the configured path.

#### Always Prompt for Output Path
If checked, Royal TS will always prompt for path and file name when you click on Record Session on the Actions tab.

#### Auto-Start Recording when Connected
If checked, Royal TS will automatically start the recording as soon as the session is connected.

#### Logging
Enable or disable logging.

#### Logging Level
Use the drop down list to select how much information to log.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
