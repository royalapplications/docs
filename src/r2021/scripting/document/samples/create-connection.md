---
uid: scripting_docs_samples_createconnection
name: Create a Connection
order: 8980
---

# Create a new Connection

[!code-powershell[Main](./_shared/create-doc.ps1)]

Create a new connection

```powershell
# Create a new folder for storing our demo server connection object
$Folder = New-RoyalObject 
    -Folder $RoyalDocument 
    -Type RoyalFolder 
    -Name 'RoyalDocument.PowerShell example'

# Create a new Remote Desktop (RDP) Connection
$RDS = New-RoyalObject 
    -Folder $Folder 
    -Type RoyalRDSConnection 
    -Name "name of the connection" 
    -Description "demo server"

# Configure the connection URI (hostname) via cmdlet
Set-RoyalObjectValue 
    -Object $RDS 
    -Property URI 
    -Value srv01.demo.local

# Configure the connection directly
$creator = "scriptuser"
$RDS.CreatedBy = $creator
$RDS.ModifiedBy = $creator
```

If you want to save this to the filesystem:

[!code-powershell[Main](./_shared/save-doc.ps1)]