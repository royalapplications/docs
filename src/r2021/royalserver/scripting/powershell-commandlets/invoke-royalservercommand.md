---
name: Invoke-RoyalServerCommand
order: 4000
---

# Invoke-RoyalServerCommand

## NAME

Invoke-RoyalServerCommand

## SYNOPSIS

Executes a Royal Server command.

## SYNTAX

```powershell
Invoke-RoyalServerCommand
     [-ModuleID] <ModuleNames>
     [-Command] <string>
     [[-Arguments] <Hashtable>]
     [-RoyalServerConfig] <RoyalServerConfig>
     [-DestinationHost] <string>
     [[-Credential] <PSCredential>]
     [[-MaxRecords\] <int>]
     [[-Offset] <int>]
     [[-Timeout] <int>]
     [<CommonParameters>]
```

## DESCRIPTION

The Invoke-RoyalServerCommand cmdlet invokes a command at Royal Server.

**RELATED LINKS**

New-RoyalServerconfig

Get-RoyalServerModule

Get-RoyalServerModuleCommand

Get-RoyalServerModuleCommandParameter

## REMARKS

To see the examples, type: "get-help Invoke-RoyalServerCommand -examples".

For more information, type: "get-help Invoke-RoyalServerCommand -detailed".

For technical information, type: "get-help Invoke-RoyalServerCommand -full".

For online help, type: "get-help Invoke-RoyalServerCommand -online"

## EXAMPLES

```powershell
#-------------------------- EXAMPLE 1 --------------------------#

Invoke-RoyalServerCommand -Module WindowsServices -Command "ListServices" -RoyalServerConfig $config -DestinationHost $destinationHost -Credential $cred

# This command lists all Windows Services on $destinationHost. $cred is a PSCredential that can be instantiated via Get-Credential.
```

```powershell
# -------------------------- EXAMPLE 2 --------------------------#

$argz =  @{"ServiceName" = "Spooler"}

Invoke-RoyalServerCommand -Module WindowsServices -Command "StopService" -Arguments $argz -RoyalServerConfig $config -DestinationHost $destinationHost -Credential $cred -Timeout 30000

# This command stops the Printer Spooler on $destinationHost. It shows, how Command Parameters are used. $cred is a PSCredential that can be instantiated via Get-Credential.
```

```powershell
# -------------------------- EXAMPLE 3 --------------------------#

Invoke-RoyalServerCommand -Module Processes -Command "ListProcesses" -RoyalServerConfig $config -DestinationHost $destinationHost -Credential $cred | Where-Object {$_.Caption -like '\*server\*'} | Out-GridView

# This command lists all Windows Services on $destinationHost, filters these with PowerShell Where-Object and outputs it in a GridView. $cred is a PSCredential that can be instantiated via Get-Credential.
```
