---
name: Multi-Factor Authentication
order: 9065
---

## General Information

<img src="/r2022/images/RoyalServer/MFA_48x48.png" class="icon-def" alt="" />

Royal Server supports Multi-Factor Authentication to enhance secure access to the following components: 
- Secure Gateway
- Document Store

> [!NOTE]
> The abbreviation 'MFA' means Multi-Factor Authentication

The Multi-Factor Authentication panel allows the configuration of a second factor for each user and the settings of the provider (if needed).


#### Securing the Document Store

If you have user configured to use MFA for the Document Store, opening a document hosted by Royal Server only works when the user has the proper permissions, the proper Access Rules are met (if configured) and if the user can provide the second factor.

#### Securing the Secure Gateway

If you have user configured to use MFA for the Secure Gateway, opening a connection in Royal TS/X that is based on a Secure Gateway Tunnel, e.g. Terminal or Remote Desktop connections, only works when the user is able to provider the second factor additionally to username and password before the tunnel is opened.

#### Supported Providers

The following MFA Providers are supported:
- [Generic TOTP (Google, Microsoft etc.)](./provider/totp.md)
- [DUO](./provider/duo.md)
- [YubiKey](./provider/yubikey.md)


## Show or Activate the Multi-Factor Authentication Pane

In The Royal Server Configuration Tool Navigation Bar, click on the Royal Server group and then on the Multi-Factor Authentication entry.


## Features

**Enable Multi-Factor Authenticationn**

If checked, Royal Server requests a second factor for configured users.

**Reject Unknown Users**

If checked, Royal Server rejects all authentication requests for users that are not configured in the Multi-Factor Authentication Users datagrid. 

> [!NOTE]
> This setting requires Enable Multi-Factor Authentication to be enabled.

## Configuring Users

On the Users tab, you can configure users for MFA. 

For each user the follwing properties can be configured:
- Username
- MFA Provider
- Required for opening a Document Store document
- Required for opening a Secure Gateway connection
- Comment
- Additional settings for the selected MFA provider 

> [!NOTE]
> One user can only have one provider configured.

## Configuring Providers

On the Providers tab, you can enable or disable a provider. If some additional configuration for a provider is needed, you can enter this by using the Configure button.

> [!NOTE]
> Disabling a provider does not remove the configuration of the provider or of users configured for this provider. However, these configured users can not
> use Royal Server as long as the provider is disabled.