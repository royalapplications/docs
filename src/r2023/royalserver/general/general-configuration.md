---
uid: royalserver_general_configuration
name: General Configuration
order: 9070
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Gear_32.svg" class="icon-left icon-lg"  alt="">

# General Configuration

## Show or Activate the General Configuration Panel

In the Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **General Configuration** entry.

## Features

**Language**

This setting allows you to change the user interface language of the Royal Server Configuration Tool (requires a restart of the Configuration Tool). Currently English, German and French are supported.

## Manage Configuration

**Reset Configuration**

This function resets the Royal Server configuration to the default settings after installation.

> [!NOTE]
> This will NOT change the following configurations:
>
> - Windows group memberships for authentication
> - Document Store Access Control Lists
> - MFA User Configuration
> - Installed Licenses
>
> If you want to remove all side effects of a Royal Server installation, please use the [cleanup script](../advanced/management-scripts/uninstall.md).

**Copy Troubleshooting Information**

This function copies Royal Server troubleshooting information that may be included in a ticket to the clipboard.
The following information can be included:
- Installed Licenses
- Configuration Information
- Log Information (since the last restart)
- Document Store Information (Royal Server needs to run for this information to be included)

This information might be helpful for troubleshooting a support ticket. A ticket can be opened via our [support portal](https://support.royalapps.com/support/home)

**Localhost Aliases**

This setting allows to specify which host names should be considered as localhost. This information is used when determining if a query should be executed against the server where Royal Server is installed.
