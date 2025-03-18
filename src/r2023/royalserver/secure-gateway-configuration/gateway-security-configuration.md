---
uid: royalserver_components_secure-gateway_gateway-security-configuration
name: Gateway Security Configuration
order: 7230
---

<img src="/r2023/images/RoyalServer/Svg/SVG_SecurityConfiguration_32.svg" class="icon-left icon-lg" alt="" />

# Gateway Security Configuration

The Gateway Security Configuration panel displays and allows modifications to the security settings of the Secure Gateway component in Royal Server. This helps strengthen security, especially when Royal Server is accessible over the internet.

## Show or Activate the Gateway Security Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Secure Gateway** group and then on the **Security Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## General

**Only allow Royal TS/X as clients**

This setting only allows Royal TS (for Windows) and Royal TSX (for OS X) as clients of the Secure Gateway.

**Block IPs after unsuccessful login attempts**

SSH brute-force attacks repeatedly attempt to log in with the same user to guess the password, which can be resource-intensive. This setting helps mitigate such attacks by blocking the IP after a configured number of failed login attempts, preventing excessive load on the server.

| Option                     | Description                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Blocking time (in minutes) | Defines the duration for which an IP is blocked after exceeding the allowed number of failed login attempts..                     |
| Number of attempts         | Specifies the number of failed login attempts that trigger an IP block for the configured duration.. |
| Time frame (in minutes)    | Failed login attempts within the specified time frame are considered relevant.                             |
