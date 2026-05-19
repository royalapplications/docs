---
uid: royalserver_getting-started_setting-up-royal-server-users
name: Setting up Royal Server Users
order: 10103
---

# Getting Started

## Setting up Royal Server Users

By default, Royal Server requires users to be authenticated in order to accept any connections. Royal Server itself does not have its own user database. For authentication, it completely relies on Windows users. 
For authorization Royal Server uses local groups and their members. For a Windows user to be able to use Royal Server, they must be a member of specific Windows groups.

The following Windows Groups are created by Royal Server on startup by default:

**Royal Server Users**

All users in this group are allowed to use the Management Endpoint and Document Store Modules.

**Royal Server Gateway Users**

All users in this group are allowed to use the Royal Server Secure Gateway.

**Royal Server Administrators**

All users in this group are allowed to administrate Royal Server settings. This group is important if you plan to administrate Royal Server via PowerShell Commandlets.

> [!TIP]
> In domain joined environments we recommend to not add domain users directly to these local groups but first create corresponding domain groups, add the users there and then just add these domain groups to the local groups.


