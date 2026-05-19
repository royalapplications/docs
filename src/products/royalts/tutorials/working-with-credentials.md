---
uid: royalts_tutorials_credentials
name: Working with Credentials
order: 9950
---

# Working with Credentials
A credential stores logon information (such as username and password) and is often used in combination with connections. By assigning a single credential to multiple connections, you can simplify your credential management and make password changes quick and easy. Credentials also allows you to safely and securely share a connection file without sharing any credentials and using personal credentials (see below under Working with Personal Credentials and a Shared Document).

See also: [Credential](xref:royalts_reference_organization_credential), [About shared documents](https://www.royalapps.com/go/kb-all-teamsharing)

## Create a Credential
1.  In the **Navigation** panel, select a folder.
2.  On the **Home** tab, in the **Edit** group, click on **Add**.
3.  Click on **Credential** in the drop down menu.
4.  Type a name in the **Display Name** box.
5.  Provide a **Username** and **Password** for the credential.

> [!Note]
> You can create credentials in any documents, including the **Application** document. It's strongly recommended to encrypt and password protect your document as soon as you create a credential with a password in it.

6.  To add the credential and exit the dialog, click **OK**.

> [!Note]
> You can optionally configure a **Private Key File** and **Passphrase**. Connection types (such as **Terminal Connection** using the SSH protocol) will support these settings.  
> If you want to use a credential in one of our browser plugins, you may also provide an **URL** to the login form and specify **Auto Fill** mappings.

## Assign a Credential to a Connection
1.  In the **Navigation** panel, select a connection.
2.  On the **Home** tab, in the **Edit** group, click on **Properties**.
3.  In the **Credentials** property page, click to open the drop down box.
4.  In the **Credentials** property page, click the **Credential** drop down box.
5.  Select **Use an existing credential** from the drop down box.
6.  From the Credential drop down list, select the credential you want to assign to this connection.

> [!Note]
> Use the **Add** button to create a credential and use the **Edit** button to open or change the properties of the selected credential.

7.  To apply the changes and exit the dialog, click **OK**.

## Working with Personal Credentials and a Shared Document
The following example describes how to securely create a shared document for a team in combination with personal credentials.

1.  **Create a shared document for the team**: on the **Home** tab, in the **File** group, click on **New**.
2.  In the **Display Name** box, type **"Shared Connections"** (or any other suitable name).
3.  To exit the dialog, click **OK**.
4.  **Create one or more connections**: in the **Navigation** panel, select a folder.
5.  On the **Home** tab, in the **Edit** group, click on **Add**.
6.  Click on **Remote Desktop** in the drop down menu.
7.  Setup and configure the connection settings as you need to.
8.  In the connection properties dialog, click **Credentials**.
9.  In the **Credentials** property page, click to open the drop down box.
10. Select **Specify a credential name** from the drop down box.
11. Type a credential name of your choice you agreed on with the team. For example: **"Server Admin Account"**.
12. Click **OK** to add the connection to the shared document.  
    Repeat steps 4 - 12 to add more connections and always use the same credential name.
13. On the **Home** tab, in the **File** group, click on **Save**. Save the document to share to a central location where all the team members have at least read access (for example a file share).
14. **Create a personal document**: on the **Home** tab, in the **File** group, click on **New**
15. In the **Display Name** box, type "My Credentials" (or any other suitable name).

> [!Important]
> The following steps 16 - 18 are optional but strongly recommended.

16.  Click on **Security**.
17.  Click on **Enable Encryption**.
18.  Type a strong password or pass phrase in the Password box. Confirm your password in the Confirm box.
19.  To exit the dialog, click **OK**.
20.  **Create your personal credential**: In the **Navigation** panel, select a folder within your personal document.
21.  On the **Home** tab, in the **Edit** group, click on **Add**.
22.  Click on **Credential** in the drop down menu.
23.  Type **"Server Admin Account"** in the **Display Name** box.

> [!Important]
> The Display Name of this credential must **exactly** be the same name as the credential name that was specified in the connection configuration (step 9).

24.  Provide the **Username** and **Password** for the credential.
25.  To add the credential and exit the dialog, click **OK**.
26.  On the **Home** tab, in the **File** group click on **Save**. Save the document in one of your personal directories.

Each team member just needs to do steps 14 - 26 and create their own personal document containing a credential with the exact same name as defined in step 11\. When both documents (the shared and the personal document) are opened, Royal TS will lookup and resolve the right credential whenever a connection is established.

> [!Note]
> If a credential is not found or multiple credentials with the same name were found, Royal TS will prompt for a credential.
