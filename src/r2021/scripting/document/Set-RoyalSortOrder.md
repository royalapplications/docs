---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Set-RoyalSortOrder
online version:
order: 9810
schema: 2.0.0
uid: Set-RoyalSortOrder
---

# Set-RoyalSortOrder

## SYNOPSIS
Applies a sort order to a folder.

## SYNTAX

```
Set-RoyalSortOrder [-Folder] <RoyalFolder> [[-Criteria1] <RoyalObjectSortCriteria>]
 [[-SortDirection1] <RoyalObjectSortDirection>] [[-Criteria2] <RoyalObjectSortCriteria>]
 [[-SortDirection2] <RoyalObjectSortDirection>] [[-Criteria3] <RoyalObjectSortCriteria>]
 [[-SortDirection3] <RoyalObjectSortDirection>] [[-Recurse] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sorts all objects in a folder based on the provided sort criteria.
Up to three levels of sort criterias are supported.
Additionally the sorting can be specified to be applied recursively to the folder.

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalSortOrder -Criteria1 Name -SortDirection1 Ascending -Folder $doc
```

This cmdlet applies the sort criteria to the specified folder.

## PARAMETERS

### -Folder
The folder (or document) that is going to be sorted.

```yaml
Type: RoyalFolder
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Criteria1
The first sort criteria.

Possible values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

```yaml
Type: RoyalObjectSortCriteria
Parameter Sets: (All)
Aliases:
Accepted values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortDirection1
The first sort direction criteria.

Possible values: Ascending, Descending

```yaml
Type: RoyalObjectSortDirection
Parameter Sets: (All)
Aliases:
Accepted values: Ascending, Descending

Required: False
Position: 2
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -Criteria2
The second sort criteria.

Possible values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

```yaml
Type: RoyalObjectSortCriteria
Parameter Sets: (All)
Aliases:
Accepted values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortDirection2
The second sort direction criteria.

Possible values: Ascending, Descending

```yaml
Type: RoyalObjectSortDirection
Parameter Sets: (All)
Aliases:
Accepted values: Ascending, Descending

Required: False
Position: 4
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -Criteria3
The third sort criteria.

Possible values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

```yaml
Type: RoyalObjectSortCriteria
Parameter Sets: (All)
Aliases:
Accepted values: None, Name, ObjectType, CreationDate, ModifiedDate, CustomField1, CustomField2, CustomField3, CustomField4, CustomField5, CustomField6, CustomField7, CustomField8, CustomField9, CustomField10

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortDirection3
The third sort direction criteria.

Possible values: Ascending, Descending

```yaml
Type: RoyalObjectSortDirection
Parameter Sets: (All)
Aliases:
Accepted values: Ascending, Descending

Required: False
Position: 6
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse
Defines if the sorting should be applied recursively.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalDocumentLibrary.RoyalFolder
The folder (or document) that is going to be sorted.

## OUTPUTS

### RoyalDocumentLibrary.RoyalFolder
## NOTES

## RELATED LINKS

[New-RoyalObject]()

[Move-RoyalObject]()

[Copy-RoyalObject]()

[Set-RoyalObjectValue]()

[Get-RoyalObjectValue]()

[Get-RoyalObject]()

