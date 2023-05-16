---
uid: advanced-restoring-a-previous-version-of-a-document
name: Restoring Document Versions
order: 5040
---

# Restoring a previous version of a Royal Document

Whenever Royal TS/X users save a document hosted by Royal Server the document is updated on the serer but also a backup of the previous version is made.
The default number of backups per document is 10.

> [!WARNING]
> Documents hosted by Royal Server are potentially open by multiple clients. Although Royal TS/X and Royal Server offer a sophisticated way of merging
> different versions of a document it is strongly recommended to make sure that
>
> 1. Royal Server is shut down during that process and
> 2. No Royal TS/X client has the particular file open. If you restore an old version of a document, a client (with a newer version open) might overwrite the backup again with newer content.

In order to restore a previous version of a document execute the following steps:

1. Find the document in the document list in the Configuration Tool that you want to restore. Make note of the column "Id" which represents the ID of the document.
2. All document store backups are stored in Document Root Folder which is configured at the Document Store group and then on the Configuration entry. The default
   path is 'C:\ProgramData\RoyalServer\DocumentStore\'. In this folder you find a directory "Documents" where the currently hosted documents are stored. Inside this folder, you find a number of folders with names that are GUIDs (globally unique identifier), one folder per document. These folders represent one document each. The "Id" from the UI corresponds to
   a folder with that name.
3. Open the folder with the Document ID in Windows Explorer
4. Inside this folder you find the following files:

- meta.json (this file contains some meta-information displayed in the Configuration Tool)
- default.rtsz (the document in the current version)
- Zero or more files with the extension \*.rtszbackup.

5. Stop Royal Server
6. Either delete the default.rtsz file or copy it to a safe place. then,
7. Chose the version of the file you want to restore based on the timestamp of the backup files
8. Copy the selected file and rename it to default.rtsz
9. Start Royal Server
