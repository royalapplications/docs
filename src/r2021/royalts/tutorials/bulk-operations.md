---
uid: royalts_tutorials_bulk
name: Bulk Operations
order: 9910
---

# Bulk Operations

## Bulk-Add
When adding connections (like [Remote Desktop](xref:royalts_reference_connections_rdp)), Royal TS can create multiple connections with the same configuration in one easy step.
1.  In the **Navigation** panel, select a folder.
2.  On the **Home** tab, in the **Edit** group, click on **Add**.
3.  Click on **Remote Desktop** in the drop down menu.
4.  Type a list of DNS names or IP addresses, separated by semicolons (;) in the Computer Name box.

> [!Tip]
> Click on the **browse button (...)** to open the Entry Editor dialog which also features a network browser dialog. The Entry Editor dialog can be used to search for computers in your local network or Active Directory and to add multiple entries for different servers with the same settings at the same time.You cannot enter individual Display Names in bulk-add mode. The Display Name for each computer will be the same as the Computer Name.

5.  Optionally adjust any setting you want to change for the connections in the wizard dialog.
6.  To add all the specified connections and exit the dialog, click **OK**.

## Bulk-Edit
Use bulk-edit to change one or more properties on multiple objects.
1.  In the **Navigation** panel, select a folder (or a document).
2.  In the **Dashboard** panel, select two or more objects (using SHIFT+CLICK or CTRL+CLICK).

> [!Tip]
> The [Folder Dashboard](royalts_ui_panel#dashboard), provides many features helping you to prepare a tailored list of connections or objects in the selected folder and optionally all sub-folders. Add additional columns, reorder columns, and sort or filter columns until you see all the connections you want to edit.

3.  On the **Home** tab, in the **Edit** group, click on **Properties**.

> [!Note]
> The Edit dialog looks slightly different in bulk-edit mode. **All controls are disabled by default** and can be **enabled individually using the Bulk-Edit button on the upper right corner**. Selecting multiple objects from the same type (for example Remote Desktop Connections) allows you to select from all available settings while selecting multiple objects from a different type offers only the common settings across those types. Also note that the settings are based on the Default Settings and do not reflect the settings of any selected connection.

4.  Look for the setting(s) you want to change for all the selected connections and click on the **Bulk-Edit** button in the upper right corner to enable the setting(s).
5.  Click on **OK**. Only the enabled settings will be applied to the selection.