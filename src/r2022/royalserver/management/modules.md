---
uid: royalserver_management_modules
name: Modules
order: 9030
---

# Modules

<img src="/r2021/images/RoyalServer/ModuleManagement_48x48.png" class="icon-def" alt="" />

The Modules panel displays the currently installed modules.

## Show or Activate the Modules Pane

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Modules** entry.

## Features

- The panel lists the currently installed modules of Royal Server and the corresponding version.
- Using the Refresh button, the list can be refreshed
- Use the Settings button to configure a module, if optional settings are available

## List of Modules

The following modules are distributed with Royal Server

- EventLog (queries Windows Event Logs)
- HyperV (manages Hyper-V virtual machines)
- Processes (list and kill Windows processes)
- RoyalDocumentStore (this module enables the Document Store functionality)
- RoyalServerManagement (this module enables Royal Server internal functionalities)
- Script (executes Scripts on the destination server)
- Terminal Services (manages terminal sessions)
- WindowsServices (manages Windows services)
- ModuleInfo (module for displaying the available modules)

For a detailed description of all modules see [Royal Server Modules](xref:royalserver_modules)

> [!NOTE]
> If you want to completely disable a functionality, e.g. you don't want any user to be able to list/kill processes, you can delete the module dll file in <RoyalServerInstallationDir>\RoyalServer.ManagementEndpoint.Module\ and restart Royal Server.
