---
uid: royalserver_general_licensing
name: Licenses
order: 9005
---

<img src="/r2023/images/RoyalServer/Svg/SVG_License_32.svg" class="icon-left icon-lg" alt="" />

# Licensing

## Show or Activate the Licenses Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Licenses** entry.

Each Royal Server installation requires an installed license.

Please check out our [License Agreement](https://www.royalapps.com/go/kb-server-main-licenseagreement).

## Trial Licenses
For testing purposes we gladly issue trial licenses. Please get your 30-day trial license under [https://www.royalapps.com/trial/](https://www.royalapps.com/trial/) in order to test Royal Server with all features.

## Purchased Licenses
Each license includes at least a 12 month software maintenance (including free upgrades and priority email support). For more information visit: [https://www.royalapps.com/server/](https://www.royalapps.com/server/).

> [!NOTE]
> Please note that [Royal Server](https://www.royalapps.com/server/) and [Royal TS/X](https://www.royalapps.com/ts/) are licensed separately. So if you are purchasing a Royal Server license (aka server) you still need client licenses for most scenarios (aka Royal TS/X). If you have questions to our licensing, don't hesitate to [get in touch with our support team](https://support.royalapps.com/support/tickets/new).


## Features

- The panel lists all installed licenses
- Use the **Add License** button to add another license
- Uninstall a License by clicking on the **trashcan icon**

> [!NOTE]
> Installed licenses can be found at `%ProgramData%\RoyalServer\Licenses\`.

## One Installed License

Royal Server runs with exactly one installed license. Installing a license key replaces the installed license. When you update from an earlier version that had several licenses installed, Royal Server keeps the valid license with the latest end date.

Royal Server never deletes a replaced license. It moves the license file to `%ProgramData%\RoyalServer\Licenses\Superseded\`, with the extension `.superseded`, so the license no longer loads. The same happens when the online license check installs a renewed license key, and when a Royal Server V5 license key is upgraded to a new license key.

A license that the Royal Apps license server reports as blocked is moved to `%ProgramData%\RoyalServer\Licenses\Blocked\`.

## Going Back to an Earlier Version

If you go back to an earlier version of Royal Server, the license this version installed may not be valid there:

- Royal Server V5 versions that support the new license keys accept the installed license.
- Earlier Royal Server V5 versions only accept Royal Server V5 license keys. Your V5 license key is in the `Superseded` folder.

To use a license from the `Superseded` folder again:

1. Open `%ProgramData%\RoyalServer\Licenses\Superseded\`.
2. Copy the license file to `%ProgramData%\RoyalServer\Licenses\`.
3. Change the extension of the copy from `.superseded` to `.lic`. The rest of the file name does not matter.
4. Restart the Royal Server service if the Configuration Tool does not show the license.

> [!NOTE]
> Royal Server V5 allows several installed licenses, so the license files of both versions can stay in the `Licenses` folder. When you update to this version again, Royal Server keeps only one license and moves the other license files to the `Superseded` folder.
