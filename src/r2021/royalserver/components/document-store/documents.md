---
name: Documents
order: 7010
---

# Documents

<img src="/r2021/images/RoyalServer/RoyalDocument_Flat_48x48.png" class="icon-def" alt="" />

The  Documents panel displays and changes the documents hosted by the Document Store component of Royal Server.

## Show or Activate the Document Store Configuration Panel

In The Royal Server Configuration Navigation Bar, click on the **Document Store** group and then on the **Documents** entry.

## Features

- The panel lists all documents that are hosted by Royal Server.
- Use the **Edit -> Document Name...** button to check the settings or change the name or comment of the document.
- Use the **Edit -> Access Rules...** button to configure Access Rules for the selected document
- Use the **Add ->New..**. button to add a new document to Royal Server
- Use the **Add ->Exiting...** button to import an existing document to Royal Server
- Use the **Remove** button to delete a document from Royal Server

### Add a New Document

When adding a new document, you can specify the following settings:

- Document Name
- Document Comment
- if the document can only be opened via Royal Server. This is an additional layer of security - this file (even if copied) cannot be opened by Royal TS)
- specify a document password which is required when opening it in our clients
- specify that the document should be locked down. In this mode the document is opened read only unless you unlock it using the lockdown password. Also, additional policies can be specified like _"Do not allow to reveal passwords in this document"_ or _"Do not allow to edit or modify this document"_.

### Import an Existing Document

When importing an existing document, you need to specify the following settings:

- the File to import
- Document Name
- Document Comment
- specify the documents password
- if the document can only be viewed via Royal Server. This is an additional layer of security - this file (even if copied) cannot be opened by Royal TS)

> **Note**  
> The internal data structure of Royal Documents contains an ID. If you import an existing document, please make sure that this document is not loaded in Royal TS from the file system at the same time as the IDs will be the same.

### Delete a Document

When deleting a document, the document is not immediately deleted but moved in the _Deleted Documents_ subfolder of the Document Store root folder you have configured.

### Edit Document Name

After a new document was created or an existing document was imported, only the document name can be changed in the user interface.

### Edit Access Rules

If Access Rules are enabled, clients will get access to documents hosted by Royal Server only if a read and/or write rule is configured. Specify for each rule

- the operation (read or modify)
- the permission (grant or deny)
- the Windows users or groups

> **Note**  
> If both a grand and a deny rule specified, the deny rule is stronger and access is denied.
> (`Modify` is not enough to work with a document, `Read` also has to be specified to load it from Royal Server)
