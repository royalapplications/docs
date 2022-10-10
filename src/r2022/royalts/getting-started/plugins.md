---
uid: royalts_intro_plugins
name: Plugins
order: 9940
---

# Plugins
Royal TS can handle a variety of different connection types. For some connection types you can choose which of the available plugins should be used to handle the connection. For example: should a terminal connection be handled by the integrated terminal component (based on Rebex) or by PuTTY.

All currently available 1st party plugins are already integrated and shipped with Royal TS. 3rd party plugins or 1st party plugins for Windows as separate downloads are not available at the moment but may be available later.

## Application Default Plugin for a Connection Type
By default, each connection type is configured to use the **Application Default Plugin**. You can switch the application default plugin for each connection type using the **Plugin Management** dialog.

In the following example, we will switch the application default plugin for Terminal connections to the PuTTY based plugin:

1. On the **View** tab, in the **Configuration** group, click on **Plugins**.
2. Select **Terminal**.
3. In the **Registered Plugins** list, select **Terminal (based on PuTTY)** entry.
4. Click the **Set as Default** button.

![](/r2022/images/RoyalTS/GettingStarted/Plugins_01.png)

> [!Note]
> The plugin which is configured as the application default plugin can be identified by the **Default** label next to the plugin name.

## Use a specific Plugin for individual Connections
In addition to configuring the application default plugin for a connection type, you can still use a different plugin for individual connections. In the connection properties dialog you'll find a configuration page called **Active Plugin**:

![](/r2022/images/RoyalTS/GettingStarted/Plugins_02.png)

Unchecking **Use Application Default Setting** allows you to choose a different plugin for the connection. The plugin information dialog and the plugin configuration dialog (if available) can be opened using the buttons next to the **Active Plugin** list.

> [!Tip]
> You can use [bulk-edit](xref:royalts_tutorials_bulk#bulk-edit) to change the Active Plugin for more connections at once.