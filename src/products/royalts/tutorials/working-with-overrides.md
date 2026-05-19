---
uid: royalts_tutorials_overrides
name: Working with Overrides
order: 9970
---

# Working with Overrides
Overrides allow you to customize/personalize connections without actually modifying the connection in a document. This can be very useful if you want to use alternative credentials, gateway/proxy settings or just your personal flavor of color configuration on shared connections. Overrides are stored in the application document along with the default settings (%appdata%\code4ward), which means that you can have different overrides in different environments (e.g. work PC and personal laptop). Overrides are not affecting the document where the actual connection resides, they are applied "on the fly" without changing the document. Use cases and scenarios for overrides:

-   Personalization of connection properties
-   Working with a different set of credentials, depending on the environment
-   Applying secure gateway or proxy configuration, depending on the environment

#### Example: Overriding font, font size and colors in a Terminal connection (based on Rebex)

The following example walks you through the steps necessary to override several settings on Terminal connections which are based on the Rebex plugin. Overrides can be applied to any connection, overriding any setting.

### Configure the Override settings
1.  In the **Navigation** panel, select **Terminal** in the **Default Settings** folder in the **Application** document.
2.  Click the **Edit Overrides** drop down button.

> [!Tip]
> In case only one plugin is available for the selected connection type, the **Overrides** dialog will appear immediately. If multiple plugins are available for the selected connection type, a drop down menu appears with a list of available plugins.

3.  Click on **Terminal (based on Rebex)** in the drop down menu.
4.  Click on **Display Options**.
5.  Click the **Override** drop down menu in the upper right corner.
6.  Click on **Font** and **Font Size**, so that a check mark appears.

> [!Tip]
> Checking/unchecking items in the **Override** drop down menu will enable/disable the corresponding controls in the **Overrides** dialog. Enabled (checked) items will be overridden with the configured values when overrides are applied.

7.  Change the **Font** and **Font Size**.
8.  Click on **Colors**.
9.  Click the **Override** drop down menu in the upper right corner.
10.  Click/check the **Black** and **White** items.
11.  Change the **Black** and **White** color configuration.
12.  To save the Override settings, click **OK**.

### Choose how and when Overrides are applied
By default, overrides are only applied when holding the **Alt key** while you are connecting. This behavior can be changed in **View -> Options -> Behaviors -> [Modifiers](xref:royalts_reference_options#-behavior)**.

### Connect using the Override
1.  In the **Navigation** panel, select a Terminal connection which is configured to use the Rebex based plugin.
2.  Hold down the **Alt key** (default behavior).
3.  Click on **Connect**.
4.  The connection is established with the configured overrides in place.