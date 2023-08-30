---
uid: royalserver_components_secure-gateway
name: Secure Gateway
order: 7200
---

<img src="/r2023/images/RoyalServer/Svg/SVG_SecureGateway_32.svg" class="icon-left icon-lg" alt="" />

# Secure Gateway

The Secure Gateway is a component in Royal Server that enables the user to securely tunnel the traffic through Royal Server. This is done by using an encrypted SSH tunnel (also known as port forwarding).

### Accessing the Secure Gateway component

The Secure Gateway is only accepting authenticated requests and the Secure Gateway configuration in Royal TS/X needs to be configured with a Credential. The Secure Gateway only accepts user accounts that are in the local Windows group `Royal Server Gateway Users`. If the specified Credential is not member of this group, the Secure Gateway component will return an authentication error.

See details on [Permissions](xref:royalserver_general_permissions).
