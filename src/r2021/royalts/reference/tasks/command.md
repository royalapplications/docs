---
uid: royalts_reference_tasks_command
name: Command Task
order: 10000
---


# ![](/images/RoyalTS/Plugins/Tasks/CommandTasks/SVG_PluginIcon_32.svg#img_header) Command Task
**Command Tasks** are used to execute command lines (programs or batch scripts) from within Royal TS. Command tasks can run "stand-alone" (like a shortcut) or in context of a selected connection - which also allows you to "inject" variables (replacement tokens) to the command line (like the PING task).

## Dashboard
The **Task Dashboard** is shown in the **Dashboard** panel when you select a Command Task in the **Navigation** panel.

![CommandTask_Dashboard](/images/RoyalTS/Plugins/Tasks/CommandTask/commandtask_dashboard.png)

## Assignments
- The grid on the top shows connections or folders which are configured to use the selected task as Connect, Disconnect or Key Sequence Task
- You can also select one or more objects in the Assignments list and perform various edit commands.

## Task Context
- The **Task Context** list shows all connections available as task context. Connections which are currently selected as task context are shown selected in the list and appear at the top of the list.
- Changing the selection in the list will change the task context.
- Click on Execute to start the selected task for the selected task context.

> [!Note]
> Since command tasks can be executed on all connections, the task context list for command tasks will show all available connections (active and inactive).

See also: [Working with Tasks](xref:royalts_tutorials_tasks)

## Task Properties
The Command Task Properties dialog is shown:
- for a new command task by clicking the **Command Task** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing command task by selecting a command task and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple command tasks were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Command Task Properties
[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[description.md](~/royalts/_shared/description.md)]

#### No confirmation required
If checked, tasks executed from the Favorite Command Tasks menu do not show the Task Context confirmation window.

> [!Note]
> You should only check this option for simple and harmless tasks, such as PING. Tasks which can cause damage if executed for the wrong selection (such as a reboot) should not have checked this option.  
> A task executed from the Navigation panel or Tasks panel always requires confirmation, regardless of the setting.

## ![](/images/RoyalTS/Plugins/Tasks/CommandTask/SVG_PageCommand_32.svg#img_header) Command
The **Command** page allows you to configure which command should be executed.

#### Command
Specify a program or batch file to execute.

#### Arguments
Specify arguments for the command.

> [!Tip]
> Use the fly-out button to the right to show a list of available replacement tokens.  
> You may also use environment variables (such as %TEMP%).

#### Working Directory
Specify the working directory for the command.

> [!Note]
> Tasks are always executed locally (on the machine where Royal TS is running) but in context of a selection of connections. Using replacement tokens you can inject values from the selected connection(s) (such as custom fields or the URI, even username and password). Executing a task against multiple connections will start one command for each connection.  
> To execute tasks on the remote machine, you can make use of tools like psexec (from Microsoft).

#### About the OS X tab
Since Royal TSX for macOS can also be used to work with your Royal TS documents, you can specify a different command configuration for macOS. Some commands may have a slightly different syntax but basically do the same. To prevent users from creating multiple tasks with the same function for each platform, you can specify a different command configuration for macOS.

[!include[credentials.md](~/royalts/_shared/credentials.md)]

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
