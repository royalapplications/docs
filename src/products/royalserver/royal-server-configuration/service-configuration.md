---
uid: royalserver_management_service-configuration
name: Service Configuration
order: 7340
---

<img src="/r2023/images/RoyalServer/Svg/SVG_RoyalServer_32.svg" class="icon-left icon-lg">

# Service Configuration

The Service Configuration panel displays and changes the configuration of Royal Server.

## Show or Activate the Service Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Service Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Features

**Worker Account**

Royal Server is running as a Windows Service. By default it is installed using the `LOCAL SYSTEM` account.

For managing remote servers (e.g. querying the list of Windows Services from a managed server) and for internal housekeeping work (e.g. populating the cache for the group memberships for Royal Server Windows groups), Royal Server is using a Worker Account. This account has to have network access.

The Worker Account should be `Local Administrator` and in domain-joined scenarios a member of the `Domain Users` group on the Domain Controller.

> [!NOTE]
> The Windows service account can be changed, but it is required that the chosen account has administrative rights. If you plan to work with domain accounts, an account needs to be specified that has proper rights **to enumerate users on the domain**.

**Primary Server Binding**

The Primary Server Binding is containing the main configuration for Royal Server and consists of
- the IP Address
- the Port and
- the Certificate that is used for HTTPS

> [!NOTE]
> By default, the unspecified address (0.0.0.0) is assigned, meaning it listens on all available IPv4 addresses.

Royal Server uses communication via HTTPs/SSL to encrypt communication. This is achieved by creating a self-signed SSL certificate during the installation process. This certificate is named "RoyalServer". It can be changed to your own certificate if needed. The selected certificate can be deleted and exported (to be used on a second Royal Server installation in a load balanced scenario).

> [!NOTE]
> Until Royal Server V3 and below it was possible to deactivate HTTPS/SSL encryption, as of Royal Server V4 this is not possible anymore, only secure connections are supported.


**Use Compression**

This setting enables (HTTP) compression on Royal Server for [Management Endpoint Component](xref:royalserver_modules). Enabling this is recommended if you have enough CPU on the client and the servers side and want reduce the network load.

**Additional Bindings**

In addition to the Primary Server Binding you can add one or more additional bindings.

Each Additional Binding consists of
- the IP Address
- the Port and
- the Certificate that is used for HTTPS

and can be enabled and disabled separately.


> [!NOTE]
> Note that additional bindings are only used when there is no binding to '0.0.0.0' or '::'
