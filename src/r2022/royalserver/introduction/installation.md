---
name: Installation
order: 10070
---

# Installing and Uninstalling Royal Server

## Install Royal Server

Royal Server is distributed via a single _.msi_-file. The installation requires administrative rights, a destination directory and it takes about a minute to install Royal Server.

When the configuration tool is launched for the first time, you will be asked to provide your [License Information](xref:royalserver_what-is-royal-server#licensing) and to set a Worker Account.

> [!NOTE]
> It is strongly recommended to configure a Worker Account in order to allow the Royal Server to access network resources (accessing other servers). Royal Server will not start when no Worker Account is configured. The Worker Account also needs the rights to work with the configured Windows Accounts that should be allowed to authenticate with Royal Server. If domain groups/users are configured, this account needs to be a domain account that has the required rights to query these accounts.

Additionally, the Management Endpoint component of Royal Server is using HTTPS with a self-signed certificate that is created during the installation. You can also configure your own certificates if needed.

See also: [Service Configuration](xref:royalserver_management_service-configuration).

## Uninstall Royal Server

Since the installation is msi-based, just uninstall Royal Server using the Add/Remove Programs tool. Uninstalling Royal Server is not removing the configuration (by default), so you can easily switch between versions.

> [!NOTE]
> If you want to remove Royal Server and all configuration information completely from the machine, backup the `cleanup_installation.ps1` file in the `./scripts/` folder of your Royal Server installation before uninstalling and execute it with administrative rights after uninstalling.

See also: [Cleanup Script](xref:royalserver_advanced_management_scripts_cleanup)
