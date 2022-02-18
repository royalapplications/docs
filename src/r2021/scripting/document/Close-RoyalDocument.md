---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Close-RoyalDocument
online version:
order: 9960
schema: 2.0.0
uid: Close-RoyalDocument
---

# Close-RoyalDocument

## SYNOPSIS
Close (and unload) a Royal TS/X document from the RoyalStore.

## SYNTAX

```
Close-RoyalDocument [-Document] <RoyalDocument> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will close and unload an opened Royal TS/X and removes it from the RoyalStore.

## EXAMPLES

### EXAMPLE 1
```
Close-RoyalDocument -Document $doc
```

When using -Force, the Royal TS/X document is closed even if it has unsaved changes.

## PARAMETERS

### -Document
The Royal TS/X document that will be closed.

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

### -Force
Using Force closes the RoyalDocument even if it has unsaved changes.
Use with caution!

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: False
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
The Royal TS/X document that will be closed.

## OUTPUTS

## NOTES

## RELATED LINKS

[Out-RoyalDocument]()

[Open-RoyalDocument]()

