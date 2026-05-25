---
uid: royalts_reference_connections_filetransfer
name: File Transfer
order: 9940
---

# ![](/r2023/images/RoyalTS/Plugins/Connections/FileTransfer/SVG_PluginIcon_32.svg#img_header) File Transfer

The **File Transfer** connection allows you to browse and transfer files on FTP, SFTP, SCP and S3 file servers.

## Dashboard

The dashboard included in this plugin allows you to:

- Start the Connection.
- Edit Properties (opens the properties dialog of the selected connection).

## Dashboard Settings

This plugin does not offer any dashboard settings.

## Plugin Settings

The File Transfer connection plugin does not offer any plugin settings at this time.

## Connection Properties

The File Transfer connection Properties dialog is shown:

- for a new File Transfer connection by clicking the **File Transfer** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab.
- for a new File Transfer connection by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **File Transfer** entry from the list of available objects.
- for an existing File Transfer connection by selecting a File Transfer connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple File Transfer connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2023/images/RoyalTS/Plugins/Connections/FileTransfer/SVG_PluginIcon_32.svg#img_header) File Transfer Properties

The **File Transfer** page allows you to configure basic connection settings including the connection type and port.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Connection Type

Choose from FTP, SFTP, SCP and S3 connection types.

- **FTP**
  File Transfer Protocol.
- **SFTP (Modern SCP alternative)**
  SSH File Transfer Protocol.
- **SCP (Legacy)**
  Secure Copy Protocol. SCP is available in the graphical File Transfer connection, but SCP transfers cannot be cancelled gracefully. The only way to stop the current operation is to force-disconnect from the server, which can leave incomplete files when downloading or uploading.
- **S3**
  Amazon S3 and S3-compatible object storage.

[!include[computername.md](~/royalts/_shared/computername.md)]

#### Port

Specify the TCP port for the File Transfer connection. The default port for FTP is 21, for SFTP and SCP it is 22, and for S3 it is 443.

[!include[description.md](~/royalts/_shared/description.md)]
[!include[macaddress.md](~/royalts/_shared/macaddress.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[securegateway.md](~/royalts/_shared/securegateway.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/FileTransfer/SVG_Tools_32.svg#img_header) Advanced

On the **Advanced** page you can tweak advanced file transfer settings like passive mode for FTP connection and whether or not to use large buffers for file transfers.

### Common

#### Initial Local Path

Select one of the predefined directories or specify a custom folder as initial path.

#### Initial Remote Path

Select automatic to use the home directory provided by server or specify a custom folder. For S3 connections, the custom remote path is the bucket.

#### Show hidden files

If checked, hidden files will be shown in the local and remote file browser.

### Connection

#### Encoding

Specifies the encoding.

#### Keep-Alive Interval

Specify the keep-alive interval in seconds. Set to 0 to disable keep-alive.

#### Use large buffers for file transfers

Enabling large buffers can improve file transfer performance.

#### Bandwidth

Specify bandwidth constraints in kilobytes per second. Set to zero (0) to remove bandwidth constraints. Upload and download speed is only supported for FTP and SFTP connections.

#### Max. Download Speed

The maximum allowed download speed, in kilobytes per second. For unlimited speed set this to zero.

#### Max. Upload Speed

The maximum allowed upload speed, in kilobytes per second. For unlimited speed set this to zero.

### Timestamps

#### Creation Time

If checked, the creation time stamp is restored after the file transfer.

#### Last Write Time

If checked, the last write time stamp is restored after the file transfer.

#### Last Access Time

If checked, the last access time stamp is restored after the file transfer.

> [!Note]
> The remote SFTP service must support restoring timestamps.

### SFTP

#### Custom Command

Specify a custom command to be executed after an SFTP connection has been established. [Replacement tokens](xref:royalts_advanced_tokens) are supported.

#### Missing Create Time Workaround

Enables a workaround for SFTP servers that send a broken `SSH_FXP_STAT` response with a create-time flag but without the create-time field. This is known to happen with some ProFTPd `mod_sftp` versions.

- **Disabled**
- **Enabled**
- **Auto-Detect**

### S3

#### Region

Specify the S3 region. You can select a predefined Amazon S3 region or enter a custom region for S3-compatible providers.

#### Use path-style requests

If checked, S3 requests use path-style addressing instead of virtual-hosted-style addressing.

> [!Note]
> S3 file transfer currently does not support Secure Gateway or Proxy. The configured Secure Gateway and/or Proxy settings are ignored for S3 connections.

### FTP

#### Transfer Mode

The following transfer modes are available:

- Stream
- Compressed (Mode Z)
- Block

#### Passive Mode

If checked, passive mode is used for FTP file transfers.

## ![](/r2023/images/RoyalTS/Plugins/Connections/FileTransfer/SVG_PageSecurity_32.svg#img_header) Security

The **Security** page allows you to adjust security settings and allowed algorithms.

### General

#### Authentication Agent

Select the SSH authentication agent to use:

- None
- OpenSSH Agent
- Pageant
- Legacy Pageant

#### Ignore Certificate and Fingerprint Warnings

If checked, Royal TS will not show warning messages when fingerprint does not match or when invalid certificates are used.

#### Prefer Keyboard-Interactive Authentication

If checked, keyboard-interactive authentication is preferred over password authentication.

> [!Note]
> You may need to enable this option when your servers requires multi-factor authentication (MFA).

#### Use Strict Key Exchange

Gets or sets a value indicating whether to enable strict key exchange extension (compatible with OpenSSH 9.6).

[!include[rebexciphers.md](~/royalts/_shared/rebexciphers.md)]

## ![](/r2023/images/RoyalTS/Plugins/Connections/FileTransfer/SVG_Proxy_32.svg#img_header) Proxy Settings

The **Proxy Settings** page allows you to configure a proxy server used to connect to the remote server.

#### Proxy Mode

- No proxy (direct connect): (No proxy server will be used to connect to the remote server)
- Socks 4
- Socks 4a
- Socks 5
- HTTP

#### Proxy Server

Specify the proxy server name (FQDN) or IP address to use.

#### Port

Specify the proxy server port to use.

### Credential Mode

[!include[credentialmodes.md](~/royalts/_shared/credentialmodes.md)]

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
