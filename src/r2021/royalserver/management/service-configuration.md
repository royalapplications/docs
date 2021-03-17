---
uid: royalserver_management_service-configuration
name: Service Configuration
order: 9070
---

# Service Configuration

<img src="/r2021/images/RoyalServer/Service_48x48.png" class="icon-def" alt="" />

The Service Configuration panel displays and changes the configuration of Royal Server.

## Show or Activate the Service Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Service Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

> [!NOTE]
> The Windows service account can be changed, but it is required that the chosen account has administrative rights. If you plan to work with domain accounts, an account needs to be specified that has proper rights to enumerate users on the domain.

## Features

**Worker Account**

Royal Server is running as a Windows Service. By default it is installed using the `LOCAL SYSTEM` account. For the actual work (e.g. querying the list of Windows Services from a managed server), Royal Server is using a Worker Account. This account has to have network access.

**IP Address**

Specify the IP Address Royal Server is using for accepting requests.

**Port**

Specify the port, Royal Server is using for accepting requests.

**Use Compression**

This setting enables compression on Royal Server. This setting makes sense if you have enough CPU on the client and the servers side and want reduce the network load.

**HTTPS/SSL**

Royal Server uses communication via HTTPS/SSL for encrypt by default. This is achieved by creating a self-signed SSL certificate during the installation process. This certificate is named "RoyalServer". It can be changed to your own certificate if needed. The selected certificate can be deleted and exported (to be used on a second Royal Server installation in a load balanced scenario).

**Windows Service User**

> [!NOTE]
> The Royal Server service is using LOCAL SYSTEM as user by default. If this user does not have the necessary rights (e.g. to query domain users and groups) please consider changing this user.
