---
uid: royalts_reference_connections
name: Connections
order: 10000
---

# Connections

## About Connections
Royal TS can handle multiple connection types (Remote Desktop, Terminals, Web Pages, etc.) and protocols. Some connection types are supported by different **Plugins**. A terminal connection, for example, is supported by the [Rebex based plugin](xref:royalts_reference_connections_terminal-rebex) and by the [PuTTY based plugin](xref:royalts_reference_connections_terminal-putty).

## About Plugins
Using the **Plugins** dialog you can configure plugin related settings (when available) and which plugin Royal TS should use by default. You can also configure the default dashboard settings. To open the plugins management dialog, click the **Plugins** command on the **View** ribbon tab.

> [!Note]
> All available plugins are already shipped and installed with Royal TS. There's no need to download or install anything (except for depending executables for some plugins). Our plugin architecture is still a closed API which, at the moment, does not allow 3rd party plugins.

To switch between default plugins or configure plugin and dashboard settings, select the **Connection Type** in the **Plugins** dialog and select a plugin in the **Registered Plugins** list. The following options are available for each selected plugin:

-   **Information:**  
    The Plugin Information dialog appears and shows additional information (such as version, vendor, support information).
-   **Dashboard:**  
    The Dashboard Settings dialog appears which allows you to configure the application default settings for this plugin. Connection plugins which are providing a dashboard and a dashboard configuration can be configured to use individual dashboard settings (using the **Properties** dialog) or can be configured to use the application default settings.
-   **Settings:**  
    The Plugin Settings dialog appears which allows you to configure settings specifically for this plugin.
-   **Set as Default:**  
    This button allows you to set a specific plugin as the application default setting. You can configure connections to use a specific plugin in the **Active Plugin** page of the connection or to use the application default setting.