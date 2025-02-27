---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Get-RoyalObjectCustomProperty
online version:
order: 9790
schema: 2.0.0
uid: Get-RoyalObjectCustomProperty
---

# Get-RoyalObjectCustomProperty

## SYNOPSIS
Gets one or more custom properties from an object.

## SYNTAX

```
Get-RoyalObjectCustomProperty [-Object] <RoyalBase> [[-Id] <Guid>] [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves one or more custom properties from a given object.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalObjectCustomProperty -Object $object
```

This cmdlet returns all custom properties from $object.

### EXAMPLE 2
```
Get-RoyalObjectCustomProperty -Object $object -Id $propertyId
```

This cmdlet returns the custom property with the id $propertyId from $object.

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

### -Id
The id (GUID) of the custom property that should be returned.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: 00000000-0000-0000-0000-000000000000
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

### RoyalDocumentLibrary.RoyalBase
The object with the custom properties.

## OUTPUTS

### RoyalDocument.PowerShell.RoyalObjectCmdLets.CustomProperty[]
## NOTES

## RELATED LINKS

[New-RoyalObjectCustomProperty]()

[Remove-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomProperty]()

[Set-RoyalObjectCustomPropertyPosition]()

