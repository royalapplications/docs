---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
online version:
schema: 2.0.0
name: Set-RoyalDocumentPassword
uid: Set-RoyalDocumentPassword
order: 9890
---

# Set-RoyalDocumentPassword

## SYNOPSIS
Sets the password of a Royal TS/X document.

## SYNTAX

```
Set-RoyalDocumentPassword [-Document] <RoyalDocument> [[-NewPassword] <SecureString>]
 [[-OldPassword] <SecureString>] [-Interactive] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to set or change the password of a Royal TS/X document.

## EXAMPLES

### EXAMPLE 1
```
Set-RoyalDocumentPassword -Document $document -OldPassword $oldPwd -Password $newPwd -Interactive
```

$oldPwd and $newPwd are SecureStrings.
Use (Read-Host -AsSecureString "Password") or ConvertTo-SecureString.
If the -Interactive switch is specified, the cmdlet is asking for the password.

## PARAMETERS

### -Document
The Royal TS/X document to change the password.

```yaml
Type: RoyalDocument
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -NewPassword
The new password for the document.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OldPassword
The old password of the document.

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

### -Interactive
If specified, the password will be prompted (the password parameters are ignored).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: False
Accept pipeline input: True (ByValue)
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

### RoyalDocumentLibrary.RoyalDocument
The Royal TS/X document to change the password.

### System.Management.Automation.SwitchParameter
If specified, the password will be prompted (the password parameters are ignored).

## OUTPUTS

## NOTES

## RELATED LINKS

[Out-RoyalDocument]()

