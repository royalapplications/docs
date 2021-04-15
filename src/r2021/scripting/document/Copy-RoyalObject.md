---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Copy-RoyalObject
online version:
order: 9860
schema: 2.0.0
uid: Copy-RoyalObject
---

# Copy-RoyalObject

## SYNOPSIS
Copies an object to a destination folder.

## SYNTAX

```
Copy-RoyalObject [-Object] <RoyalBase> [-TargetFolder] <RoyalFolder> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet copies an object to a target folder.

## EXAMPLES

### EXAMPLE 1
```
Copy-RoyalObject -Object $folder -TargetFolder $anotherDocument
```

This command creates a copy of the $folder in the target folder/document $anotherdocument.

## PARAMETERS

### -Object
The object that is going to be copied.

```yaml
Type: RoyalBase
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -TargetFolder
The target folder the object is copied to.

```yaml
Type: RoyalFolder
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocumentLibrary.RoyalBase
The object that is going to be copied.

## OUTPUTS

### System.Boolean
## NOTES

## RELATED LINKS

[New-RoyalObject]()

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Set-RoyalObjectValue]()

[Get-RoyalObjectValue]()

[Get-RoyalObject]()

