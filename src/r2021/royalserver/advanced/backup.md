---
name: Backup
order: 5000
---

# Backing Up Royal Server

> [!NOTE]
> Whenever you make changes in the places mentioned below, it's best to stop Royal Server and start it again after the changes have been applied.

## Royal Server V4

After installation, a fully configured and running Royal Server stores its data and configuration by default in `%ProgramData%\RoyalServer\`.

### 1. Configuration Settings

Configuration settings are primarily stored in `%ProgramData%\RoyalServer\appsettings.json`.

If the `appsettings.json` file is not present on start-up, it will automatically be generated and your settings from a previous Royal Server V3 installation will be imported. If no previous Royal Server V3 installation can be detected, default values will apply.

### 2. Documents

Royal Server stores the Document Store files in the directory configured in the Configuration Tool. By default the documents are located at `%ProgramData%\RoyalServer\DocumentStore\`.
There two sup directories:

- `Documents` containing one folder per document named with the unique document id. Inside, you can find:
  - **default.rtsz** (Royal TS/X document)  
    This can be opened directly by Royal TS/X unless the setting "Document can only be opened by Royal Server" was checked during creation of the document.
  - **default.backup**  
    With each save, a backup file will be created with the previous document version.
  - **<randomstring>.rtszbackup**  
    This is a history of the last versions of the Document as specified in the Document Store "Number of Backups" setting
  - **meta.json**  
    Metadatafile that contains information like the document name, if additional encryption is applied, number of backups etc..
- `DeletedDocuments` contains one folder per deleted document named with the unique document id

Royal Server is directly working with this directory for the Document Store. If you restore the contents of this directory from a backup Royal Server just picks up the files and works with them.

> [!NOTE]
> Note that Access Control Lists are not stored in these file system files. If you want to back them up as well, see below.

### 3. Access Rules for the Document Store files

The access rules due to their complexity are stored in a small database that can be found here: `%ProgramData%\RoyalServer\royalserverV4.db`.

## Royal Server V3

After installation, a fully configured and running Royal Server stores its configuration in the following places:

### 1. Configuration Settings

Most of the Royal Server settings are stored in the Windows Registry under the key `HKEY_LOCAL_MACHINE\SOFTWARE\Royal Server`. Most of these values are stored directly and can be manipulated via "`regedt32.exe`" or a script. Some are encrypted for security reasons. Backing this key and its sub keys up saves the configuration of Royal Server excluding the Document store documents and the document ACLs.

### 2. Documents V3

see [Royal Server V4](#2-documents)

### 3. Access Rules for the Document Store files

The access rules due to their complexity are stored in a small database that can be found here: `%ProgramData%\RoyalServer\royalserver.db`.
