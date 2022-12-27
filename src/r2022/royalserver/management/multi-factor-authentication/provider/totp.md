---
name: TOTP
order: 7010
---

# Time-based One-time Password (TOTP)

TOTP is a generic algorithm for time-based one-time-passwords that is implemented by a many services and apps. Since it is a generic algorithm, any app that supports it can be used as a second factor for this provider. There are, for example, apps from Microsoft, Google and many others.

# Configuration of the TOTP Provider

The following steps outline the configuration of a user for TOTP.

## Configuring the TOTP provider

Ensure that the _"Generic TOTP Authenticator (Google, Microsoft, etc)"_ provider is enabled in the Providers tab.

> [!NOTE]
> A change requires a restart of Royal Server.


## Configuring a user

In the Users tab
- Click on **Add...**.
- Click on **Select User...** to select a user and `Generic TOTP` as provider.
- Select for which feature this user is reqiured to present a second factor (Document Store or Secure Gateway)
- Specify an optional comment
- Specify the caching time. Each successful authentication is then cached for the specified minutes.
- Provide meaningful names for Issuer and Label (these are displayed in the Authenticator Apps later).

> [!NOTE]
> A Caching Time of 0 minutes means no caching and the user has to provide a second factor for every operation.

When done, you are presented with a Secret text that you can copy and provide to the user and a QR Code that can be scanned by the TOTP Authenticator App directly. 

> [!NOTE]
> You can always show the generated secret again by clicking on **Show Secret...** for TOTP configured users.

> [!WARNING]  
> **TOTP time sensitivity**  
> The machine where Royal Server is installed and the device where the TOTP Authenticator App is running need to have correct time settings in order to make TOTP work. Use Time Services to ensure this.
