---
uid: royalserver_components_secure-gateway
name: Secure Gateway
order: 7200
---

<img src="/r2023/images/RoyalServer/Svg/SVG_SecureGateway_32.svg" class="icon-left icon-lg" alt="" />

# Secure Gateway

The Secure Gateway is a component in Royal Server that enables users to securely tunnel the traffic through Royal Server. This is done by using an encrypted SSH tunnel (also known as port forwarding).

The following connection types of Royal TS/X support tunneling through a Secure Gateway connection:

- [Remote Desktop Protocol Connection based on Microsoft RDP ActiveX](../../royalts/reference/connections/rdp.md)
- [Remote Desktop Protocol Connection based on FreeRDP](../../royalts/reference/connections/freerdp.md)
- [Terminal based on Putty](../../royalts/reference/connections/terminal-putty.md)
- [Terminal based on Rebex](../../royalts/reference/connections/terminal-rebex.md)
- [VNC based on integrated TightVNC](../../royalts/reference/connections/vnc.md)
- [VNC based on TightVNC](../../royalts/reference/connections/vnc-tight.md)
- [VNC based on UltraVNC](../../royalts/reference/connections/vnc-ultra.md)
- [File Transfer Connection](../../royalts/reference/connections/filetransfer.md)
- [Web Page Connection based on Chrome/Essential Objects](../../royalts/reference/connections/web-page-chrome.md)

### Accessing the Secure Gateway component

The Secure Gateway is only accepting authenticated requests and the Secure Gateway configuration in Royal TS/X needs to be configured with a Credential. The Secure Gateway only accepts user accounts that are in the local Windows group `Royal Server Gateway Users`. If the specified Credential is not member of this group, the Secure Gateway component will return an authentication error.

See details on [Permissions](xref:royalserver_general_permissions).
