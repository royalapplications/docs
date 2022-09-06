---
name: Health
order: 9090
---

# Health

<img src="/r2021/images/RoyalServer/ActivityMonitor_48x48.png" class="icon-def" alt="" />

The Health panel displays the current performance data of Royal Server with an update refresh rate of 2 seconds.

## Show or Activate the Health Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Royal Server** group and then on the **Health** entry.

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
