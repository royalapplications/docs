---
name: DUO
order: 7020
---

# DUO Provider

[DUO](https://duo.com) provides security solutions for companies and can be integrated into Royal Server.

## Configuring the DUO backend

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

Ensure that the _"DUO"_ provider is enabled in the Providers tab of the Multi-Factor Authentication Panel.

Click on **Configure...** and enter the `Integration Key`, the `Secret Key` and the `Host` (=API Hostname) from the DUO Application created in the DUO web console backend previously.

> [!NOTE]
> A change requires a restart of Royal Server.

## Configuring a user

In the Users tab
- Click on **Add...**.
- Click on **Select User...** to select a user and `DUO` as provider.
- Select for which feature this user is reqiured to present a second factor (Document Store or Secure Gateway)
- Specify an optional comment
- Specify the caching time. Each successful authentication is then cached for the specified minutes.
- Specify the DUO user id (see above)

Depending on the device, the configured user now has to either enter a code or approve the request in the DUO app.

> [!NOTE]
> The DUO integration into Royal Server supports devices with push notification capabilites if configured in the DUO backend.