---
uid: royalserver_general_updatesettings
name: Update Settings
order: 9010
---

<img src="/r2023/images/RoyalServer/Svg/SVG_UpdateCheck_32.svg" class="icon-left icon-lg" alt="" />

# Update Settings

The **Update Settings** panel displays the configuration of the Update Checks.

## Show or Activate the Update Settings Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Update Settings** entry.

The Royal Server Configuration Tool can check for new versions. This check is executed

- after the start of Royal Server Configuration Tool,
- every 24h the Royal Server Configuration Tool is running and
- if the user clicks on "_Check for Updates_" in the toolbar.

## Features

**Enable or Disable Update Checks**

- Enable or disable the Update Checks for new Royal Server Versions.
- Enable or disable the Update Checks for new Royal Server **beta** Versions

This might come in handy when your Royal Server does not have internet connection and this check will always fail.

**Configure a Proxy Server for Update Checks**

- The Update Checks can also be executed using a proxy server.

> [!NOTE]
> This update check is only issued by the Royal Server Configuration Tool and not Royal Server itself (as it has no UI to show available updates)

## Manual Update

Royal Server is installed via an MSI software package and can also be updated manually by downloading a newer version from our [Royal Server Website](https://www.royalapps.com/server/main/download).

> [!NOTE]
> The actual Royal Server configuration will not be removed and will still be the same after updating to a new version of Royal Server. [Check here](../advanced/management-scripts/uninstall.md), if you want to completely remove all Royal Server installation side effects.

> [!NOTE]
> In some cases, like updating to a new  major version, it is advisable to uninstall the current version upfront. 