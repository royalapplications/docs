---
uid: royalts_reference_connections_web-page-ie
name: Web Page (IE)
order: 9930
---

# ![](/images/RoyalTS/Plugins/Connections/WebPageIE/SVG_PluginIcon_32.svg#img_header) Web Page (IE)
The **Web Page** connection can be used to display web pages and integrate web based administration consoles.

## Dashboard
The **Web Page Dashboard** is shown in the **Dashboard** panel when you select a Web Page connection in the **Navigation** panel. It can be configured to immediately show the web page - without actually connecting to the session.

![WebPageIE_Dashboard](/images/RoyalTS/Plugins/Connections/WebPageIE/ie_dashboard.png)

## Dashboard Features
- Basic browser functions (Home, Back, Forward, Refresh).
- Open the configured URL in the default browser.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Web Page plugin based on IE.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
To configure the plugin settings, open the Plugins Management and click on **Settings** for the Web Page plugin:

#### Browser Emulation
If checked, Royal TS will apply the proper registry settings for IE to use the selected rendering engine.
> [!Note]
> To set the browser emulation, Royal TS needs access to the following registry key:  
> ```HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION```  
> Some anti virus tools may block access to this key and cause Royal TS to hang on startup. Make sure to configure an exception to your anti virus configuration or uncheck the Allow Browser Emulation setting.

#### Internet Explorer Version
You can force Royal TS to use the render engines from Internet Explorer 7 to 10. Automatic will use the highest available version of the rendering engine.

## Connection Properties
The Web Page (IE) Properties dialog is shown:
- for a new Web Page connection by clicking the **Web Page** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the IE based plugin is set as the default plugin.
- for a new Web Page connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Web Page (based on IE)** entry from the list of available objects.
- for an existing Web Page connection by selecting a Web Page connection which is configured to use the IE based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Web Page connections which are configured to use the IE based plugin were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/images/RoyalTS/Plugins/Connections/WebPageIE/SVG_PluginIconConnection_32.svg#img_header) Web Page Properties
The **Web Page** property page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### URL
Enter the web page URL for this connection.

> [!Note]
> You may leave the URL field blank and configure the connection to display a specific content by providing the source for the page. This may be useful if you want to host your own ActiveX controls in a web page.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[autofill.md](~/royalts/_shared/autofill.md)]
[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/images/RoyalTS/Plugins/Connections/WebPageIE/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced Web Page settings.

#### Use Basic Authentication
If enabled, Royal TS will include the authentication header for basic authentication when requesting a web site. This setting will be ignored when no credential is set.

#### Ignore Certificate Errors
If checked, the certificate errors are suppressed.

#### Open Links in Default Browser
If enabled, each clicked link will be opened in your default browser and not in the connection tab or window.

#### Open Popups in Default Browser
If enabled, popup windows will be opened in the default browser and not in a window hosted by Royal TS.

#### Suppress Web Browser Dialogs
If checked, browser dialogs (such as missing ActiveX controls or Script Errors) are suppressed.

#### Show Toolbar
If enabled, a browser toolbar with basic commands and access to the URL is shown.

#### Auto Refresh
If enabled, the web page will be refreshed automatically. The minimum value is 5 seconds.

#### Custom Browser Size
If enabled, you can specify a custom width or height for the web browser. This can be useful to test a web page at different screen resolutions.

## ![](/images/RoyalTS/Plugins/Connections/WebPageIE/SVG_PageCustomContent_32.svg#img_header) Custom Content
The **Custom Content** page allows you to define a custom content (HTML page) to load instead of loading an URL.

#### Custom Content
If checked, paste your HTML code into the textbox.

> [!Note]
> You can also use replacement tokens like $URI$ or $CustomField1$ etc. to insert values from those fields.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
