---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Get-RoyalDocumentType
online version:
order: 9910
schema: 2.0.0
uid: Get-RoyalDocumentType
---

# Get-RoyalDocumentType

## SYNOPSIS
Gets the type of the Royal TS/X document.

## SYNTAX

```
Get-RoyalDocumentType [-Document] <RoyalDocument> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gets the configured document type of the Royal TS/X document (Merge for shared files or Overwrite for personal files).

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalDocumentType -Document $document
```

## PARAMETERS

### -Document
The Royal TS/X document of which the DocumentType should be returned.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocumentLibrary.RoyalDocument
The Royal TS/X document of which the DocumentType should be returned.

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-RoyalDocumentType]()

[Open-RoyalDocument]()

[New-RoyalDocument]()

[Out-RoyalDocument]()

