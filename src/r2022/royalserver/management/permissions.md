---
name: Permissions
order: 9020
---

# Permissions

<img src="/r2021/images/RoyalServer/Credential_48x48.png" class="icon-def" alt="" />

The **Permissions** panel displays the users that have access to the Royal Server Modules.

## Show or Activate the Permissions Pane

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Permissions** entry.

> [!NOTE]
> The permissions for Royal Server are valid for all Management Connections as well as the Document Store functionality.

## Features

- The panel lists all users that are members of the local Windows Group `Royal Server Users`. If you have added Groups, this list is resolving all recursive groups and shows all users.
- Use the **Refresh** button to refresh the list of permissions. Remark: Depending on your environment, this might take some time.
- Use the **Configure...** button to open the Windows user interface for managing Users and Groups.

> [!NOTE]
> Royal Server is caching the allowed users for 5 minutes by default. So if you change the users in the `Royal Server Users` group, you will not see the change immediately but it takes up to 5 minutes to be effective. If you want to force the change, restart Royal Server. If you want to configure the 5 minute timeframe, change the UserCachingInSeconds value in the RoyalServer.exe.config file.
