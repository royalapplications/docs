---
name: Permissions
order: 9020
---

# Permissions

<img src="/r2022/images/RoyalServer/Credential_48x48.png" class="icon-def" alt="" />

The **Permissions** panel displays the users that have access to Royal Server Management Modules.

## Show or Activate the Permissions Pane

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Permissions** entry.

> [!NOTE]
> The permissions for Royal Server are valid for all Management Connections as well as the Document Store functionality.

## Effective Permissions

The Effective Permissions tab lets you check all relevant permissions of the specified user.
Enter a username and click **Check Permissions** button. The Configuration Tool will list the following permissions:

Category **Autzorization Groups**:
- `Royal Server Users` - the specified user is member of Windows group and can use Management Connections and the Document Store
- `Royal Server Gateway Users` - the specified user member of this Windows group and can use the Secure Gateway component
- `Royal Server Administrators` - the specified user is member of this Windows group and can execute administrative tasks

Category **Documents**:
In this category all Royal Documents hosted by Royal server are listed and for each it shows if the user can read or
modify the document.

The button `Clear Cache` allows you to clear the cache for the currently specified user or for all users immediately. 

## Users
The Users tab shows all users that are member of the `Royal Server Users` Windows group. 
The button `Refresh` refreshes the list.
The button `Configure` opens the Local Users and Groups UI of Windows to configure group memberships 