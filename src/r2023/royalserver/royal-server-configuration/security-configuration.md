---
uid: royalserver_management_security-configuration
name: Security Configuration
order: 7330
---

<img src="/r2023/images/RoyalServer/Svg/SVG_SecurityConfiguration_32.svg" class="icon-left icon-lg" alt="" />

# Security Configuration

The Security Configuration panel displays and changes the security configuration of Royal Server.

## Show or Activate the Service Configuration Panel

In The Royal Server Console Navigation Bar, click on the **Royal Server** group and then on the **Security Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Features

**Require Authentication**

If checked, Royal Server is only accepting authenticated requests. Using this setting, Royal Server objects in Royal TS need to be configured with a Credential. Royal Server only accepts user accounts that are in the local Windows group 'Royal Server Users' (these can also be accounts or groups from the Windows domain the server belongs to). If the specified credential is not member of this group, Royal Server will return an authentication error.

**Block IPs After Unsuccessful Login Attempts**

In order to prevent brute force attacks on Royal Server, this setting blocks IPs that issue unsuccessful authentication requests. 

For example, block an IP for 5 minutes if it issues 4 unsuccessful requests within 3 minutes.

Available settings:

- _Blocking time (in minutes)_ (Specifies the time an IP is blocked after it tries to log on too many)times unsuccessfully.
- _Number of attempts_ (Specifies the number of failed attempts after which an IP is blocked for the specified amount of time)
- _Time frame (in minutes)_ (Only failed login attempts within this time frame are relevant for the IP blocking)

> [!NOTE]
> Blocked requests will be logged.
