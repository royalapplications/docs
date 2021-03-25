---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: New-RoyalObjectCustomProperty
uid: New-RoyalObjectCustomProperty
order: 9800
---

# New-RoyalObjectCustomProperty

## SYNOPSIS
Creates a new custom property for an object.

## SYNTAX

```
New-RoyalObjectCustomProperty [-Object] <RoyalBase> [-Type] <CustomPropertyType> -Label <String>
 [-Value <Object>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new custom property for a given object.

## EXAMPLES

### EXAMPLE 1
```
New-RoyalObjectCustomProperty -Object $object -Type Text -Label "Text Label" -Value "New Value"
```

This cmdlet creates a custom property for the object $object of type Text with the label and the value specified.

## PARAMETERS

### -Object
The object with the custom properties.

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

### -Type
The type of the custom property that should be created.

Possible values: Header, Text, Protected, Address, Phone, Email, URL, YesNo, Date

```yaml
Type: CustomPropertyType
Parameter Sets: (All)
Aliases:
Accepted values: Header, Text, Protected, Address, Phone, Email, URL, YesNo, Date

Required: True
Position: 1
Default value: Header
Accept pipeline input: False
Accept wildcard characters: False
```

### -Label
The label of the custom property.

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

### -Value
The value of the custom property.

```yaml
Type: Object
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

### RoyalDocumentLibrary.RoyalBase
The object with the custom properties.

## OUTPUTS

### RoyalDocument.PowerShell.RoyalObjectCmdLets.CustomProperty
## NOTES

## RELATED LINKS

[Remove-RoyalObjectCustomProperty]()

[Get-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomPropertyPosition]()

