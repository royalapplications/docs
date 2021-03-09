---
name: General Configuration
order: 9080
---

# General Configuration

## Show or Activate the General Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **General Configuration** entry.

## Features

**Language**

This setting lets you change the user interface language of the Royal Server Configuration Tool (requires a restart of the tool).

**Localhost Aliases**

This setting allows to specify which hosts should be considered as localhost. This information is used when determining, if a query should be executed against the server where Royal Server is installed and also for licensing calculations (localhost is not counted towards the number of managed servers)

**Reset Configuration**

This function resets the Royal Server Configuration back to defaults. 

> **Note**  
> This will not change the following configurations: Windows group memberships for authentication and Document Store Access Control Lists. If you 
> If you want to remove Royal Server and all configuration information completely from the machine, save the cleanup_installation.ps1 file in the `./scripts/` installation subdirectory before uninstalling and execute it with administrative rights after the uninstallation.

**Copy Configuration**

This function copies Royal Server troubleshooting information into the clipboard which could be included in a ticket. It can contain the installed licenses (not the full license key), the current configuration, the log information since the last restart of Royal Server and the Document Store information. All this will be copied into the clipboard, where the user can later check it/modify it and send it to us if we ask for it while troubleshooting.

A ticket can be opened via our [support portal](https://support.royalapps.com/support/home)

