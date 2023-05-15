---
uid: royalserver_components_management
name: Management Endpoint
order: 7300
---

<img src="/r2022/images/RoyalServer/Svg/SVG_RoyalServer_32.svg" class="icon-left icon-lg">

# Royal Server Management Endpoint

The Management Endpoint component helps you to remotely manage your servers. It allows you to manage Windows Services, Windows Events, Windows Processes, Hyper-V machines, Terminal Services, execute Powershell Scripts and manage VMware's Virtual Machines through Royal Server.

## Accessing the Management Endpoint Component

By default, the Management Endpoint is only accepting authenticated requests and the Royal Server configuration in Royal TS/X needs to be configured with a Credential. It only accepts user accounts that are in the local Windows group `Royal Server Users`. If the specified Credential is not member of this group, the Management Endpoint component will return an authentication error.

See details on [Permissions](xref:royalserver_general_permissions).
