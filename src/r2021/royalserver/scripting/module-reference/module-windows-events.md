---
name: Module Windows Events (EventLog)
order: 4000
---

# Module Windows Events (EventLog)

The EventLog module can be used to query the Windows Event Log.

> **Note**  
> The necessary configuration to talk to Royal Server via Script is described in "Getting Started"

## Command "GetEntries"

Gets entries of the Windows Eventlog.

**Parameters:**

- CommandProvider: either "WMI" or "CIM" is supported
- WQLWhereClause: a where-clause similar to the SQL language in WQL (see examples)
- TruncateDescription: truncates the Message description after 80 characters to reduce network traffic
- TimeZoneId: Timezone Id that can be used to convert time stamps. In the results, the property "LoggedLocal" will be adjusted to the provided timezone.

> **Note**  
> The following Timezone Ids are supported (depending on the underlying Windows support):
>
> - Afghanistan Standard Time
> - Alaskan Standard Time
> - Aleutian Standard Time
> - Altai Standard Time
> - Arab Standard Time
> - Arabian Standard Time
> - Arabic Standard Time
> - Argentina Standard Time
> - Astrakhan Standard Time
> - Atlantic Standard Time
> - AUS Central Standard Time
> - Aus Central W. Standard Time
> - AUS Eastern Standard Time
> - Azerbaijan Standard Time
> - Azores Standard Time
> - Bahia Standard Time
> - Bangladesh Standard Time
> - Belarus Standard Time
> - Bougainville Standard Time
> - Canada Central Standard Time
> - Cape Verde Standard Time
> - Caucasus Standard Time
> - Cen. Australia Standard Time
> - Central America Standard Time
> - Central Asia Standard Time
> - Central Brazilian Standard Time
> - Central Europe Standard Time
> - Central European Standard Time
> - Central Pacific Standard Time
> - Central Standard Time
> - Central Standard Time (Mexico)
> - Chatham Islands Standard Time
> - China Standard Time
> - Cuba Standard Time
> - Dateline Standard Time
> - E. Africa Standard Time
> - E. Australia Standard Time
> - E. Europe Standard Time
> - E. South America Standard Time
> - Easter Island Standard Time
> - Eastern Standard Time
> - Eastern Standard Time (Mexico)
> - Egypt Standard Time
> - Ekaterinburg Standard Time
> - Fiji Standard Time
> - FLE Standard Time
> - Georgian Standard Time
> - GMT Standard Time
> - Greenland Standard Time
> - Greenwich Standard Time
> - GTB Standard Time
> - Haiti Standard Time
> - Hawaiian Standard Time
> - India Standard Time
> - Iran Standard Time
> - Israel Standard Time
> - Jordan Standard Time
> - Kaliningrad Standard Time
> - Kamchatka Standard Time
> - Korea Standard Time
> - Libya Standard Time
> - Line Islands Standard Time
> - Lord Howe Standard Time
> - Magadan Standard Time
> - Magallanes Standard Time
> - Marquesas Standard Time
> - Mauritius Standard Time
> - Mid-Atlantic Standard Time
> - Middle East Standard Time
> - Montevideo Standard Time
> - Morocco Standard Time
> - Mountain Standard Time
> - Mountain Standard Time (Mexico)
> - Myanmar Standard Time
> - N. Central Asia Standard Time
> - Namibia Standard Time
> - Nepal Standard Time
> - New Zealand Standard Time
> - Newfoundland Standard Time
> - Norfolk Standard Time
> - North Asia East Standard Time
> - North Asia Standard Time
> - North Korea Standard Time
> - Omsk Standard Time
> - Pacific SA Standard Time
> - Pacific Standard Time
> - Pacific Standard Time (Mexico)
> - Pakistan Standard Time
> - Paraguay Standard Time
> - Qyzylorda Standard Time
> - Romance Standard Time
> - Russia Time Zone 10
> - Russia Time Zone 11
> - Russia Time Zone 3
> - Russian Standard Time
> - SA Eastern Standard Time
> - SA Pacific Standard Time
> - SA Western Standard Time
> - Saint Pierre Standard Time
> - Sakhalin Standard Time
> - Samoa Standard Time
> - Sao Tome Standard Time
> - Saratov Standard Time
> - SE Asia Standard Time
> - Singapore Standard Time
> - South Africa Standard Time
> - Sri Lanka Standard Time
> - Sudan Standard Time
> - Syria Standard Time
> - Taipei Standard Time
> - Tasmania Standard Time
> - Tocantins Standard Time
> - Tokyo Standard Time
> - Tomsk Standard Time
> - Tonga Standard Time
> - Transbaikal Standard Time
> - Turkey Standard Time
> - Turks And Caicos Standard Time
> - Ulaanbaatar Standard Time
> - US Eastern Standard Time
> - US Mountain Standard Time
> - UTC
> - UTC+12
> - UTC+13
> - UTC-02
> - UTC-08
> - UTC-09
> - UTC-11
> - Venezuela Standard Time
> - Vladivostok Standard Time
> - Volgograd Standard Time
> - W. Australia Standard Time
> - W. Central Africa Standard Time
> - W. Europe Standard Time
> - W. Mongolia Standard Time
> - West Asia Standard Time
> - West Bank Standard Time
> - West Pacific Standard Time
> - Yakutsk Standard Time

## Examples

- For all commands a destination password is required which is passed over as a securestring which is converted in PowerShell like this:

  ```powershell
  $destinationpassword = convertto-securestring -string "your-secure-password" -asplaintext -force
  ```

* Get the latest 10 Log entries via WMI:

  ```powershell
  $command = "GetEntries"

  $argz =  @{"CommandProvider" = "WMI"}

  $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -MaxRecords 10 -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses\[0].Result
  ```

* Get the latest 10 Log entries via CIM:

  ```powershell
  $command = "GetEntries"

  $argz =  @{"CommandProvider" = "CIM"}

  $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -MaxRecords 10 -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses[0].Result
  ```

* Get the latest 10 Log entries from the Application Log (using WQL):

  ```powershell
  $command = "GetEntries"

  $argz =  @{"WQLWhereClause" = "Logfile='Application'"}

  $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -MaxRecords 10 -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses[0].Result
  ```

* Get log entries from the Application Log that are newer than a timestamp (using WQL):

  ```powershell
  $command = "GetEntries"

  $argz =  @{"WQLWhereClause" = "LogFile='Application' AND TimeWritten >= '20200224180000.111111+060'"}

  $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses[0].Result
  ```

* Get all log entries from the Application Log that are Errors (Information=3, Warning=2, Error=1).  
  You can more easily specify a WQL query using Royal TS and the Advanced Filter section on a Windows Event View object.

      ```powershell
      $command = "GetEntries"

      $argz =  @{"WQLWhereClause" = "Logfile='Application' AND EventType=1"}

      $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword

      $entries = $response.Responses[0].Result
      ```

* Get the latest log entries with truncated Messages (to reduce network communication):

  ```powershell
  $module = "EventLog"

  $command = "GetEntries"

  $argz =  @{"TruncateDescription" = "true"}

  $response= Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses[0].Result
  ```

* Get the latest log entries with a Timezone Id:

  ```powershell
  $module = "EventLog"

  $command = "GetEntries"

  $argz =  @{"CommandProvider" = "WMI"; "TimeZoneId" = "Line Islands Standard Time"} #in the properties of the results the "LoggedLocal" property will be adjusted

  $response = Invoke-RoyalServerCommand -Module EventLog -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword

  $entries = $response.Responses[0].Result
  ```
