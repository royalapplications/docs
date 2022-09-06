---
uid: scripting_docs_samples_opendoc
name: Open a Document
order: 9000
---

# Open an existing Document

[!code-powershell[Main](./_shared/open-doc.ps1)]

[!include[royal-store-reference-note](./_shared/royal-store-referencde-note.md)]

So far, this document exists only in memory. In order to store it on disc,
you need to save it:

[!code-powershell[Main](./_shared/save-doc.ps1)]

[!include[royal-store-close-note](./_shared/royal-store-close-note.md)]