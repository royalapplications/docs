---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: New-RoyalDocument
online version:
order: 9990
schema: 2.0.0
uid: New-RoyalDocument
---

# New-RoyalDocument

## SYNOPSIS
Creates a new Royal TS/X document (.rtsz file).

## SYNTAX

```
New-RoyalDocument [-Store] <RoyalStore> [-Name] <String> [-FileName] <String> [[-Password] <SecureString>]
 [[-LockdownPassword] <SecureString>] [[-LockdownPolicy] <LockdownPolicy>] [-Interactive]
 [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new (empty) Royal TS/X document in memory.

Use the New-RoyalObject cmdlet to create and add more objects (folder, connections, credentials or tasks) to the document.

To save the document to disk, use Out-RoyalDocument cmdlet.

## EXAMPLES

### EXAMPLE 1
```
$doc = New-RoyalDocument -Store $store -Name "document name" -FileName $fileName
```

This command only creates a new Royal TS/X document in memory.
It does not save the document to disk until you use the Out-RoyalDocument cmdlet.

### EXAMPLE 2
```
$pwd = "document_password" | ConvertTo-SecureString -AsPlainText -Force
$doc = New-RoyalDocument -Store $store -Name "document name" -FileName $fileName -Password $pwd
```

This command only creates a new Royal TS/X document in memory.
It does not save the document to disk until you use the Out-RoyalDocument cmdlet.

### EXAMPLE 3
```
$pwd = "document_password" | ConvertTo-SecureString -AsPlainText -Force
$ldpwd = "lockdown_password" | ConvertTo-SecureString -AsPlainText -Force

[RoyalDocument.PowerShell.LockdownPolicy]$policy = [RoyalDocument.PowerShell.LockdownPolicy]::ReadOnly
$policy += [RoyalDocument.PowerShell.LockdownPolicy]::HidePasswords

$doc = New-RoyalDocument -Store $store -Name "document name" -FileName $fileName -Password $pwd -LockdownPassword $ldpwd -LockdownPolicy $policy
```

This command only creates a new Royal TS/X document in memory.
It does not save the document to disk until you use the Out-RoyalDocument cmdlet.

## PARAMETERS

### -Store
The RoyalStore to which the new Royal TS/X document will be assigned.
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

### -Name
The name of the new Royal TS/X document.

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

### -FileName
The file name where the document should be saved when the Out-RoyalDocument cmdlet is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The document password for the Royal TS/X document.
If not specified, the document created will not be password protected.

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

### -LockdownPassword
The document's lockdown password.
If specified, the document will be created as a lockdown document.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockdownPolicy
The document's lockdown policies.
If not specified, no policies will be enforced.
If specified, a LockdownPassword is required.

Possible values: HidePasswords, ReadOnly, AllowPasswordsInWebPage

```yaml
Type: LockdownPolicy
Parameter Sets: (All)
Aliases:
Accepted values: HidePasswords, ReadOnly, AllowPasswordsInWebPage

Required: False
Position: 5
Default value: HidePasswords
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
Position: 6
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

### RoyalDocumentLibrary.RoyalStore
The RoyalStore to which the new Royal TS/X document will be assigned.
See also New-RoyalStore cmdlet.

### System.Management.Automation.SwitchParameter
If specified, the password will be prompted (the password parameters are ignored).

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

[Get-RoyalObjectValue]()

[Set-RoyalObjectValue]()

