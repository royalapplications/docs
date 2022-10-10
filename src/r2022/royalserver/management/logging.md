---
name: Logging
order: 9010
---

# Logging

<img src="/r2022/images/RoyalServer/Logging_48x48.png" class="icon-def" alt="" />

The Logging Configuration panel displays and changes the logging configuration of Royal Server.

## Show or Activate the Logging Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Logging** entry.

## Features

**Log Level**

The following Log Levels are supported:

- No Logging (logging is disabled)
- Debug (this setting is intended for trouble shooting only since it generates a significant amount of data)
- Information (a lot of information is logged, including the meta data of all requests and responses Royal Server is executing. If you need to see the full data of the request or response, check Request/Response Logging)
- Warning
- Error
- Fatal

A default setting of Warning or Error is recommended.

**Type**

_Type: Windows Event Log_

Royal Server is writing the logs in a separate Windows Event Log called 'Royal Server Log'.

_Type: File_

Royal Server is writing the logs in a specified file.

Using **Open log...** is opening the currently specified log.

### Log Directory

Specifies the directory where the log files should be written to (if Type _File_ is selected), by default this is `%ProgramData%\RoyalServer\Logs`. You can also use variables like `%TEMP%`.

### Log File

Specifies the log file name (if Type _File_ is selected).

Up to `Royal Server V3`, the rolling mechanism changes the file once per day to limit the file size.

**Example:**

If you set the Log File to "logserverlog.txt", you will find a file with that name in the specified directory. On the next day, the content of this file is moved to a file name formatted like _logserverlog<yyyyMMDD>.txt_, e.g. logserverlog20210101.txt. The file logserverlog.txt always contains the current day.

As of `Royal Server V4`, the file log provider uses a rolling interval and appends the time period between file name and file extension. The rolling interval is set to a `Day` (3) by default. Furthermore, the log file is limited to 1GB, in order to avoid bringing down the server with runaway disk usage. Once this limit is reached, no events will be written until the next roll interval starts.

**Example:**

If you set the Log File to "logserverlog*.txt", you will find a file with the name formatted like logserverlog*[yyyyMMdd].txt in the specified directory, e.g. logserverlog_20210101.txt. On the next day, a new log file will be created, e.g. logserverlog_20210102.txt.

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
> Any change in this panel requires a restart of Royal Server.

**Request/Response Logging**

If checked, the complete requests and responses will be logged in separate files. The destination directory can be specified. This type of logging is only supported to files.

> [!WARNING]
> Passwords are not logged into the log files though other sensitive information (e.g. when executing a Script that contains passwords) will be logged.

> [!NOTE]
> Be aware that for each request, two log files will be generated. One _<guid>\_request.xml_ file and one _<guid>\_response.xml_ file.

> [!NOTE]
> Enabling Request/Response Logging can have a huge impact on the Royal Server performance as well as the amount of data written to disc. It is strongly recommended to use this only for debugging purposes.
