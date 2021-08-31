---
uid: royalts_reference_connections_web-page-chrome
name: Web Page (Chrome)
order: 9920
---

# ![](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIcon_32.svg#img_header) Web Page (Chrome)
The **Web Page** connection can be used to display web pages and integrate web based administration consoles.

## Dashboard
The **Web Page Dashboard** is shown in the **Dashboard** panel when you select a Web Page connection in the **Navigation** panel. It can be configured to immediately show the web page - without actually connecting to the session.

![WebPageChrome_Dashboard](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/chrome_dashboard.png)

## Dashboard Features
- Basic browser functions (Home, Back, Forward, Refresh).
- Open the configured URL in the default browser.
- Search within a page.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Web Page plugin based on IE.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
To configure the plugin settings, open the Plugins Management and click on **Settings** for the Web Page plugin:

#### Disable External Workerprocess
If checked, rundll.exe will be used to host Chromium instead of the external workerprocess.
> [!Note]
> Rundll.exe is a 32 bit application which has memory allocation limits. Depending on the web page you want to load, you might see crashes because of memory constraints. It is recommended to use the external workerprocess for best compatibility.

## Connection Properties
The Web Page (Chrome) Properties dialog is shown:
- for a new Web Page connection by clicking the **Web Page** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab when the Chrome based plugin is set as the default plugin.
- for a new Web Page connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Web Page (based on Chrome)** entry from the list of available objects.
- for an existing Web Page connection by selecting a Web Page connection which is configured to use the Chrome based plugin and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Web Page connections which are configured to use the Chrome based plugin were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIconConnection_32.svg#img_header) Web Page Properties
The **Web Page** property page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### URL
Enter the web page URL for this connection. [Replacement tokens](xref:royalts_advanced_tokens) are supported.

> [!Note]
> You may leave the URL field blank and configure the connection to display a specific content by providing the source for the page. This may be useful if you want to host your own ActiveX controls in a web page.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[autofill.md](~/royalts/_shared/autofill.md)]
[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced Web Page settings.

### General
#### Show Toolbar
If enabled, a browser toolbar with basic commands and access to the URL is shown.

#### Open Links in Default Browser
If enabled, each clicked link will be opened in your default browser and not in the connection tab or window.

#### Open Popups in Default Browser
If enabled, popup windows will be opened in the default browser and not in a window hosted by Royal TS.

#### Clear Cache
If enabled, the web browser cache (including cookies) is cleared when the connection is closed.

#### Auto Refresh
If enabled, the web page will be refreshed automatically. The minimum value is 5 seconds.

#### Custom Browser Size
If enabled, you can specify a custom width or height for the web browser. This can be useful to test a web page at different screen resolutions.

#### Zoom Factory
Set the initial zoom factor for the web page.

### Security
#### Use Basic Authentication
If enabled, Royal TS will include the authentication header for basic authentication when requesting a web site. This setting will be ignored when no credential is set.

#### Ignore Certificate Errors
If checked, the certificate errors are suppressed.

## ![](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIcon_32.svg#img_header) Engine
The **Engine** settings page allows you to create a dedicated Browser Engine for isolation. You can set various options like JavaScript, Proxy or security related options.

#### Use Dedicated Engine
If enabled, a new web browser engine will be created for isolation.

### General
#### Language
A two lower case letter ISO 639-1 language code. For example, you can set it to "fr" to use French for all UI messages. In case a language can have multiple variations, you can use four letter culture name in the format languagecode2-country/regioncode2. For example, "en-US" for U.S. English, and "en-GB" for United Kingdom English. Not all languages are supported. In case you set an unsupported language, U.S. English will be used.

#### Load Images
If enabled, images are automatically loaded.

#### Allow Zooming
If enabled, the zoom factor can be changed in the browser.

#### Allow JavaScript
If enabled, JavaScript is allowed in the browser.

#### Allow Clipboard Access
If enabled, the Clipboard can be accessed using JavaScript.

#### Allow Close Window
If enabled, images are automatically loaded.

### Plugins
#### Allow Plugins
If enabled, plugins can be loaded.

#### Disable Built-In Plugins
If enabled, built-in plugins (such as the built-in PDF plugin) will be disabled.

#### Scan Common Plugins
If enabled, commonly used plugins (QuickTime, Media Player, Acrobat, etc.) will be searched on the system and loaded.

#### Additional Plugin Directories
Specify additional plugin directories (in each line) to search for additional plugins.

### Proxy
#### Proxy Mode
The following proxy modes are available:
- Do not use a proxy server
- HTTP
- Socks4
- Socks4A
- Socks5
- Use Secure Gateway as proxy server

> [!Note]
> When you select Use Secure Gateway as proxy server you also need to configure the Secure Gateway settings of the web page connection.

#### Proxy Server
Specifies the host name of the proxy server.

#### Port
Specifies the proxy port to be used.

#### Bypass
Specify a list of hosts to bypass the proxy server. You can separate multiple hosts with " " (space), "," or ";".

### Credential Configuration
[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

### Advanced
#### Disable Hardware Rendering (GPU)
Disables the GPU when the browser renders a page.

#### Disable Spell Checker
Disables the browser built-in spell checker.

#### Disable Web Security
Disables same-origin policy enforcement.

#### Cache Path
Specify a custom path to cache browser files and cookies.

#### Custom User Agent
Specify a custom user agent string.

#### Command Line Arguments
Specify additional command line switches to the Chromium engine separated by blanks.

#### Custom CSS
Specify one or more style rules which should be applied to the document.

## ![](/r2021/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PageCustomContent_32.svg#img_header) Custom Content
The **Custom Content** page allows you to define a custom content (HTML page) to load instead of loading an URL.

#### Custom Content
If checked, paste your HTML code into the textbox.

> [!Note]
> You can also use [replacement tokens](xref:royalts_advanced_tokens) like $URI$ or $CustomField1$ etc. to insert values from those fields.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
