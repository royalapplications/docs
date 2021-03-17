---
name: Module Document Store
order: 4000
---

# Module Document Store

The Document Store can be scripted via Power Shell.

> [!NOTE]
> The necessary configuration to talk to Royal Server via Script is described in "Getting Started"

> [!NOTE]
> The documents you receive or are able to load/save are determined by your credentials if you have ACLs (access control lists) enabled.

## Command "GetDocumentList"

No Parameters

## Command "LoadDocument"

**Parameters:**

- DocumentId [string]
- DocumentName [string]

The Parameter DocumentName is purely for logging purposes used.

## Command "SaveDocument"

**Parameters:**

- DocumentId [string]
- DocumentContent [string]
- DocumentName [string]
- DocumentPassword [string]

The parameter "DocumentContent" needs to be Base64 encoded. The parameter DocumentName is purely for logging purposes used.

The basic flow is to first retrieve the available documents via the command "GetDocumentList", then open a specific document via "LoadDocument" and save it back via "SaveDocument".

## Examples

- Get all available documents from Royal Server

  ```powershell
  $command = "GetDocumentList"

  $argz =  @{}

  $entries = Invoke-RoyalServerCommand -Module RoyalDocumentStore -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost [string]::Empty

  # enumerate the documents
  foreach($d in $entries.Results)
  {
      #the DocumentId is used for loading/saving single documents
      Write-Host ($d.DocumentName + "(" + $d.DocumentId + ")")
  }
  ```

  > [!NOTE]
  > If Access Rules are enabled, the number of returned documents depends on the configured rules.

- Load a specific document from Royal Server which is not encrypted/locked down and save it locally to the temp-directory:

  ```powershell
  $command = "LoadDocument"

  $argz =  @{"DocumentId" = "b7a2684d-cc99-4abe-98e8-39cad648cf6e"}

  $docDocument = Invoke-RoyalServerCommand -Module RoyalDocumentStore -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost [string]::Empty

  $docuBase64Encoded = $docDocument.Results[0].DocumentContent

  $doc = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($docuBase64Encoded))

  # save it

  $Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False

  [System.IO.File]::WriteAllLines('C:\\temp\\doc_from_server.rtsz', $doc, $Utf8NoBomEncoding)
  ```

- Load a specific document from Royal Server which is encrypted and potentially locked down and save it locally to the temp-directory:

  ```powershell
  $command = "LoadDocument"

  $argz =  @{"DocumentId" = "22a3c00e-5269-4305-b640-954582f83a5f"}

  $docDocument = Invoke-RoyalServerCommand -Module RoyalDocumentStore -Command $command -RoyalServerConfig $config -Arguments $argz -DestinationHost [string]::Empty

  $docuBase64Encoded = $docDocument.Results[0].DocumentContent

  # save it
  [System.Convert]::FromBase64String($docuBase64Encoded) | Set-Content C:\\temp\\enc_doc_from_server.rtsz -Encoding Byte
  ```

- Load a specific document from the file system and save it to Royal Server (this document needs to be hosted by Royal Server, you can not create a new document with that process):

  ```powershell
  # load doc from filesystem

  $loadedDoc = Get-Content C:\\temp\\plain.rtsz -Encoding Byte

  $loadedDocBase64 =[System.Convert]::ToBase64String($loadedDoc)

  $command = "SaveDocument"

  $argz =  @{"DocumentId" = "518ada8f-05ee-4daa-9720-0956ee348332"; "DocumentContent" = $loadedDocBase64}

  Invoke-RoyalServerCommand -Module RoyalDocumentStore -Command $command -RoyalServerConfig $config -DestinationHost $destinationHost -DestinationUsername $username -DestinationPassword $destinationpassword -Arguments $argz
  ```
