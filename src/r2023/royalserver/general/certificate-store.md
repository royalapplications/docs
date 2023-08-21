---
uid: royalserver_general_certificate-store
name: Certificate Store
order: 9060
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Certificate_32.svg" class="icon-left icon-lg" alt="" />

# Certificate Store

Create, remove or export certificates that will be used for Royal Server and the Secure Gateway.

> [!NOTE]
> The shown certificates are certificates that are installed in the Personal Store of your local machine.

**Add a certificate**

This allows you to create a new certificate by specifying a subject, an optional friendly name and a key length. The resulting certificate will be installed in the Personal Store on your local machine.

**Export a Certificate**

Clicking on the Save icon allows you to export the selected certificate to a \*.pfx file by specifying a password. The exported certificate can later be used on another Royal Server installations to create a highly available multi-server Royal Server setup.

**Deleting a Certificate**
Clicking on the trashcan icon allows you to delete the selected certificate. 

> [!NOTE]
> This will remove the certificate from the Personal Store on your local machine!