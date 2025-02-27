---
uid: royalserver_general_certificate-store
name: Certificate Store
order: 9060
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Certificate_32.svg" class="icon-left icon-lg" alt="" />

# Certificate Store

Create, remove or export certificates that will be used for Royal Server and the Secure Gateway.

> [!NOTE]
> The shown certificates are certificates that are installed in the Personal Store of your local machine. You can also use standard Windows tools to manage these certificates.

**Add a certificate**

This allows you to create a new certificate by specifying a subject, an optional friendly name and a key length. The resulting certificate will be installed in the Personal Store of your local machine.

**Export a Certificate**

Clicking the **Save** icon lets you export the selected certificate as a .pfx file by setting a password. This exported certificate can then be used on other Royal Server installations, enabling you to establish a server farm where all servers share the same certificate. This setup ensures a highly available, multi-server Royal Server environment with consistent security and authentication.

**Deleting a Certificate**
Clicking the trashcan icon deletes the selected certificate.

> [!WARNING]
> This will remove the certificate from the Personal Store on your local machine!