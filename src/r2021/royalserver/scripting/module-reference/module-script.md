---
name: Module Script
order: 4000
---

# Module Script

The Script module can be used to execute scripts on Royal Server or a remote host (depending on the used scripting engine). Additionally, the features "_Dynamic Folders_" and "_Dynamic Credentials_" or Royal TS/X are based on this module.

> **Note**  
> The necessary configuration to talk to Royal Server via Script is described in "Getting Started".

> **Note** - About the Parameter `PrimaryOutputMode`  
> The module usually is used by Royal TS/X and in these user interfaces you can choose between a plain text output (like in normal Powershell scripts) and a Grid-output which layouts the returned data nicely in a datagrid. Depending on the script, one or the other is preferable.

## Command "ExecutePowershell"

**Parameters:**

- Script [string]
- HistoryMaxLength [int]
- BufferWidth [int]
- Parameters [string]
- BackgroundColor [int]
- ForegroundColor [int]
- PrimaryOutputMode [int] (0=Grid, 1=Text)
- HistoryMaxLength [int]
- UseSSL [bool]
- IgnoreCertificateErrors [bool]
- AuthenticationMechanism [int]

## Examples

- Execute a Powershell script and return the output as a grid/data table:

  ```powershell
  $module = "Script"

  $command = "ExecutePowershell"

  $argz =  @{"Script" = "get-process"; "PrimaryOutputMode" = "0"}

  $procs = Invoke-RoyalServerCommand -Module $module -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  $procs.Results[0]
  ```

- Execute a Powershell script and return the output as a text (console):

  ```powershell
  $module = "Script"

  $command = "ExecutePowershell"

  $argz =  @{"Script" = "get-process"; "PrimaryOutputMode" = "1"}

  $procs = Invoke-RoyalServerCommand -Module $module -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  #note the way how to work with text/console output
  ```
