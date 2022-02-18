---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Set-RoyalObjectCustomProperty
online version:
order: 9780
schema: 2.0.0
uid: Set-RoyalObjectCustomProperty
---

# Set-RoyalObjectCustomProperty

## SYNOPSIS
Sets a custom property value on an object.

## SYNTAX

### ObjectAndId (Default)
```
Set-RoyalObjectCustomProperty [-Object] <RoyalBase> [-Id] <Guid> [-Label <String>] [-Value <Object>]
 [-PassThru] [<CommonParameters>]
```

### CustomProperty
```
Set-RoyalObjectCustomProperty [-CustomProperty] <CustomProperty> [-Label <String>] [-Value <Object>]
 [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets a custom property value for a given object.

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalObjectCustomProperty -Object $object -Id $propertyId -Label "New Label" -Value "New Value"
```

This cmdlet sets the label and the value of the custom property with the given id from $object.

### EXAMPLE 2
```
Set-RoyalObjectCustomProperty -CustomProperty $customProperty -Value "New Value"
```

This cmdlet sets the value of the given custom property (use Get-RoyalObjectCustomProperty to retrieve custom property objects).

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

### -Label
The label of the custom property.

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

[Set-RoyalObjectCustomPropertyPosition]()

