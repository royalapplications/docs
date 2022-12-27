---
name: Performance Counter
order: 5000
---

# Performance Counter

Royal Server is populating its own Windows performance counters. These can be used for troubleshooting or monitoring. The category of all performance counters is called "Royal Server".

## General Performance Counters

| Name                       | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| Cpu Usage %                | Cpu usage in % for the RoyalServer.exe process                 |
| Memory Private Working Set | Private Working Set in bytes of the RoyalServer.exe process    |
| Requests / sec             | Number requests executed for Management Connections per second |
| Requests Total             | Total requests executed for Management Connections             |
| Threads                    | Number of threads used by Royal Server                         |
| Uptime                     | Uptime in seconds for Royal Server                             |

## Management Connections Performance Counters

| Name                   | Description                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------- |
| MG Current IPs Blocked | Number of IPs blocked because of unsuccessful login attempts for Management Connections |

## Secure Gateway Performance Counters

| Name                                         | Description                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| SG Connections Open                          | Open Secure Gateway Connections                                                             |
| SG Connections Dropped - Wrong Software Name | Number of connections dropped because of unknown clients (not Royal TS/X)                   |
| SG Current IPs Blocked                       | Number of IPs blocked because of unsuccessful login attempts for Secure Gateway connections |

Additionally to the not persisted values of the Performance Counters, the following counter values are logged as well every minute:
- CPU Usage %
- Memory Private Working Set
- Threads
- Requests / Sec
- Requests Total
- UpTime

Example log entry:
``` 2022-11-14 13:17:54.029 [INF] [NORM] CPU: 0, PrivateBytes 112MB, Threads: 51, RequestsPerSecond: 0, TotalRequests: 46, UpTime: "02:12:02.0433234"  ```

> [!NOTE]
> The performance values will only be logged when the Trace Flag 'TRACEFLAG_LOG_PERFORMANCE_VALUES' is set to true. See for [Trace Flags](xref:royalserver_advanced_traceflags) details.