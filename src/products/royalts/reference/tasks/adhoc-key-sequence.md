---
uid: royalts_reference_tasks_adhoc-key-sequence
name: Ad Hoc Key Sequence
order: 9980
---

# ![](/r2023/images/RoyalTS/Plugins/Tasks/KeySequenceTask/SVG_PageKeySequenceTask_32.svg#img_header) Ad Hoc Key Sequence

The **Ad Hoc Key Sequence** feature allows you to quickly send a commands using keyboard input to one or more **active connections** without creating a key sequence task first.

## Send Key Sequence to the current Connection

1. Activate the tab (or window) of your connection where you want to send keyboard input.
2. On the **Actions** tab, in the **Keyboard Input** group, open the **Favorite Key Sequences** drop down menu.
3. Click on **Ad Hoc Key Sequence** to open the Key Sequence dialog.
4. Enter the key sequence you want to send to the current connection.
5. Optionally click on **Create a Key Sequence Task** if you want to store the key sequence in a new task for later reuse.
6. Click **OK** to close the dialog and send the key sequence to the current connection.

## Send Key Sequence to the multiple active Connections

1. Select multiple active connections in the folder dashboard.
2. On the **Actions** tab, in the **Keyboard Input group**, open the **Favorite Key Sequences** drop down menu.
3. Click on **Ad Hoc Key Sequence** to open the Key Sequence dialog.
4. Enter the key sequence you want to send to the current connection.
5. Optionally click on **Create a Key Sequence Task** if you want to store the key sequence in a new task for later reuse.
6. Click **OK** to close the dialog and send the key sequence to the selected connections. Royal TS will now switch through all connections and sends the key sequence to each connection.

> [!Note]
> Do not interfere in any way (switching to other connections, applications, pressing any keys, etc.) during key sequence task execution. The status bar will notify you (text in red) when the key sequence started and (text in green) when it ended.

## Use the Key Sequence Broadcaster Panel

You can also use the [Key Sequence Broadcaster panel](xref:royalts_ui_panels#-key-sequence-broadcaster) to send key sequences to multiple connections.
