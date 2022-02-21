---
uid: scripting_docs_samples_createdoc
name: Create a Document
order: 8990
---

# Creating a new Document

[!code-powershell[Main](./_shared/create-doc.ps1)]

> [!NOTE]
> The parameter "UserName" for the ```New-RoyalStore``` cmdlet is just for logging 
purposes and not for purposes like authentication. 

[!include[royal-store-reference-note](./_shared/royal-store-referencde-note.md)]

So far, this document exists only in memory. In order to store it on disc,
you need to save it:

[!code-powershell[Main](./_shared/save-doc.ps1)]

[!include[royal-store-close-note](./_shared/royal-store-close-note.md)]