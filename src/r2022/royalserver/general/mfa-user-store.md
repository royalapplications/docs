---
uid: royalserver_general_multifactor-user-store
name: Multi Factor User Store
order: 9096
---

# Multi Factor User Store

<img src="/r2022/images/RoyalServer/ApplicationDownload_48x48.png" class="icon-def" alt="" />

The **Multi Factor User Store** panel displays the users configured for Multi Factor authentication.

## Show or Activate the Multi Factor Users Store Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Multi Factor Users Store** entry.

The datagrid shows the configured users for multi-factor authentication.

## Adding a User for Multi-Factor Authentication 
The following functionalities in Royal Server support Multi-Factor Authentication: 
- Document Store (triggered when loading or saving a document hosted by Royal Server) or
- Secure Gateway Connections.

- Click on **Add...**.
- Enter a user or click on the **Select User...** icon.
- Specify an optional comment.
- Select for which feature this user is reqiured to present a second factor (Document Store and/or Secure Gateway)
- Specify the caching time. Each successful authentication is then cached for the specified minutes.
- Select an MFA provider. Curently, "Generic TOTP", "Duo" and "YubiKey" are supported. Depending on your selection, different additional information will be required.

> [!NOTE]
> A Caching Time of 0 minutes means no caching and the user has to provide a second factor for every operation.

### Configuring Generic TOTP
Provide meaningful values for Issuer and Label (these are displayed in the Authenticator Apps on your phone). 
After completion, a secret will be generated and represented as a QR code for each user. This secret or QR code is needed by the user to create a new entry in the Authenticator app on the mobile phone. This secret and/or QR code need to be sent in a secure way to the user.

> [!NOTE]
> You can always show the generated secret again by clicking on the **Edit...** icon for TOTP configured users.

> [!WARNING]  
> **TOTP time sensitivity**  
> The machine where Royal Server is installed and the device where the TOTP Authenticator App is running need to have correct time settings in order to make TOTP work. Use Time Services to ensure this.

**TOTP Self-Service**
Alternatively, the user can be allowed to use the Royal Server TOTP Self-Service website. The user needs to login with the same user that was provisioned for TOTP and will then be presented with his secret / QR code. 

### Configuring DUO
Provide the DUO user Id that corresponds with the user you are configuring for Multi-Factor Authentication.

> [!NOTE]
> Check the [general configuration for the DUO provider](../general/mfa.md#duo-provider-configuration)

### Configuring YubiKey
Configuring YubiKey requires the input of the YubiKey ID e.g. by connecting the YubiKey to the machine and pressing the button on the YubiKey device.

> [!NOTE]
> Check the [general configuration for the YubiKey provider](../general/mfa.md#yubikey-provider-configuration)