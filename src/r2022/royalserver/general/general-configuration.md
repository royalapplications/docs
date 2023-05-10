---
uid: royalserver_general_configuration
name: General Configuration
order: 9093
---

# General Configuration

## Show or Activate the General Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **General Configuration** entry.

## Features

**Language**

This setting allows you to change the user interface language of the Royal Server Configuration Tool (requires a restart of the Configuration Tool). Currently English, German and French are supported.

## Manage Configuration

**Reset Configuration**

This function resets the Royal Server configuration to the default settings after installation.

> [!NOTE]
> This will NOT change the following configurations: 
> - Windows group memberships for authentication
> - Document Store Access Control Lists
> - MFA User Configuration
> - Installed Licenses
>  
> If you want to remove all side effects of a Royal Server installation, please use the [cleanup script](../advanced/management-scripts/uninstall.md).

**Copy Configuration**

This function copies Royal Server configuration and troubleshooting information that may be included in a ticket to the clipboard.
You can include the following information:
- the current configuration
- the Royal Server logs (since the last restart)
- installed licenses
- the Document Store configuration (the server needs to run for this information)

This information is very helpful for troubleshooting a support ticket. A ticket can be opened via our [support portal](https://support.royalapps.com/support/home)


**Localhost Aliases**

This setting allows to specify which hostnames should be considered as localhost. This information is used when determining, if a query should be executed against the server where Royal Server is installed.
