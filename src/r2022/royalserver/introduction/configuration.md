---
uid: royalserver_introduction_configuration
name: Configuration
order: 10060
---

# Royal Server Configuration

There are various options to configure Royal Server.

## Royal Server Configuration Tool

The most common way is to use the `Royal Server Configuration Tool`, which provides a modern graphical user interface for changing the configuration and the ability to stop and (re)start the server. You can use it to manage the different components of Royal Server, install licence(s), set up certificates, grant permissions, etc. It also includes a health monitor to easily monitor resource usage.

## Configuration File
Royal Server V4 stores the configuration settings in a file that can be found here: `%ProgramData%\RoyalServer\appsettings.json`.

If not present at startup, `appsettings.json` will be created automatically.

> [!NOTE]
> Settings from a previous Royal Server V3 installation are automatically imported.

You can edit this file using any text editor. After each change, Royal Server must be restarted. 
This can be done either using the configuration tool or from the command line:

```
net stop RoyalServer && net start RoyalServer
```

> [!NOTE]
> There are a number of sensitive settings that can only be managed through the Royal Server Configuration Tool to ensure they are properly protected:
>
> - Worker Account Settings
> - Proxy Settings
> - MFADuoSecretKey
> - MFADuoIntegrationKey
> - MFADuoHost

## Environment Variables

From Royal Server V4 you can optionally pass configuration values using environment variables.

Environment variables must be prefixed with `RS_` followed by the corresponding key name in `appsettings.json`.
As with hierarchical keys, the separator is a double underscore (`__`).

_Examples:_

```
set RS_IPAddress="127.0.0.1"
set RS_Port=8888,
set RS_SecureGateway__GatewayEnabled=false
```

> [!NOTE]
> Be aware that these overwrites are neither shown in the Configuration Tool.

## Configuration of Managed Servers

Royal Server manages remote server via different Modules. These require specific protocols to work:

[!include[module-protocols.md](../_shared/module-protocols.md)]

The easiest way to achieve that a remote server can be managed is via the following two steps:

1.  Enable-PSRemoting
2.  Firewall should let through Royal Server traffic

### 1. Enable-PSRemoting

Most of the Management Endpoint modules are based on WMI. To enable the proper configuration for remote WMI calls, you need to execute the Enable-PSRemoting command in an elevated PowerShell console.

### 2. Firewall Settings

In case the Windows Firewall is enabled the following two rules must be enabled:

- Windows Management Instrumentation (WMI-In), and
- Windows Management Instrumentation (DCOM-In)

For the above two steps, we have also prepared a PowerShell script (in `<royal-server-installation-dir>\scripts\prepare_server.ps1`). See the [Preparing a Managed Server](xref:royalserver_advanced_management_scripts_prepare) chapter.
