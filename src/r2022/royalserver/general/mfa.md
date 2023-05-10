---
uid: royalserver_general_multifactor-authentication
name: Multi Factor Authentication
order: 9095
---

# Multi Factor Authentication

<img src="/r2022/images/RoyalServer/ApplicationDownload_48x48.png" class="icon-def" alt="" />

The **Multi Factor Authentication** panel enables the configuration of different Multi-Factor Authentiation provider for Royal Server.

## Show or Activate the Multi Factor Authentication Panel

In the Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Multi Factor Authentication** entry.

Multi-factor authentication for users requires the following settings:
1. Multi-factor authentication must be enabled (see below)
2. The required multi-factor authentication provider (Generic TOTP, DUO or YubiKey) must be enabled and configured (see below), and
3. Users must be configured for the multi-factor authentication provider.

**Enable Multi-Factor Authentication** 
This setting enables or disables Multi-Factor Authentication on a server level.

> [!NOTE]
> Disabling this setting will leave all multi-factor provider and user configurations untouched, but will render them inactive.

**Reject Unknown Users**
If Multi-Factor Authentication is enabled and a user who does not have a valid Multi-Factor Authentication configuration attempts to load/save a document or open a Secure Gateway connection, Royal Server will reject the user.

In effect, this means that all users who are to use Royal Server must have a multi-factor user configuration.

## DUO Provider Configuration
[DUO](https://duo.com) provides security solutions for companies and can be integrated into Royal Server.

In order to integrate DUO secured users into Royal Server, you need to log in to your DUO web console at [https://duo.com/](https://duo.com/).

### Confige an Application in DUO

First, you need to configure an _Application_ that is being secured by DUO - in our case, you want to secure Royal Server operations by DUO. To do this, you navigate to **Applications** and **Protect an Application**. Look for **Partner Auth API** and click **Protect this Appliation**. You will be presented with a number of details, most notable the `Integration Key`, the `Secret Key` and the `API Hostname`. Remember these as you need them later for configuring the Royal Server DUO integration.

### Create Users in DUO

If you do not have users in your DUO configuration, create a user by clicking on **Users** and **Add User**.

> **Important**  
> After the creation of a user (or when you editing it), take a close look at the URL in your browser. At the end of it, you see a long sequence of letters and numbers - this is the DUO user id and you need it to configure it in the Royal Server Configuration Tool.

**Example:**
[https://admin-12abcdef.duosecurity.com/users/**HUGA65C32A3T2U0I20TF**]()

Notice the bold part at the end. The user id in this example is HUGA65C32A3T2U0I20TF.


### Creating 2FA Devices in DUO

If you do not have 2FA devices (e.g. Smartphone or a token) in your DUO configuration, create one by navigating to a User and add a phone or hardware token.

> [!NOTE]
> Make sure the new device is activated by clicking on **Activate** and assigned to a DUO user.

## Configure DUO in the Royal Server Configuration Tool

### Configuring the DUO provider

Ensure that the _"DUO"_ provider is enabled.

Expand the details panel and enter the `Integration Key`, the `Secret Key` and the `Host` (=API Hostname) from the DUO Application created in the DUO web console backend previously.

> [!NOTE]
> A change requires a restart of Royal Server.

> [!NOTE]
> For configuring a user for Duo please see [Multi-Factor User Store configuration](../general/mfa-user-store.md)


## YubiKey Provider Configuration

[YubiKey](https://www.yubico.com/) provides security solutions for companies and can be integrated into Royal Server.

### Confige a YubiKey API key

First, you need to configure a YubiKey API key for Royal Server. This can be done at [https://upgrade.yubico.com/getapikey/]().

Enter an email address, insert a YubiKey and press the Yubikey button while the input focus is at YubiKey OTP. As a result, you get the `Client ID` and a `Secret Key`. Remember these as you need them later for configuring the Royal Server YubiKey integration.

Ensure that the _"YubiKey"_ provider is enabled.

Expand the details panel under YubiKey and enter the `Client ID`, the `Secret Key` that you previously generated while getting a YubiKey API Key.

> [!NOTE]
> A change requires a restart of Royal Server.

> [!NOTE]
> For configuring a user for YubiKey please see [Multi-Factor User Store configuration](../general/mfa-user-store.md)
