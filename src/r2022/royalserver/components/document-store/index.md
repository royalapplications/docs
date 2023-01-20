---
name: Document Store
order: 7000
---

# Document Store

The Document Store is a component in Royal Server that enables the user to securely load and save Royal Documents directly from Royal Server - no more shared files needed.

## Accessing Documents from the Document Store

In order to access documents, you first need to complete the following **steps in Royal TS/X**:
1. [Add documents to Royal Server](xref:royalserver_components_document-store_documents) that should be hosted.
2. Configure a Royal Server object in any open document in Royal TS/X. Specify the IP/Name, port and credentials. Save the document.
3. Click on **File** in the Ribbon and then **Open**, Select the Royal Server you want to connect to. You will be presented with a list of Documents of Royal Server

> [!NOTE]  
> Any user that wants to load or save with the Document Store needs to be a member of the "Royal Server Users" group.  
> Create, import or delete a document requires the user to be member of the "Royal Server Administrators" group. If done via the Configuration Tool, the Worker Account is used for these operations.
