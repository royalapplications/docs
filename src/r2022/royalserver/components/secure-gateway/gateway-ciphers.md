---
uid: royalserver_components_secure-gateway_gateway-cipher-configuration
name: Gateway Cipher Configuration
order: 7030
---

# Gateway Security Configuration

<img src="/r2022/images/RoyalServer/PageSecureGateway_48x48.png" class="icon-def" alt="" />

The Gateway Security Configuration panel displays and changes the security configuration of the Secure Gateway component of Royal Server.

## Show or Activate the Gateway Security Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Secure Gateway** group and then on the **Ciphers** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Ciphers

The Secure Gateway component is based on SSH and uses many encryption related algoriths under the hood. In some environments it is required to only allow specific algorithms. You can specify algoriths in the following categories:
- Encryption Key Algorithms
- Host Key Algorithms
- Key Exchange Algorithms
- Mac Algorithms

Additionally to enable or disable specific algorithms, you can sort them.
