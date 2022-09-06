# **Getting Started**

Below you find a quick start guide for Royal TS, Royal TSX and Royal Server. Use the navigation above to browse the full documentation.

# [Royal TS](#tab/tab-id-rts)

### Quick start guide for **Royal TS for Windows**

<div style="clear: both" markdown="1">

#### Create a new document to store your connections

<img style="margin: 0 0.7em 0 0.7em" src="./images/RoyalTS/GettingStarted/Step1.png" alt-text="Step 1">

Provide a name for the document and click OK.

</div>

<div style="clear: both; padding-top: 5em" markdown="1">

#### Select the document or a folder in your document and create a new connection

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalTS/GettingStarted/Step2.png" alt-text="Step 2">

In this example we add a new remote desktop connection. Enter a display name and computer name for the new connection.

</div>

<div style="clear: both; padding-top: 5em" markdown="1">

#### Select the connection and click Connect

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalTS/GettingStarted/Step3.png" alt-text="Step 3">

</div>

# [Royal TSX](#tab/tab-id-rtx)

### Quick start guide for **Royal TSX for macOS**

<div style="clear: both" markdown="1">
<img style="float: right; margin: 0 0.7em 0 0.7em; width: 38%; border-radius: 6px; box-shadow: 0 0 5px 2px rgba(0, 0, 0, .15); overflow: hidden;" src="./images/RoyalTSX/GettingStarted/screenshot_plugins_light.png" alt-text="Step 1">

#### Step 1: Install Plugins

<br />

Royal TSX is a plugin-based application. That means, before you can actually connect to any remote computer, you have to install the plugin required for that particular connection.

<br />

To install plugins, open the "Royal TSX" menu and select the "Preferences" menu item, then navigate to "Plugins".

<br />

The plugins screen allows you to install, uninstall and update connection plugins.

</div>

<br />
<div style="clear: both;" markdown="1">
<img style="float: right; margin: 0 0.7em 0 0.7em; width: 18%; border-radius: 6px; box-shadow: 0 0 5px 2px rgba(0, 0, 0, .15); overflow: hidden;" src="./images/RoyalTSX/GettingStarted/screenshot_documents_light.png" alt-text="Step 2">

#### Step 2: Create a Document

<br />

When you first start Royal TSX you'll notice that an "Application" document was created for you automatically. This document has some unique properties:

<br />

- You can password protect the Application Document. After doing so, every time you start Royal TSX you will be asked to enter your password.
- You can create folders, credentials, tasks, connection templates and edit Default Settings.
- You cannot close or delete it.
- You cannot create connections.

<br />

To actually create connections you have to create a new document. To do so navigate to the "File" menu and select the "New Document" menu item. You'll notice that new items have been added to the navigation panel on the left side of the main window.

<br />

Documents can contain any object type supported by Royal TSX. You can have as many documents as you like but only one Application Document.

</div>

<br />
<div style="clear: both;" markdown="1">
<img style="float: right; margin: 0 0.7em 0 0.7em; width: 13%; border-radius: 6px; box-shadow: 0 0 5px 2px rgba(0, 0, 0, .15); overflow: hidden;" src="./images/RoyalTSX/GettingStarted/screenshot_connections_light.png" alt-text="Step 3">

#### Step 3: Add your first connection

<br />

Now that you have one or more plugins installed and a new document set up you can actually start creating connections and using Royal TSX. To create a new connection, select the "Connections" folder that was created automatically, then click the little "plus button" on the bottom left corner of the navigation panel in the main window and select the connection type you want to create a connection for.

<br />

After clicking the menu item for the connection type you want to add you'll be taken to the "connection properties dialog". This is the place where you can edit all properties available for a particular connection. The dialog also offers some generic properties that are common to all connections like "Notes" and "Custom Properties".

<br />

After creating your first connection object you will be able to connect to it by simply double clicking the newly added item in the navigation panel.

<br />

_Tip: Remember that you can only create or edit connection objects if you have a matching plugin for that connection type installed._

</div>

# [Royal Server](#tab/tab-id-rs)

### Quick start guide for **Royal Server**

<div style="clear: both" markdown="1">

#### Configure a Worker Account and start Royal Server

After installation Royal Server needs to be provided with a Worker Account configuration. Click on "Service Configuration" in the left menu and use the "Change..." button to provide a Worker Account. It is recommended that this account is a local account with administrative rights:

<br />

<img style="margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step1.png" alt-text="Step 1">

<br />

After clicking "OK" restart the Royal Server service by clicking "Save" and "Restart" icons.

<br />

<div style="clear: both; padding-top: 5em" markdown="1">

#### Allow users to work with Royal Server

Royal Server can only be accessed by accounts that are member of the "Royal Server Users" group (for Secure Gateway connections it is the "Royal Server Gateway Users" group). Consider adding users to these groups and restart Royal Server (since group memberships are cached by Royal Server by default).

<br />

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step2.png" alt-text="Step 2">

<br />

</div>

<div style="clear: both; padding-top: 5em" markdown="1">

#### Enable the Document Store and host a document

In order to prepare a centrally stored Royal Document for your team you need to enable the Document Store first. In order to do this, please install a license by selecting "License" and click "Add License...". A free trial license for testing the Document Store can be requested <a href="https://www.royalapps.com/trial/">here</a>.

<br />

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step3.png" alt-text="Step 3">

<br />
<br />

To enable the Document store select "Document Store" and click "Enable", save and restart Royal Server.

<br />

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step4.png" alt-text="Step 4">

<br />
<br />

Then select "Documents" and click "Add" -> "New..." to add a new Royal Document.

<br />

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step5.png" alt-text="Step 5">

<br />
<br />

You now have a centrally stored document that can be shared and used within a team.

<br />

<img style="float: right; margin: 0 0.7em 0 0.7em" src="./images/RoyalServer/GettingStarted/Step6.png" alt-text="Step 6">

<br />

</div>

<div style="clear: both; padding-top: 5em" markdown="1">
