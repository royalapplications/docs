---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Get-RoyalObjectValue
online version:
order: 9830
schema: 2.0.0
uid: Get-RoyalObjectValue
---

# Get-RoyalObjectValue

## SYNOPSIS
Get the value from an object's property.

## SYNTAX

```
Get-RoyalObjectValue [-Object] <RoyalBase> [-Property] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves an object property value.

## EXAMPLES

### EXAMPLE 1
```
$createdDatetime = Get-RoyalObjectValue -Object $obj -Property "Created"
```

$obj needs to be of type RoyalObject.
Normally, when you create a variable using New-RoyalObject, you get back the exact type requested.
For this cmdlet, first cast the variable to a RoyalObject (the base class) like so: \[RoyalDocumentLibrary.RoyalObject\]$obj = $folder.

## PARAMETERS

### -Object
The object of which the property value is returned.

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

### -Property
The object's property name that should be returned.

```yaml
Type: String
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
The object of which the property value is returned.

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[New-RoyalObject]()

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Set-RoyalObjectValue]()

[Get-RoyalObjectValue]()

[Get-RoyalObject]()

