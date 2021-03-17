---
name: Configuration of DUO Provider
order: 7010
---

# Configuration of DUO Provider

The following steps outline the configuration of DUO for Royal Server.

## Log in to DUO

In order to do the configuration, you need to log in to your DUO web console at [https://duo.com/](https://duo.com/).

## Confige the Royal Server Application in DUO

First, you need to configure an _Application_ that is being secured by DUO - in this case, you want to secure Royal Server by DUO. To do this, you navigate to **Applications** and **Protect an Application**. Look for **Partner Auth API** and click **Protect this Appliation**. You will be presented with a number of details, most notable the `Integration Key`, the `Secret Key` and the `API Hostname`. Remember these, you need to configure them later in the Royal Server Configuration Tool.

## Create Users in DUO

If you do not have users in your DUO configuration, create a user by clicking on **Users** and **Add User**. While you are in the details of the user, click **Add Phone** or **Add Hardware Token** to assign a 2FA device to the user.

> **Important**  
> After the creation of a user (or when you editing it), take a close look at the URL in your browser. At the end, you see a complicated number - this is the user id inside DUO and you need it to configure it in the Royal Server Configuration Tool.

**Example:**

https://admin-42cae6ad.duosecurity.com/users/**DUNA65C32A3T2U0I20TG**

Notice the bold part at the end.

### Creating 2FA Devices in DUO

If you do not have 2FA devices (e.g. Smartphones) in your DUO configuration, create one by navigating to a User and add a phone or hardware token.

> [!NOTE]
> Make sure the new device is activated by clicking on **Activate**.

### Configure DUO in the Royal Server Configuration Tool

**Configure DUO integration**

- Navigate to **Document Store** and **Multi-Factor Authentication**.
- In the tab _Provider_, check _DUO_ and click **Configure...**.
- Store the previously created `Integration Key`, `Secret Key` and the `API Hostname` from DUO here.
- Restart Royal Server service.

**Configure Users for DUO**

Additionally, you need to enroll each user that should use DUO as second factor.

- To do this, click on the tab **User Management** and **Enroll...**.
- Select a user, change the Provider to `DUO`.
- Enter the DUO User Id (see above).
