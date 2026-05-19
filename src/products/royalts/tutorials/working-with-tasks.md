---
uid: royalts_tutorials_tasks
name: Working with Tasks
order: 9940
---

# Working with Tasks
Royal TS offers powerful task automation using Command Tasks and Key Sequence Tasks.

A **Command Task** is a definition of a program (executable or batch file), the command line arguments and a working directory. Command Tasks are always executed locally, where Royal TS is running. Using tools like [PsExec](https://technet.microsoft.com/en-us/sysinternals/bb897553) you are also able to execute tasks remotely.

A **Key Sequence Task** can be used to invoke keyboard input in one or more active connections to easily automate command execution.

By using special replacement tokens you can pass connection specific variables (like \$URI\$ or \$CustomField1\$) to the task upon execution.

See also: [Command Task](xref:royalts_reference_tasks_command) and [Key Sequence Task](xref:royalts_reference_tasks_key-sequence)

## Create a Command Task
In this example, a ping task is created:

1.  In the **Navigation** panel, select a folder.
2.  On the **Home** tab, in the **Edit** group, click on **Add**.
3.  Click on **Command Task** in the drop down menu.
4.  Type "PING (cont.)" in the **Display Name** box.
5.  Click the big star-shaped icon at the upper right corner of the properties dialog to mark the object as a favorite command task.
6.  Check the **No confirmation** required check box.
7.  Click on **Command**.
8.  In the **Command** text box, type: %windir%\system32\ping.exe
9.  In the **Arguments** text box, type: $URI$ -t

> [!Tip]
> Use the fly-out button on the right to display a list of available replacement tokens.

10.  In the **Working Directory** text box, type: %windir%\system32
2.  To add the Command Task and exit the dialog, click **OK**.

## Create a Key Sequence Task
In this example, a task to send a simple command like ls -al is created:

1.  In the **Navigation** panel, select a folder.
2.  On the **Home** tab, in the **Edit** group, click on **Add**.
3.  Click on **Key Sequence Task** in the drop down menu.
4.  Type "ls -al" in the **Display Name** box.
5.  Check the big star-shaped icon at the upper right corner of the properties dialog to mark the object as a favorite key sequence task.
6.  Check the **No confirmation** required check box.
7.  Click on **Key Sequence**.
8.  In the text box, type: ls -al
9.  Click on **Insert** and select **Enter**

> [!Tip]
> The Insert drop down button provides access to a list of all available replacement tokens and special keys (like Enter, Tab, etc.).

10. The text box should now read: ls -al{ENTER}
11. To add the Key Sequence Task and exit the dialog, click **OK**.

## Share Tasks within a Team
To share tasks, create a dedicated shared document containing all shared tasks. If there's already a shared document for connections, you may also use the existing file and add all tasks you want to share. Tasks are available as soon as the document containing the tasks is opened.

## Execute Tasks on Demand
By default, tasks are executed when they are double-clicked in the **Navigation** panel as well as in the **Tasks** panel or by executing them using the **Favorite Tasks** menu.

In this example, the previously created ping task will be executed against a selection in the **Navigation** panel:
1.  In the **Navigation** panel, select a Remote Desktop connection
2.  On the **Home** tab, in the **Clipboard and Favorite Tasks** group, click on **Command Tasks**
3.  Click on **PING (cont.)**

This example shows how to execute a task against multiple connections:
1.  In the **Navigation** panel, select a folder containing multiple Remote Desktop connections
2.  In the **Dashboard** panel, select two or more Remote Desktop connections
3.  On the **Home** tab, in the **Clipboard and Favorite Tasks** group, click on **Command Tasks**
4.  Click on **PING (cont.)**  
    Note that one task is executed for each selected connection.

> [!Note]
> Key Sequence Tasks can only be executed when active connections are selected. Inactive connections are ignored.

## Connect and Disconnect Tasks
The following example assumes that you already have a Connection and Command Task created:
1.  In the **Navigation** panel, select a connection.
2.  On the **Home** tab, in the **Edit** group, click on **Properties**.
3.  In the connection properties dialog, click **Tasks**.
4.  In the **Connect Task** tab page, open the **Task** drop down box.
5.  From the Task drop down list, select the Command Task you want to execute before this connection will be established.

> [!Tip]
> Use the **Add** button to create a new **Command Task** and use the **Edit** button to open or change the properties of the selected task.

6.  Optionally configure to wait for the task, only run the task if no other connection of the folder is active or to abort the task if it fails. These settings might be useful for scenarios where you want to establish a VPN connection automatically.
7.  To apply the changes and exit the dialog, click **OK**.

The above procedure also applies to **Disconnect Tasks**, which are executed after a session was disconnected.

## Execute Key Sequence Tasks after Connect
The following example assumes that you already have a **Connection** and **Key Sequence Task** created:
1.  In the **Navigation** panel, select a connection.
2.  On the **Home** tab, in the **Edit** group, click on **Properties**.
3.  In the connection properties dialog, click **Tasks** and switch to the **Key Sequence** tab page.
4.  In the Key Sequence tab page, open the **Key Sequence Mode** drop down box and select Use an existing key sequence task.
5.  From the **Task** drop down list, select the **Key Sequence Task** you want to execute right after the connection is established.

> [!Tip]
> Use the **Add** button to create a new **Key Sequence Task** and use the **Edit** button to open or change the properties of the selected task.

6.  To apply the changes and exit the dialog, click **OK**.

## Execute an Ad Hoc Key Sequence
The following example assumes that you are working on an active connection or you have selected one or more active connections in the folder dashboard:
1.  On the **Home** or **Actions** tab, click the **Key Sequence Tasks** drop down button.
2.  Click on **Ad Hoc Key Sequence**. The Ad Hoc Key Sequence dialog is shown.
3.  Enter a key sequence to be sent to the selected active connections. Use the **Insert** button and select any special keys or replacement tokens from the connection objects if needed.
4.  Click **OK** to send the key sequence to all selected active connections.

> [!Tip]
> Check the option Create a key sequence task to preserve the task and save it in one of your documents.