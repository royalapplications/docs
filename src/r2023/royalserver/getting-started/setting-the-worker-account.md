---
uid: royalserver_getting-started_setting-the-worker-account
name: Setting the Worker Account
order: 10105
---
# Getting Started

## Setting a Worker Account

Royal Server is running as a Windows Service and as such is using the Local System account by default. For commands Royal Server is executing as well as internal activities, a Worker Account is used. It is vital, that this account has network access rights, otherwise Royal Server is unable to manage your servers.

After installation Royal Server needs to be provided with a Worker Account configuration. Click on **Royal Server** and **Service Configuration** and on **Change** for the Worker Account. Enter a valid local account that has administrative rights and network access.

> [!IMPORTANT]
> If the machine is domain joined, the Worker Account should be a domain account (no domain admin rights are needed).

> [!NOTE]
> If you start the Royal Server Configuration Tool for the first time, the tool will ask you for the Worker Account configuration automatically.



