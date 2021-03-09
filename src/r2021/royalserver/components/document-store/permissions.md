---
name: Permissions
order: 7010
---

# Permissions

<img src="/r2021/images/RoyalServer/Credential_48x48.png" class="icon-def" alt="" />

The Logins panel displays the users that have access to the Document Store functionality in Royal Server.

## Show or Activate the Permissions Pane

In The Royal Server Configuration Tool Navigation Bar, click on the **Document Store** group and then on the **Permissions** entry.

## Features

- The panel lists all users that are members of the local Windows Group `Royal Server Users`. If you have added Groups, this list is resolving all recursive groups and shows all users.
- Use the **Refresh** button to refresh the list of permissions.  
  _Remark_: Depending on your environment, this might take some time.
- Use the **Configure..**. button to open the Windows UI for managing Users and Groups.

> **Note**  
> If you change the users in the `Royal Server Users` group, Royal Server is not immediately picking up new members but caches the list for 5 minutes (default). To force a reload of the members restart Royal Server.
