---
name: Backup
order: 5000
---

# Backing Up Royal Server

> **General Note**  
> Whenever in any of the mentioned places changes are made its best to stop Royal Server beforehand and start it after the changes have been made again.

After installation, a fully configured and running Royal Server stores its configuration in the following places:

### 1. Windows Registry

Most of the Royal Server settings are stored in the Windows Registry under the key `HKEY_LOCAL_MACHINE\\SOFTWARE\\Royal Server`. Most of these values are stored directly and can be manipulated via "`regedt32.exe`" or a script. Some are encrypted for security reasons. Backing this key and its subkeys up saves the configuration of Royal Server excluding the Document store documents and the document ACLs.

### 2. File System

Royal Server stores the Document Store files in the directory configured in the Configuration Tool. For each document a new directory with the unique document id is created. Inside, you can find:

- **default.rtsz** (Royal TS/X document)  
  This can be opened directly by Royal TS/X unless the setting "Document can only be opened by Royal Server" was checked during creation of the document.
- **default.backup**  
  With each save, a backup file will be created with the previous document version.
- **<randomstring>.rtszbackup**  
  This is a history of the last versions of the Document as specified in the Document Store "Number of Backups" setting
- **meta.json**  
  Metadatafile that contains information like the document name, if additional encryption is applied, number of backups etc..

Royal Server is directly working with this directory for the Document Store. If you restore the contents of this directory from a backup Royal Server just picks up the files and works with them.

> [!NOTE]
> Note that possible Access Control Lists are not stored in this file system files. If you want to back them up as well, see below.

### 3. Access Rules for the Document Store files

The access rules due to their complexity are stored in a small database that can be found here: `%ProgramData%\RoyalServer\royalserver.db`.
