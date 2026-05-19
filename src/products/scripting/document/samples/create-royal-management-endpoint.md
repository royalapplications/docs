---
uid: scripting_docs_samples_createroyalmanagementendpoint
name: Create Royal Management Endpoint
order: 8960
---

# Create a Royal Management Endpoint

Example:

```powershell
Install-Module -Name RoyalDocument.PowerShell -Force
Import-Module RoyalDocument.PowerShell

# Creates a store object
$store = New-RoyalStore -UserName "ScriptUser"

# Creates a new document
$doc = New-RoyalDocument -Store $store -FileName "D:\Temp\Test.rtsz" -Name "documentname"

# Creates a Royal Server object
$endpoint = New-RoyalObject -folder $doc -Type RoyalManagementEndpoint -Name "Royal Server Object Test" -Description "description"

# https://docs.royalapps.com/r2021/scripting/objects/gateways/royalmanagementendpoint.html
Set-RoyalObjectValue -Object $endpoint -Property "RoyalServerHost" -Value "<HOSTNAME/IP here>"
Set-RoyalObjectValue -Object $endpoint -Property "RoyalServerCredentialMode" -Value 1
Set-RoyalObjectValue -Object $endpoint -Property "RoyalServerUsername" -Value "<USERNAME here>"
Set-RoyalObjectValue -Object $endpoint -Property "RoyalServerPassword" -Value "<PASSWORD here>"

# Save the document?
# Out-RoyalDocument -Document $doc

# This gets a list of all available Royal Server documents
$rsdocs = Get-RoyalServerDocument -RoyalServer $endpoint -IgnoreCertificateWarning
# this opens the 4th item in the list. You might want to filter by ID, name, etc.
$rsdoc = Open-RoyalServerDocument -RoyalServer $endpoint -RoyalServerDocument $rsdocs[3] -IgnoreCertificateWarning
```