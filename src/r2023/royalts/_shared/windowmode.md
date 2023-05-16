## ![](/r2023/images/RoyalTS/Application/SVG_PageWindowMode_32.svg#img_header) Window Mode

The **Window Mode** page allows you to control where the connection should open. Most connection types support **Main Window (Embedded)** mode and **External Window** mode. Remote Desktop connections, for example, additionally support **External Window (Full Screen)** mode.

#### Open connection in

- **Main Window (Embedded)**  
  When selected, the connection will be embedded in the main window.
- **External Window**
  When selected, the connection will open in an external window.
- **External Window (Full Screen)**  
  When selected, the connection will open in an external window in full screen mode (no window title bar and borders).

#### Use Multiple Monitors

If checked, the connection will use all monitors if connected in Full Screen mode or if the connection is changed to use Full Screen mode while connected.

> [!Note]
> This option is only available for connections supporting full screen and multiple monitors (like Remote Desktop).

#### Don't show the connection bar

If checked, the connection bar will not be shown in full screen mode.

> [!Note]
> This option is only available for Remote Desktop connections. To display the connection bar, use the Ctrl + Alt + Home keyboard shortcut.

### External Window Settings

The following settings can be configured when the window mode configuration is set to external window.

#### Screen

- **Remember Screen**  
  Royal TS remembers which screen the connection was on after you've disconnected the connection and tries to open the external connection window on the same screen the next time you connect.
- **Screen 1 ... 9**  
  Choose on which screen you want the external connection to be opened.

> [!Note]
> Setting the **Screen** configuration to a screen which is currently not available on your computer will be ignored as long as the screen is not available. A common scenario for this is, working with the same file on a laptop computer with only one screen and a workstation with multiple screens connected. Setting connections to open on the Screen 3 will open on the main display on your laptop while the same connection will open on your workstation on **Screen 3**.

#### Position

- **Remember Position**  
  Royal TS will remember the last window position after you've disconnected the connection and tries to open the external connection window at the same position the next time you connect.
- **Custom Left and Top**  
  Specify the left and top coordinates (in pixels) where the external connection window should be positioned.

#### Size

- **Remember Size**  
  Royal TS will remember the last window size after you've disconnected the connection and tries to open the external connection window with the same size the next time you connect.
- **Custom Width and Height**  
  Specify the width and height (in pixels) of the external connection window.
- **Maximize**  
  The external connection window will be maximized.
- **Preferred Size**  
  The external connection window will use the sized configured in the connection. This setting will only be effective for connection types supporting a custom client size (for example the **Desktop Size** in the [Display Options of a Remote Desktop Connection](xref:royalts_reference_connections_rdp#-display-options)). If a connection type doesn't support a custom client size the setting will be ignored and the external window will be maximized.

#### Minimize Main Window

When checked, Royal TS will minimize the main window after the connection was established.

#### Open Display Properties

Opens the display properties control panel. With the control panel you can identify your screens.
