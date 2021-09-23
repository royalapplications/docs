---
uid: scripting_object_royalapplicationsetting
name: RoyalApplicationSetting
order: 6800
---

# RoyalApplicationSetting
## General
### CustomImageName
Type: `string`, Default Value: `Empty String`  
A custom image name from a pre-defined set of images  
### AutoBackupFile
Type: `bool`, Default Value: `true`  
Creates a .backup file in the same directory where the document is stored.  
### Name
Type: `string`, Default Value: `Empty String`  
The display name of the object.  
### AutoStartDocumentMode
Type: `int`, Default Value: `3`  
0 = Empty   
 1 = Open last files   
 2 = Open selected files (from AutoStartDocumentList)   
 3 = Getting Started Page (Legacy)  
### Description
Type: `string`, Default Value: `Empty String`  
The description text of the object.  
### AutoStartDocumentList
Type: `string[]`, Default Value: `new string[] { }`  
A list of files Royal TS will open when it starts  
### AutoReconnectMode
Type: `int`, Default Value: `0`  
0 = Prompt   
 1 = Always Reconnect   
 2 = Never Reconnect  
### DoNotShowGettingStartedPageOnStartup
Type: `bool`, Default Value: `false`  
Don't show the getting started page on launch (macOS only)  
### Favorite
Type: `bool`, Default Value: `false`  
Whether or not the object is a favorite.  
### DoNotCreateDashboardOnStartup
Type: `bool`, Default Value: `false`  
Don't create the Dashboard tab  
### StartMinimized
Type: `bool`, Default Value: `false`  
Starts Royal TS minimized  
### ColorFromParent
Type: `bool`, Default Value: `false`  
Use the Color value from the parent folder.  
### Color
Type: `string`, Default Value: `Empty String`  
Assign a custom color as hex string to the object (#FF0000 for red). Empty string is the default color value (no custom color assigned).  
### ColorName
Type: `string`, Default Value: `Empty String`  
Assign a color from a color palette to the object. If both, a color name and a custom color (hex string) are provided, the color name is preferred.  
### AutoBackupGen
Type: `int`, Default Value: `10`  
Backup History (0 = disable)  
### AutoBackupPath
Type: `string`, Default Value: `%temp%`  
Backup Path  
### RegisterFileTypes
Type: `string`, Default Value: `.rtsx;.rtsz`  
.rtsz = Royal TS Document   
 .rtsx = Royal TS V2 Document  
### RegisterUrlProtocols
Type: `string`, Default Value: `rtsx;royalappslicense;rtscli`  
rtsx   
 royalappslicense  
### ConfirmClose
Type: `bool`, Default Value: `true`  
Application Close; Show a warning for active connections  
### ID
Type: `Guid`, Default Value: `Guid.Empty`  
The unique object identifier (GUID) of the object.  
### ExternalID
Type: `string`, Default Value: `Empty String`  
The external unique object identifier (GUID) of the object.  
### CheckForUpdatesOnStartup
Type: `bool`, Default Value: `true`  
Check for Updates  
### CheckForBetaUpdates
Type: `bool`, Default Value: `false`  
Check for Updates: Include Beta Releases  
### CheckForServerUpdates
Type: `bool`, Default Value: `true`  
Checks for server update  
### CheckForServerBetaUpdates
Type: `bool`, Default Value: `false`  
Checks for server beta updates  
### CheckForPlugInUpdates
Type: `bool`, Default Value: `true`  
Check for Plugin Updates  
### UpdatePreference
Type: `int`, Default Value: `0`  
0 = Download and install when closed   
 1 = Download installer using browser   
 2 = Download zip using browser  
### CollectUsageStatistics
Type: `bool`, Default Value: `false`  
Collect anonymous usage statistics  
### AutoRemoveAdHocWhenDisconnected
Type: `bool`, Default Value: `true`  
Remove Ad Hoc connection after closing the tab  
### AdHocIdentifierEnabled
Type: `bool`, Default Value: `true`  
Use Ad Hoc Identifier  
### AdHocIdentifierString
Type: `string`, Default Value: ` (Ad Hoc)`  
Ad Hoc connection identifier  
### MinimizeToSysTray
Type: `bool`, Default Value: `false`  
Minimize to Notification Area (Systray)  
### DeepKeyboardHook
Type: `bool`, Default Value: `false`  
Deep Keyboard Hooks are used to recognize some keyboard shortcuts.  
### DeepKeyboardHookForExternalApps
Type: `bool`, Default Value: `false`  
Deep Keyboard Hooks are also used when Royal TS hosts external applications.  
### WindowWidth
Type: `int`, Default Value: `999`  
Window Width  
### WindowHeight
Type: `int`, Default Value: `743`  
Window Height  
### PositionTop
Type: `int`, Default Value: `25`  
Window Top Position  
### PositionLeft
Type: `int`, Default Value: `25`  
Window Left Position  
### WindowMaximized
Type: `bool`, Default Value: `true`  
Window Maximized  
### ScreenId
Type: `int`, Default Value: `1`  
The screen id (display) where Royal TS was open last time. For multimonitor setups  
### PanelSlideInDelay
Type: `int`, Default Value: `-1`  
The delay in ms until the panel slides in  
### OverviewZoomLevelWin
Type: `int`, Default Value: `250`  
Zoom level for Overview page (on Windows)  
### OverviewZoomLevel
Type: `double`, Default Value: `.28`  
OverviewZoomLevel for overview page  
### OverviewAutomaticallyAdjustZoomLevel
Type: `bool`, Default Value: `true`  
Automatically adjust Overview Zoom Level  
### OverviewHidden
Type: `bool`, Default Value: `false`  
Hide Overview tab  
### SuperStartPageBehavior
Type: `int`, Default Value: `2`  
0 = Show never   
 1 = Show always   
 2 = Show when new content is available   
### ShowWindowListAlphabetically
Type: `bool`, Default Value: `true`  
Show Window List Alphabetically  
### KeePassPath
Type: `string`, Default Value: `Empty String`  
Path to the keepass exe  
### ShowToolbar
Type: `bool`, Default Value: `false`  
Show Toolbar (macOS)  
### ShowRibbon
Type: `bool`, Default Value: `true`  
Shows the ribbon if true. Ribbon is collapsed if false  
### UseExtendedFullScreen
Type: `bool`, Default Value: `false`  
Whether to maximize screen real estate when entering full screen or not (macOS only)  
## Behavior
### AllowBackgroundConnect
Type: `bool`, Default Value: `true`  
Background connect when holding the Shift key  
### AutoFocus
Type: `bool`, Default Value: `true`  
Automatically focus active connections  
### CloseTabActivationMode
Type: `int`, Default Value: `0`  
0 = Select Dashboard (when available)   
 1 = Select tab to the left   
 2 = Select tab to the right  
### ConnectAllInFolderBehavior
Type: `int`, Default Value: `0`  
0 = Always ask what to do   
 1 = Include connections from subfolders   
 2 = Only connections from root level  
### DisableExternalWindowDrag
Type: `bool`, Default Value: `false`  
A tab cannot be dragged out of the tab bar to create an external window.  
### DontCloseTabOnRemoteDisconnect
Type: `bool`, Default Value: `false`  
Keep remotely disconnected tabs open  
### ExternalWindowSelectDashboard
Type: `bool`, Default Value: `false`  
External Window: Select Dashboard  
### MonitorConnectionStateOfDisconnectedTabs
Type: `bool`, Default Value: `true`  
Monitor the connection state of disconnected tabs (requires DontCloseTabOnRemoteDisconnect to be enabled)  
### MouseDoubleClickModeActive
Type: `int`, Default Value: `2`  
0 = Do nothing   
 1 = Edit Properties   
 2 = Disconnect   
 3 = Reconnect  
### MouseDoubleClickModeConnectionTabs
Type: `int`, Default Value: `4`  
0 = Do nothing   
 1 = Edit Properties   
 2 = Disconnect   
 3 = Reconnect   
 4 = External  
### MouseDoubleClickModeCredentials
Type: `int`, Default Value: `1`  
0 = Do nothing   
 1 = Edit Properties   
 2 = Copy Username   
 3 = Copy Password  
### MouseDoubleClickModeInactive
Type: `int`, Default Value: `2`  
0 = Do nothing   
 1 = Edit Properties   
 2 = Connect  
### MouseDoubleClickModeTasks
Type: `int`, Default Value: `2`  
0 = Do nothing   
 1 = Edit Properties   
 2 = Execute Task  
### OverrideApplyMode
Type: `int`, Default Value: `0`  
0 = Apply override when Alt key is pressed   
 1 = Always apply override, except when Alt key is pressed   
 2 = Apply override when Ctrl key is pressed   
 3 = Always apply override, except when Ctrl key is pressed  
### TabSwitcherMode
Type: `int`, Default Value: `0`  
0 = Activation Sequence   
 1 = Display Order   
 2 = Alphabetical  
### TrackNavigationSelectionInTabBar
Type: `bool`, Default Value: `true`  
Track Navigation tree selection in tab bar  
### TrackTabSelectionInNavigation
Type: `bool`, Default Value: `true`  
Track tab selection in Navigation tree  
## Browser Extension
### PMAuthenticationTimeout
Type: `int`, Default Value: `300`  
The Browser Extensions Authentication Timeout in Seconds  
### PMInstanceIDTrust
Type: `string[]`, Default Value: `new string[] { }`  
A list of Instance ID trust settings for Browser Extension Verification  
### PMListenerPort
Type: `int`, Default Value: `54890`  
Browser Extensions Port  
### PMStartListenerOnLaunch
Type: `bool`, Default Value: `true`  
Enable Browser Extensions  
### PMVerifyBrowserSignature
Type: `bool`, Default Value: `true`  
Enable Browser Extensions Browser Signature Verification  
## Dynamic Folder
### DynamicFolderEvaluateShellPersonalizationFile
Type: `bool`, Default Value: `true`  
When executing dynamic folder scripts, by default the shell personalization file will be evaluated. Disable this setting to disable evaluating the shell personalization file.  
### DynFolderBashArgs
Type: `string`, Default Value: `Empty String`  
Additional Bash arguments for dynamic folder and dynamic credential scripts.  
### DynFolderBashPath
Type: `string`, Default Value: `Empty String`  
The path to Bash (Windows Subsystem for Linux - wsl.exe) for dynamic folder and dynamic credential bash scripts.  
### DynFolderPerlArgs
Type: `string`, Default Value: `Empty String`  
Additional Perl arguments for dynamic folder and dynamic credential scripts.  
### DynFolderPerlPath
Type: `string`, Default Value: `Empty String`  
The path to the Perl executable for dynamic folder and dynamic credential scripts.  
### DynFolderPhpArgs
Type: `string`, Default Value: `Empty String`  
Additional Php arguments for dynamic folder and dynamic credential scripts.  
### DynFolderPhpPath
Type: `string`, Default Value: `Empty String`  
The path to the PHP executable for dynamic folder and dynamic credential scripts.  
### DynFolderPowerShellArgs
Type: `string`, Default Value: `Empty String`  
Additional PowerShell arguments for dynamic folder and dynamic credential scripts.  
### DynFolderPowerShellNoProfile
Type: `bool`, Default Value: `false`  
Prevents the PowerShell profile to be loaded.  
### DynFolderPowerShellPath
Type: `string`, Default Value: `Empty String`  
The path to the PowerShell executable for dynamic folder and dynamic credential scripts.  
### DynFolderPythonArgs
Type: `string`, Default Value: `Empty String`  
Additional Python arguments for dynamic folder and dynamic credential scripts.  
### DynFolderPythonPath
Type: `string`, Default Value: `Empty String`  
The path to the Python executable for dynamic folder and dynamic credential scripts.  
### DynFolderPythonVersion
Type: `int`, Default Value: `0`  
Configure the Python version to use: 0 = Automatic (latest version installed), 2 = Version 2 or older, 3 = Version 3  
### DynFolderRubyArgs
Type: `string`, Default Value: `Empty String`  
Additional Ruby arguments for dynamic folder and dynamic credential scripts.  
### DynFolderRubyPath
Type: `string`, Default Value: `Empty String`  
The path to the Ruby executable for dynamic folder and dynamic credential scripts.  
## Logging
### LoggingConsoleLoggingUseColors
Type: `bool`, Default Value: `true`  
Use Console Color Output  
### LoggingCreateNewFileMode
Type: `int`, Default Value: `0`  
0 = never (overwrite)   
 1 = on exit   
 2 = on exit or after some time/log entries which is defined in LoggingCreateNewFileThreshold and LoggingCreateNewFileUnit  
### LoggingCreateNewFileThreshold
Type: `int`, Default Value: `0`  
If LoggingCreateNewFileMode is set to 2 the threshold controls when a new file will be created  
### LoggingCreateNewFileUnit
Type: `int`, Default Value: `0`  
0 = minutes   
 1 = log entries  
### LoggingEventLogTemplate
Type: `string`, Default Value: `$Message${0}{0}Details:{0}$Details${0}{0}More Information:{0}Local User: $LocalUser${0}Local Host: $LocalHost${0}Remote User: $RemoteUser${0}URI: $RemoteURI${0}Action: $Action${0}Object ID:$ObjectID${0}Object Display Name: $ObjectDisplayName${0}Object Type: $ObjectType${0}{0}Plugin ID: $PluginID${0}Plugin Name: $PluginName${0}Plugin Version: $PluginVersion$`  
Event Log Template  
### LoggingFileName
Type: `string`, Default Value: `RoyalTSLog.rtsl`  
Logfile Name  
### LoggingFilePath
Type: `string`, Default Value: `%temp%`  
Log Directory  
### LoggingLevelConsole
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = Activity   
 1 = Information   
 2 = Warning   
 3 = Error   
 4 = Debug   
 5 =Verbose  
### LoggingLevelFile
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = Activity   
 1 = Information   
 2 = Warning   
 3 = Error   
 4 = Debug   
 5 =Verbose  
### LoggingLevelTraceFile
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = Activity   
 1 = Information   
 2 = Warning   
 3 = Error   
 4 = Debug   
 5 =Verbose  
### LoggingLevelWindowsEventLog
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = Activity   
 1 = Information   
 2 = Warning   
 3 = Error   
 4 = Debug   
 5 =Verbose  
### LoggingSaveToFileMode
Type: `int`, Default Value: `0`  
0 = never   
 1 = on exit   
 2 = on exit or after some time/log entries which is defined in LoggingSaveToFileThreshold and LoggingSaveToFileUnit  
### LoggingSaveToFileThreshold
Type: `int`, Default Value: `60`  
If LoggingSaveToFileMode is set to 2, the threshold and unit controls when the file is saved  
### LoggingSaveToFileUnit
Type: `int`, Default Value: `0`  
0 = minutes   
 1 = log entries  
### LoggingTraceFileName
Type: `string`, Default Value: `RoyalTSTrace.rtsl`  
Trace File Name  
### LoggingTraceFileOverrideOnStart
Type: `bool`, Default Value: `true`  
Overwrite File on Application Start  
### LoggingTraceFilePath
Type: `string`, Default Value: `%temp%`  
Trace File Directory  
### LoggingUseConsoleLogging
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = disabled   
 1 = enabled  
### LoggingUseStandardLogging
Type: `bool`, Default Value: `true`  
Enable Internal Logging  
### LoggingUseTraceFileLogging
Type: `int`, Default Value: `-1`  
-1 = uninitialized   
 0 = disabled   
 1 = enabled  
### LoggingUseWindowsEventLog
Type: `bool`, Default Value: `true`  
Enable Logging to the Windows Event Log  
## Messages
### DontShowDocumentModifiedNotification
Type: `bool`, Default Value: `false`  
A notification is shown when a document is modified on disk  
### DontShowExtendedFullScreenIntroduction
Type: `bool`, Default Value: `false`  
A popup showing a quick introduction to the extended full screen feature  
### DontShowMaintenanceExtensionNotification
Type: `bool`, Default Value: `false`  
A dialog is shown when maintenance can be extended  
### DontShowMajorUpgradeNotification
Type: `bool`, Default Value: `false`  
A dialog is shown when a new major version is available  
### DontShowRestoreConnectionsDialog
Type: `bool`, Default Value: `false`  
A dialog is shown that allows to reconnect to previously disconnected sessions  
## Notifications
### NotifyConnection
Type: `bool`, Default Value: `true`  
If enabled, connection activities may show a Windows notification.  
### NotifyDocument
Type: `bool`, Default Value: `true`  
If enabled, document and file operations may show a Windows notification.  
### NotifyPlugins
Type: `bool`, Default Value: `true`  
If enabled, plugins may show a Windows notification.  
## Password Generator
### PasswordGeneratorAvoidAmbiguousCharacters
Type: `bool`, Default Value: `true`  
Password Generator Avoid Ambiguous Characters  
### PasswordGeneratorIncludeDigits
Type: `bool`, Default Value: `true`  
Password Generator Include Digits  
### PasswordGeneratorIncludeSymbols
Type: `bool`, Default Value: `false`  
Password Generator Include Symbols  
### PasswordGeneratorIncludeUpperCaseLetters
Type: `bool`, Default Value: `true`  
Password Generator Include Uppercase Letters  
### PasswordGeneratorLength
Type: `int`, Default Value: `12`  
Password Generator Length  
## Policy
### PolicyDoNotAllowApplicationDocumentWithoutPassword
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is allowed to have an application document without password protection.  
### PolicyDoNotAllowCheckForBetaUpdates
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is able to configure Royal TS to check for beta updates.  
### PolicyDoNotAllowCheckForUpdates
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is able to configure Royal TS to check for updates.  
### PolicyDoNotAllowCreateCredentialObjects
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is allowed to create credential objects in Royal TS.  
### PolicyDoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is allowed to create credential objects in a document without password protection.  
### PolicyDoNotAllowDocumentsWithoutPassword
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is able to load or save Royal TS documents without password protection.  
### PolicyDoNotAllowRevealPasswords
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is allowed to create credential objects in a document without password protection.  
### PolicyDoNotAllowWeakDocumentPasswords
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is able to specify weak document passwords. The password strength indicator in Royal TS must show 'Great' (color green) in order to accept the password.  
### PolicyDoNotAllowWindowsCredentialManager
Type: `bool`, Default Value: `false`  
This policy setting allows you to manage if a user is allowed to save document passwords in the Windows Credential Manager.  
## Proxy Server
### ProxyEnabled
Type: `bool`, Default Value: `false`  
Use a Proxy Server  
### ProxyPassword
Type: `string`, Default Value: `Empty String`  
Password  
### ProxyPort
Type: `int`, Default Value: `8080`  
Port  
### ProxyServer
Type: `string`, Default Value: `Empty String`  
Proxy Server  
### ProxyUsername
Type: `string`, Default Value: `Empty String`  
Username  
## Screenshots
### ScreenshotFileName
Type: `string`, Default Value: `Empty String`  
Use Custom File Name (leave empty for default file name)  
### ScreenshotFolder
Type: `string`, Default Value: `Empty String`  
Use Custom Folder (leave empty for Pictures folder)  
### ScreenshotMaxSize
Type: `int`, Default Value: `0`  
Limit Screenshot Size (0 for full size)  
## Search Options
### ShowCredentialTreeSearch
Type: `bool`, Default Value: `false`  
Show Credential Panel Search  
### ShowNavigationTreeSearch
Type: `bool`, Default Value: `true`  
Show Navigation Panel Search  
### ShowTaskTreeSearch
Type: `bool`, Default Value: `false`  
Show Tasks Panel Search  
### ShowTodoItemsTreeSearch
Type: `bool`, Default Value: `false`  
Show Todo Items Panel Search  
## Sort Options
### SortDefaultCriteria
Type: `RoyalStore.SortArgument`, Default Value: `new RoyalStore.SortArgument() { SortCriteria1 = RoyalStore.SortCriteria.ObjectType, SortDirection1 = RoyalStore.SortDirection.Ascending, SortCriteria2 = RoyalStore.SortCriteria.Name, SortDirection2 = RoyalStore.SortDirection.Ascending, SortCriteria3 = RoyalStore.SortCriteria.None, SortDirection3 = RoyalStore.SortDirection.Ascending }`  
Default Sort Settings  
## Tab Scan
### TabScanInterval
Type: `int`, Default Value: `5`  
Tab Scan Interval (in seconds)  
## User Interface
### ActiveSuperView
Type: `int`, Default Value: `0`  
0 = Overview   
 1 = Dashboard  
### ActiveTabBold
Type: `bool`, Default Value: `true`  
Display active tab caption bold  
### AllowAnimations
Type: `bool`, Default Value: `true`  
Allow Animations  
### AllowFormGlass
Type: `int`, Default Value: `1`  
0 = form glass disabled   
 1= form glass enabled   
 2 = automatic  
### AutoHideDocumentsList
Type: `bool`, Default Value: `false`  
Whether or not the document list is hidden automatically on macOS.  
### ColorizeConnection
Type: `bool`, Default Value: `false`  
Show colorized border  
### ColorizeTab
Type: `bool`, Default Value: `false`  
Use colors in Tabs  
### ColorizeTitleBar
Type: `bool`, Default Value: `true`  
Show colorized title bar  
### ColorizeTree
Type: `bool`, Default Value: `false`  
Use colors in the Navigation tree  
### ConnectionBorderPadding
Type: `int`, Default Value: `2`  
Border Size  
### DisableDisplayScalingOnHighDpiSettings
Type: `bool`, Default Value: `false`  
If false (default), the OS will scale Royal TS on high DPI displays which may result in lower quality graphics and icons. If true, Royal TS will act as a dpi aware application which provides high quality graphics and icons but may have side effects on remote connections.  
### DocumentsListPosition
Type: `int`, Default Value: `0`  
0 = left   
 1 = right  
### DpiAwareness
Type: `int`, Default Value: `0`  
0 = Off (best compatibility but blurry on high DPI screens)   
 1 = System (scaling based on primary screen)   
 2 = Per Monitor  
### EnableDirectX
Type: `bool`, Default Value: `false`  
Enables hardware accelerated DirectX rendering where possible  
### EnablePixelScrolling
Type: `bool`, Default Value: `false`  
Enable Pixel-Scrolling in Navigation  
### FontSize
Type: `double`, Default Value: `9.00`  
Font size in navigation tree and lists.  
### ForceTreeLines
Type: `bool`, Default Value: `false`  
Always show lines in the Navigation tree  
### FuzzyTreeSearch
Type: `bool`, Default Value: `false`  
When enabled, performs a fuzzy tree search instead of a regular search  
### IncludeDescriptionInTreeSearch
Type: `bool`, Default Value: `false`  
Include Description in search  
### IncludeFoldersInTreeSearch
Type: `bool`, Default Value: `false`  
Include Folders in search  
### IncludeNotesInTreeSearch
Type: `bool`, Default Value: `false`  
Include Notes in search  
### IncludeOnlyConnectedInTreeSearch
Type: `bool`, Default Value: `false`  
Include only Connected in search  
### IncludeOnlyFavoritesInTreeSearch
Type: `bool`, Default Value: `false`  
Include only Favorites in search  
### IncludeUriInTreeSearch
Type: `bool`, Default Value: `true`  
Include URI (Computer Name or URL) in search  
### MaxTabSize
Type: `int`, Default Value: `0`  
The maximum size of a tab header  
### PanelActivation
Type: `int`, Default Value: `0`  
0 = Hover   
 1 = Click  
### ResizeWindowToSessionSize
Type: `bool`, Default Value: `false`  
Whether or not to resize the application window to the currently visible session size  
### ScrollbarStyle
Type: `int`, Default Value: `1`  
0 = Always   
 1 = Auto Expand   
 2 = Auto Hide  
### ShowColoredActiveConnectionIcons
Type: `bool`, Default Value: `true`  
Show colored active connection icons  
### ShowColoredInactiveConnectionIcons
Type: `bool`, Default Value: `true`  
Show colored inactive connection icons  
### ShowConnectionTypeInTabTooltip
Type: `bool`, Default Value: `false`  
Show Connection Type in Tab Tooltip (macOS)  
### ShowDescriptionInWindowTitle
Type: `bool`, Default Value: `true`  
Show the Description in the main window title  
### ShowDocumentNameInWindowTitle
Type: `bool`, Default Value: `false`  
Show the Document Name in the main window title  
### ShowFavoriteIndicator
Type: `bool`, Default Value: `true`  
Shows an indicator for favorites  
### ShowMainFilterButtons
Type: `bool`, Default Value: `false`  
When enabled, the main filter buttons (Favorites, Active and Inactive) are shown directly in the search box.  
### ShowParentFolderNameInWindowTitle
Type: `bool`, Default Value: `false`  
Show the Folder Name in the main window title  
### ShowStatusBar
Type: `bool`, Default Value: `true`  
Show the Status Bar  
### ShowTabBar
Type: `bool`, Default Value: `true`  
Show Tabs  
### ShowTabBarInExternalWindows
Type: `bool`, Default Value: `true`  
Whether or not to show the tab bar in external windows  
### ShowTabPreviewThumbnails
Type: `bool`, Default Value: `true`  
Show Tab Preview Thumbnails  
### ShowTabTitleInWindowTitle
Type: `bool`, Default Value: `true`  
Show the Tab Title in the main window title  
### ShowTaskbarThumbnails
Type: `bool`, Default Value: `false`  
Enable Taskbar Thumbnails  
### ShowTooltipsInForms
Type: `bool`, Default Value: `true`  
Show Tooltips in Dialogs  
### ShowTooltipsInTree
Type: `bool`, Default Value: `true`  
Show Tooltips in the Navigation tree  
### TabCustomCaption
Type: `string`, Default Value: `$Name$`  
Display a custom tab caption using replacement tokens  
### TabMultiLine
Type: `bool`, Default Value: `false`  
Display tabs in multiple lines  
### TabPreviewThumbnailsSize
Type: `int`, Default Value: `1`  
0 = Small   
 1 = Medium   
 2 = Large  
### TabSizeMode
Type: `int`, Default Value: `0`  
0 = Auto   
 1 = Fill   
 2 = Manual  
### TreeFontBold
Type: `bool`, Default Value: `false`  
Render tree view items bold  
### TreeFontSizeOSX
Type: `int`, Default Value: `0`  
0 = Small   
 1 = Medium   
 2 = Large  
### TwoLetterISOLanguageName
Type: `string`, Default Value: `Empty String`  
Language (like en for English or de for German)  
### UIThemeMac
Type: `int`, Default Value: `0`  
0 = Automatic   
 1 = Dark   
 2 = Light  
## Custom Fields
### CustomFieldName1
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 1  
### CustomFieldName2
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 2  
### CustomFieldName3
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 3  
### CustomFieldName4
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 4  
### CustomFieldName5
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 5  
### CustomFieldName6
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 6  
### CustomFieldName7
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 7  
### CustomFieldName8
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 8  
### CustomFieldName9
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 9  
### CustomFieldName10
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 10  
### CustomFieldName11
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 11  
### CustomFieldName12
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 12  
### CustomFieldName13
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 13  
### CustomFieldName14
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 14  
### CustomFieldName15
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 15  
### CustomFieldName16
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 16  
### CustomFieldName17
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 17  
### CustomFieldName18
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 18  
### CustomFieldName19
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 19  
### CustomFieldName20
Type: `string`, Default Value: `Empty String`  
Caption of Custom Field 20  
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

