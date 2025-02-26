---
uid: royalserver_general_logging
name: Logging
order: 9020
---

<img src="/images/RoyalServer/Svg/SVG_Logging_32.svg" class="icon-left icon-lg" alt="" />

# Logging

The Logging Configuration panel displays and changes the logging configuration of Royal Server.

## Show or Activate the Logging Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Logging** entry.

For the File and Windows Event Log you can specify the Log Level and Separator.

**Log Level**
The following Log Levels are supported:

- No Logging (logging is disabled)
- Debug (this setting is intended for trouble shooting only since it generates a significant amount of data)
- Information (a lot of information is logged, including the meta data of all requests and responses Royal Server is executing. If you need to see the full data of the request or response, check Request/Response Logging)
- Warning
- Error
- Fatal

**Log Separator**
Specifies a separation character in the Log File. Possible values are ` ` (space), `,`, `|` or `#` .

## Windows Event Log

If enabled, Royal Server logs to the Windows Event Log "Royal Server" with the specified Log Level and Separator.

> [!NOTE]
> In rare cases where Royal Server cannot start properly catastrophic errors are logged in the `Application` log of the Windows Event Log.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## File Log

If enabled, Royal Server logs to a file. Additionally, the content of this file is shown by the Configuration Tool.

A default setting of Warning or Error is recommended.

**Log Directory**
Specifies the directory where the log files should be written to (if Type _File_ is selected), by default this is `%ProgramData%\RoyalServer\Logs`. You can also use variables like `%TEMP%`.

**File Name**
Specifies the log file name.

**Example:**

If you set the Log File to "logserverlog.txt", you will find a file with that name in the specified directory. On the next day, the content of this file is moved to a file name formatted like _logserverlog<yyyyMMDD>.txt_, e.g. logserverlog20230101.txt. The file logserverlog.txt always contains the current day. The rolling interval is set to a `Day` (3) by default.
If you want to configure a different interval, change the value for `FileLogRollingInterval` in` %ProgramData%\RoyalServer\appsettings.json`.

Allowed values:

| Name     | Value | Description                                                       |
| -------- | :---: | ----------------------------------------------------------------- |
| Infinite |   0   | The log file will never roll. Appends no time period information. |
| Year     |   1   | Roll every year. Appends `yyyy`.                                  |
| Month    |   2   | Roll every calendar month. Appends `yyyyMM`.                      |
| Day      |   3   | Roll every day. Appends `yyyyMMdd`.                               |
| Hour     |   4   | Roll every hour. Appends `yyyyMMddHH`.                            |
| Minute   |   5   | Roll every minute. Appends `yyyyMMddHHmm`.                        |

> [!NOTE]
> The Log File is limited to 1GB, in order to avoid bringing down the server with runaway disk usage. Once this limit is reached, no events will be written until the next roll interval starts.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Request/Response Logging

If checked, all requests and responses from the Management Endpoint and the Document Store will be logged **completely** in two separate files. The destination directory can be specified. This type of logging is only supported to files.

> [!WARNING]
> Passwords are not logged into the log files though other sensitive information (e.g. when executing a Script that contains passwords) will be logged.

> [!WARNING]
> Enabling Request/Response Logging can have a huge impact on the Royal Server performance as well as the amount of data written to disc. It is strongly recommended to use this only for debugging purposes.

> [!NOTE]
> Be aware that for each request, two log files will be generated. One _<guid>\_request.xml_ file and one _<guid>\_response.xml_ file.

## Syslog Logging

Syslog support is currently only supported as an experimental feature and the setup/configuration may vary depending on your server setup.

> [!NOTE]
> Syslog support can only be activated by editing `%AppData%\RoyalServer\appsettings.json`.

Available configuration keys:

- _SysLogEnabled_: Enable or disable the syslog logging.
- _SysLogProtocol_: The protocol to use.
  - Allowed values: `Udp`, `Tcp`
  - The default value is `Udp`.
- _SysLogTarget_: The hostname or ip of the syslog server.
- _SysLogPort_: The port the syslog server is listening on.
- _SysLogFacility_: An integer specifying the category of the system generating the log message according to the `RFC3164`.
  - Allowed values: 0 - 23.
  - The default value is 16 (Local0).
- _SysLogLogLevel_: The log level to apply.
  - Allowed values: `Verbose`, `Debug`, `Information`, `Warning`, `Error`, `Fatal`
  - The default value is Information.
- _SysLogFramingType_: How to frame i.e. delimit syslog messages on the wire.
  - Allowed values: `CRLF`, `CR`, `LF`, `NUL`, `OCTET_COUNTING`,
  - The default value is `OCTET_COUNTING` (as described in RFC5425 and RFC6587).
- _SysLogFormat_
  - Allowed values: `Local`, `RFC3164`, `RFC5424`
  - The default value is `RFC5424`.
- _SysLogSslProtocols_: Comma separated list of SSL/TLS protocols used for a secure channel.
  - Allowed values: see System.Security.Authentication.SslProtocols
  - Default value is `Tls12`.
- _SysLogIgnoreCertificateErrors_: If set to `true`, all certificate errors will be ignored when using protocol `Tcp`.
