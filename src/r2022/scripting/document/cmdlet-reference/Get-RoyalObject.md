---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Get-RoyalObject
online version:
order: 9870
schema: 2.0.0
uid: Get-RoyalObject
---

# Get-RoyalObject

## SYNOPSIS
Gets one or more objects from a document or folder by various search parameters.

## SYNTAX

### TypeOrName (Default)
```
Get-RoyalObject [[-Folder] <RoyalFolder>] [[-Type] <RoyalObjectType>] [[-Name] <String>]
 [[-Store] <RoyalStore>] [-IncludeTrashcan] [<CommonParameters>]
```

### ID
```
Get-RoyalObject [[-Folder] <RoyalFolder>] [[-Store] <RoyalStore>] [-IncludeTrashcan] [[-Id] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns one or more objects from a document or folder.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalObject -Folder $doc -Type RoyalFolder -Name "Fold*" | Select-Object Name
```

This cmdlet returns all Folders from $doc that start with "Fold" in its Name property.

## PARAMETERS

### -Folder
The folder (or document) that is going to be searched.
Cannot be used in conjunction with the parameter Store.

```yaml
Type: RoyalFolder
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Type
The type of objects that should be returned.

Possible values: RoyalFolder, RoyalDynamicFolder, RoyalCredential, RoyalDynamicCredential, RoyalToDo, RoyalRDSConnection, RoyalVNCConnection, RoyalSSHConnection, RoyalFileTransferConnection, RoyalWebConnection, RoyalTeamViewerConnection, RoyalAppConnection, RoyalPerformanceConnection, RoyalPowerShellConnection, RoyalWindowsEventsConnection, RoyalWindowsProcessesConnection, RoyalWindowsServicesConnection, RoyalTerminalServicesConnection, RoyalHyperVConnection, RoyalVMwareConnection, RoyalManagementEndpoint, RoyalSecureGateway, RoyalRDSGateway, RoyalCommandTask, RoyalKeySequenceTask, RoyalApplicationSetting

```yaml
Type: RoyalObjectType
Parameter Sets: TypeOrName
Aliases:
Accepted values: RoyalFolder, RoyalDynamicFolder, RoyalCredential, RoyalDynamicCredential, RoyalToDo, RoyalRDSConnection, RoyalVNCConnection, RoyalSSHConnection, RoyalFileTransferConnection, RoyalWebConnection, RoyalTeamViewerConnection, RoyalAppConnection, RoyalPerformanceConnection, RoyalPowerShellConnection, RoyalWindowsEventsConnection, RoyalWindowsProcessesConnection, RoyalWindowsServicesConnection, RoyalTerminalServicesConnection, RoyalHyperVConnection, RoyalVMwareConnection, RoyalManagementEndpoint, RoyalSecureGateway, RoyalRDSGateway, RoyalCommandTask, RoyalKeySequenceTask, RoyalApplicationSetting

Required: False
Position: 1
Default value: RoyalFolder
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of objects that should be returned (Wildcard * is allowed).

```yaml
Type: String
Parameter Sets: TypeOrName
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Store
The RoyalStore that should be searched.
Cannot be used in conjunction with the parameter Folder.

```yaml
Type: RoyalStore
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeTrashcan
If Trashcan (deleted objects) should be returned as well.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
The id (Guid) fo the object to return.

```yaml
Type: String
Parameter Sets: ID
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocumentLibrary.RoyalFolder
The folder (or document) that is going to be searched.
Cannot be used in conjunction with the parameter Store.

## OUTPUTS

### RoyalDocumentLibrary.RoyalBase
## NOTES

## RELATED LINKS

[New-RoyalObject]()

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Set-RoyalObjectValue]()

[Get-RoyalObjectValue]()

[Get-RoyalObject]()

