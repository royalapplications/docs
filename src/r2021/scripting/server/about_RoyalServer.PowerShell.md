# RoyalServer Powershell
## about_RoyalServer.PowerShell.md

## SHORT DESCRIPTION
Describes how to manage RoyalServer using PowerShell Commandlets.

## LONG DESCRIPTION
Royal Server provides a list of loaded `Royal Server Modules` which contain `Commands` which in turn require a list of `Parameters`. All this is exposed and discoverable via PowerShell Commandlets.

## EXAMPLES

### SETUP
In order to work with the RoyalServer PowerShell Commandlets, you need to register them with your PowerShell session. Just issue the following command and you are good to go:

```powershell
Import-Module RoyalServer.PowerShell
```

> Usually, Royal Server is installed to `%ProgramFiles(x86)%\RoyalServer`.

If you like to have the RoyalServer CommandLets in all your PowerShell sessions, include this line in your PowerShell profile. To locate where your profile is call `$profile` in your PowerShell session.
Usually, this location is at `%USERPROFILE%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`.

### FIRST STEPS

Setting up a connection to Royal Server looks like this:

```powershell
# create a new RoyalServerConfig

$cred = Get-Credential
$config = New-RoyalServerConfig -Host "127.0.0.1" -UseSSL $true -Port 54899 -Credential $cred
```

### WORKING WITH ROYAL SERVER RESPONSES

```powershell
# gets all available Modules
$response = Get-RoyalServerModule -RoyalServerConfig $config
```

The variable `$response` is of the type RoyalServerPowerShellResponse which contains a list of responses since Royal Server can execute queries against multiple hosts with one request. Examine how many responses you got via `$response.Responses.Count`. The Responses collection contains entries of the type `RoyalServerPowerShellSingleResponse`. These contain two members: `Result` which is a `System.DataTable` with the actual data and `MetaData` which contains some additional information.

The following example outputs the loaded modules of Royal Server:

```powershell
# loop over all responses,
# you can omit this if you know there is only one and use $response.Responses[0]
foreach($response in $response.Responses)
{
     # loop over all rows in $response.Result
     foreach($row in $response.Result.Rows)
     {

          Write-Host ($row[0] + " - " + $row[1])
     }
}
```

To get an overview of all data and row names etc, you can use `Out-String` or `Out-GridView`:

```
$response.Responses[0].Result | Out-String
```

## NOTE

In a PowerShell session, you can get information to all commandlets by using the `Get-Help` command. 
Also, please take a look at our [Module Reference](xref:royalserver_scripting_module-reference) for detailed examples for all modules.

## SEE ALSO

- https://docs.royalapps.com/r2021/scripting/intro

## KEYWORDS

- Royal-Server
