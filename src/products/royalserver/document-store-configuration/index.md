---
uid: royalserver_components_document-store
name: Document Store
order: 7100
---

<img src="/r2023/images/RoyalServer/Svg/SVG_DocumentStore_32.svg" class="icon-left icon-lg" alt="" />

# Document Store

The Document Store is a component in Royal Server that enables sers to securely load and save Royal Documents directly from/to Royal Server - no more shared files needed. To work with Documents hosted by Royal Server, you need to use Royal TS/X.

## Settings

If enabled, Royal Server hosts Documents for Royal TS/X clients. You can

- Specify the Documents Folder (this is where the Documents and Document backups will be stored),
- Specify the number of backups (each saved change triggers a document backup) and
- Specify if Access Rules are enabled (see below)

**Access Rules**

In addition to restricted access via Windows group permissions, hosted documents can have custom Access Rules. Each document can be assigned a list of Windows groups or users with Read or Modify permissions.

More information about the Access Rules and how they can be configured can be found [here](xref:royalserver_components_document-store_documents).

## Accessing Documents from the Document Store

In order to access documents, you first need to complete the following **steps in Royal TS/X**:

1. [Add documents to Royal Server](xref:royalserver_components_document-store_documents)
2. Configure a Royal Server object in Royal TS/X. Specify the IP/Name, port and credentials. Save the document.
3. For Royal TS for Windows: Click on **File** in the Ribbon and then **Open**, Select the Royal Server you want to connect to. You will be presented with a list of Documents of Royal Server
4. For Royal TSX for macOS: Click on **Open Royal Server Document**, select the configured Royal Server and select the document in the dropdown.

> [!NOTE]  
> Any user who wants to load or save Documents needs to be a member of the `Royal Server Users` group.

> [!NOTE]  
> Create, import or delete a document requires the user to be member of the `Royal Server Administrators` group. If done via the Configuration Tool, the Worker Account is used for these operations. If done via PowerShell scripts, make sure you use a credential that is member of this group.
