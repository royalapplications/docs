---
uid: royalserver_getting-started_setting-up-royal-server-users
name: Setting up Royal Server Users
order: 10103
---
# Getting Started

## Setting up Royal Server Users

Royal Server itself does not have a user database. It completely relies on Windows users and group memberships.

The following Windows Groups are created by Royal Server on startup:

**Royal Server Administrators** 
All users of this group and child groups are allowed to administrate Royal Server settings.

**Royal Server Users**
All users in this group and child groups are allowed to use the Management Endpoint and Document Store Modules. 

**Royal Server Gateway Users**
All users in this group and child groups are allowed to use the Royal Server Secure Gateway. 

> [!TIP]
> In domain joined environments we recommend to not add domain users directly to these groups but first create corresponding domain groups, add the users there and add these domain groups to the local groups.




