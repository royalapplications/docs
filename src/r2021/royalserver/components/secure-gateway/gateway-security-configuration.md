---
name: Gateway Security Configuration
order: 7030
---

# Gateway Security Configuration

<img src="/r2021/images/RoyalServer/PageSecureGateway_48x48.png" class="icon-def" alt="" />

The Gateway Security Configuration panel displays and changes the security configuration of the Secure Gateway component of Royal Server.

## Show or Activate the Gateway Security Configuration Panel

In The Royal Server Configuration Navigation Bar, click on the Secure Gateway group and then on the Gateway Security Configuration entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Features

**Only allow Royal TS/X as clients**

This setting only allows Royal TS (for Windows) and Royal TSX (for macOS) as clients of the Secure Gateway.

> [!NOTE]
> This settings helps strengthen the Royal Server configuration against SSH brute force attacks if you have Royal Server reachable from the Internet.

**Block IPs after unsuccessful login attempts**

SSH brute force attacks try to log on with the same user many times to guess the password and trying to log on a user is performance intensive. This setting helps to kill such attempts early in the call by blocking the IP after a configured number of failed attempts.

| Option                     | Description                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Blocking time (in minutes) | Specifies the time an IP is blocked after it tries to log on too many times unsuccessfully.                     |
| Number of attempts         | Specifies the number of failed attempts t log in after which an IP is blocked for the specified amount of time. |
| Time frame (in minutes)    | Only failed login attempts within the last minutes in this time frame are relevant.                             |
