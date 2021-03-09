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
