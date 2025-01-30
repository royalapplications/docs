---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Out-RoyalServerDocument
online version:
order: 9930
schema: 2.0.0
uid: Out-RoyalServerDocument
---

# Out-RoyalServerDocument

## SYNOPSIS
Saves a Royal TS/X document to a Royal Server.

## SYNTAX

```
Out-RoyalServerDocument [-Document] <RoyalDocument> [-RoyalServer] <RoyalManagementEndpoint>
 [-RoyalServerDocument] <DocStoreEntry> [-IgnoreCertificateWarning] [-ProgressAction <ActionPreference>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet saves a Royal TS/X document to a Royal Server

## EXAMPLES

### EXAMPLE 1
```
Out-RoyalServerDocument -Document $doc -RoyalServer $server -RoyalServerDocument $serverDocument
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

### -RoyalServer
The Royal Server to connect to and retrieve the list of documents.

```yaml
Type: RoyalManagementEndpoint
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoyalServerDocument
The Royal Server document to open (can be obtained using the Get-RoyalServerDocument cmdlet).

```yaml
Type: DocStoreEntry
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreCertificateWarning
The Royal Server to connect to and retrieve the list of documents.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
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

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

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

[Get-RoyalServerDocument]()

[Open-RoyalServerDocument]()

