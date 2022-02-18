---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: New-RoyalObject
online version:
order: 9880
schema: 2.0.0
uid: New-RoyalObject
---

# New-RoyalObject

## SYNOPSIS
Creates a new object in a document or folder.

## SYNTAX

### Type (Default)
```
New-RoyalObject [-Folder] <RoyalFolder> [-Type] <RoyalObjectType> [-Name] <String[]> [[-Description] <String>]
 [<CommonParameters>]
```

### TypeString
```
New-RoyalObject [[-Folder] <RoyalFolder>] [[-TypeString] <String>] [[-Name] <String[]>]
 [[-Description] <String>] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to create folders, connections, tasks or credentials.

## EXAMPLES

### EXAMPLE 1
```
$cred = New-RoyalObject -folder $doc -Type RoyalCredential -Name "My new Credential" -Description "some description"
```

The variable $doc is a RoyalDocument created with the New-RoyalDocument cmdlet or returned by the Open-Document cmdlet.

## PARAMETERS

### -Folder
The folder or document where the new object should be added.

```yaml
Type: RoyalFolder
Parameter Sets: Type
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

```yaml
Type: RoyalFolder
Parameter Sets: TypeString
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Type
Specifies which type of object should be created.

Possible values: RoyalFolder, RoyalDynamicFolder, RoyalCredential, RoyalDynamicCredential, RoyalToDo, RoyalRDSConnection, RoyalVNCConnection, RoyalSSHConnection, RoyalFileTransferConnection, RoyalWebConnection, RoyalTeamViewerConnection, RoyalAppConnection, RoyalPerformanceConnection, RoyalPowerShellConnection, RoyalWindowsEventsConnection, RoyalWindowsProcessesConnection, RoyalWindowsServicesConnection, RoyalTerminalServicesConnection, RoyalHyperVConnection, RoyalVMwareConnection, RoyalManagementEndpoint, RoyalSecureGateway, RoyalRDSGateway, RoyalCommandTask, RoyalKeySequenceTask, RoyalApplicationSetting

```yaml
Type: RoyalObjectType
Parameter Sets: Type
Aliases:
Accepted values: RoyalFolder, RoyalDynamicFolder, RoyalCredential, RoyalDynamicCredential, RoyalToDo, RoyalRDSConnection, RoyalVNCConnection, RoyalSSHConnection, RoyalFileTransferConnection, RoyalWebConnection, RoyalTeamViewerConnection, RoyalAppConnection, RoyalPerformanceConnection, RoyalPowerShellConnection, RoyalWindowsEventsConnection, RoyalWindowsProcessesConnection, RoyalWindowsServicesConnection, RoyalTerminalServicesConnection, RoyalHyperVConnection, RoyalVMwareConnection, RoyalManagementEndpoint, RoyalSecureGateway, RoyalRDSGateway, RoyalCommandTask, RoyalKeySequenceTask, RoyalApplicationSetting

Required: True
Position: 1
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -TypeString
Specifies which type of object should be created by using a string.

```yaml
Type: String
Parameter Sets: TypeString
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of the new object.

Specify an array of names to create multiple objects.

```yaml
Type: String[]
Parameter Sets: Type
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String[]
Parameter Sets: TypeString
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description of the new object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocumentLibrary.RoyalFolder
The folder or document where the new object should be added.

## OUTPUTS

### RoyalDocumentLibrary.RoyalBase
## NOTES

## RELATED LINKS

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Get-RoyalObject]()

[Get-RoyalObjectValue]()

[Set-RoyalObjectValue]()

