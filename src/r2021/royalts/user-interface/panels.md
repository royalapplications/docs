---
uid: royalts_ui_panels
name: Panels
order: 10000
---

# Panels

## ![](/images/RoyalTS/Application/SVG_PageNavigation_32.svg#img_header) [Navigation]
The **Navigation** panel displays folders and objects from the application document and all opened documents. It's one of the main interface components to interact with your documents and objects. If the Navigation panel is closed or hidden, click on **Navigation** on the **View** tab, in the **Panels** group, to show and activate the panel.

> [!Note]
> The Navigation panel can only be docked to the edges and cannot be tabbed to the tab bar.

#### Features
-   Filter pane on the top allows you to filter the tree by text (CTRL + F), connection state and favorite. Filtering is case insensitive and also displays all folders expanded in order to show the results.
-   Collapse all and expand all from the selected folder level when holding the **SHIFT** key while collapsing or expanding a folder.
-   Connection state indicator.
-   Drag & Drop reordering.

> [!Tip]
> Hold the **CTRL** key while during drag & drop to duplicate the object.

## ![](/images/RoyalTS/Application/SVG_PageDashboard_32.svg#img_header) Dashboard
The **Dashboard** panel displays different content based on the selection from the Navigation panel. If the dashboard is tabbed (default) and the selected object is not connected, it will be automatically selected. To show or activate the Dashboard panel, click on **Dashboard** on the **View** tab, in the **Panels** group.

In case a connection is selected, you will see the dashboard for the selected connection. For common objects, Royal TS will display one of the [Dashboards](xref:royalts_ui_dashboards) depending on the selected object.

## ![](/images/RoyalTS/Application/SVG_ApplicationPanelProperties_32.svg#img_header) Properties
The **Properties** panel displays the properties for the current selection. To show or activate the Properties panel, click on **Properties** on the **View** tab, in the **Panels** group.

#### Features
- Search and filter within the grid (CTRL + F).
- Copy the value of the selected row to the clipboard using double-click or the context menu.
- Execute assigned tasks using the context menu.
- Shell-execute for custom field values (place web site URLs or commands in the custom fields).

## ![](/images/RoyalTS/Application/SVG_PageNotes_32.svg#img_header) Notes
The **Notes** panel displays the notes (read-only) for the current selection. To edit or update the notes for the selected object, click on the Edit Notes button. To show or activate the Notes click on **Notes** on the **View** tab, in the **Panels** group.

#### Features
-   Powerful text editor.
-   HTML formatting support.
-   Hyperlink support (links open in external default browser).
-   Support for embedded images.

> [!Tip]
> To embed images, drag them into the notes editor using drag & drop.

## ![](/images/RoyalTS/Application/SVG_PageCredential_32.svg#img_header) Credentials
The **Credentials** panel displays a filtered tree view of all available credentials. To show or activate the Credentials panel, click on **Credentials** on the **View** tab, in the **Panels** group.

#### Features
-   Filter the credentials tree view by text (CTRL + F). Filtering is case insensitive and displays all folders expanded in order to show the results.
-   Provides a context menu with easy access to copy the username or password to the clipboard.

See also: [Working with Credentials](xref:royalts_tutorials_credentials), [Credential](royalts_reference_credential)

## ![](/images/RoyalTS/Application/SVG_Todo_32.svg#img_header) To-Do Items
The **To-Do Items** panel displays a filtered tree view of all available To-Do items. To show or activate the To-Do Items panel, click on **To-Do Items** on the **View** tab, in the **Panels** group.

#### Features
-   Filter the To-Do Items tree view by text (CTRL + F). Filtering is case insensitive and displays all folders expanded in order to show the results.

See also: [Working with To-Do Items](xref:royalts_tutorials_todo), [To-Do Item](xref:royalts_reference_organization_todo)

## ![](/images/RoyalTS/Application/SVG_PageTasks_32.svg#img_header) Tasks
The **Tasks** panel displays a filtered tree view of all available tasks. To show or activate the Tasks panel, click on **Tasks** on the **View** tab, in the **Panels** group.

#### Features
-   Filter the tasks tree view by text (CTRL + F). Filtering is case insensitive and displays all folders expanded in order to show the results.
-   Task context indicator at the bottom of the tree view.

> [!Note]
> If a tasks contains replacement tokens (like $URI$) to pass in dynamic values based on your selection, it needs a "Task Context" in order to be executed. The Task Context is updated when a connection is selected in the Navigation panel or when one or more connections are selected in the Dashboard panel.

See also: [Working with Tasks](xref:royalts_tutorials_tasks), [Task](xref:royalts_reference_tasks_commandtask)

## ![](/images/RoyalTS/Application/SVG_ApplicationPanelKeySequence_32.svg#img_header) Key Sequence Broadcaster
The **Key Sequence Broadcaster** panel allows you to send keyboard input to multiple active connections.To show or activate the Key Sequence Broadcaster panel, click on **Key Sequence Broadcaster** on the **View** tab, in the **Panels** group.

#### Features
-   Select (check) one or more **Targets** (context connections) from the connection list in the Key Sequence Broadcaster panel to specify which targets should receive the key sequence.
-   Intellisense for replacement tokens (by typing a **$** character).
-   Intellisense for keyboard keys (by typing a **{** character).
-   Syntax highlighting support for replacement tokens and keyboard keys.
-   The **Insert** button allows you to choose from common replacement tokens and keyboard keys.
-   The **Execute** split-button allows you to specify whether or not to use **Direct Mode**.
-   The **Execute** split-button allows you to enable/disable automatic **{ENTER}** submission at the end of the key sequence.
-   Multi-line key sequence support.
-   Use **CTRL + ENTER** in the key sequence to immediately execute the sequence on all selected targets.

> [!Note]
> If a key sequence contains replacement tokens (like $URI$) to pass in dynamic values based on the selected target(s).

See also: [Working with Tasks](xref:royalts_tutorials_tasks), [Task](xref:royalts_reference_tasks_commandtask)

## ![](/images/RoyalTS/Application/SVG_ViewTunnels_32.svg#img_header) Active Tunnels
The **Active Tunnels** panel displays a list of all connections which are tunneled using a Secure Gateway or a [Royal Server](xref:royalts_intro_royalserver).To show or activate the Active Tunnels panel, click on **Active Tunnels** on the **View** tab, in the **Panels** group.

#### Features
-   Filter the Active Tunnels view (CTRL + F). Filtering is case insensitive and displays all folders expanded in order to show the results.
-   Drag & drop column reordering.
-   Column sorting and quick filter support.

#### Options
-   Reset customizations.
-   Best-fit all columns and automatically fit all columns.
-   Group by one or more columns.
-   Add and remove columns using the column-chooser.

See also: [Introducing Royal Server](xref:royalts_intro_royalserver)

## ![](/images/RoyalTS/Application/SVG_ApplicationLog_32.svg#img_header) Log
The **Log** panel displays internal log entries. Internal logging (if enabled) keeps records about the user activity (such as connect or disconnect events) as well as application errors and warnings. To show or activate the Credentials panel, click on **Log** on the **View** tab, in the **Panels** group.

#### Features
-   Filter log entries by text (CTRL + F). Search is case insensitive.
-   Drag & drop column reordering.
-   Column sorting and quick filter support.
-   Best-fit all columns.
-   Group by one or more columns.
-   Add and remove columns using the column chooser.
-   Filter editor allows you to create advanced filter expressions.
-   Export to Excel (.xls) file and Plain Text (.txt) file.
-   Copy to clipboard allows you to copy the log entry details from one or more log entries to the clipboard.

See also: [Logging](xref:royalts_reference_options#logging)
