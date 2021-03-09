---
uid: royalts_advanced_appsettings
name: Application Settings
order: 10400
---

# Application Settings

## General Information
In Royal TS V6 we removed the RoyalTS.exe.config XML configuration file. Instead we are now looking for an `appsettings.json` file or individual settings in the environment variables.  

You can find a sample file `appsettings-sample.json` in the installation directory.  

## Configuration Provider
Royal TS supports different configuration provider to apply the application settings. The order and priority of the configuration providers is:
```none
 1. JSON File in Configuration Path (always %appdata%\code4ward)
 2. => JSON File in Application Path
 3.    => Environment Variables
 4.       => Registry (Current User)
 5.          => Registry (Local Machine)
 ^
 Priority
```
Royal TS will read, parse and process the configuration in the above order whenever Royal TS is started. If there are conflicting settings, the **configuration provider with the higher priority will overwrite the setting from the lower priority**.

### JSON File (Configuration Path)
Place a JSON file in the configuration path. The configuration path is always:
```batchfile
%APPDATA%\code4ward
```
> [!IMPORTANT]
> You cannot change the configuration path for the `appsettings.json` file but you can set the configuration path in the `appsettings.json` file for all settings within Royal TS which refer to the configuration path. This is useful when you want to make Royal TS **portable**.

Here's the sample JSON file:
```javascript
{
  "RoyalTS": {
    "ShowSplashScreen": true,
    "TemporaryFiles": "%TEMP%",
    "ConfigurationPath": "%APPDATA%\\code4ward",
    "LocalConfigurationPath": "%LOCALAPPDATA%"
  } 
}
```

### JSON File (Application Path)
Place a JSON file in the application path (install path) where RoyalTS.exe is located. The default path is:
```batchfile
%ProgramFiles%\RoyalTS V6
```
Create or deploy a JSON file in the above directory with the name:
```batchfile
%ProgramFiles%\Royal TS V6\appsettings.json
```

### Environment Variables
Create environment variables like this:
```batchfile
RTS_RoyalTS__ShowSplashScreen = False
RTS_RoyalTS__ConfigurationPath = C:\somepath\RoyalTS
```
> [!CAUTION]
> Please note that the first seperator of the prefix (RTS_) has only **one underscore character** and the seperator between the object type and the property name (for example ...RoyalTS__ShowSplashScreen) has **two underscore characters**.

### Registry (Current User)
Create the following registry key by script or using group policies:
```batchfile
[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS]
"ShowSplashScreen"="false"
"ConfigurationPath"="C:\somepath\RoyalTS"
```

### Registry (Local Machine)
Create the following registry key by script or using group policies:
```batchfile
[HKEY_LOCAL_MACHINE\Software\Policies\RoyalApps\RoyalTS]
"ShowSplashScreen"="false"
"ConfigurationPath"="C:\somepath\RoyalTS"
```

## Settings

### ShowSplashScreen
Default Value: `True`
Shows the splash screen when Royal TS starts.

`False`
Does not show the splash screen when Royal TS starts.

### TemporaryFiles
Default Value: `%TEMP%`
The path Royal TS is using for temporary files like:
- local file copy when editing files using the File Transfer connection
- dynamic folder scripts
- key files for PuTTY
- temporary VNC files
- browser cache for Web Page connection using Chromium engine

> [!IMPORTANT]
> The content of this directory will be deleted when Royal TS is closed.

### ConfigurationPath
Default Value: `%APPDATA%\\code4ward`
The path Royal TS is using for roaming configuration files like:
- settings (*Application* document)
- license information
- keyboard shortcut configuration
- ribbon customization
- plugin settings
- user specific settings

> [!TIP]
> To make Royal TS *portable*, make sure you set the configuration path to a directory which is available whenever Royal TS is started.

### LocalConfigurationPath
Default Value: `%LOCALAPPDATA%`
The path Royal TS is using for local files which are not available when users roam.