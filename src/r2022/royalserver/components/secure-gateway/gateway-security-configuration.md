---
uid: royalserver_components_secure-gateway_gateway-security-configuration
name: Gateway Security Configuration
order: 7230
---

<img src="/r2022/images/RoyalServer/Svg/SVG_SecurityConfiguration_32.svg" class="icon-left icon-lg" alt="" />

# Gateway Security Configuration

The Gateway Security Configuration panel displays and changes the security configuration of the Secure Gateway component of Royal Server.

## Show or Activate the Gateway Security Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Secure Gateway** group and then on the **Security Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## General

**Only allow Royal TS/X as clients**

This setting only allows Royal TS (for Windows) and Royal TSX (for OS X) as clients of the Secure Gateway.

> [!NOTE]
> This settings helps strengthen the Royal Server configuration against SSH brute force attacks if you have Royal Server reachable from the Internet.

**Block IPs after unsuccessful login attempts**

SSH brute force attacks try to log on with the same user many times to guess the password and trying to log on a user is performance intensive. This setting helps to kill such attempts early in the call by blocking the IP after a configured number of failed attempts.

| Option                     | Description                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Blocking time (in minutes) | Specifies the time an IP is blocked after it tries to log on too many times unsuccessfully.                     |
| Number of attempts         | Specifies the number of failed attempts t log in after which an IP is blocked for the specified amount of time. |
| Time frame (in minutes)    | Only failed login attempts within the last minutes in this time frame are relevant.                             |

## Ciphers

The Secure Gateway component is based on SSH and uses many encryption related algorithms under the hood. In some environments it is required to only allow specific
algorithms. You can specify algorithms in the following categories:

- Encryption Key Algorithms
- Host Key Algorithms
- Key Exchange Algorithms
- Mac Algorithms

Additionally to enable or disable specific algorithms, you can sort them.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.
