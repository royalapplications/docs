---
uid: royalserver_components_document-store
name: Document Store
order: 7100
---

<img src="/r2023/images/RoyalServer/Svg/SVG_DocumentStore_32.svg" class="icon-left icon-lg" alt="" />

# Document Store

The Document Store is a component in Royal Server that enables the user to securely load and save Royal Documents directly from Royal Server - no more shared files needed. To work with Documents hosted by Royal Server, you need to use Royal TS/X.

## Settings

If enabled, Royal Server hosts Documents for Royal TS/X clients. You can

- Specify the Documents Folder (this is where the Documents and backups will be stored),
- Specify the number of backups (each change in the file triggers a backup) and
- Specify if Access Rules are enabled

**Access Rules**

Additionally to the restricted access via the permissions, hosted documents can have Access Rules defined. For a give group or user you can specify Read or Modify rights for each document separately.

More information about the Access Rules and how they can be configured can be found [here](xref:royalserver_components_document-store_documents).

## Accessing Documents from the Document Store

In order to access documents, you first need to complete the following **steps in Royal TS/X**:

1. [Add documents to Royal Server](xref:royalserver_components_document-store_documents) that should be hosted.
2. Configure a Royal Server object in any open document in Royal TS/X. Specify the IP/Name, port and credentials. Save the document.
3. Click on **File** in the Ribbon and then **Open**, Select the Royal Server you want to connect to. You will be presented with a list of Documents of Royal Server

> [!NOTE]  
> Any user that wants to load or save with the Document Store needs to be a member of the `Royal Server Users` group.
> Create, import or delete a document requires the user to be member of the `Royal Server Administrators` group. If done via the Configuration Tool, the Worker Account is used for these operations.
