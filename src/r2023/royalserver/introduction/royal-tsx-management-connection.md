---
name: Royal TS/X Management Connection
order: 10053
---

# Royal TS/X Management Connection

In order to use Royal Server, you need to create a Royal Server Object in Royal TS/X.
The following connections support Royal Server:

- Windows Events
- Hyper-V
- Windows Processes
- Powershell
- Terminal Services
- VM Ware
- Windows Services

Start by creating a Royal Server object with the correct IP, port and Royal Server credentials configured.
Use the `Test` button to check connectivity.

> [!NOTE]
> The configured user needs to be in the "Royal Server Users" group on Royal Server to get access.

Then create e.g. a Windows Events connection and specify the Royal Server object you just created in the "Royal Server" category of the Windows Events connection. If you do not specify a Royal Server object, Royal TS/X will connect to this machine directly without using Royal Server (which requires direct network connectivity).

> [!NOTE]
> The credential configured on the management connection (which might be differentfrom the credential on the Royal Server object) must have sufficient rights to read information (e.g. read the Windows Event Log) on the target host. In most scenarios a user account that is a member of the Local Administrators group is working. For low privilege environments, depending on the plugin, a number of steps are required to grant non-administrative users the required rights.

To access Royal Server, please install the latest version of Royal TS/X:

- [Get the latest version of Royal TS (for Windows)](https://www.royalapps.com/ts/win/download)
- [Get the latest version of Royal TSX (for macOS)](https://www.royalapps.com/ts/mac/download)

Alternativly, you can use the Royal Server PowerShell API to query Royal Server from the command line.

See [Using Royal Server via PowerShell](../scripting/index.md)

