## ![](/images/RoyalTS/Application/SVG_PageTasks_32.svg#img_header) Tasks
You can specify a task to be executed before a connection is established and after it has been disconnected. For example: establish a VPN connection before you connect and close it after disconnect.

### Connect Task
#### Do not execute a task
Royal TS will not execute a command task when a connection is established.

#### Use task from parent folder
Royal TS will look for a configured connect task in the parent folder. This option is not available on the document level.

#### Use an existing task
Choose a command task from the drop-down list. Use the add button to add a new credential. Use the edit button to edit the selected credential.

> [!Note]
> The drop-down list supports sorting and filtering "as you type" to easily find the task you are looking for.

#### Specify a task name
When selected, enter or choose a task name you want to assign to the object during connect-time.

> [!Note]
> Assigning a task by name is recommended when a team of users share the same configuration file. Each user can define his own task as long as it is using the same name and saves the task in his own personal and protected document. This makes sharing files across team members very easy.

#### Wait for connect task completion
If checked, Royal TS will wait for the selected task to finish before the connection will be established.

#### Execute for first connection in folder
If checked, the task will only be executed if no other connection in the same folder is active.

> [!Note]
> This setting might be useful if you need to setup a VPN connection. Put all your connections which require you to setup this VPN in one folder and Royal TS will establish the VPN connection only for your first connection.

#### Abort when connect task fails
If checked, the connection will not be established when the configured task fails and returns an Exit Code other than 0.

### Disconnect Task
#### Do not execute a task
Royal TS will not execute a command task when a connection is disconnected.

#### Use task from parent folder
Royal TS will look for a configured disconnect task in the parent folder. This option is not available on the document level.

#### Use an existing task
Choose a command task from the drop-down list. Use the add button to add a new credential. Use the edit button to edit the selected credential.

> [!Note]
> The drop-down list supports sorting and filtering "as you type" to easily find the task you are looking for.

#### Specify a task name
When selected, enter or choose a task name you want to assign to the object during disconnect-time.

> [!Note]
> Assigning a task by name is recommended when a team of users share the same configuration file. Each user can define his own task as long as it is using the same name and saves the task in his own personal and protected document. This makes sharing files across team members very easy.

#### Wait for disconnect task completion
If checked, Royal TS will wait for the selected task to finish before the connection will be disconnected.

#### Execute for last connection in folder
If checked, the task will only be executed if it is the last active connection in the folder.

> [!Note]
> This setting might be useful if you need to setup a VPN connection. Put all your connections which require you to setup this VPN in one folder and Royal TS will disconnect the VPN connection after the last connection is disconnected.

See also: [Working with Tasks](xref:royalts_tutorials_tasks), [Command Task](xref:royalts_reference_tasks_command)

### ![](/images/RoyalTS/Application/SVG_TaskKeySequence_32.svg#img_header) Key Sequence
The **Key Sequence** page allows you to configure a sequence of key strokes (simulating keyboard events) to be sent to the connection after the connection has been established.

#### Do not send a key sequence
This is the default value. If selected, no key sequence is sent to the remote session after connect.

#### Use key sequence task from parent folder
Royal TS will look for a configured key sequence task in the parent folder. This option is not available on the document level.

#### Specify a key sequence
If selected, a key sequence can be specified for this connection.

> [!Note]
> Use the fly-out button to the right to show a list of available replacement tokens and special key commands. Use the WAIT command anywhere in the sequence to delay the sequence.  
> 
> Examples for Key Sequences:  
> - A group policy is set to show a message whenever a user is attempting to log on interactively. Create a key sequence "{WAIT:1000}{ENTER}" which will wait 1 second (1000ms) after successfully connected to the remote desktop session and sends the ENTER key to the remote session to confirm the message.
> - A web page connection to a flash based application which requires you to log on using a username and password can be configured to send the appropriate key sequence after the connection has been established.

#### Use an existing key sequence task
If selected, a key sequence task can be specified for this connection.

> [!Note]
> If a key sequence is in progress, do not interact with Royal TS or any other application after you connect. The status bar message indicates when a key sequence is in progress and when it has finished.

#### Specify a key sequence task name
When selected, enter or choose a key sequence task name you want to assign to the object during connect-time.

> [!Note]
> Assigning a task by name is recommended when a team of users share the same configuration file. Each user can define his own task as long as it is using the same name and saves the task in his own personal and protected document. This makes sharing files across team members very easy.