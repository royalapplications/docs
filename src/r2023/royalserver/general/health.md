---
uid: royalserver_general_health
name: Health
order: 9080
---

<img src="/r2023/images/RoyalServer/Svg/SVG_Health_32.svg" class="icon-left icon-lg" alt="" />

# Health

The Health panel displays the current performance data of Royal Server with an update refresh rate of 2 seconds.

## Show or Activate the Health Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **General** group and then on the **Health** entry.

## Features

- Displays the Requests/sec of the Management Endpoint Component
- Displays the Total Requests of the Management Endpoint Component (since the Royal Server was started)
- Displays the Server Up Time
- Displays the number of currently open Secure Gateway connections
- Displays the CPU usage (of the Royal Server process)
- Displays the Memory Consumption (of the Royal Server process)
- Displays the Threads used (of the Royal Server process)

> [!NOTE]
> CPU usage, Memory Consumption and Number of Threads can also be read by using the standard Windows Performance Counters (values are read from the process `royalserver.exe`)
