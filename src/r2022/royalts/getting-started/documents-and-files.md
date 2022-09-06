---
uid: royalts_intro_documents
name: Documents and Files
order: 9970
---

# Documents and Files
Royal TS is using a file based configuration management. In Royal TS you can work with different object types, such as folders, credentials, tasks and all the different connection types. These objects are created and stored in documents. When you save a document, a file with the extension “.rtsx” is created.

> [!Important]
> **About the Application Document**
> 
> In Royal TS you will always see an **Application** document in the Navigation panel which has some unique properties:
> 
> * You can password protect the Application document (using the [Security](xref:royalts_reference_options#-security) settings in the Options dialog). After protecting the Application document Royal TS will ask for the password when Royal TS starts.
> * You can create folders, credentials and tasks.
> * You cannot create connections in the Application document - only in your own documents.
> * You cannot close the Application document.
> * The **Default Settings** for connections (one for each connection type) are also stored in the Application document.
 

## Create a Document
To store your connections, credentials and tasks, create a document first:

1. On the **Home** tab, in the **File** group, click on **New**
2. In the **Display Name** box, type a name for the document. You can optionally add a description in the **Description** box.

> [!Note]
> You can also password protect your document using the [Security](xref:royalts_reference_organization_document#-security) settings of the document. This is highly recommended when you plan to store credentials with passwords in the document.

3. To exit the dialog, click OK.
See also: [Document Settings](xref:royalts_reference_organization_document)

## Save the Document
1. In the **Navigation** panel, select the document to save.
2. On the **Home** tab, in the **File** group, click on **Save**
3. Type a file name and click **OK**.

> [!Tip]
> Use **Save All** on the **Home** tab to save all the documents which are currently open in Royal TS.

## Open a Document
1. On the **Home** tab, in the **File** group, click on **Open**
2. Select the Royal TS file and click **OK**.

> [!Note]
> You can also open Royal TS 1.x files (with .rts extension) or other file types using the Open command. It will be automatically converted or imported to the new file format and saved in the same directory.
> 
> See also: [Import Royal TS 1.x Documents](xref:royalts_advanced_import#import-royal-ts-1x-documents-rts)