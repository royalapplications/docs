---
uid: royalts_reference_organization_document
name: Document
order: 10000
---

# ![](/images/RoyalTS/Application/SVG_FileIconRTSZ_32.svg#img_header) Document
A **Document** in Royal TS is used to store and organize objects like connections, credentials and tasks in folders.

## Document Properties
The document property dialog is shown:
* for a new document by clicking on the **New** button in the **File** group on the **Home** ribbon tab.
* for an existing document by selecting the document in the **Navigation** panel and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[description.md](~/royalts/_shared/description.md)]

#### Save Document after using the Properties dialog
If checked, Royal TS will automatically save the document after the properties dialog has been used and the document has changed.

> [!Note]
> Saving the document is a "UI-blocking" operation. If you are working with large documents, consider not enabling this feature as it may slow down your workflow.  
> 
> The document will only be saved automatically when all of the following conditions are met:
> - The option "Save Document after using the Properties dialog" is enabled.
> - The Properties dialog has been used (this includes canceling the dialog).
> - The document was saved at least once.
> - The document in memory has been modified.
> - The document on disk has been modified (by another instance of Royal TS, for example).  
> 
> The document will not be saved immediately when:
> - Folders were expanded/collapsed.
> - The Favorite property has been changed from the context menu.
> - An item has been renamed in the Navigation tree.
> - Any other change to the document which did not involve the Properties dialog.

#### Save Document on Close
If checked, Royal TS will automatically save all changes to the document when the document or Royal TS is closed.

#### Document Type
- **Shared (Merge File)**  
  Changes from other users are merged instead of overwritten. Mostly used for shared documents.
- **Personal (Overwrite File)**  
  Changes from other users are overwritten. Mostly used for personal documents.

> [!Note]
> To ensure proper file merging, it's recommended to set an appropriate retention in the Deleted Objects page. A retention of 30 days, for example, requires each user to save and merge at least once every 30 days. Otherwise, deleted objects may reappear.

See also: [About shared documents](http://support.royalapplications.com/knowledgebase/articles/341144)

## ![](/images/RoyalTS/Application/SVG_PageSecurity_32.svg#img_header) Security
### ![](/images/RoyalTS/Application/SVG_PageEncryption_32.svg#img_header) Encryption
If you want to store your credentials and passwords in the current document, it's recommended to provide an encryption password. Royal TS will prompt for this password when you open the document.

#### Enable Encryption
Check this option to password protect your document or Application document.

> [!Note]
> Password protected and encrypted documents require you to enter the password in order to open the document or edit the document properties.  
> 
> If you password protect and encrypt your Application document using the Options command on the VIEW tab, Royal TS will prompt you to enter the password when Royal TS starts and whenever you want to change the options.

#### Password
Enter a strong password or passphrase.

#### Confirm
Confirm your password.

Read more about Security and Encryption in Royal TS [here](xref:royalts_intro_security).

### ![](/images/RoyalTS/Application/SVG_PageLockdown_32.svg#img_header) Lockdown
A locked down document prevents certain actions, such as viewing the password. Those actions are only available after providing the **Lockdown-Password**. To lock down a document, an encryption password must be configured and the **Encrypt complete file** checkbox must be checked.

#### Encrypt complete file
Check this option to enable Lockdown.

> [!Note]
> Make sure you configured an encryption password, otherwise this option will be disabled.

#### Set Lockdown Password
Click the button to set or change the lockdown password.

#### Password
Enter a strong password or passphrase.

#### Confirm
Confirm your password.

#### Apply
Click the button to apply the lockdown password.

After setting a lockdown password, individual restrictions can be set in the check-list-box.

See also Working with [Lockdown Document](xref:royalts_tutorials_lockdown).

## ![](/images/RoyalTS/Application/SVG_PageUserSpecificSettings_32.svg#img_header) User Specific Settings
Configure which settings you want to save locally per user instead of inside the document. By default, all settings are saved in the document.

#### Favorites
If checked, favorites are tracked for each user individually.

#### Folder State
If checked, the state of each folder (expanded or collapsed) is tracked for each user individually.

## ![](/images/RoyalTS/Application/SVG_PageDeletedObjects_32.svg#img_header) Deleted Objects
The **Deleted Objects** page allows you to configure the retention (in days) for deleted objects, recover deleted objects and purge all deleted objects permanently.

#### Retention (in Days)
Specify the number of days you want to keep deleted objects in your documents.

#### Purge
Purge deleted objects now.

#### Recover
Select one or more deleted objects from the list and click on the Recover button. After clicking the Recover button you will be asked to specify the new destination folder for the recovered objects. You cannot recover deleted folders.
Specify the number of days you want to keep deleted objects in your documents.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[royalserver.md](~/royalts/_shared/royalserver.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[rdgateway.md](~/royalts/_shared/rdgateway.md)]
[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
