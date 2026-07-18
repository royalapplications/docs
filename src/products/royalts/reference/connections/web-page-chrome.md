---
uid: royalts_reference_connections_web-page-chrome
name: Web Page (Chromium)
order: 9920
---

# ![](/products/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIcon_32.svg#img_header) Web Page (Chromium)

The **Web Page** connection can be used to display web pages and integrate web-based administration consoles using the embedded Chromium rendering engine.

## Dashboard

The **Web Page Dashboard** is shown in the **Dashboard** panel when you select a Web Page connection in the **Navigation** panel. It can be configured to immediately show the web page without connecting to the session.

## Dashboard Features

- Basic browser functions (Home, Back, Forward, and Refresh).
- Navigate to a URL and search within the page.
- Open the configured URL in the default browser.

## Dashboard Settings

To configure the application default settings for the included dashboard, open [Plugins Management](xref:royalts_intro_plugins) and click **Dashboard** for the Web Page plugin based on Chromium.

To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings

To configure the plugin settings, open Plugins Management and click **Settings** for the Web Page plugin based on Chromium.

#### Disable External Worker Process

If enabled, the in-process Chromium engine is used instead of the external worker process. Royal TS must be restarted after changing this setting.

#### Pre-Load Engine

If enabled, Royal TS preloads the Chromium engine during application startup to improve startup performance for the first web connection.

> [!Note]
> Enabling this setting increases memory usage.

## Connection Properties

The Web Page (Chromium) Properties dialog is shown:

- for a new Web Page connection by clicking the **Web Page** menu item in the **Add** drop-down menu in the **Edit** group on the **Home** ribbon tab when the Chromium-based plugin is set as the default plugin.
- for a new Web Page connection by clicking the **More...** menu item in the **Add** drop-down menu in the **Edit** group on the **Home** ribbon tab and selecting **Web Page (based on Chromium)** from the list of available objects.
- for an existing Web Page connection by selecting a Web Page connection configured to use the Chromium-based plugin and clicking **Properties** in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Web Page connections configured to use the Chromium-based plugin are selected in the Folder / Document Dashboard and **Properties** in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/products/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIconConnection_32.svg#img_header) Web Page Properties

The **Web Page** property page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### URL

Enter the web page URL for this connection. [Replacement tokens](xref:royalts_advanced_tokens) are supported.

[!include[description.md](~/royalts/_shared/description.md)]

[!include[autofill.md](~/royalts/_shared/autofill.md)]
[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]

### Connection Dashboard Settings

#### Show Web Page in Dashboard

If checked, Royal TS loads the configured web connection in the Dashboard. This is useful for quickly checking status pages without opening the full connection.

[!include[securegateway.md](~/royalts/_shared/securegateway.md)]
[!include[activeplugin.md](~/royalts/_shared/activeplugin.md)]

## ![](/products/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PageAdvanced_32.svg#img_header) Advanced

The **Advanced** page allows you to configure browser behavior, automatic refresh, browser dimensions, zoom, and certificate handling.

### General

#### Show Toolbar

If enabled, a browser toolbar with basic commands and access to the URL is shown.

#### Open Links in Default Browser

If enabled, each clicked link is opened in your default browser instead of the connection tab or window.

#### Open Popups in Default Browser

If enabled, popup windows are opened in the default browser instead of a window hosted by Royal TS. Websites that require authentication may prompt for credentials again.

#### Auto Refresh

If enabled, the web page is refreshed automatically. The interval can be between 5 and 86,400 seconds.

#### Custom Browser Size

If enabled, you can specify a custom width and height for the web browser. Each dimension can be between 16 and 16,000 pixels. This can be useful when testing a web page at different screen resolutions.

#### Zoom Factor

Sets the initial zoom factor for the web page from 25% to 500%.

### Certificate

#### Ignore Certificate Errors

If enabled, certificate errors are suppressed.

#### Client Certificate

Configure how Royal TS behaves when a website requests a client certificate.

- **Continue without certificate:** Continue loading the page without selecting a client certificate.
- **Prompt for certificate:** Prompt for a certificate when the website requests one.
- **Continue with certificate:** Continue with the configured certificate.

#### Select Certificate

Select the certificate to use when **Continue with certificate** is configured.

#### Thumbprint

Shows the thumbprint of the selected client certificate.

## ![](/products/images/RoyalTS/Plugins/Connections/WebPageChrome/SVG_PluginIcon_32.svg#img_header) Isolation

The **Isolation** page configures a separate Chromium session for this connection. Enable **Session Isolation** to configure language, proxy, security, storage, and browser settings. When isolation is disabled, the connection uses the shared default session and the remaining settings on this page are unavailable.

#### Session Isolation

Enables an isolated Chromium session for this connection.

### General

#### Session ID

Connections with the same Session ID share cookies, cache, and other browsing data. Simultaneously active connections sharing a Session ID must use compatible session settings. If the Session ID is empty, Royal TS uses the connection ID.

#### Language

Specifies the Chromium UI language using a valid language identifier such as `en` or `en-US`. Invalid language identifiers must be corrected before the properties can be saved.

#### Allow JavaScript

If enabled, JavaScript is allowed in the browser.

#### Allow Zooming

If enabled, the zoom factor can be changed in the browser.

#### Load Images

If enabled, images are loaded automatically.

#### Allow Clipboard Access

If enabled, JavaScript can access the clipboard.

#### Allow Close Window

If enabled, JavaScript can close a browser window even when it was not opened by JavaScript.

### Proxy

#### Proxy Mode

The following proxy modes are available:

- Do not use a proxy server
- HTTP
- SOCKS 4
- SOCKS 4A
- SOCKS 5
- Use Secure Gateway as proxy server

> [!Note]
> Proxy credentials are supported for HTTP proxies only. When **Use Secure Gateway as proxy server** is selected, configure the connection's Secure Gateway settings as well.

#### Direct Mode

If enabled while **Do not use a proxy server** is selected, system proxy settings are ignored.

#### Proxy Server

Specifies the host name of the proxy server.

#### Port

Specifies the proxy port to use. Valid ports range from 1 to 65,535.

#### Bypass

Specifies hosts that should bypass the proxy server. Separate multiple hosts with spaces, commas, or semicolons.

### Proxy Credential Configuration

Proxy credential settings are available for HTTP proxies only.

[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

### Advanced

#### Disable Hardware Rendering (GPU)

Disables GPU rendering for the browser.

#### Disable Spell Checker

Disables the browser's built-in spell checker.

#### Disable Dark Mode

If enabled, Chromium does not automatically use dark mode based on system settings.

#### Cache Path

Specifies a custom parent path for browser files and cookies. Royal TS creates a directory based on the sanitized Session ID below this path.

#### Clear Browsing Data on Close

Clears the complete Chromium profile, including cache, cookies, history, and other browsing data. If multiple connections share the same Session ID, cleanup occurs after the last connection, dashboard, or popup using the session closes. Enabling this option on any active connection requests cleanup for the shared session.

#### Custom User Agent

Specifies a custom user agent string. Leave this field empty to use the default Chromium user agent.

#### Command Line Arguments

Specifies additional switches for the embedded Chromium engine separated by spaces. Switches intended for the standalone Chrome browser are not supported unless the embedded engine supports them.

#### Custom CSS

Specifies one or more CSS rules to apply to loaded documents.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
