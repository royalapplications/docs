---
uid: royalserver_general_multifactor-user-store
name: Multi Factor User Store
order: 9040
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Permissions_32.svg" class="icon-left icon-lg" alt="" />

# Multi Factor User Store

The **Multi Factor User Store** panel displays the users configured for Multi Factor authentication and allows  new users to be configured for MFA.

## Show or Activate the Multi Factor Users Store Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Multi Factor Users Store** entry.

The data grid shows the configured users for multi-factor authentication.

For each users the following information is displayed:
- The User name
- The configured Provider (Generic TOTP, DUO or YubiKey)
- If the specific user has to present his second factor for the Document Store (triggered when loading or saving a document hosted by Royal Server)
- If the specific user has to present his second factor for the Secure Gateway(triggered when connecting using e.g. RDP connections)
- A Comment
- An icon for editing the user configuration
- An icon for deleting the user configuration

> [!NOTE]
> Any changes in the Multi Factor User Store does not require a restart of Royal Server.

## Adding a User for Multi-Factor Authentication
- Click on **Add...**.
- Enter a user or click on the **Select User...** icon.
- Specify an optional comment.
- Select for which functionality this user is required to present a second factor (Document Store and/or Secure Gateway)
- Specify the caching time. Each successful authentication is then cached for the specified minutes.
- Select an MFA provider. Currently, "Generic TOTP", "Duo" and "YubiKey" are supported. Depending on your selection, different additional information will be required.

> [!NOTE]
> A Caching Time of 0 minutes means no caching and the user has to provide a second factor for every operation.

Specify which MFA provider should be used for the specified user:

### Configuring Generic TOTP

Provide meaningful values for Issuer and Label (these are displayed in the Authenticator Apps on your phone).
After completion, a secret will be generated and represented as a QR code for each user. This secret or QR code is needed by the user to create a new entry in the Authenticator app on the mobile phone. This secret and/or QR code need to be sent in a secure way to the user.

> [!NOTE]
> You can always show the generated secret again by clicking on the **Edit...** icon for TOTP configured users.

> [!WARNING]  
> **TOTP time sensitivity**  
> The machine where Royal Server is installed and the device where the TOTP Authenticator App is running need to have correct time settings in order to make TOTP work. Use Time Services to ensure this.

**TOTP Self-Service**

Alternatively, the user can be allowed to use a web based self-service workflow by checking the **Allowed** under **Self Service**.

If self-service is allowed, the user needs to **login to the Royal Server TOTP Self Service Website** (https://[RoyalServerIpAddress]:[Port]) using the username provisioned for TOTP and then navigate to "TOTP Self Service". He will be presented with his secret/QR code to configure his authenticator app. As soon as he has configured the app, he needs to enter a second factor for verification. Once verified, this self-service workflow will be closed and cannot be accessed anymore.

After refreshing the grid in the Royal Server Configuration Tool and opening "Edit"-dialog for the user, he will be flagged as **Verified** under **Self Service**. In order to reset the workflow, so that the user can access it again, just uncheck **Verified**.

### Configuring DUO

Provide the DUO user Id that corresponds with the user you are configuring for Multi-Factor Authentication.

> [!NOTE]
> Check the [configuration of the DUO provider](./mfa.md#duo)

### Configuring YubiKey

Configuring YubiKey requires the input of the YubiKey ID e.g. by connecting the YubiKey to the machine and pressing the button on the YubiKey device.

> [!NOTE]
> Check the [configuration of the YubiKey provider](./mfa.md#yubikey)
