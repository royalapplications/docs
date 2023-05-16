---
uid: royalts_tutorials_connections
name: Working with Connections
order: 9980
---

# Working with Connections
To learn more about Connection basics, read chapter [Connections](xref:royalts_intro_connections).

## Connect to a Session
1.  In the **Navigation** panel, select a connection. By default, selecting an inactive connection in the Navigation panel brings up the **Dashboard** for the connection.
2.  On the **Home** tab, in the **Actions** group, click on **Connect**.

> [!Tip]
> Royal TS offers many ways to connect to a session. You will find the **Connect** command in various places, such as the context menu in the **Navigation** panel or the **Actions** tab on the ribbon. By default, double-clicking an inactive connection in the Navigation panel also executes the Connect command.

## Connect with Options
The **Connect with Options** feature allows you to directly **override** specific connection settings before you connect. Connecting using the Connect with Options feature will not affect the configuration of the connection. The applied overrides are temporary and are gone as soon as the session is disconnected.

Here are some useful examples on how to use this feature:
-   Consider a **Remote Desktop** connection you usually use which is not configured to connect to the Admin/Console session but occasionally you need to connect to the Admin/Console session. Ensure that the **Console/Admin Session** item is checked and click **Connect** in the **Connect with Options** menu.
-   Consider a **Remote Desktop** connection which is configured to automatically log on with your credential but occasionally you need to log on with a different account. Ensure that the **Auto Logon** item is unchecked and click **Connect** in the **Connect with Options** menu.
-   Consider a connection which is configured to open embedded in the main window but occasionally you want to open the session in an external window. Ensure that the **External** item is checked and click **Connect** in the **Connect with Options** menu.

> [!Tip]
> You can combine most of the overrides in the **Connect with Options** menu. Some overrides, such as **Embedded, External, Full Screen** or specified screens can be cleared by just clicking them again when checked.

## Change Connection Settings while Connected
The **Change** drop down menu (on the **Home** or **Actions** tab) can be used to temporarily change the **Window Mode** or other connection specific settings while connected. Here's an example on how to move a connection which is embedded to an external window and back to the main window tab:
1.  In the **Navigation** panel, select a connection.
2.  On the **Home** tab, in the **Actions** group, click on **Connect**. Wait until the session is established in the main window tab.
3.  On the **Actions** tab, in the **Common Actions** group, click on **Change** and on **External** in the drop down menu. The session will now be moved to an external window.
4.  To move the session back, click again on **Change** and on **Embedded** in the drop down menu.