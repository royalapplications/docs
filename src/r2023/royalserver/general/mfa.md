---
uid: royalserver_general_multifactor-authentication
name: Multi Factor Authentication
order: 9050
---

<img src="/r2023/images/RoyalServer/Svg/SVG_MFA_32.svg" class="icon-left icon-lg" alt="" />

# Multi Factor Authentication

The **Multi Factor Authentication** panel enables the configuration of different Multi-Factor Authentication provider for Royal Server.

> [!NOTE]
> For information on configuring users please see [Multi-Factor User Store configuration](./mfa-user-store.md)

## Show or Activate the Multi Factor Authentication Panel

In the Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Multi Factor Authentication**.

Multi-factor authentication for users requires the following settings:

1. Multi-factor authentication must be enabled (see below)
2. The required multi-factor authentication provider (Generic TOTP, DUO or YubiKey) must be enabled and configured (see below), and
3. Users must be configured for the multi-factor authentication authentication provider.

> [!NOTE]
> Changes to the the multi-factor authentication configuration require a restart of Royal Server.

**Enable Multi-Factor Authentication**

This setting enables or disables the multi-factor authentication on a server level.

> [!NOTE]
> Disabling this setting will leave all multi-factor provider and user configurations untouched, but will render them inactive.

**Reject Unknown Users**

If the multi-factor authentication is enabled, any not configured user who attempts an action which secured without a second factor (e.g. load/save a document, open a Secure Gateway connection), will be rejected by Royal Server. It basically means that all users must be configured in order to gain access.

If disabled, the second factor is only required for users who have a [user configuration](./mfa-user-store.md). Other users are allowed to proceed without MFA.

## MFA Providers

Royal Server supports the following MFA providers:

- [TOTP](#totp)
- [DUO](#duo)
- [YubiKey](#yubikey)

[!include[totp.md](./_mfa/totp.md)]

[!include[totp.md](./_mfa/duo.md)]

[!include[totp.md](./_mfa/yubikey.md)]
