---
name: Royal TS/X Management Connection
order: 10040
---

# Royal TS/X Management Connection

Besides the required IP or name of the server, you probably also need to specify proper credentials when you configure a management connection in Royal TS/X.
Additionally, you can configure a "Royal Server" object in the properties. This way, the connection is using Royal Server (and the provided credential) to query the information. Alternatively, you can configure "Direct Connect (No Royal Server)" which is executing the module directly without Royal Server.

> [!NOTE]
> The credential configured on the management connection (i.e. not the credential on the Royal Server object) needs to have proper rights to read the information (e.g. read the Windows Event Log or query Windows Services). In most scenarios, a user account who is member of the Local Administrators group is used. For low privilege environments a number of steps are necessary to grant non-administrative users the required rights.

To access Royal Server you can install the latest version of Royal TS/X:

[Get the latest version of Royal TS (for Windows)](https://www.royalapps.com/ts/win/download)

[Get the latest version of Royal TSX (for OS X)](https://www.royalapps.com/ts/mac/download)

Alternativly, you can use the Royal Server PowerShell API to query Royal Server from the command line:
[Using Royal Server via PowerShell](../scripting/index.md)
