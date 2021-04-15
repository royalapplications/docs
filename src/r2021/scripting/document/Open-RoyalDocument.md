---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Open-RoyalDocument
online version:
order: 9980
schema: 2.0.0
uid: Open-RoyalDocument
---

# Open-RoyalDocument

## SYNOPSIS
Opens an existing Royal TS/X document (.rtsz file) from the filesystem.

## SYNTAX

```
Open-RoyalDocument [-Store] <RoyalStore> [-FileName] <String> [[-Password] <SecureString>]
 [[-LockdownPassword] <SecureString>] [-Interactive] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet opens an existing Royal TS/X document from the filesystem.

## EXAMPLES

### EXAMPLE 1
```
$doc = Open-RoyalDocument -Store $store -FileName "f:\documents\document.rtsz" -Password (Read-Host -AsSecureString "Password")
```

This command opens an existing Royal TS/X document specified in -FileName.
If the -Interactive switch is specified, the cmdlet is asking for the password.

### EXAMPLE 2
```
$pwd = ConvertTo-SecureString "super-secure-pwd" -AsPlainText -Force
$doc = Open-RoyalDocument -Store $store -FileName "f:\documents\document.rtsz" -Password $pwd
```

In this example, the password is passed on to the cmdlet.
Note: we do not recommend to put passwords of your Royal TS/X documents in your scripts!

## PARAMETERS

### -Store
The RoyalStore to which the specified Royal TS/X document will be assigned after it has been opened.
See also New-RoyalStore cmdlet.

```yaml
Type: RoyalStore
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -FileName
The file name where the Royal TS/X document to open is located.

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

### -Password
The password for the Royal TS/X document (if required).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockdownPassword
The lockdown password for the Royal TS/X document (if lockdown is configured and required).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Interactive
If specified, the password will be prompted (the password parameter is ignored).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
Accept pipeline input: True (ByPropertyName, ByValue)
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

### RoyalDocumentLibrary.RoyalStore
The RoyalStore to which the specified Royal TS/X document will be assigned after it has been opened.
See also New-RoyalStore cmdlet.

### System.Management.Automation.SwitchParameter
If specified, the password will be prompted (the password parameter is ignored).

## OUTPUTS

## NOTES
A RoyalStore object is required for this cmdlet.
Use the New-RoyalStore cmdlet to create one.

## RELATED LINKS

[Out-RoyalDocument]()

[New-RoyalStore]()

[New-RoyalObject]()

[Copy-RoyalObject]()

[Move-RoyalObject]()

[Get-RoyalObject]()

[Set-RoyalObjectValue]()

[Get-RoyalObjectValue]()

