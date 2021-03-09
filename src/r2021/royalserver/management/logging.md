---
name: Logging
order: 9010
---

# Logging

<img src="/r2021/images/RoyalServer/Logging_48x48.png" class="icon-def" alt="" />

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

Specifies the directory where the log files should be written to (if Type _File_ is selected). You can also use variables like `%TEMP%`.

### Log File

Specifies the log file name (if Type _File_ is selected). Please note, that Royal Server is using a rolling mechanism per day to prevent writing in one huge file.

**Example:**

You set the Log File to "logserverlog.txt", you will find a file with that name in the specified directory. On the next day, the content of this file is moved to a File Name like _logserverlog<yyyyMMDD>.txt_, e.g. logserverlog20140709.txt. The file logserverlog.txt always contains the current day.

> **Note**  
> Any change in this panel requires a restart of Royal Server.

**Request/Response Logging**

If checked, the complete requests and responses will be logged in separate files. The destination directory can be specified. This type of logging is only supported to files. **ATTENTION:** Passwords are not logged into the log files though other sensitive information (e.g. when executing a Script that contains passwords) will be logged. 

> **Note**  
> Be aware that for each request, two log files will be generated. One _<guid>\_request.xml_ file and one _<guid>\_response.xml_ file.

> **Note**  
> Enabling Request/Response Logging can have a huge impact on the Royal Server performance as well as the amount of data written to disc. It is strongly recommended to use this only for debugging purposes.
