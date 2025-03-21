---
uid: royalserver_general_permissions
name: Permissions
order: 9030
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Security-Ok_32.svg" class="icon-left icon-lg" alt="" />

# Permissions

The **Permissions** panel allows you to check effective permissions for users and list group memberships.

## Show or Activate the Permissions Pane

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Permissions** entry.


The following groups are used to grant access to Royal Server:

- **"Royal Server Users"**: Users that want to use Royal Server Management modules (e.g. Windows Events, Hyper-V etc) and the Document Store need to be in this group - either directly or via containing groups.
- **"Royal Server Gateway Users"**: Users that want to use the Secure Gateway component need to be a member of this group - either directly or via containing groups.
- **"Royal Server Administrators"**: Users that want to administer Royal Server need to be a member of this group - either directly or via containing groups.

> [!NOTE]
> The previously mentioned groups are generated on startup by Royal Server by default.

### Effective Permissions

The Effective Permissions lets you check all relevant permissions for a specific user.
Enter a username and click **Show** button. The Configuration Tool will list

- **Authorization groups**: the group memberships for this users of the Royal Server groups and
- **Documents**: the read and modify rights for this user for each Document hosted by Royal Server.

> [!NOTE]
> Authorization group memberships are cached. Click on `Refresh without using the cache` to list group memberships bypassing the cache.

> [!NOTE]
> The read and modify access rules for Documents hosted by Royal Server can be configured [here](../document-store-configuration/documents.md).

### Group Membership

Select a Royal Server Group and show the members of this group. This list helps when users trying to access Royal Server get `Access Denied`.
