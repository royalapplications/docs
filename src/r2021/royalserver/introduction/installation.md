---
name: Installation
order: 10030
---

# Installing and Uninstalling Royal Server

## Install Royal Server

Royal Server is distributed via a single _.msi_-file. The installation requires administrative rights, a destination directory and it takes just a minute to install Royal Server.

> **Note**  
> After the installation is completed, it is strongly recommended to configure a Worker Account in order to allow the Royal Server to access network resources (accessing other servers). Royal Server is not starting when no Worker Account is configured. The Worker Account also needs the rights to work with the configured Windows Accounts that should be allowed to authenticate with Royal Server. If domain groups/users are configured, this account needs to be a domain account that has the required rights to query these accounts.

Additionally, the Management Endpoint component of Royal Server is using HTTPS with a self-signed certificate that is created during the installation. You can also configured your own certificates if needed.

See also: [Service Configuration](xref:royalserver_management_service-configuration).

## Uninstall Royal Server

Since the installation is msi-based, just uninstall Royal Server from the Windows Programs panel. Uninstalling Royal Server is not removing the configuration, so you can easily switch between versions.

> **Note**  
> If you want to remove Royal Server and all configuration information completely from the machine, save the cleanup_installation.ps1 file in the `./scripts/` installation subdirectory before uninstalling and execute it with administrative rights after the uninstallation.
