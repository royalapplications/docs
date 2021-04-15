---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Out-RoyalDocument
online version:
order: 9970
schema: 2.0.0
uid: Out-RoyalDocument
---

# Out-RoyalDocument

## SYNOPSIS
Saves a Royal TS/X document.

## SYNTAX

```
Out-RoyalDocument [-Document] <RoyalDocument> [[-FileName] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet saves a Royal TS/X document (.rtsz file)

## EXAMPLES

### EXAMPLE 1
```
Out-RoyalDocument -FileName "royaltsdocument.rtsz" -Document $doc
```

## PARAMETERS

### -Document
The Royal TS/X document that will be saved to disk.

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

### -FileName
If specified, this parameter will be used for saving to disk.
This will also update the $document.FileName property to the new value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
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

### RoyalDocumentLibrary.RoyalDocument
The Royal TS/X document that will be saved to disk.

## OUTPUTS

## NOTES

## RELATED LINKS

[New-RoyalDocument]()

[Open-RoyalDocument]()

