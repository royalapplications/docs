---
uid: scripting_object_royalsshconnection
name: RoyalSSHConnection
order: 8900
---

# RoyalSSHConnection
## General
### CustomImageName
Type: `string`, Default Value: `Empty String`  
A custom image name from a pre-defined set of images  
### Name
Type: `string`, Default Value: `Empty String`  
The display name of the object.  
### PuttySessionName
Type: `string`, Default Value: `Empty String`  
The putty session name to use.  
### Description
Type: `string`, Default Value: `Empty String`  
The description text of the object.  
### Favorite
Type: `bool`, Default Value: `false`  
Whether or not the object is a favorite.  
### ColorFromParent
Type: `bool`, Default Value: `false`  
Use the Color value from the parent folder.  
### ConnectionType
Type: `string`, Default Value: `Empty String`  
The connection type (like ssh;SSH or telnet;Telnet).  
### CustomCommandOSX
Type: `string`, Default Value: `Empty String`  
The custom command in case of custom command connection type (for macOS).  
### Port
Type: `int`, Default Value: `22`  
Specifies the target port for this connection. Default value is 22.  
### Color
Type: `string`, Default Value: `Empty String`  
Assign a custom color as hex string to the object (#FF0000 for red). Empty string is the default color value (no custom color assigned).  
### PhysicalAddress
Type: `string`, Default Value: `Empty String`  
The MAC address for this connection.  
### ColorName
Type: `string`, Default Value: `Empty String`  
Assign a color from a color palette to the object. If both, a color name and a custom color (hex string) are provided, the color name is preferred.  
### URI
Type: `string`, Default Value: `Empty String`  
The target URI for the connection object (computer name, URL, ...).  
### IsConnectionTemplate
Type: `bool`, Default Value: `false`  
If set to true, the connection object is a template.  
### ID
Type: `Guid`, Default Value: `Guid.Empty`  
The unique object identifier (GUID) of the object.  
### ExternalID
Type: `string`, Default Value: `Empty String`  
The external unique object identifier (GUID) of the object.  
## Advanced
### AllowInsecureSshEncryptionAlgorithms
Type: `bool`, Default Value: `false`  
Specifies whether or not insecure SSH encryption algorithms are allowed.  
### AllowInsecureSshHostKeyAlgorithms
Type: `bool`, Default Value: `false`  
Specifies whether or not insecure SSH host key algorithms are allowed.  
### AllowInsecureSshKeyExchangeAlgorithms
Type: `bool`, Default Value: `false`  
Specifies whether or not insecure SSH key exchange algorithms are allowed.  
### AllowInsecureSshMacAlgorithms
Type: `bool`, Default Value: `false`  
Specifies whether or not insecure SSH MAC algorithms are allowed.  
### AutoWrapMode
Type: `int`, Default Value: `1`  
0 = Off   
 1 = On   
 2 = DOS  
### BackspaceWrapMode
Type: `int`, Default Value: `1`  
Specifies the wrap mode for backspace:   
 0 = Off   
 1 = On   
 2 = DOS  
### BellAction
Type: `int`, Default Value: `1`  
Bell Action:   
 0 = None   
 1 = Default system alert sound   
 2 = Visual bell   
 3 = Play custom sound file   
 4 = Beep using PC speaker  
### BellOverload
Type: `bool`, Default Value: `true`  
If set to true, temporary bell overload is enabled.  
### BellOverloadTimespan
Type: `int`, Default Value: `2`  
The timespan in seconds for the bell overload setting.  
### CapsLockCyrillicSwitch
Type: `bool`, Default Value: `false`  
If set to true, caps lock can be used to switch to cyrillic.  
### CopyPasteLineDrawingAslqqqk
Type: `bool`, Default Value: `false`  
If set to true, Aslqqqk line drawing copy and paste is enabled.  
### DECOriginMode
Type: `bool`, Default Value: `false`  
If set to true, DEC Origin Mode is used.  
### DisableArabicTextShaping
Type: `bool`, Default Value: `false`  
If set to true, Arabic text shaping is disabled.  
### DisableBiDirectionalTextDisplay
Type: `bool`, Default Value: `false`  
If set to true, bi-directional text display is disabled.  
### DisableRemoteControlledCharSetConfig
Type: `bool`, Default Value: `false`  
If set to true, remote controlled character set configuration change is not allowed.  
### DisableRemoteControlledTermResizing
Type: `bool`, Default Value: `false`  
If set to true, remote controlled terminal resizing is not allowed.  
### DisableRemoteControlledWindowTitleChange
Type: `bool`, Default Value: `false`  
If set to true, remote controlled window title change is not allowed.  
### DisableSwitchingToAltScreen
Type: `bool`, Default Value: `false`  
If set to true, switching to alternate screen is disabled.  
### Encoding
Type: `string`, Default Value: `utf-8`  
Specifies the encoding (on Windows)  
### EncodingOSX
Type: `int`, Default Value: `4`  
Specifies the encoding (on macOS)  
### EResponse
Type: `string`, Default Value: `PuTTY`  
^E Response (default is PuTTY)  
### ForceNonDestructiveBackspace
Type: `bool`, Default Value: `false`  
If set to true, non-destructive backspace character is enforced.  
### IgnoreSubstituteChar
Type: `bool`, Default Value: `false`  
If set to true, substitute characters are ignored.  
### ImplicitCRinLF
Type: `bool`, Default Value: `false`  
If set to true, implicit carriage return in linefeed is used.  
### ImplicitLFinCR
Type: `bool`, Default Value: `false`  
If set to true, implicit linefeed in carriage return is used.  
### IPVersion
Type: `int`, Default Value: `1`  
IPVersion:   
 0 = Auto   
 1 = IPv4   
 2 = IPv6  
### IPVersionOSX
Type: `int`, Default Value: `0`  
IPVersionOSX:   
 0 = Auto   
 1 = Force IPv4   
 2 = Force IPv6  
### KeepAliveInterval
Type: `int`, Default Value: `0`  
The keep alive interval in seconds (0 = off).  
### KeepTerminalContentOnDisconnect
Type: `bool`, Default Value: `false`  
If set to true the terminal content is kept when the session is disconnected remotely.  
### LineDrawingHandling
Type: `int`, Default Value: `4`  
LineDrawingHandling:   
 0 = Font has XWindows encoding   
 1 = Use font in both, ANSI and OEM modes   
 2 = Use font in OEM mode only   
 3 = Poor mans line drawing   
 4 = Use unicode line drawing code points  
### LocalEcho
Type: `bool`, Default Value: `false`  
If set to true, local echo is used.  
### LogicalNameForRemoteHost
Type: `string`, Default Value: `Empty String`  
The logical name for the remote host.  
### NumberOfBells
Type: `int`, Default Value: `5`  
The number of bells for the bell overload setting.  
### Printer
Type: `string`, Default Value: `Empty String`  
Printer (empty for none)  
### PuttyCloseOnExit
Type: `int`, Default Value: `1`  
0 = Never   
 1 = Only on clean Exit (Default)   
 2 = Always  
### PuttyLocalEcho
Type: `int`, Default Value: `2`  
Putty Local Echo:   
 0 = On   
 1 = Off   
 2 = Auto (Default)  
### PuttyLocalLineEditing
Type: `int`, Default Value: `2`  
Putty Local Line Editing:   
 0 = On   
 1 = Off   
 2 = Auto (Default)  
### RemoteTitleQuery
Type: `int`, Default Value: `1`  
Remote Title Query Settings:   
 0 = None   
 1 = Empty string   
 2 = Window title  
### RunInsideLoginShell
Type: `bool`, Default Value: `false`  
If set to true, commands are run inside a login shell.  
### SecondsOfSilence
Type: `int`, Default Value: `5`  
Seconds of silence for the bell overload setting.  
### SendKeyCodeWhenIdle
Type: `int`, Default Value: `-1`  
The ASCII key code to send when the connection is idle (0-255) or -1 to disable sending a key code.  
### SetLocaleVariables
Type: `bool`, Default Value: `true`  
If set to true, locale variables are set automatically.  
### SOKeepAliveOption
Type: `bool`, Default Value: `false`  
If set to true, the SOKeepAliveOption is enabled.  
### SoundFile
Type: `string`, Default Value: `Empty String`  
Sound file for bell action.  
### TaskbarIndicator
Type: `int`, Default Value: `0`  
Taskbar indicator:   
 0 = Disable   
 1 = Flashing   
 2 = Steady  
### TCPNoDelayOption
Type: `bool`, Default Value: `true`  
If set to true, the TCPNoDelayOption is enabled.  
### TerminalSpeeds
Type: `string`, Default Value: `38400,38400`  
Terminal Speeds: Default = 38400,38400  
### TerminalType
Type: `int`, Default Value: `0`  
0 = Ansi   
 1 = Wyse60   
 2 = Pick  
### TreatCJIKAsWide
Type: `bool`, Default Value: `false`  
If set to true, the CJIK is treated as wide.  
### UsePuttyHostKey
Type: `bool`, Default Value: `false`  
If set to true, PuTTY's -hostkey command line option will be used with the value of the Fingerprint property.  
### VT100LineDrawingUTF8
Type: `bool`, Default Value: `false`  
If checked, VT100 line drawing is enabled even in UTF-8 mode.  
## Colors
### AllowTerminalToSpecifyANSIColours
Type: `bool`, Default Value: `true`  
If set to true, ANSI Colors are allowed to be specified by the terminal.  
### AllowTerminalToUseXterm256ColourMode
Type: `bool`, Default Value: `true`  
If set to true, xterm 256-color mode is allowed by the terminal.  
### AttemptToUseLogicalPalettes
Type: `bool`, Default Value: `false`  
If set to true, logical palette will be used if possible.  
### BackColor
Type: `string`, Default Value: `0`  
The background color.  
### BackColorOSX
Type: `string`, Default Value: ``  
The background color on macOS.  
### BoldColor
Type: `string`, Default Value: `14`  
The bold color.  
### BoldColorOSX
Type: `string`, Default Value: ``  
The bold color macOS.  
### BoldedTextIsADifferentColour
Type: `bool`, Default Value: `true`  
If set to true, bold text is shown using a different color.  
### ColorCursorColour
Type: `string`, Default Value: `#00FF00`  
The cursor color value.  
### ColorCursorText
Type: `string`, Default Value: `#000000`  
The cursor text color value.  
### ColorDefaultBackground
Type: `string`, Default Value: `#000000`  
The default background color value.  
### ColorDefaultBoldBackground
Type: `string`, Default Value: `#555555`  
The default background bold color value.  
### ColorDefaultBoldForeground
Type: `string`, Default Value: `#FFFFFF`  
The default foreground bold color value.  
### ColorDefaultForeground
Type: `string`, Default Value: `#BBBBBB`  
The default foreground color value.  
### ColorScheme
Type: `int`, Default Value: `0`  
Which color scheme to use:   
 0 = Colors   
 1 = Monochrom   
 2 = Custom palette  
### CursorBlinkingInterval
Type: `int`, Default Value: `500`  
The cursor blinking interval in ms.  
### CursorColor
Type: `string`, Default Value: `#FFFFFF`  
The cursor color value.  
### CursorTextColor
Type: `string`, Default Value: `#000000`  
The cursor text color value.  
### CustomPalette0NormalBlack
Type: `string`, Default Value: `#000000`  
The normal black ANSI color value.  
### CustomPalette10BrightGreen
Type: `string`, Default Value: `#55FF55`  
The bright green ANSI color value.  
### CustomPalette11BrightYellow
Type: `string`, Default Value: `#FFFF55`  
The bright yellow ANSI color value.  
### CustomPalette12BrightBlue
Type: `string`, Default Value: `#5555FF`  
The bright blue ANSI color value.  
### CustomPalette13BrightMagenta
Type: `string`, Default Value: `#FF55FF`  
The bright magenta ANSI color value.  
### CustomPalette14BrightCyan
Type: `string`, Default Value: `#55FFFF`  
The bright cyan ANSI color value.  
### CustomPalette15BrightWhite
Type: `string`, Default Value: `#FFFFFF`  
The bright white ANSI color value.  
### CustomPalette1NormalRed
Type: `string`, Default Value: `#BB0000`  
The normal red ANSI color value.  
### CustomPalette2NormalGreen
Type: `string`, Default Value: `#00BB00`  
The normal green ANSI color value.  
### CustomPalette3NormalYellow
Type: `string`, Default Value: `#BBBB00`  
The normal yellow ANSI color value.  
### CustomPalette4NormalBlue
Type: `string`, Default Value: `#0000BB`  
The normal blue ANSI color value.  
### CustomPalette5NormalMagenta
Type: `string`, Default Value: `#BB00BB`  
The normal magenta ANSI color value.  
### CustomPalette6NormalCyan
Type: `string`, Default Value: `#00BBBB`  
The normal cyan ANSI color value.  
### CustomPalette7NormalWhite
Type: `string`, Default Value: `#BBBBBB`  
The normal white ANSI color value.  
### CustomPalette8BrightBlack
Type: `string`, Default Value: `#555555`  
The bright black ANSI color value.  
### CustomPalette9BrightRed
Type: `string`, Default Value: `#FF5555`  
The bright red ANSI color value.  
### DoubleUnderlineColor
Type: `string`, Default Value: `9`  
The double underline color.  
### FaintColor
Type: `string`, Default Value: `8`  
The faint color.  
### ForeColor
Type: `string`, Default Value: `7`  
The foreground color.  
### ForeColorOSX
Type: `string`, Default Value: ``  
The foreground color on macOS.  
### ItalicColor
Type: `string`, Default Value: `11`  
The italic color.  
### SelectionColor
Type: `string`, Default Value: `#555555`  
The selection color value.  
### SelectionTextColor
Type: `string`, Default Value: `#FFFFFF`  
The selection text color value.  
### SingleUnderlineColor
Type: `string`, Default Value: `9`  
The single underline color.  
### SmartCursorColor
Type: `bool`, Default Value: `true`  
The smart cursor color value.  
### UseBackgroundColourToEraseScreen
Type: `bool`, Default Value: `true`  
If set to ture, the background color is used to erase the screen.  
### UseSystemColours
Type: `bool`, Default Value: `false`  
If set to true, system colors are used.  
## Credentials
### CredentialAutologon
Type: `bool`, Default Value: `true`  
Whether or not to automatically logon to the connection. Connections which do not support automatic logon will ignore this setting.  
### CredentialFromParent
Type: `bool`, Default Value: `false`  
Use the Credential values from the parent folder.  
### CredentialId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object to this object by specifying the credential object's GUID.  
### CredentialKeyContent
Type: `byte[]`, Default Value: `new byte[] { }`  
Assign a key file to the object by embedding the key file's content.  
### CredentialKeyFile
Type: `string`, Default Value: `Empty String`  
Assign a key file to the object by specifying the key file's full path.  
### CredentialKeyMode
Type: `int`, Default Value: `0`  
0 = Path to file   
 1 = Embedded  
### CredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Use credentials from the parent folder   
 2 = Specify username and password   
 3 = Use an existing credential   
 4 = Specify a credential name   
 5 = Use credential from context connection (only for Connection Templates)  
### CredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object to this object by specifying the credential object's name.  
### CredentialOmitDomain
Type: `bool`, Default Value: `false`  
Whether or not to omit the domain portion of the username.  
### CredentialPassphrase
Type: `string`, Default Value: `Empty String`  
Assign a key file passphrase to the object.  
### CredentialPassword
Type: `string`, Default Value: `Empty String`  
Assign a password to the object.  
### CredentialUsername
Type: `string`, Default Value: `Empty String`  
Assign a username to the object.  
### SSHAuthPlugin
Type: `string`, Default Value: `Empty String`  
Plugin command to run.  
### SSHDetachedCertificate
Type: `string`, Default Value: `Empty String`  
Certificate to use with the private key.  
### SSHDetachedCertificateMac
Type: `string`, Default Value: `Empty String`  
Certificate to use with the private key on macOS.  
## Display Options
### AutoAdjustTerminalSize
Type: `bool`, Default Value: `true`  
If set to true, the terminal size will be adjusted automatically.  
### BlinkCursor
Type: `bool`, Default Value: `false`  
If set to true, a blinking cursor is shown.  
### BlinkingTextMode
Type: `int`, Default Value: `0`  
Specifies how blinking text is rendered:   
 0 = Light color   
 1 = Italic   
 2 = Underline   
 3 = Bold   
 4 = Inverse color  
### CursorAppearance
Type: `int`, Default Value: `0`  
Cursor Appearance:   
 0 = Block   
 1 = Underline   
 2 = VerticalLine.  
### DataReceivedIndicator
Type: `bool`, Default Value: `false`  
If set to true, an indicator is shown when data was received on an inactive tab.  
### DisplayScrollbar
Type: `bool`, Default Value: `true`  
If set to true, a scrollbar is displayed.  
### DrawBoldTextInBoldFont
Type: `bool`, Default Value: `true`  
If set to true, bold text is drawn in bold font.  
### DrawBoldTextInBrightColors
Type: `bool`, Default Value: `true`  
If set to true, bold text is drawn in bright colors.  
### EnableBlinkingText
Type: `bool`, Default Value: `false`  
If set to true, blinking text is enabled.  
### EnableItalicText
Type: `bool`, Default Value: `true`  
If set to true, italic text is enabled.  
### EnsureWindowIsAlwaysOnTop
Type: `bool`, Default Value: `false`  
If set to true, the window will be shown always on top.  
### FontDisableStyles
Type: `bool`, Default Value: `false`  
If set to true, bold and italic styles are disabled.  
### FontIsBold
Type: `bool`, Default Value: `false`  
If set to true, the font is displayed bold.  
### FullScreenOnAltEnter
Type: `bool`, Default Value: `false`  
If set to true, full screen will be entered on Alt-Enter.  
### GapBetweenTextAndWindowEdge
Type: `int`, Default Value: `1`  
The gap between the text and the window edge.  
### HideMousePointerWhenTypingInWindow
Type: `bool`, Default Value: `false`  
If set to true, the mouse pointer will be hidden while typing.  
### HorizontalCharSpacingOSX
Type: `double`, Default Value: `1.0`  
Horizontal character spacing on macOS.  
### InactivityIndicator
Type: `bool`, Default Value: `false`  
If set to true, an indicator is shown when no data was received for a period of time.  
### InactivityIndicatorThreshold
Type: `int`, Default Value: `5`  
Number of seconds threshold for the inactivity indicator.  
### ScrollbackResetOnDisplayActivity
Type: `bool`, Default Value: `true`  
If set to true, scrollback is reset on display activity (when data is received).  
### SeparateWindowAndIconTitles
Type: `bool`, Default Value: `true`  
If set to true, window and icon titles are separated.  
### SGRMode
Type: `int`, Default Value: `0`  
Select graphic rendition1 mode.  
### ShowWindowTitle
Type: `bool`, Default Value: `false`  
If set to true, the window title ANSI sequence is processed.  
### SunkenEdgeBorder
Type: `bool`, Default Value: `false`  
If set to true, a sunken edge border is displayed.  
### SystemMenuAppearsOnAltAlone
Type: `bool`, Default Value: `false`  
If set to true, the system menu is shown on Alt-Alone.  
### SystemMenuAppearsOnAltSpace
Type: `bool`, Default Value: `false`  
If set to true, the system menu is shown on Alt-Space.  
### TerminalColumns
Type: `int`, Default Value: `80`  
Terminal columns.  
### TerminalRows
Type: `int`, Default Value: `24`  
Terminal rows.  
### VerticalCharSpacingOSX
Type: `double`, Default Value: `1.0`  
Vertical character spacing on macOS.  
### WarnBeforeClosingWindow
Type: `bool`, Default Value: `true`  
If set to true, a warninig is shown before closing the window.  
### WindowClosesOnAltF4
Type: `bool`, Default Value: `true`  
If set to true, the window is closed on Alt-F4.  
### WindowResizeAction
Type: `int`, Default Value: `0`  
Window resize action:   
 0 = Change the number of rows and columns   
 1 = Forbid resizing completely   
 2 = Change the size of the font   
 3 = Change font size only when maximized  
### WindowTitle
Type: `string`, Default Value: `Empty String`  
Specify a custom window title.  
## Display Options macOS
### BackgroundTransparency
Type: `double`, Default Value: `0.0`  
Specifies the background transparency on macOS.  
### FontAntiAliasOSX
Type: `bool`, Default Value: `true`  
If set to true, the font anti-aliasing is enabled on macOS.  
### FontOSX
Type: `string`, Default Value: `Monaco`  
Specifies the font to use on macOS.  
### FontSizeOSX
Type: `int`, Default Value: `11`  
Specifies the terminal font size on macOS.  
### FontUseLigaturesOSX
Type: `bool`, Default Value: `false`  
If set to true, font ligatures are enabled on macOS.  
### NonAsciiFontAntiAliasOSX
Type: `bool`, Default Value: `true`  
If set to true, the non-ascii font anti-aliasing is enabled on macOS.  
### NonAsciiFontOSX
Type: `string`, Default Value: `Monaco`  
Specifies the non-ascii font to use on macOS.  
### NonAsciiFontSizeOSX
Type: `int`, Default Value: `11`  
Specifies the terminal non-ascii font size on macOS.  
### NonAsciiFontUseLigaturesOSX
Type: `bool`, Default Value: `false`  
If set to true, non-ascii font ligatures are enabled on macOS.  
## Display Options Windows
### Font
Type: `string`, Default Value: `Courier New`  
Specifies the font to use on Windows.  
### FontQuality
Type: `int`, Default Value: `0`  
Font Quality:   
 0 = Default   
 1 = Antialiased   
 2 = NonAntialiased   
 3 = ClearType  
### FontRenderingMode
Type: `int`, Default Value: `0`  
Font Rendering:   
 0 = Default (Rebex)   
 1 = Compact (PuTTY)  
### FontSize
Type: `int`, Default Value: `10`  
Specifies the terminal font size on Windows.  
## Input
### AltGrActsAsComposeKey
Type: `bool`, Default Value: `false`  
If set to true, Alt Gr acts as compose key.  
### AutoCopySelectionToClipboard
Type: `bool`, Default Value: `true`  
If set to true, the selected text is automatically copied to the system clipboard.  
### BackspaceSequence
Type: `int`, Default Value: `1`  
The backspace key sequence:   
 0 = 0x08: Backspace   
 1 = 0x7F: Delete  
### ControlAltIsDifferentFromAltGr
Type: `bool`, Default Value: `true`  
If set to true, Control-Alt is different from Alt Gr.  
### CtrlShiftCVAction
Type: `int`, Default Value: `0`  
Ctrl, Shift, C and V action:   
 0 = No action (none)   
 1 = Last selected text (implicit)   
 2 = System clipboard (explicit)  
### CtrlShiftInsAction
Type: `int`, Default Value: `2`  
Ctrl, Shift and Insert action:   
 0 = No action (none)   
 1 = Last selected text (implicit)   
 2 = System clipboard (explicit)  
### CursorKeyMode
Type: `int`, Default Value: `0`  
The initial cursor key mode:   
 0 = Normal   
 1 = Application  
### DisableApplicationKeypadMode
Type: `bool`, Default Value: `false`  
If set to true, application keypad mode is disabled.  
### DisableXtermStyleMouseReporting
Type: `bool`, Default Value: `false`  
If set to true, xterm style mouse reporting is disabled.  
### DisconnectHistoryLength
Type: `int`, Default Value: `3`  
The history length shown after disconect.  
### FunctionKeyMode
Type: `int`, Default Value: `0`  
The function key mode:   
 0 = Common   
 1 = Common Extended   
 2 = Common Alternative   
 3 = HpUx   
 4 = Linux   
 5 = Linux Alternative   
 6 = Pick   
 7 = SCO   
 8 = SCO Alternative   
 9 = VT100Plus   
 10 = VT400   
 11 = VT52   
 12 = Wyse60   
 13 = XtermR6  
### FunctionKeyModePutty
Type: `int`, Default Value: `0`  
The function key mode in PuTTY:   
 0 = ESCn   
 1 = Linux   
 2 = XtermR6   
 3 = VT400   
 4 = VT100Plus   
 5 = SCO  
### HistoryMaxLength
Type: `int`, Default Value: `1000`  
Specifies the max history length (srollback lines).  
### HistoryUnlimited
Type: `bool`, Default Value: `false`  
If set to true, the history is unlimited.  
### HomeAndEndKeys
Type: `int`, Default Value: `0`  
The home and end key behavior:   
 0 = Standard   
 1 = Rxvt  
### IgnoreRemoteCursorKeyMode
Type: `bool`, Default Value: `false`  
If set to true, remote cursor key mode change is ignored.  
### InitialPasteCharDelay
Type: `bool`, Default Value: `false`  
If set to true, the initial state of character paste delay is enabled.  
### InitialPasteLineDelay
Type: `bool`, Default Value: `false`  
If set to true, the initial state of line paste delay is enabled.  
### InitialSendKeySequenceToServer
Type: `bool`, Default Value: `false`  
If set to true, the initial state of the direct send to server for key sequences is enabled.  
### InitialStateOfCharSubstitution
Type: `bool`, Default Value: `true`  
If set to true, the initial state of character substitution is enabled.  
### InitialStateOfKeyboardScrolling
Type: `bool`, Default Value: `false`  
If set to true, the initial state of keyboard scrolling is set.  
### InitialStateOfNumericKeypad
Type: `int`, Default Value: `0`  
Initial state of numeric keypad:   
 0 = Normal   
 1 = Application   
 2 = NetHack  
### iTermKeyMappings
Type: `string`, Default Value: `Empty String`  
The iTerm Key Mappings.  
### LeftOptionKeyMode
Type: `int`, Default Value: `0`  
Left Option key mode:   
 0 = Normal   
 1 = Meta   
 2 = Esc  
### MouseButtonActionType
Type: `int`, Default Value: `0`  
Mouse button action type:   
 0 = Compromise   
 1 = xterm   
 2 = Windows  
### MousePasteAction
Type: `int`, Default Value: `2`  
Mouse paste action:   
 0 = No action (none)   
 1 = Last selected text (implicit)   
 2 = System clipboard (explicit)  
### MousePasteEnabled
Type: `bool`, Default Value: `true`  
If set to true, clipboard paste using right-click is enabled.  
### NewLineSequence
Type: `int`, Default Value: `0`  
The new line sequence   
 0 = CR   
 1 = CRLF  
### PasteCharDelay
Type: `int`, Default Value: `50`  
The character paste delay in ms.  
### PasteLineDelay
Type: `int`, Default Value: `500`  
The line paste delay in ms.  
### PasteToClipboardInRTFAsWellAsPlainText
Type: `bool`, Default Value: `false`  
If set to true, paste to clipboard RTF as well as plain text is enabled.  
### PermitControlCharsInPastedText
Type: `bool`, Default Value: `false`  
If set to true, control characters are allowed in the text to be pasted.  
### PushErasedTextIntoScrollback
Type: `bool`, Default Value: `true`  
If set to true, erased text is pushed into history (scrollback).  
### ResetScrollbackOnDisplayActivity
Type: `bool`, Default Value: `true`  
If set to true, scrollback is reset on display activity.  
### ResetScrollbackOnKeypress
Type: `bool`, Default Value: `false`  
If set to true, scrollback is reset on keypress.  
### RightOptionKeyMode
Type: `int`, Default Value: `0`  
Right Option key mode:   
 0 = Normal   
 1 = Meta   
 2 = Esc  
### SelectionMode
Type: `int`, Default Value: `0`  
Specifies the function key mode:   
 0 = Standard   
 1 = Block  
### ShiftOverridesApplicationsUseOfMouse
Type: `bool`, Default Value: `true`  
If set to true, the Shift key overrides the application's use of mouse.  
### ShowClipboardPreviewOnPaste
Type: `int`, Default Value: `0`  
Shows clipboard preview on paste:   
 0 = Never   
 1 = Clipboard contains Linebreaks   
 2 = Always  
### ShowHistoryAfterDisconnect
Type: `bool`, Default Value: `false`  
If set to true, the history is shown after disconnect.  
### TelnetKeyboardSendsSpecialCommands
Type: `bool`, Default Value: `false`  
If set to true, telnet keyboard sends special commands.  
### TelnetNegotiationMode
Type: `int`, Default Value: `0`  
Telnet negotiation mode:   
 0 = Active   
 1 = Passive  
### TelnetOldEnvironAmbiguity
Type: `int`, Default Value: `0`  
Telnet old environ ambiguity:   
 0 = BSD   
 1 = RFC_1408  
### TelnetReturnKeySendsNewLine
Type: `bool`, Default Value: `true`  
If set to true, return key in telnet sends new line.  
### TerminalName
Type: `string`, Default Value: `xterm`  
The terminal name.  
## Key Sequence
### KeySequence
Type: `string`, Default Value: `Empty String`  
The key sequence to be executed after the connection was successfully established.  
### KeySequenceEnabled
Type: `bool`, Default Value: `false`  
If set to true, the configured key sequence will be executed after the connection was successfully established.  
### KeySequenceFromParent
Type: `bool`, Default Value: `false`  
Use the Key Sequence values from the parent folder.  
### KeySequenceId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a key sequence task object to this connection by specifying the task object's GUID.  
### KeySequenceMode
Type: `int`, Default Value: `0`  
0 = Specify a key sequence   
 1 = An existing key sequence task is assigned using the task's GUID   
 2 = Specify a key sequence task by name   
 3 = Use key sequence from parent.  
### KeySequenceName
Type: `string`, Default Value: `Empty String`  
Assign a key sequence task object to this object by specifying the key sequence task object's name.  
## Logging
### CreateTextFileFromRecording
Type: `bool`, Default Value: `false`  
Creates a text file from the ANSI recording after the connection has been disconnected  
### EnableLoggingOSX
Type: `bool`, Default Value: `false`  
If set to true, logging is enabled on macOS.  
### LogDirectoryOSX
Type: `string`, Default Value: `Empty String`  
The log directory for macOS.  
### LoggingLevel
Type: `int`, Default Value: `0`  
SSH logging level.  
### PuttyLogFileAlreadyExistsAction
Type: `int`, Default Value: `-1`  
PuTTY log file already exists action:   
 -1 = Ask the user every time   
 0 = Always append to the end of it   
 1 = Always overwrite it  
### PuttyLogFileFlushFrequently
Type: `bool`, Default Value: `true`  
If set to true, the log file is flushed frequently.  
### PuttyLogFileName
Type: `string`, Default Value: `Empty String`  
The log file name for PuTTY.  
### PuttyLogging
Type: `int`, Default Value: `0`  
PuTTY logging:   
 0 = None   
 1 = Printable output   
 2 = All session output   
 3 = SSH packets   
 4 = SSH packets and raw data  
### PuttyLogSSHOmitPasswordFields
Type: `bool`, Default Value: `true`  
If set to true, known password fields are omitted (only if SSH packet logging is selected).  
### PuttyLogSSHOmitSessionData
Type: `bool`, Default Value: `false`  
If set to true, session data is omitted (only if SSH packet logging is selected).  
### RecordAlwaysPrompt
Type: `bool`, Default Value: `false`  
If set to true, the user is always prompted to specify or confirm the output path.  
### RecordCreateSubDir
Type: `bool`, Default Value: `false`  
If set to true, a sub directory with the connection name is created for the recording.  
### RecorderOutputPath
Type: `string`, Default Value: `Empty String`  
Specifies the output path for the recorder.  
### RecordStartOnConnect
Type: `bool`, Default Value: `false`  
Starts recording automatically when connected  
## Plugin for macOS
### PlugInOSX
Type: `string`, Default Value: `Empty String`  
The plug in ID used for this connection for macOS.  
### UseGlobalPlugInOSX
Type: `bool`, Default Value: `true`  
If set to true, the connection will use the application default plug in for the connection type on macOS.  
## Plugin for Windows
### PlugInWin
Type: `string`, Default Value: `Empty String`  
The plug in ID used for this connection for Windows.  
### UseGlobalPlugInWin
Type: `bool`, Default Value: `true`  
If set to true, the connection will use the application default plug in for the connection type on Windows.  
## Proxy Settings
### ProxyConsiderProxyingLocalHostConnections
Type: `bool`, Default Value: `false`  
If set to true, local host connections are considered to proxy.  
### ProxyCredentialID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a credential object as proxy server credential by specifying the credential object's GUID.  
### ProxyCredentialMode
Type: `int`, Default Value: `0`  
0 = Do not use any credentials   
 1 = Use the same credentials from the connection   
 2 = Specify username and password   
 3 = Use an existing credential   
 4 = Specify a credential name  
### ProxyCredentialName
Type: `string`, Default Value: `Empty String`  
Assign a credential object as proxy server credential by specifying the credential object's name.  
### ProxyDoDNSLookupAtProxyEnd
Type: `int`, Default Value: `1`  
0 = No   
 1 = Auto   
 2 = Yes  
### ProxyExcludedHosts
Type: `string`, Default Value: `Empty String`  
Specifies the hosts/IP addresses to exclude from being proxied.  
### ProxyMode
Type: `int`, Default Value: `0`  
Specifies the proxy mode for the SSH connection:   
 0 = No proxy   
 1 = Socks4   
 2 = Socks4a   
 3 = Socks5   
 4 = HttpConnect  
### ProxyModePutty
Type: `int`, Default Value: `0`  
Specifies the proxy mode for PuTTY based connections:   
 0 = No Proxy = 0   
 1 = Socks4   
 2 = Socks5   
 3 = HttpConnect   
 4 = Telnet   
 5 = Local  
### ProxyPassword
Type: `string`, Default Value: `Empty String`  
The password for the proxy server.  
### ProxyPort
Type: `int`, Default Value: `3128`  
Specifies the proxy port for this connection. Default value is 3128.  
### ProxyServer
Type: `string`, Default Value: `Empty String`  
Specifies the proxy server for the connection.  
### ProxyTelnetOrLocalProxyCommand
Type: `string`, Default Value: `Empty String`  
Proxy telnet or local proxy command.  
### ProxyUserName
Type: `string`, Default Value: `Empty String`  
The username for the proxy server.  
## Security
### AutoSendPasswordPrompt
Type: `bool`, Default Value: `false`  
Enable to automatically send configured password upon server authentication requests.  
### EncryptionKeyAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all encryption key algorithms in the order they should be negotiated if enabled.  
### Fingerprint
Type: `string`, Default Value: `Empty String`  
The fingerprint value for the SSH connection.  
### FingerprintAlgorithm
Type: `string`, Default Value: `Empty String`  
The fingerprint algorithm for the SSH connection.  
### HostKeyAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all host key algorithms in the order they should be negotiated if enabled.  
### KeyExchangeAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all key exchange algorithms in the order they should be negotiated if enabled.  
### MacAlgorithms
Type: `string[]`, Default Value: `new string[] { }`  
A list containing all MAC algorithms in the order they should be negotiated if enabled.  
### SSHAuthAgent
Type: `int`, Default Value: `0`  
SSH Authentication Agent: 0 = None   
 1 = OpenSSH Agent   
 2 = Pageant   
 3 = Legacy Pageant  
### SSHAuthMethod
Type: `int`, Default Value: `-1`  
SSH Authentication Method:   
 -1 = Any   
 0 = None   
 1 = Password   
 2 = Keyboard interactive   
 3 = Public key   
 4 = gssapiwithmic  
### UseStrictKeyExchange
Type: `bool`, Default Value: `true`  
Gets or sets a value indicating whether to enable strict key exchange extension (compatible with OpenSSH 9.6).  
### WarnFingerprintMismatch
Type: `bool`, Default Value: `true`  
If set to true, a warninig is shown when the fingerprint has changed.  
## Serial Port
### BaudRate
Type: `int`, Default Value: `9600`  
Baud rate for serial port connection. Exception is thrown when the device doesn't support the baud rate. Default is 9600.  
### DataBits
Type: `int`, Default Value: `8`  
The standard length of data bits per byte. (The range of values for this property is from 5 through 8). Default is 8.  
### Handshake
Type: `int`, Default Value: `0`  
Specifies the control protocol used in establishing a serial port communication.   
 0 = None   
 1 = XOnXOff   
 2 = RequestToSend   
 3 = RequestToSendXOnXOff  
### NewLine
Type: `string`, Default Value: `\n`  
The value used to interpret the end of a call. Default = \n  
### Parity
Type: `int`, Default Value: `0`  
Specifies the parity bit for the serial port communication.   
 0 = None   
 1 = Odd   
 2 = Even   
 3 = Mark   
 4 = Space  
### PortName
Type: `string`, Default Value: `COM1`  
The communications port. Default is COM1.  
### ReadTimeout
Type: `int`, Default Value: `15000`  
The number of milliseconds before a time-out occurs when a read operation does not finish. Default value = 15000. Min. Value = 500.  
### StopBits
Type: `int`, Default Value: `1`  
Specifies the number of stop bits used for the serial port communication. 0 = None, 1 = One stop bit is used, 2 = Two stop bits are used, 3 = 1.5 stop bits are used.  
### WriteTimeout
Type: `int`, Default Value: `15000`  
The number of milliseconds before a time-out occurs when a write operation does not finish. Default value = 15000. Min. Value = 500.  
## SSH Settings
### SSHAdditionalOptions
Type: `string`, Default Value: `Empty String`  
Additional SSH options.  
### SSHAllowAgentForwarding
Type: `bool`, Default Value: `false`  
If set to true, agent forwarding is allowed.  
### SSHAllowAttemptedChangesOfUsername
Type: `bool`, Default Value: `false`  
If set to true, change of username in SSH-2 is allowed.  
### SSHAllowGSSAPICredentialDelegation
Type: `bool`, Default Value: `false`  
If set to true, GSSAPI credential delegation is attempted.  
### SSHAttemptAuthenticationUsingPageant
Type: `bool`, Default Value: `true`  
If set to true, Pageant is used to authenticate.  
### SSHAttemptGSSAPIAuthentication
Type: `bool`, Default Value: `true`  
If set to true, GSSAPI authentication (SSH-2) is attempted.  
### SSHAttemptKeyboardInteractiveAuthentication
Type: `bool`, Default Value: `true`  
If set to true, keyboard-interactive authentication (SSH-2) is attempted.  
### SSHAttemptTISOrCryptoCardAuthentication
Type: `bool`, Default Value: `false`  
If set to true, TIS or CryptoCard authentication (SSH-1) is attempted.  
### SSHBugChokesOnSSH1IgnoreMessages
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugChokesOnSSH1RSAAuthentication
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugChokesOnSSH2IgnoreMessages
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugChokesOnSSH2WinadjRequests
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugHandlesSSH2KeyReExchangeBadly
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugIgnoresSSH2MaximumPacketSize
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugMiscomputesSSH2EncryptionKeys
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugMiscomputesSSH2HMACKeys
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugMisusesTheSessionIDInSSH2PKAuth
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugOnlySupportPreRFC4419SSH2DHGex
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugRefusesAllSSH1PasswordCamouflage
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugRepliesToRequestsOnClosedChannels
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBugRequiresPaddingOnSSH2RSASignatures
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Off   
 2 = On  
### SSHBypassAuthentication
Type: `bool`, Default Value: `false`  
If set to true, authentication is bypassed entirely (SSH-2).  
### SSHDisplayPreAuthenticationBanner
Type: `bool`, Default Value: `true`  
If set to true, pre-authentication banner is displayed (SSH-2).  
### SSHDontAllocateAPseudoTerminal
Type: `bool`, Default Value: `false`  
If set to true, no pseudo terminal is allocated.  
### SSHDontStartShellOrCommand
Type: `bool`, Default Value: `false`  
If set to true, no shell or command is started.  
### SSHEnableCompression
Type: `bool`, Default Value: `false`  
If set to true, compression is enabled.  
### SSHEnableLegazySingleDESForSSH2
Type: `bool`, Default Value: `false`  
If set to true, legacy use of Single-DES in SSH-2 is enabled.  
### SSHEnableTrustedX11Forwarding
Type: `bool`, Default Value: `false`  
If set to true, trusted X11 forwarding is enabled.  
### SSHEnableX11Forwarding
Type: `bool`, Default Value: `false`  
If set to true, X11 forwarding is enabled.  
### SSHEncryptionCipherSelectionPolicy
Type: `string`, Default Value: `aes,chacha20,blowfish,3des,WARN,arcfour,des`  
Encryption cipher policy.  
### SSHForcePseudoTerminalAllocation
Type: `bool`, Default Value: `false`  
If set to true, pseudo terminal allocation is enforced.  
### SSHGSSAPILibraryOrder
Type: `string`, Default Value: `gssapi32,sspi,custom`  
GSSAPI library order.  
### SSHKeyExchangeAlgorithmSelectionPolicy
Type: `string`, Default Value: `ecdh,dh-gex-sha1,dh-group14-sha1,rsa,WARN,dh-group1-sha1`  
Key exchange algorithm policy.  
### SSHMaxDataBeforeRekey
Type: `string`, Default Value: `1G`  
Max data before re-key.  
### SSHMaxMinutesBeforeRekey
Type: `int`, Default Value: `60`  
Max minutes before re-key.  
### SSHProtocolVersion
Type: `int`, Default Value: `2`  
0 = Version1Only   
 1 = Version1   
 2 = Version2   
 3 = Version2Only  
### SSHRemoteCommand
Type: `string`, Default Value: `Empty String`  
SSH remote command to execute after connect.  
### SSHTerminalModesToSend
Type: `string`, Default Value: `INTR=A,QUIT=A,ERASE=A,KILL=A,EOF=A,EOL=A,EOL2=A,START=A,STOP=A,SUSP=A,DSUSP=A,REPRINT=A,WERASE=A,LNEXT=A,FLUSH=A,SWTCH=A,STATUS=A,DISCARD=A,IGNPAR=A,PARMRK=A,INPCK=A,ISTRIP=A,INLCR=A,IGNCR=A,ICRNL=A,IUCLC=A,IXON=A,IXANY=A,IXOFF=A,IMAXBEL=A,ISIG=A,ICANON=A,XCASE=A,ECHO=A,ECHOE=A,ECHOK=A,ECHONL=A,NOFLSH=A,TOSTOP=A,IEXTEN=A,ECHOCTL=A,ECHOKE=A,PENDIN=A,OPOST=A,OLCUC=A,ONLCR=A,OCRNL=A,ONOCR=A,ONLRET=A,CS7=A,CS8=A,PARENB=A,PARODD=A,`  
Terminal Modes  
### SSHUserSuppliedGSSAPILibraryPath
Type: `string`, Default Value: `Empty String`  
User-supplied GSSAPI library  
### SSHX11AuthenticationProtocol
Type: `int`, Default Value: `1`  
SSHX11AuthenticationProtocol:   
 1 = MIT_Magic_COOKIE_1   
 2 = XDM_Authorization_1  
### SSHX11AuthorityFileForLocalDisplay
Type: `string`, Default Value: `Empty String`  
X auth file for local displa.  
### SSHXDisplayLocation
Type: `string`, Default Value: `Empty String`  
X Display location.  
## Tunnels
### SSHLocalPortsAcceptConnectionsFromOtherHosts
Type: `bool`, Default Value: `false`  
If set to true, local ports accept connections from other hosts.  
### SSHRemotePortsAcceptConnectionsFromOtherHosts
Type: `bool`, Default Value: `false`  
If set to true, remote ports accept connections from other hosts.  
## Private Key
### PrivateKeyPath
Type: `string`, Default Value: `Empty String`  
Specifies the path to the private key file.  
### Passphrase
Type: `string`, Default Value: `Empty String`  
Specifies the private key passphrase.  
## Connect Task
### PreConnectTaskFromParent
Type: `bool`, Default Value: `false`  
Use the Connect Task values from the parent folder.  
### PreConnectTaskMode
Type: `int`, Default Value: `1`  
0 = Use connect task from parent folder   
 1 = Use an existing task   
 2 = Specify a task name.  
### PreConnectTaskName
Type: `string`, Default Value: `Empty String`  
Assign a task object to this object as connect task by specifying the task object's name.  
### PreConnectTaskId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a task object to this object as connect task by specifying the task object's GUID.  
### PreConnectTaskWait
Type: `bool`, Default Value: `false`  
If set to true, the connection will be started after the task finished.  
### PreConnectTaskConditionFirst
Type: `bool`, Default Value: `false`  
If set to true, the task will only be executed if it is the first connection in a folder to be connected.  
### PreConnectTaskConditionAbort
Type: `bool`, Default Value: `false`  
If set to true, the connection will be closed when the task fails (exit code <> 0).  
## Disconnect Task
### PostDisconnectTaskFromParent
Type: `bool`, Default Value: `false`  
Use the Disconnect Task values from the parent folder.  
### PostDisconnectTaskMode
Type: `int`, Default Value: `1`  
0 = Use disconnect task from parent folder   
 1 = Use an existing task   
 2 = Specify a task name.  
### PostDisconnectTaskName
Type: `string`, Default Value: `Empty String`  
Assign a task object to this object as disconnect task by specifying the task object's name.  
### PostDisconnectTaskId
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a task object to this object as disconnect task by specifying the task object's GUID.  
### PostDisconnectTaskWait
Type: `bool`, Default Value: `false`  
If set to true, the connection will be closed after the task finished.  
### PostDisconnectTaskConditionLast
Type: `bool`, Default Value: `false`  
If set to true, the task will only be executed if it is the last active connection in a folder.  
## Window Mode
### DisplayMode
Type: `int`, Default Value: `0`  
0 = Embedded (Tabbed)   
 1 = External Window   
 2 = Full Screen (where supported).  
### ExternalScreenMode
Type: `int`, Default Value: `0`  
0 = Remember Screen   
 Any other number indicates the display number.  
### ExternalScreen
Type: `int`, Default Value: `0`  
Specifies on which Screen the External Window will be shown (Windows).  
### ExternalScreenOSX
Type: `int`, Default Value: `0`  
Specifies on which Screen the External Window will be shown (macOS).  
### ExternalPositionMode
Type: `int`, Default Value: `0`  
0 = Remember position   
 1 = Custom left and right coordinates  
### ExternalTop
Type: `int`, Default Value: `0`  
Specifies the last known position (top) of the external window.  
### ExternalLeft
Type: `int`, Default Value: `0`  
Specifies the last known position (left) of the external window.  
### ExternalWidth
Type: `int`, Default Value: `0`  
Specifies the last known width of the external window.  
### ExternalHeight
Type: `int`, Default Value: `0`  
Specifies the last known height of the external window.  
### ExternalSizeMode
Type: `int`, Default Value: `0`  
0 = Remember Size   
 1 = Custom width and height   
 2 = Maximize  
### MinimizeMainWindow
Type: `bool`, Default Value: `false`  
If set to true, the main window will be minimized after the connection was established.  
### FixedSize
Type: `bool`, Default Value: `false`  
Specifies whether or not the control or form should be expanded automatically to fill the container or maximized form  
## Dashboard
### DashboardUseAppSettings
Type: `bool`, Default Value: `true`  
If set to true, the plugin default settings for the dashboard are used.  
### DashboardUseWebPageTemplate
Type: `bool`, Default Value: `false`  
If set to true, a web page template is used to show a web page in the dashboard.  
### DashboardWebPageTemplate
Type: `Guid`, Default Value: `Guid.Empty`  
The Web Page template to use in the dashboard when DashboardUseWebPageTemplate is set to true.  
### DashboardAutoShowFiles
Type: `bool`, Default Value: `true`  
If set to true, the dashboard will automatically show recordings and log files.  
## Royal Server
### ManagementEndpointFromParent
Type: `bool`, Default Value: `false`  
Use the Royal Server values from the parent folder.  
### ManagementEndpointID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Royal Server object to this object by specifying the Royal Server object's GUID.  
### ManagementEndpointName
Type: `string`, Default Value: `Empty String`  
Assign a Royal Server object to this object by specifying the Royal Server object's name.  
## Secure Gateway
### SecureGatewayFromParent
Type: `bool`, Default Value: `false`  
Use the Secure Gateway values from the parent folder.  
### SecureGatewayUsageMode
Type: `int`, Default Value: `0`  
0 = Never   
 1 = Always   
 2 = On Demand  
### SecureGatewayID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Secure Gateway or Royal Server object to this object by specifying the Secure Gateway or Royal Server object's GUID.  
## Remote Desktop Gateway
### RDSGatewayFromParent
Type: `bool`, Default Value: `false`  
Use the Remote Desktop Gateway values from the parent folder.  
### RDSGatewayUsageMode
Type: `int`, Default Value: `0`  
0 = Never   
 1 = Always   
 2 = On Demand  
### RDSGatewayID
Type: `Guid`, Default Value: `Guid.Empty`  
Assign a Remote Desktop Gateway object to this object by specifying the Remote Desktop Gateway object's GUID.  
### RDSGatewayName
Type: `string`, Default Value: `Empty String`  
Assign a Remote Desktop Gateway object to this object by specifying the Remote Desktop Gateway object's name.  
## Custom Fields
### CustomField1FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField1 value from the parent folder.  
### CustomField2FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField2 value from the parent folder.  
### CustomField3FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField3 value from the parent folder.  
### CustomField4FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField4 value from the parent folder.  
### CustomField5FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField5 value from the parent folder.  
### CustomField6FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField6 value from the parent folder.  
### CustomField7FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField7 value from the parent folder.  
### CustomField8FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField8 value from the parent folder.  
### CustomField9FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField9 value from the parent folder.  
### CustomField10FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField10 value from the parent folder.  
### CustomField11FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField11 value from the parent folder.  
### CustomField12FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField12 value from the parent folder.  
### CustomField13FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField13 value from the parent folder.  
### CustomField14FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField14 value from the parent folder.  
### CustomField15FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField15 value from the parent folder.  
### CustomField16FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField16 value from the parent folder.  
### CustomField17FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField17 value from the parent folder.  
### CustomField18FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField18 value from the parent folder.  
### CustomField19FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField19 value from the parent folder.  
### CustomField20FromParent
Type: `bool`, Default Value: `false`  
Use the CustomField20 value from the parent folder.  
### CustomField1
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField2
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField3
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField4
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField5
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField6
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField7
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField8
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField9
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField10
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object.  
### CustomField11
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField12
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField13
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField14
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField15
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField16
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField17
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField18
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField19
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
### CustomField20
Type: `string`, Default Value: `Empty String`  
Custom fields allow you to collect additional information to the object. The content of this custom field will be stored encrypted in your document.  
## Custom Properties
### CustomPropertiesFromParent
Type: `bool`, Default Value: `false`  
Use the Custom Properties from the parent folder.  
### CustomProperties
Type: `string`, Default Value: `Empty String`  
Custom properties allow you to collect additional information for an object.  
## Notes
### NotesFromParent
Type: `bool`, Default Value: `false`  
Use the Notes value from the parent folder.  
### Notes
Type: `string`, Default Value: `Empty String`  
Store HTML formatted notes to the object.  
## Changes
### Created
Type: `DateTime`, Default Value: `DateTime.Now`  
The date and time the object was created.  
### CreatedBy
Type: `string`, Default Value: `Empty String`  
The user who initially created the object.  
### Modified
Type: `DateTime`, Default Value: `DateTime.Now`  
The last date and time the object was modified.  
### ModifiedBy
Type: `string`, Default Value: `Empty String`  
The user who last modified the object.  

