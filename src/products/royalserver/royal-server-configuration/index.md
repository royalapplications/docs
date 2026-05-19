---
uid: royalserver_components_management
name: Management Endpoint
order: 7300
---

<img src="/r2023/images/RoyalServer/Svg/SVG_RoyalServer_32.svg" class="icon-left icon-lg">

# Royal Server Management Endpoint

The Management Endpoint component helps you to remotely manage your servers. It allows you to manage 
- [Windows Services](./modules/windows-services-module.md)
- [Windows Events](./modules/windows-events-module.md)
- [Windows Processes](./modules/windows-processes-module.md)
- [Hyper-V machines](./modules/hyper-v-module.md)
- [Terminal Services](./modules/terminal-services-module.md)
- [Execute Powershell Scripts](./modules/script-module.md) and 
- [Manage VMware's Virtual Machines](./modules/vmware-module.md) 

through Royal Server.

## Accessing the Management Endpoint Component

By default, the Management Endpoint is [only accepting authenticated requests](./security-configuration.md) and the Royal Server configuration in Royal TS/X needs to be configured with a Credential. It only accepts user accounts that are member of the local Windows group `Royal Server Users`. If the specified Credential is not member of this group, the Management Endpoint component will return an authentication error.

See details on [Permissions](xref:royalserver_general_permissions).
