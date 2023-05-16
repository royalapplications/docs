---
uid: royalserver_components_document-store_documents
name: Documents
order: 7110
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Document_32.svg" class="icon-left icon-lg" alt="" />

# Documents

The  Documents panel displays the documents hosted by the Document Store component of Royal Server and lets the Royal Server administrator change the Access Rules for each document.

## Show or Activate the Document Store Configuration Panel

In the Royal Server Configuration Navigation Bar, click on the **Document Store** group and then on the **Documents** entry.

## Features

- The panel lists all documents that are hosted by Royal Server.
- Use the **i** icon to view the properties of the document.
- Use the **Access Rules** icon to configure Access Rules for the selected document

### Add a New Document

Choose the option "New..." from the "Add..." dropdown to open a dialog to add a new document.

When adding a new document, you can specify the following:

- Document Name
- Document Comment
- Choose whether the document can only be opened via Royal Server or not. This adds an additional layer of security so that the file (even if copied) cannot be opened by Royal TS/X directly.
- Specify if the document should be encrypted. In this mode the encryption password is required when opening it in our clients.
- Specify if the document should be locked down. In this mode the document is opened read-only unless you unlock it using the lockdown password.<br>
  On top of this, these additional policies can be selected:
  - Do not allow to reveal passwords in this document
  - Do not allow to edit or modify this document
  - Allow passwords in web page connections

> [!NOTE]  
> Detailed information on working with Lockdown Documents can be found at the [Royal TS Documentation](https://docs.royalapps.com/r2023/royalts/tutorials/working-with-lockdown-documents.html).

### Add an Existing Document

Choose the option "Existing..." from the "Add..." dropdown to open a dialog to import an existing document.

When importing an existing document, you need to specify the following:

- File to import
- Document Name
- Document Comment
- Specify the document's password, if required.
- Choose whether the document can only be opened via Royal Server or not. This adds an additional layer of security so that the file (even if copied) cannot be opened by Royal TS/X directly.

> [!NOTE]  
> The internal data structure of Royal Documents contains an ID. If you import an existing document, please make sure that this document is not loaded in Royal TS from the file system at the same time as the IDs will be the same.

### Refresh the Document List

Click the "Refresh" button to refresh the list of documents in the user interface.

### Remove a Document

In the document grid click on the "Delete"-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextDelete_32.svg" class="icon-sm" alt="" />) on the document you want to remove.

When removing a document, the document is removed from the list of documents but the file is moved in the _Deleted Documents_ subfolder of the Document Store root folder you have configured.

### View Settings of a Document

In the document grid click on the "Information"-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextInfo_32.svg" class="icon-sm" alt="" />) on the document you want to view.

This will open a dialog which displays the settings of the document.

### Edit Access Rules

In the document grid click on the "Access Rules"-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextAcl_32.svg" class="icon-sm" alt="" />) on the document you want to view.

This will open an additional grid which allows you to manage the access rules for the document.

If Access Rules are enabled, clients will get access to documents hosted by Royal Server only if a read and/or write rule is configured. Specify for each rule the following:

- Operation (Read or Modify)
- Permission Type (Grant or Deny)
- Windows User or Group

> [!NOTE]
> If both, a grant and a deny rule is specified on a document, the deny rule is stronger and access is denied.
> (`Modify` is not enough to work with a document, `Read` also has to be specified to load it from Royal Server)
