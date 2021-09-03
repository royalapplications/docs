---
uid: royalts_reference_connections_terminal-putty
name: Terminal (PuTTY)
order: 9950
---

# ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PluginIcon_32.svg#img_header) Terminal (PuTTY)
The **Terminal** connection based on PuTTY can be used to connect to remote computers using Telnet, Secure Shell (SSH) (incl. Tunneling support), RAW or rlogin. It can also be used to connect to devices using the Serial Port.

## Dashboard
The **Terminal Dashboard** is shown in the **Dashboard** panel when you select a Terminal connection based on the PuTTY plugin in the **Navigation** panel. The dashboard will show files with the extension .log. Logging and recording configuration can be found in [Logging](#-logging).

![PuTTY_Dashboard](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/putty_dashboard.png)

## Dashboard Features
- Click the **Open in Explorer** button to open the folder containing the selected file in Windows Explorer.
- Copy path to clipboard context menu.
- Grid search and customization, including sort, filter and group.
- **Delete File** allows you to directly delete a log file from the **Dashboard**.
- The **Export** drop down menu allows you to export a recording to a different file format.
- Click **Refresh** to refresh the file list.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Terminal plugin based on PuTTY.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
To configure the plugin settings, open the Plugins Management and click on **Settings** for the Terminal plugin based on PuTTY:

#### Executable
Specify your own PuTTY executable. If no executable is specified or if the configured executable cannot be found, the PuTTY.exe included in Royal TS will be used.

#### Registry Base Path
Enter the registry base path without the hive.  

For KiTTY use: ```Software\9bis.com\KiTTY```  
Leave empty for the default PuTTY base path: ```Software\SimonTatham\PuTTY```

#### Window Title Match
Enter the window title Royal TS should look for to identify the session window.  
For KiTTY use: ```- KiTTY```  
Leave empty for the default PuTTY window title match: ```- PuTTY```

## Connection Properties
The Terminal (PuTTY) Properties dialog is shown:
- for a new Terminal connection by clicking the **Terminal** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the PuTTY based plugin is set as the default plugin.
- for a new Terminal connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Terminal (based on PuTTY)** entry from the list of available objects.
- for an existing Terminal connection by selecting a Terminal connection which is configured to use the PuTTY based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Terminal connections which are configured to use the PuTTY based plugin were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PluginIconConnection_32.svg#img_header) Terminal Properties
The The Terminal Connection page allows you to configure basic connection settings, such as host name and the connection type (Telnet, SSH or Serial Port). page allows you to configure basic connection settings, such as host name and the connection type (Telnet, SSH, RAW, rlogin or Serial Port). You can also configure the connection to use an existing PuTTY connection or import an existing PuTTY connection.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Connection Type
Select one of the supported connection types: **Existing PuTTY Session, SSH Connection, Telnet Connection, Serial Port Connection, Raw or Rlogin**.

> [!Note]
> Depending on the selected connection type, availability of some property pages may change.

#### PuTTY Session (only available when Existing PuTTY Session is selected)
The drop down list will show all available PuTTY sessions.

> [!Important]
> If you specify an existing PuTTY session, it will only use the Computer Name, Port and configured credentials of your connection. All other settings will actually be used from the saved PuTTY session.

[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port
Specify the TCP port for the connection.

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure font settings and appearance settings.

### Font
#### Font
Select the font used for the terminal control.

#### Font Size
Select the font size used for the terminal control.

#### Font is Bold
If checked, the terminal will print all characters bold.

#### Font Quality
Specify the font quality (anti-aliasing mode).

#### Cursor Appearance
Configure the appearance of the cursor.

#### Hide Mouse Pointer when Typing
If checked, the mouse pointer is hidden while you type.

#### Blink Cursor
Enable or disable cursor blinking.

#### Enable Blinking Text
Enable or disable blinking text.

### Display
#### Terminal Columns
Enter the number of columns for the terminal. This setting will only be applied on specific window resize actions.

#### Terminal Rows
Enter the number of rows for the terminal. This setting will only be applied on specific window resize actions.

#### Window Resize Action
Configure how PuTTY should behave when the window is resized.

#### Display Scrollbar
Shows or hides the scrollbar in the terminal.

#### Sunken-Edge Border
Show or hide a sunken-edge border.

#### Gap between Text and Window Edge
Configure the gap between text and border.

### External Window
#### Window Title
By default the window title will contain the host name followed by ‘PuTTY’, for example server1.example.com - PuTTY. If you want a different window title, this is where to set it. The title string set here is therefore only the initial window title. [Replacement tokens](xref:royalts_advanced_tokens) are supported.

#### Separate Window and Icon Titles
If you want to see window and icon titles, enable this option.

#### Warn before closing Window
When checked, a warning is shown before the window is closed.

#### Close Window on Alt-F4
Control whether Alt-F4 will close the window or not.

#### Show System Menu on Alt-Space
If checked, Alt-Space will bring up the system menu.

#### Ensure Window is Always on Top
If checked, the PuTTY window will be always on top.

#### Full Screen on Alt-Enter
If checked, Alt-Enter will change the PuTTY window into Full Screen mode.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageColors_32.svg#img_header) Colors
The **Colors** page allows you to modify the terminal palette and colors for different text styles.

### Color Usage
#### Use Background Color to Erase Screen
Not all terminals agree on what color to turn the screen when the server sends a ‘clear screen’ sequence. Background-color erase can be turned on and off by control sequences sent by the server. This configuration option controls the default state.

#### Allow Terminal to Specify ANSI Colors
If it is disabled, PuTTY will ignore any control sequences sent by the server to request colored text.

#### Allow Terminal to Use xterm 256-Color Mode
If disabled, PuTTY will ignore any control sequences sent by the server which use the extended 256-color mode supported by recent versions of xterm.

#### Bold Text is a Different Color
If disabled, bold and non-bold text will be displayed in the same color, and instead the font will change to indicate the difference.

#### Attempt to Use Logical Palette
If you are not getting the colors you ask for on an 8-bit display, you can try enabling this option.

#### Use System Colors
Enabling this option will cause PuTTY to ignore the configured colors for ‘Default Background/Foreground’ and ‘Cursor Color/Text’, instead going with the system-wide defaults.

#### Normal and Bright Colors
Adjust the ANSI color palette for individual colors.

[!include[terminalpalette.md](~/royalts/_shared/terminalpalette.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced Terminal settings.

### General
#### Encoding
Select one of the supported encoding settings.

#### ^E Response
Configure how PuTTY should answer back to the ^E sequence.

#### Local Echo
Specify the local echo discipline.

#### Local Line Editing
Specify the line editing discipline.

#### Auto Wrap
Specify whether or not to turn on auto wrap mode for the connection.

#### DEC Origin Mode
Specify whether or not to turn on DEC origin mode for the connection.

#### Implicit CR in LF
If checked, the PuTTY connection implies a carriage return in every received linefeed.

#### Implicit LF in CR
If checked, the PuTTY connection implies a linefeed in every received carriage return.

#### Force Non-Destructive Backspace
If checked, PuTTY will treat incoming destructive backspace characters (7F) as non-destructive backspace characters (08).

#### Terminal Speeds
Set the speeds for the data connection.

#### Printer
Select a printer to select ANSI printer output for remote-controlled printing.

### Bell
#### Bell Action
Action to happen when a bell occurs.

#### Sound File
Specify a custom sound file (.wav file) to play as a bell.

#### Taskbar Indicator
Taskbar caption indicator on bell.

#### Bell Overload (Temporary)
Temporarily disable bell when over-used.

#### Number of Bells
Specify the number of bells threshold used to determine bell over-use.

#### Bell Overload Timespan
Specify the number of seconds for the over-use threshold.

#### Seconds of Silence
Specify the number of seconds silence is needed to re-enable the bell after it was temporarily disabled.

### Features
#### Remote Window Title Query
PuTTY can optionally provide the xterm service of allowing server applications to find out the local window title. This feature is disabled by default, but you can turn it on if you really want it.

#### Disable Remote-Controlled Terminal Resizing
If checked, PuTTY will not respond to server commands which may cause terminal resizing.

#### Disable Remote-Controlled Window Title Change
If checked, PuTTY will ignore server commands which would update the window title.

#### Disable Remote-Controlled Character Set Configuration
PuTTY has the ability to change its character set configuration in response to commands from the server. If checked, PuTTY will ignore those server commands.

#### Disable Switching to Alternate Terminal Screen
Many terminals, including PuTTY, support an ‘alternate screen’. If checked, the alternate screen is disabled.

#### Disable Arabic Text Shaping
If checked, Arabic text shaping is disabled.

#### Disable Bidirectional Text Display
If checked, bidirectional text display is disabled.

### Connection
#### Logical Name for Remote Host
Enter the logical name for the remote host for SSH key lookup or similar.

#### Internet Protocol Version
Choose which IP version PuTTY should use.

#### Keep Alive Interval (sec.)
Interval between sending of null packets to keep the session active. Set to 0 to turn keepalive off.

#### Disable Nagle's Algorithm (TCP_NODELAY Option)
The Nagle algorithm is disabled by default for interactive connections.

#### Enable TCP Keepalives (SO_KEEPALIVE Option)
TCP keepalives may be more useful for ensuring that half-open connections are terminated than for keeping a connection alive. TCP keepalives are disabled by default.

### Translation
#### Line drawing handling
Configure how PuTTY should handle line drawing.

#### Treal CJIK Ambiguous Characters as Wide
If checked, PUTTY will treat CJIK ambiguous characters as wide.

#### Caps Lock acts as Cyrillic Switch
If checked, PuTTY will treat the Caps Lock key to switch to and back from Cyrillic.

#### Copy and Paste Line Drawing Characters as lqqqk
If checked, PuTTY will use lqqqk characters in clipboard operations.

#### VT100 Line Drawing even in UTF-8 Mode
If checked, VT100 line drawing is enabled even in UTF-8 mode.

### Environment
The Environment tab can be used to set specific variables and values for the connection.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageSSHSettings_32.svg#img_header) SSH Settings
The **SSH Settings** page allows you to configure settings specific for SSH connections.

### General
#### Fingerprint
Specify an MD5-based host key fingerprint of the form displayed in PuTTY's Event Log and host key dialog box or a base64-encoded blob describing an SSH-2 public key in OpenSSH's one-line public key format. Pre-populating the fingerprint can be helpful when connecting through SSH tunnels, proxy servers or secure gateways.

#### SSH Remote Command
In SSH, you don't have to run a general shell session on the server. Instead, you can choose to run a single specific command (such as a mail user agent, for example). [Replacement tokens](xref:royalts_advanced_tokens) are supported.

#### Preferred Protocol Version
PuTTY will attempt to use protocol 1 if the server you connect to does not offer protocol 2, and vice versa.  
If you select ‘1 only’ or ‘2 only’ here, PuTTY will only connect if the server you connect to offers the SSH protocol version you have specified.

#### Don't Start a Shell or Command
If checked, a session is started but without a pseudo-terminal.

#### Enable Compression
This enables data compression in the SSH connection. This can help make the most of a low-bandwidth connection.

### Encryption
#### Encryption Cipher Policy
When you make an SSH connection, PuTTY will search down the list from the top until it finds an algorithm supported by the server, and then use that. If the algorithm PuTTY finds is below the ‘warn below here’ line, you will see a warning box when you make the connection.

#### Enable Legacy Single-DES (SSH-2)
Single-DES is not recommended in the SSH 2 draft protocol standards, but one or two server implementations do support it.

### Kex
#### Key Exchange Algorithm Policy
PuTTY supports a variety of SSH-2 key exchange methods, and allows you to choose which one you prefer to use. If the first algorithm PuTTY finds is below the ‘warn below here’ line, you will see a warning box when you make the connection.

#### Max Minutes before Rekey
Configure the timespan between rekey attempts. Set to 0 to disable rekey.

#### Max Data before Rekey
Use 1M for 1 megabyte, 1G for 1 gigabyte, etc.

### Auth
#### Bypass Authentication (SSH-2)
In SSH-2, it is possible to establish a connection without using SSH's mechanisms to identify or authenticate oneself to the server.

#### Display Pre-Authentication Banner (SSH-2)
SSH-2 servers can provide a message for clients to display to the prospective user before the user logs in.

#### Attempt Authentication using Pageant
If this option is enabled, then PuTTY will look for Pageant (the SSH private-key storage agent) and attempt to authenticate with any suitable public keys Pageant currently holds.

#### Attempt TIS or CryptoCard Authentication (SSH-1)
TIS and CryptoCard authentication are (despite their names) generic forms of simple challenge/response authentication available in SSH protocol version 1 only.

#### Attempt Keyboard-Interactive Authentication (SSH-2)
The SSH-2 equivalent of TIS authentication is called ‘keyboard-interactive’.

> [!Note]
> You may need to enable this option when your servers requires multi-factor authentication (MFA).

#### Allow Agent Forwarding
This option allows the SSH server to open forwarded connections back to your local copy of Pageant. If you are not running Pageant, this option will do nothing.

#### Allow attempted Changes of Username (SSH-2)
The SSH-2 protocol does allow changes of username, in principle, but does not make it mandatory for SSH-2 servers to accept them. If you know your server can cope with it, you can enable this option.

### GSSAPI
#### Attempt GSSAPI Authentication (SSH-2)
If it is enabled, GSSAPI authentication will be attempted, and (typically) if your client machine has valid Kerberos credentials loaded, then PuTTY should be able to authenticate automatically to servers that support Kerberos logins.

#### Allow GSSAPI Credential Delegation
If you enable this option, then not only will PuTTY be able to log in automatically to a server that accepts your Kerberos credentials, but also you will be able to connect out from that server to other Kerberos-supporting services and use the same credentials just as automatically.

#### GSSAPI Library Order
Configure the preferred order of GSSAPI libraries.

#### User-Supplied GSSAPI Library
Specify a custom GSSAPI library (DLL).

### TTY
#### Don't Allocate a Pseudo Terminal
Occasionally you might find you have a need to run a session not in a pseudo-terminal.

### X11
#### Enable X11 Forwarding
Check to enable X11 forwarding for this connection.

#### X Display Location
The ‘X display location’ box is blank by default, which means that PuTTY will try to use a sensible default such as :0, which is the usual display location where your X server will be installed.

#### X11 Authentication Protocol
Configure the X11 authentication protocol.

#### X Authority File for Local Display
Specify a X authentication file for the local display.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageInput_32.svg#img_header) Input
The **Input** page allows you to configure keyboard behavior in the remote session.

### Keyboard
#### Terminal Name
Default is xterm. Allows you to set a custom terminal name.

#### Function Key Mode
Specify how to encode function keys such as F1-F20, INS, Del, Home, etc.

#### Backspace Sequence
Specify the backspace key sequence 0x08 (^H) or 0x7F (^?).

#### Home and End Key
Specify the behavior of the Home and End keys.

#### Cursor Key Mode
Specify the initial cursor key mode Normal or Application.

#### Ignore Remote Cursor Key Mode
If checked, PuTTY will ignore cursor key mode changes requested by the remote server.

#### Numeric Keypad
Specify the numeric keyboard mode.

#### Disable Application Keypad Mode
If checked, PuTTY will ignore keypad mode changes from the application on the server.

#### Use AltGr as Compose Key
DEC terminals have a Compose key, which provides an easy-to-remember way of typing accented characters. If checked, AltGr acts as compose key.

#### Control-Alt is Different from AltGr
If checked, the key combination Ctrl + Left Alt is treated the same way as the AltGr key.

### Mouse
#### Mouse Button Mode
Choose Compromise for right-click paste and middle-click extend. Windows for middle-click extends and right-click brings up the context menu. xtermn for right-click extend and middle click paste.

#### Selection Mode
Specify the initial selection mode.

#### Shift Overrides Applications use of Mouse
If checked, the terminal screen reverts to the last entries when you press a key.

#### Disable xterm-Style Mouse Reporting
When checked, the mouse will always do copy and paste in the normal way.

### Clipboard
Auto-copy selected text to system clipboard
If checked, PuTTY will automatically copy the selected text to the system clipboard.

#### Mouse paste action
Select the mouse paste action performed by PuTTY.

#### {Ctrl,Shift} + Ins
Select the action performed by PuTTY when pressing Ctrl, Shift and Insert.

#### Ctrl + Shift + {C,V}
Select the action performed by PuTTY when pressing Ctrl, Shift and C or V key.

#### Permit control characters in pasted te&xt
If checked, PuTTY allows you to paste text with control characters.

#### Paste to Clipboard in RTF as well as Plain Text
If checked, PuTTY will write formatting information to the clipboard as well as the actual text you copy.

### Scrollback
#### Scrollback Lines
Specify the number of lines kept in the scrollback buffer.

### Telnet
#### Telnet OLD_ENVIRON Ambiguity
This setting allows you to choose whether PuTTY claims to be BSD or RFC-compliant (OLD_ENVIRON/NEW_ENVIRON).

#### Telnet Negotiation Mode
In active mode, PuTTY starts to send negotiations as soon as the connection is opened. In passive mode, PuTTY will wait to negotiate until it sees a negotiation from the server.

#### Telnet Keyboard sends Special Commands
If this box is checked, the Backspace key on the keyboard will send the Telnet special backspace code, and Control-C will send the Telnet special interrupt code.

#### Telnet Return Key sends New Line (instead of ^M)
If checked, PuTTY sends Control-M instead of the Telnet New Line code when you press Return.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageTunnels_32.svg#img_header) Tunnels
The **Tunnels** page allows you to configure SSH port forwarding (tunneling).

#### Local Ports accept Connections from other Hosts
If checked, it allows you to set up local-to-remote port forwarding in such a way that machines other than your client PC can connect to the forwarded port (this also applies to dynamic SOCKS forwarding).

#### Remote Ports accept Connections from other Hosts
If checked, machines other than the SSH server machine can connect to the forwarded port.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageSerial_32.svg#img_header) Serial Port
The **Serial Port** page allows you to configure the port settings to connect to devices using RS232.

#### Port Name
Set the port for communications.

> [!Important]
> The Port Name must begin with COM.

#### Handshake
Set the handshaking protocol for serial port transmission of data.

#### Baud Rate
Set the speed of the serial port communication.

#### Data Bits
Set the standard length of data bits per byte.

#### Stop Bits
Set the standard number of stop bits per byte.

#### Parity
Set the parity checking protocol.

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageProxy_32.svg#img_header) Proxy Settings
The **Proxy Settings** page allows you to configure a proxy server used to connect to the remote server.

#### Proxy Mode
- No proxy (direct connect): (No proxy server will be used to connect to the remote server)
- Socks 4
- Socks 4a
- Socks 5
- HTTP Connect
- Telnet
- Local

#### Proxy Server
Specify the proxy server name (FQDN) or IP address to use.

#### Port
Specify the proxy server port to use.

### Credential Mode
[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/TerminalPuTTY/SVG_PageLogging_32.svg#img_header) Logging
The **Logging** page allows you to configure session logging. Log files can be viewed using the Dashboard.

### General Logging Options
#### Session Logging
Choose which type of information should be logged during a session.

#### Omit Known Password Fields
If checked, the content of known password fields is not logged. Applies only to SSH packet logging.

#### Omit Session Data
If checked, no session data is logged. Applies only to SSH packet logging.

### Log File Options
#### Log File Name
The log file name can contain &Y, &M, &D for date, &T for time, and &H for host name. If you leave the log file name blank, Royal TS will generate a file name based on the connection name and the time stamp. [Replacement tokens](xref:royalts_advanced_tokens) are supported.

#### Path
Specify a path where all the log files are saved. Each log file will be named automatically based on the connection name and the time stamp.

#### Open in Explorer
Click to open the specified folder in the Windows Explorer.

#### Create Sub-Directory with Connection Name
If checked, Royal TS will create a directory with the connection name and write the recording files into it.

#### Log File Options
Configure what to do if the log file already exists.

#### Flush Log File Frequently
If checked, PuTTY will flush data as soon as it is displayed, so that if you view the log file while a session is still open, it will be up to date; and if the client system crashes, there's a greater chance that the data will be preserved. If PuTTY is running slowly with logging enabled, you could try unchecking this option.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
