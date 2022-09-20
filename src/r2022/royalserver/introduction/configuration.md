---
uid: royalserver_introduction_configuration
name: Configuration
order: 10060
---

# Royal Server Configuration

There are various options how manged Royal Server configuration settings.

## Royal Server Configuration Tool

The most common way is to use the `Royal Server Configuration Tool` which provides a graphical user interface to modify the configuration, and the possibility to stop and (re)start the server. You can use it manage the different Royal Server components, your license(s), set up certificates, and grant permissions, etc.. Additionally, it includes a health monitor to easily monitor resource usage.

## Configuration File

Up to Royal Server V3 configuration settings were mainly kept in Windows Registry and could only be modified via the Royal Server Configuration Tool.
This changed since Royal Server V4, where configuration settings are primarily file based and stored in `%ProgramData%\RoyalServer\appsettings.json`.

If not present on start-up, `appsettings.json ` will automatically be generated and your settings from a previous Royal Server V3 installation will be imported.
If no previous Royal Server V3 installation can be detected, default values will apply.

This change allows you to just modify the configuration in the `appsettings.json` file.
Then restart the Royal Server Service using the commandline for the changes to take effect.

```
net stop RoyalServer && net start RoyalServer
```

> [!NOTE]
> There are a couple of sensitive settings that can only be managed via the Royal Server Configuration Tool to keep them properly protected:
>
> - Worker Account Settings
> - Proxy Settings
> - MFADuoSecretKey
> - MFADuoIntegrationKey
> - MFADuoHost

## Environment Variables

As of Royal Server V4 you can optionally pass configuration values using environment variables.

Environment variables have to be prefixed with `RS_` followed by the corresponding key name in `appsettings.json`.
As for hierarchical keys, the separator is a double underscore (`__`).

_Examples:_

```
set RS_IPAddress="127.0.0.1"
set RS_Port=8888,
set RS_SecureGateway__GatewayEnabled=false
```

> [!NOTE]
> Be aware that these overwrites are neither shown in the Configuration Tool nor in the logged configuration when Royal Server starts.

## Configuration of Managed Servers

Each server that should be managed by Royal Server needs to have two basic things configured:

1.  Enable-PSRemoting
2.  Firewall should let through Royal Server traffic

### 1. Enable-PSRemoting

Most of the Management Endpoint modules are based on WMI. To enable the proper configuration for remote WMI calls, you need to execute the Enable-PSRemoting command in an elevated PowerShell console.

### 2. Firewall Settings

In case the Windows Firewall is enabled the following two rules must be enabled:

- Windows Management Instrumentation (WMI-In), and
- Windows Management Instrumentation (DCOM-In)

For the above two steps, we have also prepared a PowerShell script (in `<royal-server-installation-dir>\scripts\prepare_server.ps1`). See the [Preparing a Managed Server](xref:royalserver_advanced_management-scripts_pepare) chapter.
