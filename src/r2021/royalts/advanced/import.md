---
uid: royalts_advanced_import
name: Import Data
order: 10600
---
# ![](/images/RoyalTS/Application/SVG_FileImport_32.svg#img_header)Import Data
To import the content of a different file format the following examples will only work if you created a new document or opened an existing one. 

An alternative to import external data is to just open a different file as a document using the **Open** command. Most of the file formats below support the **Open** command to convert the file to a Royal TS document. Make sure you select the correct file type filter in the **Open File** dialog.

## ![](/images/RoyalTS/Plugins/Import/RoyalTSLegacy/SVG_FileIconRTSX_32.svg#img_header)Import Royal TS 1.x Documents (.rts)
Royal TS allows you to import your Royal TS V1.x files into an existing Royal TS document or convert your Royal TS V1.x into a new Royal TS document.

1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **Royal TS 1 File (.rts)**.
3. In the **Royal TS 1.x File** text box, type the path and file name of the Royal TS V1.x file or click on the browse button (...) to pick a file.
> [!Note]
> You may uncheck the Import Task Definition check box if you don't want to import the tasks from V1.x

4. Click on **Next**.
5. Select a destination folder.
6. To start the import, click on **OK**.
> [!Note]
> If your Royal TS 1.x file is password protected, you will be asked to enter the password.

### Open and Convert a Royal TS 1.x Document (.rts File)
1. On the **Home** tab, in the **File** group, click on **Open**.
2. Select a Royal TS 1.x file and click on **Open**.
3. If your Royal TS 1.x file is password protected, you will be asked to enter the password.

The selected Royal TS 1.x file appears in the **Navigation** panel and can be saved as a new Royal TS document to finish the conversion.

## ![](/images/RoyalTS/Plugins/Import/MsRdp/SVG_FileIconRDP_32.svg#img_header)Import Remote Desktop Files (.rdp)
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **Remote Desktop Files (.rdp)**.
3. Click on the **Add** button to add .rdp files to the list for import.
> [!Note]
> The split button allows you to scan for .rdp files in directories.

4. Click on **Next**.
5. Select a destination folder.
6. To start the import, click on **OK**.

### Import and immediately connect to Remote Desktop Files (.rdp Files)
During setup, you can choose to create a file association for .rdp files. Double-clicking or opening an .rdp file in Windows will open and connect to the remote desktop in Royal TS.
> [!Note]
> You can also use Open with... in Windows Explorer to manually create a file association to .rdp files.

## ![](/images/RoyalTS/Plugins/Import/Csv/SVG_PluginIcon_32.svg#img_header)Import from CSV File
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the Import group, click on **Comma Separated File (.csv)**.
3. Choose which **Object Type** to create. In the **CSV File** text box, type the path and file name of the comma separated file or click on the browse button (...) to pick a file.
> [!Note]
> You can import Tasks and Credentials into the Application document. Importing Connections requires you to either create a new document or open an existing one.

4. Click on **Next**.
5. Specify the **Delimiter**.
6. Use the **Has Headers** check box to specify whether or not the first line in the .csv file contains header information (column names).
7. Click the **Update Preview** button to verify your settings. The content of the .csv file should be parsed and appear correctly in the preview data grid.
8. Click on **Next**.
9. Specify the property mapping with the .csv file columns.
> [!Note]
> The header columns are identified by a dollar sign ($) at the beginning and the end of the column name. This allows you to combine static text with the values from each column or even put values from two or more columns into one property.

10. Click on **Next**.
11. Select a destination folder.
12. To start the import, click on **OK**.

### CSV File Import Tips
* Use Bulk-Edit after import to adjust and fine-tune your connection settings.
* Adapt the default settings of your connection type to import before you start the import. All properties without a mapping will be set to the value of the default setting.
* Apply static values for all imported connections. For example, add a mapping for **SmartReconnect** and instead of using a column header from the .csv file, type **true** to activate this setting on all imported **Remote Desktop** connections.

## ![](/images/RoyalTS/Plugins/Import/DynamicFolder/SVG_PluginIcon_32.svg#img_header)Import Dynamic Folder

1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **Dynamic Folder File (.rdfe)**.
3. You can either pick a .rdfe file to import using the Browse button or you can just browse our sample gallery from our github repo.
4. Click on **OK** to start the import.

<!-- ## Import Royal JSON File
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **More -> Royal JSON File (.rjson)**.
3. Pick a .rjson file to import.
4. Click on **Open** to start the import. -->

## ![](/images/RoyalTS/Plugins/Import/mRemote/SVG_FileIconmRemote_32.svg#img_header)Import mRemote File
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **More -> mRemote File (.xml)**.
3. Pick a mRemote file to import.
4. Click on **Open** to start the import.

## ![](/images/RoyalTS/Plugins/Import/MsRdcm/SVG_FileIconRdcm_32.svg#img_header)Import RDG File
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **More -> Remote Desktop Connection Manager File (.rdg)**.
3. Pick a .rdg file to import.
4. Click on **Open** to start the import.

## ![](/images/RoyalTS/Plugins/Import/RemoteDesktopManager/SVG_FileIconRdm_32.svg#img_header)Import RDM File
1. In the **Navigation** panel, select a document or folder.
2. On the **Data** tab, in the **Import** group, click on **More -> Remote Desktop Manager File (.rdm)**.
3. Pick a .rdm file to import.
4. Click on **Open** to start the import.

## ![](/images/RoyalTS/Plugins/Import/KeePass/SVG_FileIconKeePass_32.svg#img_header)Import KeePass V2 File
1. In the Navigation panel, select a document or folder.
2. On the Data tab, in the Import group, click on More -> KeePass V2.x File (.kdbx).
3. Pick a .kdbx file to import.
4. Click on Open to start the import.
> [!Note]
> If the KeePass file is protected by password or key file, a dialog to unlock the file is shown. KeePass V2 needs to be installed. If Royal TS cannot find the executable, it will ask for its location.
> 
> Royal TS alternatively allows you to use the Open command to open a KeePass file. You can either use the Save as command to convert the KeePass file to a Royal TS document or you can use the credentials from the KeePass file in your connections.

### Configure the KeePass Executable Path
When you import a KeePass file or open a KeePass file for the first time, Royal TS will ask for the KeePass executable file location and will remember it for future imports. Follow these steps to change the path to the KeePass executable:
1. On the **View** tab, in the **Configuration** group, click on **Plugins**.
2. Select **Import** in the tree.
3. In the **Registered Plugins** list, select **KeePass V2.x File (.kdbx)**.
4. Click on **Settings** in the toolbar to open the **Plugin Settings** dialog.
5. Enter the new path to the executable in the KeePass Executable Path text box.
6. Click **OK** to save the new settings and close the dialog.

## ![](/images/RoyalTS/Plugins/Import/LastPass/SVG_LastPass_32.svg#img_header)Open a LastPass Vault
The following example assumes that you've already have a LastPass account with credentials:

1. Click the File ribbon tab to open the backstage view.
2. Select Open in the backstage view and click on External Credential Vault.
3. Select LastPass Vault.
4. Click on Open to start the import.
5. In the following prompt, provide the credentials for your LastPass account.  
   Either enter your username and password for your LastPass account or select an existing credential which contains the username and password for your LastPass account.
6. After you have been authenticated successfully, you will see the credentials of your LastPass account in the Navigation panel.

Once the LastPass credentials are available in the Navigation panel, you can assign any credential in your connections as usual.
> [!Note]
> Not all Multifactor Authentication methods may work. So far we were able to successfully test Google Authenticator, Transakt and YubiKey.