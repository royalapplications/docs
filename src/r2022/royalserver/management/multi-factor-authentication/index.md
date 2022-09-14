---
name: Multi-Factor Authentication
order: 9065
---

## General Information

<img src="/r2021/images/RoyalServer/MFA_48x48.png" class="icon-def" alt="" />

The Multi-Factor Authentication panel allows the configuration of a second factor for each user and the settings of the provider (if needed).
Royal Server supports Multi-Factor Authentication to enhance secure access to the following components: 
- Secure Gateway
- Document Store

> [!NOTE]
> The abbreviation 'MFA' means Multi-Factor Authentication

#### Securing the Document Store

If you have MFA configured, opening a document hosted by Royal Server only works when the user has the proper permissions, the proper Access Rules are met (if configured) and if the user can provide the second factor.

#### Securing the Secure Gateway

If you have MFA configured, when opening a connection in Royal TS/X that is based on a Secure Gateway Tunnel, e.g. Terminal or Remote Desktop connections, you will be asked to provide the second factor additionally to username and password before the tunnel is opened.


## Show or Activate the Multi-Factor Authentication Pane

In The Royal Server Configuration Tool Navigation Bar, click on the Royal Server group and then on the Multi-Factor Authentication entry.


## Features

**Enable Multi-Factor Authenticationn**

If checked, Royal Server requests a second factor for configured users.

**Reject Unknown Users**

If checked, Royal Server rejects all authentication requests for users that are not configured in the Users datagrid. 

> [!NOTE]
> This setting requires Enable Multi-Factor Authentication to be enabled.

## Configuring Users

On the Users tab, you can configure users for MFA. 

For each user the follwing properties can be configured:
- Username
- MFA Provider (currently TOTP and DUO are supported) and additional provider-specific settings
- Required for opening a Document Store document
- Required for opening a Secure Gateway connection
- Comment

> [!NOTE]
> A user can only have a single provider configured.

## Configuring Provider

On the Providers tab, you can enable or disable a provider. If some additional configuration for a provider is needed, you can enter this by using the Configure button.

Royal Server supports the following provider:
- [TOTP](./provider/totp.md)
- [DUO](./provider/duo.md)

> [!NOTE]
> Disabling a provider does not remove the configuration of the provider or of users configured for this provider.