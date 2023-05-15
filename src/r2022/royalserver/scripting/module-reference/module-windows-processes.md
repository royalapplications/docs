---
name: Module Windows Processes
order: 4000
---

# Module Windows Processes

The Windows Processes module can be used to query the running processes on a machine.

> [!NOTE] 
> The necessary configuration to talk to Royal Server via Script is described in "Getting Started"

## Command "ListProcesses"

**Parameters:**

- CommandProvider [string]
- IncludeOwner [bool]

## Command "TerminateProcesses"

**Parameters:**

- CommandProvider [string]
- Handle [int]
- Timeout [int]

## Command "StartProcesses"

**Parameters:**

- CommandProvider [string]
- CommandLine [string]
- CurrentDirectory [string]

## Examples

- For all commands a destination password is required which is passed over as a secure string which is converted in PowerShell like this:

  ```powershell
  $destinationpassword = convertto-securestring -string "your-secure-password" -asplaintext -force
  ```

- Get the running processes of `$destinationHost`:

  ```powershell
    $command = "ListProcesses"

    $processes = Invoke-RoyalServerCommand -Module Processes -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword -MaxRecords 10

    #iterate over them
    foreach($p in $processes.Results[0])
    {
        #this is how you can get the process id to kill a process
        Write-Host (($p.ProcessId.ToString() + "    " + $p.Name)  )
    }
  ```

- Get the running processes of `$destinationHost` including the process owner:

  ```powershell
  $command = "ListProcesses"

  $argz =  @{"IncludeOwner" = "true"}

  $processes = Invoke-RoyalServerCommand -Module Processes -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword -MaxRecords 10
  ```

  > [!NOTE]
  > Including the process owner slows down the execution time significantly.

- Teminate a process at the `$destinationHost`:

  ```powershell
  $command = "TerminateProcess"

  $argz =  @{"Handle" = "2072"}

  Invoke-RoyalServerCommand -Module Processes -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Start a process at the `$destinationHost`:

  ```powershell
  $command = "StartProcess"

  $argz =  @{"CommandLine" = "notepad.exe"}

  Invoke-RoyalServerCommand -Module Processes -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword -Arguments $argz
  ```

  > [!NOTE]
  > Note that the spawned process will run under `NTAUTHORITY\System` and will not have a visible user interface.
