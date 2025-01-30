---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Get-RoyalServerDocument
online version:
order: 9950
schema: 2.0.0
uid: Get-RoyalServerDocument
---

# Get-RoyalServerDocument

## SYNOPSIS
Gets a list of all available Royal TS/X documents stored on a Royal Server.

## SYNTAX

```
Get-RoyalServerDocument [-RoyalServer] <RoyalManagementEndpoint> [-IgnoreCertificateWarning]
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gets a list of all Royal TS/X documents on a Royal Server.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalServerDocument -RoyalServer $server
```

## PARAMETERS

### -RoyalServer
The Royal Server to connect to and retrieve the list of documents.

```yaml
Type: RoyalManagementEndpoint
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IgnoreCertificateWarning
The Royal Server to connect to and retrieve the list of documents.

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

### RoyalDocumentLibrary.RoyalManagementEndpoint
The Royal Server to connect to and retrieve the list of documents.

## OUTPUTS

## NOTES

## RELATED LINKS

[Open-RoyalServerDocument]()

[Out-RoyalServerDocument]()

[Close-RoyalServerDocument]()

