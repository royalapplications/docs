---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: Get-RoyalPropertyHelp
uid: Get-RoyalPropertyHelp
order: 9750
---

# Get-RoyalPropertyHelp

## SYNOPSIS
Gets help information on a property of a RoyalObject.

## SYNTAX

```
Get-RoyalPropertyHelp [-PropertyName <String>] [-Category <String>] [-ClassName <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-RoyalPropertyHelp displays information about properties on RoyalObjects.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalPropertyHelp -PropertyName "Font"
$doc = New-RoyalDocument -Store $store -FileName doc.rtsz -Name "documentname"
```

The variable $store is used for New-RoyalDocument cmdlet.

## PARAMETERS

### -PropertyName
Filters the (partial) name of the property.

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

### -Category
Filters the (partial) category name of the property.

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

### -ClassName
Filters the (partial) class name (e.g.
RoyalSSHConnection or RoyalRDSConnection).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-RoyalObject]()

[Remove-RoyalObject]()

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Get-RoyalObject]()

[Get-RoyalObjectValue]()

[Set-RoyalObjectValue]()

