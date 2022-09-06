---
uid: royalts_advanced_default-settings
name: Default Settings
order: 10300
---

# Default Settings

## General Information
Starting with Royal TS V6, we provide a new and very flexible way to configure default settings. You can deploy and set **initial settings (Options)** as well as **initial default settings for all connection types** for your users using various sources (configuration providers). In addition to initial settings, you can also **enforce application settings (Options)** and **default settings for all connection types**.  

There are configuration providers for **JSON files, environment variables and the registry** (which you can still deploy using GPOs).  

Previous versions had limited GPO support using ADMX files which are not shipped and supported anymore. See also: [Migrate from ADMX files](#migrate-from-admx-files).

## Supported Settings
### Application Settings (Options)
You can set almost all the settings available in the [Options] dialog. You can find a reference of all supported settings in our [Scripting](xref:scripting_object_royalapplicationsetting) section.

### Default Settings
You can control the default settings for each connection type - similar to what you can do in the user interface under Application / Default Settings.  

You can find a reference to all the supported settings for each connection type in our [Scripting](xref:scripting_objects) section.

## Scope
We provide the following scopes to control how and when the settings are applied to the Royal TS configuration.

### Initial
All settings defined in the initial scope are only **applied once when Royal TS starts the very first time** (when no configuration file is present). This can be useful to provide a default configuration for onboarding new users tailored to your environment.  

The user can still change all the settings in Royal TS and they will not be applied again, even if settings in that scope have been changed or added.  

> [!TIP]
> To re-apply the initial scope settings, remove the configuration file to pretend that Royal TS has never been started before. Note that all customizations performed by the user may get lost in that process.

### Default
Settings defined in the default scope will always be **applied when Royal TS starts or when a group policy refresh is executed** on the system.

Even when the user tries to change options or default settings in the user interface which have been configured in the default scope, they will not be applied. The configured default values will be re-applied automatically.

## Configuration Provider
Royal TS supports different configuration provider to apply the settings. The order and priority of the configuration providers is:
```none
 1. JSON File in Configuration Path
 2. => JSON File in Application Path
 3.    => Environment Variables
 4.       => Registry (Current User)
 5.          => Registry (Local Machine)
 ^
 Priority
```
Royal TS will read, parse and process the configuration in the above order whenever Royal TS is started or when the system signals a group policy refresh. If there are conflicting settings, the **configuration provider with the higher priority will overwrite the setting from the lower priority**.

> [!TIP]
> Examine the Royal TS log (under View -> Log) to find out which settings have been applied. Enabling Debug logging will show additional information about the configuration provider.

### JSON File (Configuration Path)
Place a JSON file in the configuration path. The default value for the configuration path is:
```batchfile
%APPDATA%\code4ward
```
> [!TIP]
> You can change the configuration path in the RoyalTS.exe.config file where RoyalTS.exe is located.

Create or deploy a JSON file for the [initial scope](#initial) in the above directory with the name:
```batchfile
%APPDATA%\code4ward\initial.settings.json
```
Create or deploy a JSON file for the [default scope](#default) in the above directory with the name:
```batchfile
%APPDATA%\code4ward\default.settings.json
```
Here's a sample JSON file:
```javascript
{
    "RoyalApplicationSetting" : {
        "DisableDisplayScalingOnHighDpiSettings": true,
        "ColorizeTree": true,
        "DontShowDocumentModifiedNotification": true,
        "DontShowMaintenanceExtensionNotification": true,
        "DontShowRestoreConnectionsDialog": true,
        "DoNotCreateDashboardOnStartup": true,
        "DoNotShowGettingStartedPageOnStartup": true,
        "SuperStartPageBehavior": 0,
        "AutoStartDocumentMode": 3,
        "WelcomeWindowLicenseAgreementVersion": 999,
        "WelcomeWindowUpdateCheckAndFeatureTrackingVersion": 999
    },
    "RoyalSSHConnection" : {
        "UseGlobalPlugInWin": false,
        "PlugInWin": "107df0a3-eab8-40ee-87f2-cc8a310f9269",
        "BellAction": 1
    }
}
```

### JSON File (Application Path)
Place a JSON file in the application path (install path) where RoyalTS.exe is located. The default path is:
```batchfile
%ProgramFiles%\RoyalTS V6
```
Create or deploy a JSON file for the [initial scope](#initial) in the above directory with the name:
```batchfile
%ProgramFiles%\Royal TS V6\initial.settings.json
```
Create or deploy a JSON file for the [default scope](#default) in the above directory with the name:
```batchfile
%ProgramFiles%\Royal TS V6\default.settings.json
```

### Environment Variables
Create environment variables for the [initial scope](#initial) like this:
```batchfile
RTSInitial_RoyalApplicationSetting__ColorizeTree = True
RTSInitial_RoyalApplicationSetting__DoNotShowGettingStartedPageOnStartup = True
RTSInitial_RoyalApplicationSetting__WelcomeWindowLicenseAgreementVersion = 999
RTSInitial_RoyalSSHConnection__BellAction = 1
```
Create environment variables for the [default scope](#default) like this:
```batchfile
RTSDefault_RoyalApplicationSetting__ColorizeTree = True
RTSDefault_RoyalApplicationSetting__DoNotShowGettingStartedPageOnStartup = True
RTSDefault_RoyalApplicationSetting__WelcomeWindowLicenseAgreementVersion = 999
RTSDefault_RoyalSSHConnection__BellAction = 1
```
> [!CAUTION]
> Please note that the first seperator of the prefix (RTSInitial_ and RTSDefault_) has only **one underscore character** and the seperator between the object type and the property name (for example ...RoyalApplicationSetting__ColorizeTree) has **two underscore characters**.

### Registry (Current User)
Create the following registry key by script or using group policies for the [initial scope](#initial):
```batchfile
[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS\Initial\RoyalApplicationSetting]
"ColorizeTree"="true"
"DoNotShowGettingStartedPageOnStartup"="true"
"WelcomeWindowLicenseAgreementVersion"="999"

[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS\Initial\RoyalSSHConnection]
"BellAction"="1"
```
Create the following registry key by script or using group policies for the [default scope](#default):
```batchfile
[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS\Default\RoyalApplicationSetting]
"ColorizeTree"="true"
"DoNotShowGettingStartedPageOnStartup"="true"
"WelcomeWindowLicenseAgreementVersion"="999"

[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS\Default\RoyalSSHConnection]
"BellAction"="1"
```

### Registry (Local Machine)
Create the following registry key by script or using group policies for the [initial scope](#initial):
```batchfile
[HKEY_LOCAL_MACHINE\Software\Policies\RoyalApps\RoyalTS\Initial\RoyalApplicationSetting]
"ColorizeTree"="true"
"DoNotShowGettingStartedPageOnStartup"="true"
"WelcomeWindowLicenseAgreementVersion"="999"

[HKEY_LOCAL_MACHINE\Software\Policies\RoyalApps\RoyalTS\Initial\RoyalSSHConnection]
"BellAction"="1"
```
Create the following registry key by script or using group policies for the [default scope](#default):
```batchfile
[HKEY_LOCAL_MACHINE\Software\Policies\RoyalApps\RoyalTS\Default\RoyalApplicationSetting]
"ColorizeTree"="true"
"DoNotShowGettingStartedPageOnStartup"="true"
"WelcomeWindowLicenseAgreementVersion"="999"

[HKEY_LOCAL_MACHINE\Software\Policies\RoyalApps\RoyalTS\Default\RoyalSSHConnection]
"BellAction"="1"
```

## Migrate from ADMX Files
Previous versions of Royal TS (V5 and earlier) had limited GPO support by providing a ADMX files and the ability to set some settings (mostly logging and some security settings) using group policies.  

This approach was very limited and the authoring experience for ADMX is difficult, error prone and cumbersome. The lack of good tooling for authors makes it very hard to maintain ADMX files.  

The following sections should help you to transition from ADMX based settings to the new system.

### Security
In previous versions (V5 and earlier) all security related policies were set in the following registry keys:
```batchfile
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\code4ward\RoyalTS\Security\
HKEY_CURRENT_USER\SOFTWARE\Policies\code4ward\RoyalTS\Security\
```

#### Do not allow to check for updates
This policy setting allows you to manage if a user is able to configure Royal TS to check for updates.  

Previously, the ADMX configuration changed the registry value **DoNotAllowCheckForUpdates**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowcheckforupdates)** with the name:
```batchfile
PolicyDoNotAllowCheckForUpdates
```
Set the value to **true** to enable this policy.

#### Do not allow to check for beta updates
This policy setting allows you to manage if a user is able to configure Royal TS to check for beta updates.  

Previously, the ADMX configuration changed the registry value **DoNotAllowCheckForBetaUpdates**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowcheckforbetaupdates)** with the name:
```batchfile
PolicyDoNotAllowCheckForBetaUpdates
```
Set the value to **true** to enable this policy.

#### Do not allow application document without password protection
This policy setting allows you to manage if a user is allowed to have an application document without password protection.  

Previously, the ADMX configuration changed the registry value **DoNotAllowApplicationDocumentWithoutPassword**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowapplicationdocumentwithoutpassword)** with the name:
```batchfile
PolicyDoNotAllowApplicationDocumentWithoutPassword
```
Set the value to **true** to enable this policy.

#### Do not allow to load or save documents without password protection
This policy setting allowed you to manage if a user is allowed to have an application document without password protection.  

Previously, the ADMX configuration changed the registry value **DoNotAllowDocumentsWithoutPassword**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowdocumentswithoutpassword)** with the name:
```batchfile
PolicyDoNotAllowDocumentsWithoutPassword
```
Set the value to **true** to enable this policy.

#### Do not allow weak document passwords
This policy setting allows you to manage if a user is able to specify weak document passwords. The password strength indicator in Royal TS must show "Great" (color green) in order to accept the password.  

Previously, the ADMX configuration changed the registry value **DoNotAllowWeakDocumentPasswords** . 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowweakdocumentpasswords)** with the name:
```batchfile
PolicyDoNotAllowWeakDocumentPasswords
```
Set the value to **true** to enable this policy.

#### Do not allow creation of credential objects
This policy setting allows you to manage if a user is allowed to create credential objects in Royal TS.  

Previously, the ADMX configuration changed the registry value **DoNotAllowCreateCredentialObjects**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowcreatecredentialobjects)** with the name:
```batchfile
PolicyDoNotAllowCreateCredentialObjects
```
Set the value to **true** to enable this policy.

#### Do not allow creation of credential objects in document without password protection
This policy setting allows you to manage if a user is allowed to create credential objects in a document without password protection.  

Previously, the ADMX configuration changed the registry value **DoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowcreatecredentialobjectsindocumentswithoutpassword)** with the name:
```batchfile
PolicyDoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword
```
Set the value to **true** to enable this policy.

#### Do not allow to reveal object passwords
This policy setting allows you to manage if a user is allowed to create credential objects in a document without password protection.  

Previously, the ADMX configuration changed the registry value **DoNotAllowRevealPasswords**. 
An equivalent boolean property has been created in the **[RoyalApplicationSetting](xref:scripting_object_royalapplicationsetting#policydonotallowrevealpasswords)** with the name:
```batchfile
PolicyDoNotAllowRevealPasswords
```
Set the value to **true** to enable this policy.

### Logging
In previous versions (V5 and earlier) all logging related policies were set in the following registry keys:
```batchfile
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\code4ward\RoyalTS\Logging\
HKEY_CURRENT_USER\SOFTWARE\Policies\code4ward\RoyalTS\Logging\
```
Should you have used the ADMX file to control logging parameters, simply set the appropriate **RoyalApplicationSettings** properties of the **[Logging](xref:scripting_object_royalapplicationsetting#logging)** category.

### Examples

Example showing policy entries in the [default.settings.json](#json-file-configuration-path) file:
```javascript
"RoyalApplicationSetting" : {
  "PolicyDoNotAllowApplicationDocumentsWithoutPassword": true,
  "PolicyDoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword": true,
  "PolicyDoNotAllowDocumentsWithoutPassword": true,
  "PolicyDoNotAllowWeakDocumentPasswords": true
}
```

Example showing policy entries in the [registry](#registry-current-user) file:
```batchfile
[HKEY_CURRENT_USER\Software\Policies\RoyalApps\RoyalTS\Default\RoyalApplicationSetting]
"PolicyDoNotAllowApplicationDocumentsWithoutPassword"="true"
"PolicyDoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword"="true"
"PolicyDoNotAllowDocumentsWithoutPassword"="true"
"PolicyDoNotAllowWeakDocumentPasswords"="true"
```

Example showing policy entries using [environment variables](#registry-current-user) file:
```batchfile
RTSDefault_RoyalApplicationSetting__PolicyDoNotAllowApplicationDocumentsWithoutPassword = True
RTSDefault_RoyalApplicationSetting__PolicyDoNotAllowCreateCredentialObjectsInDocumentsWithoutPassword = True
RTSDefault_RoyalApplicationSetting__PolicyDoNotAllowDocumentsWithoutPassword = True
RTSDefault_RoyalSSHConnection__PolicyDoNotAllowWeakDocumentPasswords = True
```
