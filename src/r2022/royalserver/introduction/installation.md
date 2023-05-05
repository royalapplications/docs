---
name: Installation
order: 10070
---

# Installing and Uninstalling Royal Server

## Install Royal Server

Royal Server is distributed via a single _.msi_-file. The installation requires administrative rights, a destination directory and it takes approximately a minute to install Royal Server.

When the configuration tool is launched for the first time, you will be asked to provide your [Licensing Information](xref:royalserver_what-is-royal-server#licensing) and to set a Worker Account.

> [!NOTE]
> It is strongly recommended to configure a Worker Account to allow Royal Server to access network resources (access other servers). Royal Server will not start if a Worker Account configuration is missing. The worker account must also have permissions to work with the configured Windows accounts that should be allowed to authenticate with Royal Server. If domain groups/users are used for specific configurations, e.g. Document Store ACLs, the Worker Account needs to be a domain account.

In addition, the Management Endpoint component of Royal Server uses HTTPS with a self-signed certificate that is created by default during installation. You can also configure your own certificates if required.

See also: [Service Configuration](xref:royalserver_management_service-configuration).

## Uninstall Royal Server

As the installation is msi-based, simply uninstall Royal Server using the Add/Remove Programs tool. Uninstalling Royal Server does not remove the configuration (by default), so you can easily switch between versions.

> [!NOTE]
> If you wish to completely remove Royal Server and all configuration information from the machine, back up the `cleanup_installation.ps1` file in the `./scripts/` folder of your Royal Server installation before uninstalling, and run it with administrator privileges after uninstalling.

See also: [Cleanup Script](xref:royalserver_advanced_management_scripts_cleanup)
