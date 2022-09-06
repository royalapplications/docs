---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: New-RoyalStore
online version:
order: 10000
schema: 2.0.0
uid: New-RoyalStore
---

# New-RoyalStore

## SYNOPSIS
Creates a new RoyalStore container to open one or more Royal TS/X documents.

## SYNTAX

```
New-RoyalStore -UserName1 <String> [-AppDocPath <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new RoyalStore in memory.

## EXAMPLES

### EXAMPLE 1
```powershell
$store = New-RoyalStore -UserName "username"
$doc = New-RoyalDocument -Store $store -FileName doc.rtsz -Name "documentname"
Write-Host ($row[0] + " - " + $row[1])
```

The variable $store is used for New-RoyalDocument cmdlet.

### EXAMPLE 2
```powershell
# Pipe the RoyalStore to the New-RoyalDocument cmdlet
$doc = New-RoyalStore -UserName "username" | New-RoyalDocument -FileName doc.rtsz -Name "documentname"
```

## PARAMETERS

### -AppDocPath
{{ Fill AppDocPath Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
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

### -UserName1
{{ Fill UserName1 Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
The RoyalStore is the basic container that is needed when working with Royal TS/X documents (.rtsz files).

## RELATED LINKS

[New-RoyalDocument]()

[Open-RoyalDocument]()

[Close-RoyalDocument]()

[Out-RoyalDocument]()

