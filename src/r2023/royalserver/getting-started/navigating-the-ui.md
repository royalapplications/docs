---
uid: royalserver_getting-started_navigating-the-ui
name: Navigating the User Interface
order: 10106
---
# Getting Started

## Navigating the User Interface

The basic user interface looks like this:

![Royal Server Configuration Tool](../../images/royalserver/GettingStarted/royal-server-configuration-tool.png "Royal Server Configuration Tool")
## The ribbon for basic operations
At the top you can see the ribbon bar which allows you to
- Manage the status of the Royal Server service (start, stop or restart the service). 
- Save configuration changes
- Check for updates (including beta versions)
- Display the log viewer
- Access help and support resources 

### Manage the status of Royal Server
Royal Server can be started, stopped and restarted from the Ribbon. 

> [!TIP]
> Royal Server is actually a Windows Service. You can also manage the status of the service by issuing the following commands in an elevated command line:
> ```powershell
> net stop royalserver
> net start royal server
> ```

### Saving configuration changes
Whenever you change the configuration, you can/should save the changes.

> [!NOTE]
> After a configuration change, you must restart Royal Server for the change to take effect. Royal Server is not restarting automatically after a config change.

### Checking for updates
Check if there is an update for your version of Royal Server. You can [configure the update check settings](xref:royalserver_general_updatesettings).

### Open the log 
Royal Server keeps a log of all its actions, warnings and errors. Click to open the log viewer.
You can also [customize the server's logging configuration.](xref:royalserver_general_logging).

### Access help and support resources
Use our [Website](https://www.royalapps.com) and our [support forums](https://support.royalapps.com/support/home) if you have questions or want to open a ticket. Additionally, you can always send us an email. The Help button opens our online help. 