---
name: General Information
order: 7010
---

# Multi-Factor Authentication

Multi-Factor authentication can be configured to further secure the access to the Document Store component.

## Accessing the Document Store component

If you have Multi-Factor authentication configured, opening a document hosted by Royal Server only works when the user has the proper permissions, the proper Access Rules are met (if configured) and if the user can provide the second factor (via using his Smartphone).

## General Information

<img src="/images/RoyalServer/MFA_48x48.png" class="icon-def" alt="" />

The Multi-Factor Authentication panel allows the configuration of a second factor when opening a Royal Server hosted document.

## Show or Activate the Multi-Factor Authentication Pane

In The Royal Server Configuration Tool Navigation Bar, click on the Document Store group and then on the Multi-Factor Authentication entry. For each document hosted by Royal Server a second factor for authentication can be specified.

Note: MFA abbreviation  
MFA means Multi-Factor Authentication.

## Features

- Specify, if Multi-Factor Authentication is Off, Optional (when a user is configured for MFA, this configuration is used, if no configuration is found none is used) or Forced (no access to documents is allowed unless the user has an MFA configuration)
- Specify the supported Providers. Currently Royal Server supports "Generic TOTP Authenticator (Google, Microsoft, etc) and DUO (beta).
- On the User Management tab, you can configure for each user the MFA configuration. Enroll the user, show the previous enrollment information or delete an MFA configuration for a user.

**Configure the Multi-Factor Authentication**

Royal Server supports three modes:

1.  Off (no second factor is required)
2.  Optional (If a user has configured a second factor, he has to use it, if not, no second factor is required)
3.  Forced (Every user has to have a second factor configured. If not, access is rejected.

**Configure the Provider**

On the Provider tab, you can enable or disable providers for the whole server. In some cases, additional configuration is needed, e.g. when working with DUO you also need to specify a set of keys and a host name.

If a user only has one provider configured, and this provider is disabled, the user needs to be enrolled for one of the other currently active providers.

**User Management - Enrolling**

Enrolling a user for a second factor is straight forward. Specify the user, the provider and the needed information. E.g. for TOTP the Issuer and Label are purely for the user interface, for DUO you need to specify the DUO user id. In the case of TOTP, the result is a unique string and a QR code that need to be stored in the Authenticator Apps on the users smartphone (scan the QR code or input the string).
