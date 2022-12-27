---
name: General Configuration
order: 9080
---

# General Configuration

## Show or Activate the General Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **General Configuration** entry.

## Features

### General

**Language**

This setting lets you change the user interface language of the Royal Server Configuration Tool (requires a restart of the tool).

**Localhost Aliases**

This setting allows to specify which hosts should be considered as localhost. This information is used when determining, if a query should be executed against the server where Royal Server is installed.

**Reset Configuration**

This function resets the Royal Server Configuration back to defaults after installation. 

> [!NOTE]
> This will NOT change the following configurations: 
> - Windows group memberships for authentication
> - Document Store Access Control Lists
> - MFA User Configuration
> - Installed Licenses
>  
> If you want to remove all side effects of a Royal Server installation, please use the [cleanup script](../advanced/management-scripts/uninstall.md).

**Copy Configuration**

This function copies Royal Server configuration information and troubleshooting information in the clipboard which could be included in a ticket. 
You can include the following information:
- the current configuration
- the Royal Server logs (since the last restart)
- the Document Store configuration
- installed licenses

This information is very helpful for troubleshooting a support ticket. A ticket can be opened via our [support portal](https://support.royalapps.com/support/home)

### Headers

In this view, you can add/modify the HTTP header Royal Server is sending back to the client.


### Uninstalling Royal Server

Royal Server is installed via an MSI package which can easily be uninstalled.

Additionally, if you want to remove all changes a Royal Server installation did to a server:
- copy the cleanup_installation.ps1 file in the `./scripts/` installation subdirectory before uninstalling to a save location
- uninstall Royal Server
- Execute the script.

[More information about the cleanup script](../advanced/management-scripts/uninstall.md).