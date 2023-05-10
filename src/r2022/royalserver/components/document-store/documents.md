---
uid: royalserver_components_document-store_documents
name: Documents
order: 7010
---

# Documents

<img src="/r2022/images/RoyalServer/RoyalDocument_Flat_48x48.png" class="icon-def" alt="" />

The  Documents panel displays the documents hosted by the Document Store component of Royal Server and lets the Royal Server administrator change the Access Rules for each document.

## Show or Activate the Document Store Configuration Panel

In the Royal Server Configuration Navigation Bar, click on the **Document Store** group and then on the **Documents** entry.

## Features

- The panel lists all documents that are hosted by Royal Server.
- Use the **i** icon to view the properties of the document.
- Use the **Access Rules** icon to configure Access Rules for the selected document

### Add a New Document

When adding a new document, you can specify the following settings:

- Document Name
- Document Comment
- if the document can only be opened via Royal Server. This is an additional layer of security - this file (even if copied) cannot be opened by Royal TS/X direcetly.
- specify an encryption document password which is required when opening it in our clients
- specify that the document should be locked down. In this mode the document is opened read only unless you unlock it using the lockdown password. Also, additional policies can be specified like _"Do not allow to reveal passwords in this document"_, _"Do not allow to edit or modify this document"_ or 
_"Allow passwords in web page connections"_.

> [!NOTE]  
> Detailed information on working with Lockdown Documents can be found at the [Royal TS Documentation](https://docs.royalapps.com/r2022/royalts/tutorials/working-with-lockdown-documents.html).



### Add an Existing Document

When importing an existing document, you need to specify the following settings:

- the File to import
- Document Name
- Document Comment
- specify the documents password
- if the document can only be viewed via Royal Server. This is an additional layer of security - this file (even if copied) cannot be opened by Royal TS.

> [!NOTE]  
> The internal data structure of Royal Documents contains an ID. If you import an existing document, please make sure that this document is not loaded in Royal TS from the file system at the same time as the IDs will be the same.

### Remove a Document

When removing a document, the document is removed from the list of documents but the file is moved in the _Deleted Documents_ subfolder of the Document Store root folder you have configured.

### Refresh the Document List

Refreshes the list of documents in the user interface.

### View Settings of a Document

Displays the settings of the document.

### Edit Access Rules

If Access Rules are enabled, clients will get access to documents hosted by Royal Server only if a read and/or write rule is configured. Specify for each rule

- the operation (read or modify)
- the permission type (grant or deny)
- the Windows user or group

> [!NOTE]
> If for a document both a grant and a deny rule is specified, the deny rule is stronger and access is denied.
> (`Modify` is not enough to work with a document, `Read` also has to be specified to load it from Royal Server)
