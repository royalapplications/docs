---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: Set-RoyalDocumentType
uid: Set-RoyalDocumentType
order: 9900
---

# Set-RoyalDocumentType

## SYNOPSIS
Sets the type of the Royal TS/X document.

## SYNTAX

```
Set-RoyalDocumentType [-Document] <RoyalDocument> [-Type] <RoyalDocumentType> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets the document type to Merge (merges all changes from the in-memory RoyalDocument back to the version saved to disk) or OverWrite (overwrites the version on disk).

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalDocumentType -Document $document -Type Merge
```

This cmdlete only changes the RoyalDocumentType in memory - for persisting call Out-RoyalDocument.

## PARAMETERS

### -Document
The RoyalDocument of which the document type should be changed.

```yaml
Type: RoyalDocument
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Type
The new document type (Merge or OverWrite).

Possible values: OverWrite, Merge

```yaml
Type: RoyalDocumentType
Parameter Sets: (All)
Aliases:
Accepted values: OverWrite, Merge

Required: True
Position: 1
Default value: 0
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

### RoyalDocumentLibrary.RoyalDocument
The RoyalDocument of which the document type should be changed.

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-RoyalDocumentType]()

[Open-RoyalDocument]()

[New-RoyalDocument]()

[Out-RoyalDocument]()

