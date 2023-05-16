---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Set-RoyalObjectCustomPropertyPosition
online version:
order: 9770
schema: 2.0.0
uid: Set-RoyalObjectCustomPropertyPosition
---

# Set-RoyalObjectCustomPropertyPosition

## SYNOPSIS
Sets the position for a custom property on an object.

## SYNTAX

### ObjectAndId (Default)
```
Set-RoyalObjectCustomPropertyPosition [-Object] <RoyalBase> [-Id] <Guid> [-Position <Int32>] [-PassThru]
 [<CommonParameters>]
```

### CustomProperty
```
Set-RoyalObjectCustomPropertyPosition [-CustomProperty] <CustomProperty> -Position <Int32> [-PassThru]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets the position of a custom property for a given object.

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalObjectCustomPropertyPosition -Object $object -Id $propertyId -Position 3
```

This cmdlet sets the custom property position to the 3rd entry for the given $object.

### EXAMPLE 2
```
Set-RoyalObjectCustomProperty -CustomProperty $customProperty -Position 3
```

This cmdlet sets the custom property position to the 3rd entry for the given $object.

## PARAMETERS

### -Object
The object with the custom properties.

```yaml
Type: RoyalBase
Parameter Sets: ObjectAndId
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Id
The id (GUID) of the custom property that should be returned.

```yaml
Type: Guid
Parameter Sets: ObjectAndId
Aliases:

Required: True
Position: 1
Default value: 00000000-0000-0000-0000-000000000000
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomProperty
The custom property object used to set the label and value.

```yaml
Type: CustomProperty
Parameter Sets: CustomProperty
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Position
The position of the custom property.

```yaml
Type: Int32
Parameter Sets: ObjectAndId
Aliases:

Required: False
Position: Named
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Int32
Parameter Sets: CustomProperty
Aliases:

Required: True
Position: Named
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Indicates that this cmdlet returns a custom property object.
By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
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

[New-RoyalObjectCustomProperty]()

[Remove-RoyalObjectCustomProperty]()

[Get-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomProperty]()

