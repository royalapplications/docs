---
name: DUO Provider Configuration
order: 9052
---

### <a name="duo"></a>DUO Provider Configuration

[DUO](https://duo.com) provides security solutions for companies and can be integrated into Royal Server.

In order to configure a DUO application and DUO secured users first. Therefore you need to log in to the DUO Admin Panel at [https://duo.com/](https://duo.com/).

#### <a name="duo-app-configuration"></a>Configuring an Application in DUO

With the DUO Admin Panel, you need to configure an _Application_ that is being secured by DUO - in our case, you want to secure Royal Server operations by DUO.

Navigate to **Applications** and **Protect an Application**. Look for **Partner Auth API** and click **Protect this Application**. You will be presented with a number of details, most notable the `Integration Key`, the `Secret Key` and the `API Hostname`. Remember these as you need them later for configuring the Royal Server DUO integration.

#### Creating Users in DUO

With the DUO Admin Panel, add users to your DUO configuration by clicking on **Users** and then on **Add User**.

> **Important**  
> After the creation of a user (or when you editing it), take a close look at the URL in your browser. At the end of it, you see a long sequence of letters and numbers - this is the DUO user id and you need it to configure it in the Royal Server Configuration Tool.

**Example:**
[https://admin-12abcdef.duosecurity.com/users/**HUGA65C32A3T2U0I20TF**]()

Notice the bold part at the end. The user id in this example is HUGA65C32A3T2U0I20TF.

#### Creating 2FA Devices in DUO

If you do not have 2FA devices (e.g. smart phone or a token) in your DUO configuration, navigate to an existing user in the DUO Admin Panel and add a phone or hardware token.

> [!NOTE]
> Make sure the new device is activated by clicking on **Activate** and assigned to a DUO user.

#### Configuring the DUO Provider

In the Royal Server Configuration Tool ensure that the _"DUO"_ provider is enabled.

Expand the details panel and enter the `Integration Key`, the `Secret Key` and the `Host` (=API Hostname) from the DUO Application created in the DUO web console backend [previously](#duo-app-configuration).
