---
name: Royal TS/X Management Connection
order: 10040
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

Start by creating a "Royal Server" object that has configured proper values for IP, Port and the Royal Server Credentials.
Use the "Test" Button to verify connectivity.

> [!NOTE]
> The configured user needs to be in the "Royal Server Users" group on Royal Server to get acccess.

Then create e.g. a Windows Events connection and specify the Royal Server object you just created in the "Royal Server"
category of the Windows Events connection. If you forget this step, Royal TS/X tries to connect to this machine
directly without Royal Server.

> [!NOTE]
> The credential configured on the management connection (that is not the credential on the Royal Server object) needs to have proper rights to read the information (e.g. read the Windows Event Log) on the target host. In most scenarios, a user account who is member of the Local Administrators group is fine. For low privilege environments a number of steps are necessary to grant non-administrative users the required rights depending on the plugin.

To access Royal Server you can install the latest version of Royal TS/X:

[Get the latest version of Royal TS (for Windows)](https://www.royalapps.com/ts/win/download)

[Get the latest version of Royal TSX (for OS X)](https://www.royalapps.com/ts/mac/download)

Alternativly, you can use the Royal Server PowerShell API to query Royal Server from the command line:
[Using Royal Server via PowerShell](../scripting/index.md)
