---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: Set-RoyalObjectValue
uid: Set-RoyalObjectValue
order: 9820
---

# Set-RoyalObjectValue

## SYNOPSIS
Sets the value of an object's property.

## SYNTAX

```
Set-RoyalObjectValue [-Object] <RoyalBase> [-Property] <String> [-Value] <Object> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets an object's property value.
A new value can only be set if the type of the value parameter matches (or can be casted) to the type of the parameter Property.

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalObjectValue -Object $folder -Property "Created" -Value $dt
```

$dt is of Type System.DateTime.

## PARAMETERS

### -Object
The object on which the new value should be set.

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
The object's property name that should be set.

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

### -Value
The new value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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
The object on which the new value should be set.

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

