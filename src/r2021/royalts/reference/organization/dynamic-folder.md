---
uid: royalts_reference_organization_dynamic-folder
name: Dynamic Folder
order: 9980
---

# ![](/images/RoyalTS/Application/SVG_DynamicFolderClosed_32.svg#img_header) Dynamic Folder
A **Dynamic Folder** allows you to import data from external sources. All imported objects are read-only but credential objects can be assigned to other objects outside of dynamic folders.

## Dynamic Folder Properties
The Dynamic Folder property dialog is shown:

- for a new Dynamic Folder by clicking the **Dynamic Folder** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for an existing folder by selecting the folder in the navigation panel or folder dashboard and clicking on the **Properties** command in the Edit group on the **Home** ribbon tab.
 

See also: [Dynamic Folder and RoyalJSON](https://www.royalapplications.com/go/kb-all-royaljson)

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/images/RoyalTS/Application/SVG_Script_32.svg#img_header) Dynamic Folder Script
The **Dynamic Folder Script** page allows you to configure the script and the interpreter which populates the dynamic folder content.

#### Script Interpreter
Select the script interpreter you want to use when the script is executed. Some interpreters may need additional files to be installed on your system.

#### Tokens
Use the Tokens drop down to insert replacement tokens into the script. This way you can use the configured credentials in your script.

#### Script
The script to be executed which creates a Royal JSON output for the folder content.

## ![](/images/RoyalTS/Application/SVG_Script_32.svg#img_header) Dynamic Credential Script
The **Dynamic Credential Script** page allows you to configure the script and the interpreter which will be called to gather the credential information at connect-time.

#### Script Interpreter
Select the script interpreter you want to use when the script is executed. Some interpreters may need additional files to be installed on your system.

#### Tokens
Use the Tokens drop down to insert replacement tokens into the script. This way you can use the configured credentials in your script.

#### Script
The script to be executed which creates a Royal JSON output for the credential information.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[royalserver.md](~/royalts/_shared/royalserver.md)]

## ![](/images/RoyalTS/Application/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced dynamic folder settings.

#### Automatically reload folder contents
If checked, Royal TS will automatically reload the folder contents when the document is opened.

#### Persist (cache) folder contents
If checked, Royal TS will save (cache) the contents of this dynamic folder within the document.

> [!Note]
> This option is only available for personal (not shared) documents.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
