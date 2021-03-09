---
uid: royalts_reference_tasks_key-sequence
name: Key Sequence Task
order: 9990
---

# ![](/images/RoyalTS/Plugins/Tasks/KeySequenceTask/SVG_PluginIcon_32.svg#img_header) Key Sequence Task
A **Key Sequence Task** allows you to send a sequence of key strokes (like a recorded keyboard macro) to one or more **active connections**. Royal TS will simulate keyboard input as it would be typed on your computer. This is a great way to automate repetitive tasks or execute the same command on multiple sessions at once.

## Dashboard
The **Task Dashboard** is shown in the **Dashboard** panel when you select a Command Task in the **Navigation** panel.

![KeySequenceTask_Dashboard](/images/RoyalTS/Plugins/Tasks/KeySequenceTask/keysequencetask_dashboard.png)

## Assignments
- The grid on the top shows connections or folders which are configured to use the selected task as **Connect, Disconnect or Key Sequence Task**
- You can also select one or more objects in the Assignments list and perform various edit commands.
- 
## Task Context
- The Task Context list shows all connections available as task context. Connections which are currently selected as task context are shown selected in the list and appear at the top of the list.
- Changing the selection in the list will change the task context.
- Click on Execute to start the selected task for the selected task context.

> [!Note]
> Key sequence tasks can only be executed on active connections, therefore the task context for those tasks will only show active connections. Do not interfere in any way (switching to other connections, applications, pressing any keys, etc.) during key sequence task execution. The status bar will notify you when the key sequence started and when it ended.

See also: [Working with Tasks](xref:royalts_tutorials_tasks)

## Plugin Settings
To configure the Key Sequence Task plugin settings, open the Plugins Management and click on **Settings** for the Key Sequence Task plugin:

#### Key Stroke Pause Interval:
Configure the pause interval in ms between key strokes.

## Task Properties
The Key Sequence Task Properties dialog is shown:
- for a new key sequence task by clicking the **Key Sequence Task** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing key sequence task by selecting a key sequence task and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple key sequence tasks were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Key Sequence Task Properties
[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[description.md](~/royalts/_shared/description.md)]

#### Execution Mode
Some connection types may provide a different way to send key sequences (Direct Mode). For example, the Rebex based Terminal connection allows to send commands directly to the server - which might be faster and not error prone to user interference. Choose one of the following options for the key sequence task:

- **Do not change Execution Mode (Default)**  
  This option will use the current execution mode of the context connection. For example: if your Terminal connection is configured to use Direct Mode, Royal TS will not change the mode and the key sequence will be sent to the server using the Direct Mode
- **Always use Keyboard Input Simulation**  
  This option will force Royal TS to always send the task to the active connection using keyboard simulation, regardless of the mode the connection is currently configured to use.
- **Always use Direct Mode (where supported)**  
  This option will force Royal TS to always send the task directly to the active connection when the connection type supports the Direct Mode. If you set this option and execute the task on a connection which doesn't support Direct Mode, the task will be sent using keyboard input simulation.

#### No confirmation required
If checked, tasks executed from the Favorite Key Sequence Tasks menu do not show the Task Context confirmation window.

> [!Note]
> You should only check this option for simple and harmless tasks, such as PING. Tasks which can cause damage if executed for the wrong selection (such as a reboot) should not have checked this option.  
> A task executed from the Navigation panel or Tasks panel always requires confirmation, regardless of the setting.

## ![](/images/RoyalTS/Plugins/Tasks/KeySequenceTask/SVG_PageKeySequenceTask_32.svg#img_header) Key Sequence
The **Key Sequence** page allows you to configure a key sequence (simulating keyboard input).

#### Sequence
Enter a Key Sequence.

> [!Tip]
> Pressing either the '$' or '{' key will show a popup with all available replacement tokens and special keys. Hit the ESC key to hide the popup and continue typing.  
> 
> Use the button Insert to show a list of available replacement tokens and special key commands. The WAIT command token can be placed anywhere in the sequence to delay the sequence.  
> 
> **Examples for Key Sequences:**  
> - A group policy is set to show a message whenever a user is attempting to log on interactively. Create a Key Sequence "{WAIT:1000}{ENTER}" which will wait 1 second (1000ms) after successfully connected to the remote desktop session and sends the ENTER key to the remote session to confirm the message.
> - A Web Page connection to a flash based application which requires you to log on using username and password can be configured to send the appropriate Key Sequence after the connection has been established.
> - Console commands you need to execute on one or more connections.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
