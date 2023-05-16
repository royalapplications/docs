---
uid: royalts_reference_options
name: Options
order: 1000
---

# ![](/r2023/images/RoyalTS/Application/SVG_ApplicationOptions_32.svg#img_header)Options

The Options dialog allows you to set application settings, manage your license and manage the deleted objects in the Application document.

## Open the Options Dialog

- Click the **File** tab on the ribbon and click on **Options** in the backstage view.
- In the **Navigation** panel, select the **Application** document and click on **Properties**.
- On the **View** tab, click on **Options**.

## ![](/r2023/images/RoyalTS/Application/SVG_ApplicationCrown_32.svg#img_header) General

### Start and Exit

#### Don't create the Dashboard Tab

If checked, Royal TS will not create the Dashboard tab automatically when Royal TS starts. The Dashboard tab can be created manually using the Dashboard button on the View tab.

#### Start minimized

If checked, Royal TS will start minimized.

> [!NOTE]
> While Royal TS will be started and kept minimized, dialog boxes (such as password prompts, reconnect dialog, etc.) are still showing up.

#### Application Start

The Application Start drop-down list offers the following settings:

- **Do not open any documents**  
  Royal TS will start without opening any documents.
- **Open documents from last session**  
  Royal TS will remember which documents were opened the last time you used Royal TS and will open them again when you start Royal TS.
- **Open a selection of documents**  
  Click on the Files ... button to manage a list of files to be opened when Royal TS starts.
- **Show the 'Getting Started' page**  
  If selected, Royal TS will show the Getting Started page which is shown by default when you start Royal TS for the first time.

#### The Reconnect drop-down list offers the following settings:

- **Prompt**  
  Royal TS will prompt if there are any connections from the previous session which can be reconnected.
- **Always Reconnect**  
  Royal TS will always reconnect all connections from the previous session.
- **Never Reconnect**  
  Royal TS will never reconnect or prompt. All connections from the previous session are ignored.

#### Show Warning for Active Connections

If checked, Royal TS will show a warning when you close the application and connections are still active.

### Backups

#### Create .backup file

If checked, Royal TS will keep a .backup file in the same folder where the document is stored.

#### Backup Automatically

If checked and configured, Royal TS will keep a configured number of backup documents on your computer. By default the backup is kept in %temp% (\*.rtsbu files).

#### Backup Path

The folder you want Royal TS to keep your document backups.

#### History

The number of files Royal TS should keep for your backups.

### Updates

#### Check for Updates

If checked, Royal TS will check for newer versions online. The Check Now... button can be clicked to immediately check for new versions.

#### Include Beta Releases

If checked, Royal TS will also report if a new beta release is available.

> [!NOTE]
> If you are running a beta version, Royal TS will always check for new beta releases.

#### Collect anonymous usage statistics

If checked, Royal TS will collect usage statistics for further analysis.

