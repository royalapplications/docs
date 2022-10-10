---
uid: royalts_intro_dashboards
name: Dashboards
order: 9950
---

# Dashboards
Royal TS can handle a variety of different connection types. Most connection types offer additional functionality in Dashboards. For example: The Remote Desktop dashboard allows you to manage remote terminal sessions and Hyper-V instances for Hyper-V hosts.

## Application Default Dashboard Settings for a Connection Type
By default, each connection type is configured to use the **Application Default Dashboard Settings**. You can adjust the application default dashboard settings for each connection type using the **Plugin Management** dialog.

In the following example, we will change the default settings for the Remote Desktop connection type:

1. On the View tab, in the Configuration group, click on **Plugins**.
2. Select **Remote Desktop**.
3. In the **Registered Plugins** list, select the **Remote Desktop Protocol Connection (based on Microsoft RDP ActiveX)** entry.
4. Click the **Dashboard** button and adjust the dashboard settings.

![](/r2022/images/RoyalTS/GettingStarted/Dashboards_01.png)

## Use custom Dashboard Settings for individual Connections
In addition to configuring the application default dashboard settings for a connection type, you can still use a different dashboard settings for individual connections. In most connection property dialogs you'll find a configuration page called **Dashboard**:

![](/r2022/images/RoyalTS/GettingStarted/Dashboards_02.png)

Set the configuration to **Use connection specific settings** and adjust the dashboard settings individually.