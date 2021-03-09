---
uid: royalts_tutorials_templates
name: Working with Templates
order: 9960
---

# Working with Templates
Templates are special connections which can be used to create new connections or connect to ad hoc connections based on other connections from the same type or even from a different type. You can "inject" values from the selected connection(s) into the resulting connection(s) using replacement tokens - similar to [Tasks](tutorials_workingwithtasks.htm).

#### Example 1: Ad Hoc Connect to a web site using a Template to an iLO web page based on a Remote Desktop Connection

You can create a web page connection template and configure the **URL** to include the hostname/IP of the remote desktop connection, like: http://$URI$.management.local:17900/login.htm

Select one or more remote desktop connection(s), use the command **Connect using Template** from the ribbon or the context menu and select the web page connection template to create one or more ad hoc connection(s) to the iLO pages of the selected computers.

#### Example 2: Use Template Connections to add new Connections

Templates can be helpful if you often need different settings based on a customer or network topology for example. Assume you need a different **Connect Task** and **RDP Port** depending on your customer. Just create for each customer a template with the proper **Connect Task** and **RDP Port** setting. Use the **Add from Template** command to quickly add connections with the pre-configured settings from the template.

## Create a Template
In this example, a **Web Page** template is created:

1.  In the **Navigation** panel, select a folder.
2.  On the **Templates** tab, in the **Add** group, click on **Add New Template**.
3.  Click on **Web Page** in the drop down menu.
4.  Type "iLO Interface" in the Display Name box.
5.  Type "http://$URI$.management.local:17900/login.htm" in the **URL** box.

> [!Tip]
> Use the **Template Tokens** button on the top right hand side to display a list of available replacement tokens. You can also inject/replace Tokens from the **Custom Fields** or other properties. |

6.  Adjust the remaining connection settings according to your needs.
7.  To add the Template and exit the dialog, click **OK**.

## Share Templates within a Team
To share templates, create a dedicated shared document containing all shared templates. If there's already a shared document for connections or tasks, you may also use the existing file and add all templates you want to share. Shared templates are available as soon as the document containing the templates is opened.

## Add from Template
As mentioned above in **Example 2** you can use templates to add new connections:

1.  In the **Navigation** panel, select a folder.
2.  On the **Templates** tab, in the **Add** group, click on **Add from Template**.
3.  Click on a template in the drop down menu.
4.  The new connection dialog appears for the selected connection template.
5.  Adjust the remaining settings.
6.  To add the connection and exit the dialog, click **OK**.

## Connect using Template
As mentioned above in **Example 1** you can use templates to create an ad hoc connection based on your selection and the selected template:

1.  In the **Navigation** panel, select a connection.
2.  On the **Home** tab, in the **Actions** group, click on **Connect using Template**.
3.  Click on a template in the drop down menu.
4.  An ad hoc connection will be created based on the selection in the **Navigation** panel and the selected template.

> [!Tip]
> You can also use the Folder Dashboard and select multiple connections to create one ad hoc connections for each selected connection.

## Connect from the Dashboard
1.  In the **Navigation** panel, select a template.
2.  Type the URI (URL/Hostname/IP depending of the connection type) in the **Ad Hoc Connect** text box.
3.  Press Enter or click the **Connect** button in the text box.

> [!Note]
> The URI you entered in the Ad Hoc Connect text box will be replaced with the $URI$ token. If the $URI$ token is not specified in the template the entered URI will be set as the URI in the ad hoc connection.