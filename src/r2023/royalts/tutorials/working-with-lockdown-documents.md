---
uid: royalts_tutorials_lockdown
name: Working with Lockdown Documents
order: 9990
---

# Working with Lockdown Documents

## What is Lockdown?
A document with a lockdown password can enforce certain restrictions (such as read-only) on a document unless you enter the proper lockdown password. Lockdown documents are mostly used to provide pre-configured documents to users which cannot be modified or where users cannot read the password in a connection's credential configuration. Before you can configure a "**Lockdown**" document, you must enable document **Encryption** in the **Security** settings of the document properties (see also [Working with Documents](xref:royalts_tutorials_documents)).

A locked down document behaves like this:

-   When a locked down document is opened, the **Encryption** password must be entered when prompted.
-   After entering the encryption password, the document is opened in **lockdown-mode** (a small padlock indicator is displayed next to the document in the navigation tree).
-   During lockdown-mode, the configured restrictions (like read-only or passwords cannot be read) are enforced.
-   The user can work with all the object of the document (connect, execute tasks, etc.) but with some restrictions.
-   Depending on the configured restrictions, the user may not be able to edit the document or view passwords.
-   To (temporary) remove the configured restrictions, the user needs to know and enter the lockdown password to **unlock** the document.
-   When unlocked, no restrictions apply to the document.

> [!Important]
> While we understand the case to create documents which allows users to log on to production servers without knowing the actual password, we still think that many problems and security related issues can come up with this approach. The lockdown feature is intended to help you to better manage your documents and prevent users from easily and accidentally obtaining a confidential password. However, depending on your scenario, this approach may not be "bullet proof" or give you the desired results. There are also many restrictions and side-effects which are applied to the workflow when you lock down a document. So make sure you fully test all workflows before you release any documents to your users!

## Configure Lockdown
A Royal TS document can be protected by a password. Once configured, you need to enter the password to open a document. To enable password protection, follow these steps:

1.  In the **Navigation** panel, select the document to protect by a password.
2.  Right-click on the selected document and select the **Properties** menu item. Alternatively you can use the **Properties** command on the **Edit** ribbon tab.
3.  In the document properties dialog, select **Security**.
4.  Check the **Enable Encryption** option.
5.  Enter and confirm the password.
6.  Switch to the **Lockdown** tab.
7.  Check the **Encrypt** complete file option.
8.  Click the **Set Lockdown Password** button.
9.  Enter and confirm the lockdown password.
10. Choose one or more restrictions.
11. Click **OK**.

## Lockdown Policies
The lockdown policies are only applied and enforced when a document is locked down. When enabled, you will see a yellow padlock icon in the tree next to the document. When you unlock a document with your lockdown password, the padlock icon will turn green and the restrictions are no longer applied.

The following policies can be enabled for a lockdown document:

### Do not allow to reveal passwords in this document
When enabled, the user cannot see any passwords in the user interface. This policy is meant to prevent the accidental exposure of your passwords in case you are not the only one looking at your screen while working in Royal TS.

> [!Caution]
> This policy does not prevent you from moving objects to a different document. If you want to increase the level of password protection, you also need to enable the "Do not allow to edit or modify this document" (see below).

### Do not allow to edit or modify this document
When enabled, the document is in read-only mode. In read-only mode, you cannot edit or move any object in or out of this document, or to another document.

### Allow passwords in web page connections
One of the side effects of lockdown documents is the restrictions of using passwords in auto-fill configurations or key sequence tasks. We introduced this policy to enable passwords in web page connections.

## Lock and Unlock Lockdown Documents
To unlock a lockdown document, right-click the document and select **Unlock Document**. Royal TS will then ask for the lockdown password. The padlock icon next to the document will change to an open padlock.

To lock a lockdown document, right-click the document and select **Lock Document**. The padlock icon next to the document will change to a locked padlock.

> [!Important]
> **Restrictions when using Lockdown Documents**  
> To ensure that passwords cannot be easily obtained, some restrictions apply to Locked documents, especially when revealing the password is prohibited:
> -   **Replacement Tokens**: Secure properties (such as $EffectivePassword$ or $CredentialPassword$) are not resolved in command tasks, key sequence tasks, connections or templates.
> -   **Ad Hoc Connections**: Ad hoc connections are basically duplicates of the original connection which are placed in the Application document's Ad Hoc folder. During this process, none of the secure properties are copied over to the ad hoc connection. Connections configured to use username and password will fail to logon. Connections using assigned credentials will logon successfully because there is no secure property transferred to the ad hoc connection, only the reference to an existing credential.
> -   **Copy/Move of Connections to other Documents**: all copy or move operations from a Locked document to another document are prohibited.
> -   **Terminal Connection based on the PuTTY plugin**: since PuTTY needs the password passed on through the command-line, we will only support auto logon for Terminal connections using the Rebex plugin.
> -   **VNC based on UltraVNC and TightVNC**: like the PuTTY based plugin, the UltraVNC and TightVNC connections are established by passing on the password through the command-line. Auto logon for VNC connection is therefore not supported for locked down documents which do not allow to reveal passwords.
> -   **Web Page Connections with Auto Fill**: Using secure properties (such as \$EffectivePassword\$ or $CredentialPassword$ in web page auto fill will not be supported when a document is locked down. If the lockdown policy Allow passwords in web page connections is enabled, secure properties will be passed on for auto fill purposes.
> -   **Scripting**: Access to secure properties of locked down documents using script is also not supported.