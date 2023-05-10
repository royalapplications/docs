---
uid: royalserver_components_document-store-configuration
name: Configuration
order: 7020
---

# Configuration

<img src="/r2022/images/RoyalServer/ApplicationOptions_48x48.png" class="icon-def" alt="" />

The  Configuration panel displays and changes the configuration of the Document Store component of Royal Server.

## Show or Activate the Document Store Configuration Panel

In The Royal Server Configuration Navigation Bar, click on the Document Store group and then on the Configuration entry.

> [!NOTE]  
> Any change in this panel requires a restart of Royal Server.

## Features

**Enable Document Store**

Enable or disable the Document Store.

For the Document Store you can further configure:

**Document Store Root Folder**

Specify where Royal Server is storing the documents physically.

**Number of Backups**

When saving a document on Royal Server it always creates a backup first. You can specify how many backups Royal Server should keep. 
 [More details on Royal Document backups and how they can be restored](xref:advanced-restoring-a-previous-version-of-a-document).


**Access Rules Enabled**

Additionally to the security restriction that the client needs to have credentials, that are a member of the Windows group "Royal Server Users" Access Rules offer a more fine grained configuration on who can read/write documents. This configuration is then done for each document. For more information about Access Rules, please see [Royal Server Documents](xref:royalserver_components_document-store_documents).

> [!NOTE]
> Enabling Access Rules immediately denies access to all documents unless read/write access is specified for documents.
