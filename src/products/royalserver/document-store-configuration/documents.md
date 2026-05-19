---
uid: royalserver_components_document-store_documents
name: Documents
order: 7110
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Document_32.svg" class="icon-left icon-lg" alt="" />

# Documents

The Document Store panel displays 
- the documents hosted by the Royal Server
- lets the Administrator add new Documents
- lets the Administrator import existing Documents
- lets the Administrator change the Access Rules for each document.

## Show or Activate the Document Store Configuration Panel

In the Royal Server Configuration Navigation Bar, click on the **Document Store** group and then on the **Documents** entry.

## Features

- The panel lists all Documents that are hosted by Royal Server.
- Use the **i** icon to view the properties of the Document.
- Use the **Access Rules** icon to configure Access Rules for the selected Document

### Add a New Document

Choose the option **"New..."** item from the **"Add..."** dropdown to open a dialog to add a new Document.

When adding a new Document, you can specify the following:

- Document Name
- Document Comment
- Choose whether the **Document can only be opened via Royal Server** or not. This adds an additional layer of security so that the file (even if copied) cannot be opened by Royal TS/X directly.
- Specify if the Document should be **encrypted**. In this mode the encryption password is required when opening it in Royal TS/X clients. [Working with Documents](../../royalts/tutorials/working-with-documents.md)
- Specify if the Document should be **locked down**. In this mode the Document is opened read-only unless you unlock it using the lockdown password. [Working with Lockdown Documents](../../royalts/tutorials/working-with-lockdown-documents.md)<br>
  On top of this, these additional policies can be specified:
  - Do not allow to reveal passwords in this Document
  - Do not allow to edit or modify this Document
  - Allow passwords in web page connections

> [!NOTE]  
> Detailed information on working with Lockdown Documents can be found at the [Royal TS Documentation](https://docs.royalapps.com/r2023/royalts/tutorials/working-with-lockdown-documents.html).

### Add an Existing Document

Choose the option **"Existing..."** from the **"Add...**" dropdown to open a dialog to import an existing Document.

When importing an existing Document, you need to specify the following:

- Document to import
- Document Name
- Document Comment
- Specify the Document's password, if required.
- Choose whether the Document can only be opened via Royal Server or not. This adds an additional layer of security so that the file (even if copied) cannot be opened by Royal TS/X directly.

> [!NOTE]  
> The internal data structure of Royal Documents contains an GUID for each Document. Royal TS/X can load a Document with a specific GUID only once. If you import an existing Document, please make sure that this Document is not loaded in Royal TS/X from the file system at the same time as the IDs will be the same.

### Refresh the Document List

Click the **"Refresh"** button to refresh the list of Documents in the user interface.

### Remove a Document

In the Document grid click on the **"Delete"**-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextDelete_32.svg" class="icon-sm" alt="" />) on the Document you want to remove.

When removing a Document, the Document is removed from the list of hosted Documents and it is moved in the _Deleted Documents_ subfolder of the Document Store root folder you have configured.

### View Settings of a Document

In the Document grid click on the **"Information"**-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextInfo_32.svg" class="icon-sm" alt="" />) on the Document you want to view.

This will open a dialog which displays the settings of the Document.

### Edit Access Rules

In the Document grid click on the **"Access Rules**"-icon (<img src="/r2023/images/RoyalServer/Svg/SVG_ContextAcl_32.svg" class="icon-sm" alt="" />) on the Document you want to view.

This will open an additional grid which allows you to manage the access rules for the Document.

If Access Rules are enabled, clients will get access to Documents hosted by Royal Server only if a read and/or write rule is configured. Specify for each rule the following:

- Operation (Read or Modify)
- Permission Type (Grant or Deny)
- Windows User or Group

> [!NOTE]
> If both, a grant and a deny rule is specified on a Document, the deny rule is stronger and access is denied.

> [!NOTE]
> `Modify` is not enough to work with a Document, `Read` also has to be specified to load it from Royal Server
