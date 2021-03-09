---
name: Module Hyper-V
order: 4000
---

# Module Hyper-V

The EventLog module can be used to query the Windows Event Log.

> **Note**  
> The necessary configuration to talk to Royal Server (the variable `$config`) is described in "Getting Started".

> **Note** - About the parameter `CommandProvider`  
> The underlaying communication protocol can be either WMI (Windows Management Instrumentation) or CIM. WMI can be more efficient but might require more open ports for the communication.

> **Note** - About the parameter `NamespaceVersion`  
> The parameter `NamespaceVersion` relates to the fact, that Microsoft changed the internal implementation of Hyper-V. Starting from Windows Server 2008 and up to Windows Server 2008 R2 the namespace used for hypervisor management was "_root\\virtualization_" (aka V1). Windows Server 2012 introduced a refactored namespace "_root\\virtualization\\v2_", offering also the V1 version for backwards compatibility with existing tools.

## Command "GetInstances"

**Parameters:**

- CommandProvider [string]
- UseCredentials [bool]
- NamespaceVersion [int]
- InstanceFilter [string]
- IncludePerformanceInfo [bool]

## Command "StartInstance"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Command "StopInstance"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Command "SaveStateOfInstance"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Command "PauseInstance"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Command "GetThumbnail"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]
- HeightPixels [int]
- WidthPixels [int]

## Command "GetInstanceDetails"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Command "GetInstanceNetworkDetails"

**Parameters:**

- CommandProvider [string]
- VMID [string]
- UseCredentials [bool]
- NamespaceVersion [int]

## Examples

- Get the instances of the Hyper-V host via WMI:

  ```powershell
  $module = "HyperV"

  $command = "GetInstances"

  $hyperv = Invoke-RoyalServerCommand -Module $module -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword \$destinationpassword
  ```

- Get a specific instance of the Hyper-V host and include performance data:

  ```powershell
  $argz =  @{"InstanceFilter" = "<vmid>"; "IncludePerformanceInfo" = "true"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "GetInstances" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Get the instances of the Hyper-V host via CIM:

  ```powershell
  $argz =  @{"CommandProvider" = "CIM"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "GetInstances" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Starting Hyper-V instance:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "StartInstance" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Stopping Hyper-V instance:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "StopInstance" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Save state of an Hyper-V:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "SaveStatOfInstance" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  ```

- Pause a Hyper-V instance:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "PauseInstance" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz
  ```

- Get Screenshot of a Hyper-V instance:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"; "HeightPixels" = "240"; "WidthPixels" = "320"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "GetThumbnail" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  $imageBase64 = $hyperv.Results[0].Thumbnail

  $filename = "thumbnail.jpg

  $bytes = [Convert]::FromBase64String($imageBase64)

  [IO.File]::WriteAllBytes($filename, $bytes)
  ```

- Get Hyper-V instance details:

  ```powershell
  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "GetInstanceDetails" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  $hyperv.Results[0]

  Get Hyper-V network instance details:

  $argz =  @{"VMID" = "<vmid>"; "NamespaceVersion" = "2"}

  $hyperv = Invoke-RoyalServerCommand -Module HyperV -Command "GetInstanceNetworkDetails" -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $destinationusername -DestinationPassword $destinationpassword -Arguments $argz

  $hyperv.Results[0]
  ```
