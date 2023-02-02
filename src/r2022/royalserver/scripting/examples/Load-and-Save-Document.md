---
uid: royalserver_scripting_examples_load-and-save-documents
name: Loading and Saving a Document from Royal Server
order: 7000
---

### Loading and Saving a Document from Royal Server

This example 
1. loads a document from Royal Server
2. stores it locally
3. loads it in memory
4. changes it
5. saves it back to the file system and 
6. saves it back to Royal Server

> [!NOTE] 
> This examples is using CmdLets from the PowerShell modules 'RoyalServer.PowerShell' and 'RoyalDocument.PowerShell'. Please
> make sure you have installed these first via the 'Install-Module' CmdLet. 


```powershell
import-module RoyalServer.PowerShell
import-module RoyalDocument.PowerShell

$psDocId = "875fbed2-2d67-4067-a5a8-5fae2bc38f56" #guid of the document
$psDocName = "psdoc"


[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12


$royalserverhost = “x.x.x.x”
$destinationhost = “x.x.x.x”
$gatewayusername = “username”
$pwd = “x”
$path = “x.rtsz"


$gatewaypassword = convertto-securestring -string $pwd  -asplaintext -force
$gatewaycredential = New-Object System.Management.Automation.PSCredential ($gatewayusername, $gatewaypassword)
$config = New-RoyalServerConfig -Host $royalserverhost -UseSSL $true -Port 54899 -Credential $gatewaycredential


##############################
# 1. Load document from Royal Server
##############################
$loadArgz =  @{"DocumentId" = "$psDocId"; "DocumentName" = "PS Document"}
$documentLoadedFromServer = Invoke-RoyalServerCommand -ModuleID RoyalDocumentStore -Command LoadDocument -Arguments $loadArgz -DestinationHost $destinationHost -RoyalServerConfig $config 

##############################
# 2. Save document to filesystem
##############################
$docContent = $documentLoadedFromServer.Responses[0].Result.Rows[0].DocumentContent
$decodedDocContent = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($docContent))
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllLines($path, $decodedDocContent, $Utf8NoBomEncoding)

##############################
# 3. Load document in memory
##############################
$Store = New-RoyalStore -UserName ($env:USERDOMAIN + '\' + $env:USERNAME)
$doc = Open-RoyalDocument -Store $store -FileName $path

##############################
# 4. Change document in memory
##############################
$Folder = New-RoyalObject -Folder $doc -Type RoyalFolder -Name 'RoyalDocument.PowerShell example'
$RDS = New-RoyalObject -Folder $Folder -Type RoyalRDSConnection -Name "name of the connection" -Description "demo server"
Set-RoyalObjectValue -Object $RDS -Property URI -Value srv01.demo.local
$creator = "scriptuser"
$RDS.CreatedBy = $creator
$RDS.ModifiedBy = $creator

###############################
# 5. Save document to filesystem
##############################
Out-RoyalDocument -Document $doc -FileName $path

##############################
# 6. Save document to Royal Server
##############################
$documentContentInBytes = [System.IO.File]::ReadAllBytes($path)
$documentContent = [System.Convert]::ToBase64String($documentContentInBytes)
$command = "SaveDocument"
$argz =  @{"DocumentId" = "$psDocId"; "DocumentName" = "$psDocName"; "DocumentContent" = "$documentContent" }


Write-Host "Saving $documentName to Royal Server..."
Invoke-RoyalServerCommand -ModuleID RoyalDocumentStore -Command SaveDocument -Arguments $argz -DestinationHost $destinationHost -RoyalServerConfig $config 

```

