---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: Remove-RoyalObjectCustomProperty
uid: Remove-RoyalObjectCustomProperty
order: 9760
---

# Remove-RoyalObjectCustomProperty

## SYNOPSIS
Removes a custom property from an object.

## SYNTAX

### CustomProperty (Default)
```
Remove-RoyalObjectCustomProperty [-CustomProperty] <CustomProperty> [<CommonParameters>]
```

### ObjectAndId
```
Remove-RoyalObjectCustomProperty [-Object] <RoyalBase> [-Id] <Guid> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a custom property from a given object.

## EXAMPLES

### EXAMPLE 1
```
Remove-RoyalObjectCustomProperty -Object $object -Id $propertyId
```

This cmdlet removes the custom property with the given id from $object.

### EXAMPLE 2
```
Remove-RoyalObjectCustomProperty -CustomProperty $customProperty
```

This cmdlet removes the custom property (use Get-RoyalObjectCustomProperty to retrieve custom property objects).

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
Accept pipeline input: False
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
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocument.PowerShell.RoyalObjectCmdLets.CustomProperty
The custom property object used to set the label and value.

## OUTPUTS

## NOTES

## RELATED LINKS

[New-RoyalObjectCustomProperty]()

[Get-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomPropertyPosition]()