> [!NOTE]
> Sharing anonymous application usage statistics is very helpful to improve Royal TS. This information helps our team to focus our development efforts in areas of high demand. Anonymous data is kept confidential and is never shared with third parties. To learn about which data we collect and why, read our [Privacy Policy](https://www.royalapplications.com/ts/win/privacy).

### Ad Hoc

#### Ad Hoc History

Specify how many items to remember in the ad hoc connection history.

#### Clear

Clears the ad hoc connection history.

#### Remove Ad Hoc Connections after Disconnect

If checked, Royal TS will automatically remove Ad Hoc connections as soon as they disconnect. If you disable this option, you have to manually delete Ad Hoc connections. All Ad Hoc connections are removed when the application is closed.

#### Ad Hoc connection identifier

If checked, an Ad Hoc connection name suffix is appended.

### Other

#### Minimize to Notificateion Area (Systray)

When checked, minimized windows will not be displayed in the windows taskbar. Royal TS displays an icon in the notification area (systray) for you to access minimized windows.

#### Reset Warnings and Messages

Clicking this button will reset and show all the messages again where you checked "Do not show this message again".

#### Open File Location

Royal TS saves all application settings and the contents of the Application document in the configuration file:

```batchfile
%APPDATA%\code4ward\code4ward.RoyalTS.UserPreferences.config
```

Click this button to open the file location of the configuration file.

> [!NOTE]
> The default path %APPDATA%\code4ward can be changed in the RoyalTS.exe.config file (which is located in the Royal TS installation folder). This can be useful if you want to make Royal TS portable and start it from a USB memory stick.

## ![](/r2023/images/RoyalTS/Application/SVG_PageLicense_32.svg#img_header) License

The License page allows you to manage or reset your Royal TS license.

### License Information

#### Licensed to

Enter the exact "Licensed To" text from the email you received after purchasing Royal TS.

#### License Key

Enter the exact "License Key" text from the email you received after purchasing Royal TS.

#### Reset License

Click to reset your Royal TS license and revert to limited Shareware mode.  
For more information about the Shareware mode, read the section Shareware Information.

## ![](/r2023/images/RoyalTS/Application/SVG_PageSecurity_32.svg#img_header) Security

### ![](/r2023/images/RoyalTS/Application/SVG_PageEncryption_32.svg#img_header) Encryption

If you want to store your credentials and passwords in the current document, it's recommended to provide an encryption password. Royal TS will prompt for this password when you open the document.

#### Enable Encryption

Check this option to password protect your document or Application document.

> [!Note]
> Password protected and encrypted documents require you to enter the password in order to open the document or edit the document properties.
>
> If you password protect and encrypt your Application document using the Options command on the VIEW tab, Royal TS will prompt you to enter the password when Royal TS starts and whenever you want to change the options.

#### Password

Enter a strong password or passphrase.

#### Confirm

Confirm your password.

Read more about Security and Encryption in Royal TS [here](xref:royalts_intro_security).

## ![](/r2023/images/RoyalTS/Application/SVG_PageRoyalPasswords_32.svg#img_header) Browser Extensions

The **Browser Extensions** page allows you to configure setting used for communication between Royal TS and the browser extensions. Royal TS allows you to access credentials from your documents in your web browser.

#### Enable Browser Extensions

If checked, installed browser extensions for password management are able to retrieve credential information from Royal TS for automatic logon on web sites.

#### Port

Specify the listener port for browser extensions.

#### Verify Browser Code Signature

If checked, Royal TS will perform additional security checks to ensure credentials are accessed from the browser extension.

#### Authentication Timeout

Number of minutes after re-authentication is necessary in the browser extension.

#### Reset trusted browser extensions

Click to reset all trusted browser extensions. Royal TS will prompt for each extension again upon access.

## ![](/r2023/images/RoyalTS/Application/SVG_PageDeletedObjects_32.svg#img_header) Deleted Objects

The **Deleted Objects** page allows you to configure the retention (in days) for deleted objects, recover deleted objects and purge all deleted objects permanently.

#### Retention (in Days)

Specify the number of days you want to keep deleted objects in your documents.

#### Recover

Select one or more deleted objects from the list and click on the Recover button. After clicking the Recover button you will be asked to specify the new destination folder for the recovered objects. You cannot recover deleted folders.

## ![](/r2023/images/RoyalTS/Application/SVG_PageUserInterface_32.svg#img_header) User Interface

The **User Interface** page allows you to modify the Royal TS user interface.

### General

#### Scrollbar Style

The scrollbar style used in the application:

- Always
- Auto Expand
- Auto Hide

#### Enable Pixel-Scrolling

If checked, smooth pixel-scrolling will be used where possible.

#### Panel Activation

The mode how auto-hidden dock panels are activated:

- Hover (Default)
- Click

#### Allow Animations

If checked, the parent folder name of the selected connection is shown in the window title.

#### Display Scaling

- **DPI Unaware**  
  Royal TS will render the user interface for 96 DPI. The user interface will be stretched and blurry on high DPI screens. Use this mode for best compatibility.
- **System Aware**  
  Royal TS will render the user interface according the DPI settings of the primary screen.
- **Per Monitor Aware** _(Experimental)_  
  Royal TS will adapt the user interface rendering depending on the screen that displays the user interface.

#### Enable DirectX Rendering

If checked, hardware accelerated DirectX rendering will be used where possible.

#### Window Title

Choose which information Royal TS should display on the Window title:

- **Document Name**  
  If checked, the document name of the selected object is shown in the main window title.
- **Folder Name**  
  If checked, the parent folder name of the selected connection is shown in the window title.
- **Selection**  
  If checked, the name of the selected object is shown in the main window title.
- **Description**  
  If checked, the description (if available) of the selected object is shown in the window title.

#### Hide Status Bar

If checked, the Status Bar will not be visible.

#### Font Size

The font size used for the tree and list views. Default font size is 9.0.

#### Show Tooltips in Forms

If checked, tooltips are shown.

#### Language

Languages other than English are supported by the community. Translations may be incomplete or inaccurate. If you want to help with the translation, visit this link.

### Navigation

#### Include Computer Name / URL

When checked, Royal TS will include the computer name / URL field text in the search.

#### Include Description

When checked, Royal TS will include the description field text in the search.

#### Include Notes

When checked, Royal TS will include the notes text in the search. Enabling this option may impact search performance.

#### Include Folders

When checked, Royal TS will include all objects in a folder when the folder name matches the search text. Enabling this option may impact search performance.

#### Show Main Filter Buttons

When checked, the main filter buttons (Favorites, Active and Inactive) are shown directly in the search box.

#### Perform Fuzzy Searches

When checked, Royal TS will perform fuzzy searches in the Navigation tree. Enabling this option may impact search performance.

#### Show Tooltips

If checked, Royal TS will display a tooltip with additional information when hovering over a Navigation tree item.

#### Use colors in the Navigation tree

If checked, the text in the tree will be colorized with the configured color of the connection.

#### Show Favorite Indicator

If checked, Royal TS will show an indicator for favorite objects.

### Tabs

#### Custom Caption

Configure what information the tab caption should show. Replacement tokens can be used.

#### Display active tab caption bold

If checked, the tab caption text will be displayed using a bold font to easily recognize the focused tab.

#### Tab Size

Select how the tabs should be sized.

- Auto (Default): the tab size is set automatically based on the content
- Fill: the tabs will always fill the header
- Manual: a maximum tab size can be enforced

#### Hide Tabs

If checked, the Tab Bar will not be visible. To keep the tab contents in sync, make sure you configured Track Selection in Tab Bar in the Behavior settings.

#### Max. Tab Size

Enter the maximum tab size.

#### Multi-Line Tabs

If enabled, multiple lines of tabs are displayed instead of scrolling through tabs.

#### Border Size

Adjust the border size of the colorized connection border.

#### Show colorized border

If checked, a colorized border will be drawn around the connection. Connections with the default color (black) will not show a colorized border.

#### Use colors in Tabs

If checked, the tab caption will be colorized with the configured color of the connection.

#### Enable Taskbar Thumbnails

If checked, Royal TS will display thumbnails for each tab in the taskbar.

## ![](/r2023/images/RoyalTS/Application/SVG_SkinsColorScheme_32.svg#img_header) Appearance

The **Appearance** page allows you to adjust the color scheme.

#### Color Scheme Mode

The Color Scheme Mode allows you to pick from four different presets which will change the appearance:

- Default Colors
- Light Colors
- Dark Colors
- Follow Windows Color Scheme

### General Settings

#### Compact User Interface

If enabled, the application will switch to the compact user interface setting. Selecting _Automatic_ enables the setting for Windows 10 or earlier and disables it for Windows 11.

#### Rounded Corners

If enabled, rounded corners will be active within the application. Note that this does not affect the Windows rounded corners as they are handled by the operating system. Selecting _Automatic_ will disable the setting for Windows 10 or earlier and enables it for Windows 11.

#### Accent Color Configuration

This setting affects the _Primary Background_ and _Foreground Colors_. When set to _Automatic_, Royal TS will try to follow the Windows OS accent color configuration. You can also _Specify a Base Color_ and let Royal TS figure out the other colors based on this color. Selecting _Custom_ allows you to set each of the _Primary Background_ and _Foreground Colors_ individually.

### Color Settings

The various Color Settings allow you to adjust the look of Royal TS even further.

## ![](/r2023/images/RoyalTS/Application/SVG_PageMouseEvents_32.svg#img_header) Behavior

The **Behavior** page allows you to configure the default behavior of connections, tabs and when the mouse is used.

### Navigation Tree

#### Track Navigation tree selection in the tab bar

If checked, selection changes in the Navigation panel will automatically switch the tabs.

#### Track tab selection in Navigation tree

If checked, switching between tabs will track the object in the Navigation panel.

#### Automatically focus active connections

If checked, clicking an active connection in the Navigation panel will automatically transfer the input focus to the connection. Selection changes caused by keyboard navigation will not result in a focus transfer. To transfer the input focus to the connection using the keyboard, press Enter when an active connection is selected in the Navigation panel.

#### External Window: Select Dashboard

If checked, selection changes in the Navigation panel where connections are currently shown in an external window will automatically switch to the dashboard tab (if available) of the selected connection.

#### Connect / Disconnect all in Folder

Connect folder behavior: The behavior when connect all in folder and disconnect all in folder menu item is selected.

### Tabs and Connections

#### Active

Select one of the available actions when you double-click an active connection:

- Do nothing
- Edit Properties
- Disconnect
- Reconnect
- Ad Hoc

#### Inactive Connections

Select one of the available actions when you double-click an inactive connection:

- Do nothing
- Edit Properties
- Connect

#### Tabs

Select one of the available actions when you double-click a connection tab:

- Do nothing
- Edit Properties
- Disconnect
- Reconnect
- Toggle Window Mode
- Ad Hoc

#### Tab Close

Select one of the available options when a tab is closed:

- Select Dashboard
- Select tab to the left
- Select tab to the right

#### Switcher

Select the sort order the tabs should be displayed in the tab switcher:

- **Activation Sequence**  
  The tabs are displayed in reverse order based on the tab activation, similar to Visual Studio.
- **Display Order**  
  The tabs are orders as displayed, similar to web browsers.
- **Alphabetical**  
  The tabs are ordered alphabetically.

#### Keep remotely disconnected tabs open

If checked, Royal TS will not automatically close any tabs when the connection was disconnected remotely.

#### Disable tab drag to external window

If checked, Royal TS will not allow you to drag a tab out of the tab bar to create an external window.

### Tasks and Credentials

#### Tasks

Select one of the available actions when you double-click a task:

- Do nothing
- Edit Properties
- Execute Task

#### Credentials

Select one of the available actions when you double-click a credential:

- Do nothing
- Edit Properties
- Copy Username  
  Copies the credential's username to the clipboard.
- Copy Password  
  Copies the credential's password to the clipboard.

### Modifiers

#### Background connect when holding the Shift key

If checked, Royal TS will open the connection tab in the background when the Shift key is pressed while connecting.

> [!Note]
> Holding the Shift key while changing the selection in the Navigation tree will always prevent focus transfer and activation of connections or dashboards.

#### Apply Overrides

Use Overrides to apply personal settings before establishing a connection. Configure Overrides in the Default Settings Dashboards or Plugin Management.

- Apply while holding the Alt key
- Always apply, except when holding the Alt key
- Apply while holding the Ctrl key
- Always apply, except when holding the Ctrl key

## ![](/r2023/images/RoyalTS/Application/SVG_AddGeneralCustomize_32.svg#img_header) Customize Add Menu

The **Customize Add Menu** page allows you to configure which object types to show in the Add... menu.

## ![](/r2023/images/RoyalTS/Application/SVG_PageKeyboard_32.svg#img_header) Keyboard Shortcuts

The **Keyboard Shortcuts** page allows you to configure keyboard shortcuts to commands or custom context commands.

See also [Commands](xref:royalts_ui_commands#-keyboard-shortcuts).

## ![](/r2023/images/RoyalTS/Application/SVG_Notifications_32.svg#img_header) Notifications

The **Notifications** page allows you to configure the actions in Royal TS which can show Windows notifications.

#### Document and file operations

If enabled, document and file operations may show a Windows notification.

#### Connection activities

If enabled, connection activities may show a Windows notification.

#### Plugins

If enabled, plugins may show a Windows notification.

## ![](/r2023/images/RoyalTS/Application/SVG_EditSort_32.svg#img_header) Default Sort Settings

The **Default Sort Settings** page allows you to configure the default sort criteria when you click the Sort command on the Home or Edit tab in the Move & Sort group.

Specify up to 3 sort criteria to sort your connections. Each sort criteria allows you to specify the object property to sort and whether to sort ascending or descending.

#### Apply to Subfolders

If checked, all subfolders are sorted as well when you click the Sort command.

## ![](/r2023/images/RoyalTS/Application/SVG_ActionSaveScreenshot_32.svg#img_header) Screenshots

The **Screenshots** page allows you to configure where and how Royal TS stores screenshots. The screenshot file format is PNG and the name is automatically generated based on the current date and time and the connection name. By default, screenshots are saved in the user's Picture folder in the directory "Royal TS".

#### Use Custom File Name

Check to specify a custom file name for the screenshots.

#### Use Custom Folder

Check to specify a custom folder where Royal TS saves all the screenshots.

#### Limit Screenshot Size

Check this option to limit the screenshot size and ensure not to exceed the number of pixels in width or height.

## ![](/r2023/images/RoyalTS/Application/SVG_PageTabScan_32.svg#img_header) Tab Scan

The **Tab Scan** page allows you to configure automatic scanning through all open tabs. Tab scanning can be switched on and off using the View tab on the ribbon or the command line.

#### Interval

The number of seconds each tab page should be shown before Royal TS will select the next one.

## ![](/r2023/images/RoyalTS/Application/SVG_ApplicationLog_32.svg#img_header) Logging

The **Logging** page allows you to configure how Royal TS keeps records of user activity, error and debug information.

### Internal Logging

#### Enable Internal Logging

Turns internal logging on and off.

#### Logging Level:

Select which log entry severities to include in the internal log.

#### Save to File

This option allows you to save the log to a file either when you close Royal TS or after period of time/number of log entries.

- **never:** log is cleared and lost when you close Royal TS.
- **on exit:** a log file is written to disk when you close Royal TS.
- **on exit or after n minutes/log entries:** a log file is written to disk when you close Royal TS or after a defined number of minutes/log entries.

#### Create New File

This option allows you to control when Royal TS creates new log files, when to keep log files and how often the log file is written to for storage.

- **never (overwrite):** the log is always saved to the same file and overwritten whenever it is saved to disk.
- **on exit:** a new log file is created when you close Royal TS.
- **on exit or after n minutes/log entries:** a new log file is created when you close Royal TS or after a defined number of minutes/log entries.

#### Logfile Directory

Specify a directory where the log files should be stored. Use the browse button (...) to browse for a folder.

> [!Tip]
> You can also use environment variables in the Logfile Directory, such as %TEMP%.

#### Logfile Name

Specify the name of the log file.

> [!Note]
> If you have configured to create multiple logfiles, the file name is automatically extended and will include the time stamp.

### Event Log

#### Enable Logging to the Windows Event Log

If checked, Royal TS writes log entries to the Windows Event Log.

> [!Important]
> Royal TS creates a new Windows Event Log called "Royal TS". If you want to use this option, Royal TS needs to be started at least once using local administrator rights in order to create the new Event Log on your system.

#### Logging Level

Select which log entry severities to include in the internal log.

#### Template

Use the template to control which information should be published to the event log. You can use the following replacement tokens in the event log message:

| Replacement Token                    | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| $Action$                             | The value of the action field, such as Connect or Disconnect.                 |
| $CustomField1$ up to $CustomField10$ | The value of the custom field.                                                |
| $Details$                            | The log entry details.                                                        |
| $LocalHost$                          | The computer name running Royal TS.                                           |
| $LocalUser$                          | The user account name running Royal TS.                                       |
| $Message$                            | The log entry message.                                                        |
| $ObjectDisplayName$                  | The name of the object in context to the log entry.                           |
| $ObjectID$                           | The ID (Guid) of the object in context to the log entry.                      |
| $ObjectType$                         | The type of object in context to the log entry.                               |
| $RemoteURI$                          | The URI (computer name, IP or URL) of the object in context to the log entry. |
| $RemoteUser$                         | The username used on the object in context to the log entry.                  |
| $Severity$                           | The log entry's severity.                                                     |
| $TimeStamp$                          | Date and time of the log entry.                                               |

#### Reset Template

Click the button to reset the event log template to the default setting.

### Console

#### Enable Logging to the Console

If checked, Royal TS writes log entries to the STDOUT console.

#### Logging Level

Select which log entry severities to include in the console log.

#### Use Color Output

If checked, log messages are shown in different colors depending of the log level.

### Trace File

#### Enable Logging to a Trace File

If checked, Royal TS writes log entries to a trace file.

#### Logging Level

Select which log entry severities to include in the trace file log.

#### Trace File Directory

Specify a directory where the trace file should be saved. Click the browse button (or Ctrl + B) to select a folder. You may also use environment variables like %TEMP%

#### Trace File Name

Specify the name of the trace file.

#### Overwrite File on Application Start

If checked, the trace file is overwritten when Royal TS starts, otherwise the trace messages will be appended to the existing file.

## ![](/r2023/images/RoyalTS/Application/SVG_PageTroubleshooting_32.svg#img_header) Troubleshooting

The **Troubleshooting** page allows you to specify your contact information that will be appended to the error reports by Royal TS and also lets you reset application settings.

### Error Reporting

Leave name and email address blank to send error reports anonymously.

#### Email Address

Enter your email address which we should use to contact you.

#### Test Crash Report

A test crash report is generated allowing you to test if a crash report can be submitted.

### Reset Settings

#### Delete EasyHook DLLs

Deletes the EasyHook files from the user profile directory. After the files have been deleted, you can re-download them in the Dashboard/Overview tab.

#### Reset Dock Panel Layout

Resets the docking layout to the default setting (Navigation panel on the left).

#### Reset Quick Access Toolbar (QAT)

The quick access toolbar (by default above the ribbon) customization will be reset.

#### Reset Recent Files and Folder List

The recent files and folder list in the backstage view/application menu will be reset.

#### Reset All Settings

All the above settings as well as all options are reset.

## ![](/r2023/images/RoyalTS/Application/SVG_PageProxy_32.svg#img_header) Proxy Server

The **Proxy Server** page allows you to enable online communication for Royal TS through a proxy server with optional authentication.

#### Use a Proxy Server

Enable or disable online communication using a proxy server.

#### Proxy Server

Specify the proxy server name (FQDN) or IP address to use.

#### Port

Specify the proxy server port to use.

#### Username

Provide a username if your proxy needs authentication. Leave blank if you do not need to authenticate against your proxy server.

#### Password

Provide a password if your proxy needs authentication. Leave blank if you do not need to authenticate against your proxy server.

> [!Important]
> It's strongly recommended to encrypt and password protect your Application document if you need to enter a proxy username and password.

## ![](/r2023/images/RoyalTS/Application/SVG_ScriptPaths_32.svg#img_header) Script Interpreter

To use the dynamic folder or dynamic credential feature, scripts must be executed on your system. Configure the path to the script interpreter executables for each supported scripting language.

#### Script Interpreter

Select a scripting language.

#### Path

Specify the path to the executable.

> [!Tip]
> Environment variables in the path are supported.

#### Arguments

Specify additional arguments to be passed on to the script interpreter.

#### Do not load the PowerShell profile (applies to PowerShell only)

If checked the -noprofile parameter will be used.

## ![](/r2023/images/RoyalTS/Application/SVG_DynamicFolderClosed_32.svg#img_header) Debugging

If checked, additional log entries are written.

#### Enable Debug Logging

When debug logging is enabled, additional log entries will be generated when executing dynamic folder scripts. These log entries can be used to diagnose issues in your scripts. Please note that this can cause sensitive data to be logged and should only be enabled for debugging purposes!

[!include[notes.md](~/royalts/_shared/notes.md)]

## ![](/r2023/images/RoyalTS/Application/SVG_PageCustomFields_32.svg#img_header) Custom Field Labels

The **Custom Field Label** page allows you to enter labels used for the Custom Fields in other objects. The custom field labels are also shown in the **Folder Dashboard** views as well as in the **Properties** panel.
