---
external help file: RoyalDocument.PowerShell.dll-Help.xml
Module Name: RoyalDocument.PowerShell
name: Open-RoyalServerDocument
online version:
order: 9940
schema: 2.0.0
uid: Open-RoyalServerDocument
---

# Open-RoyalServerDocument

## SYNOPSIS
Opens a Royal TS/X document (.rtsz file) from Royal Server.

## SYNTAX

```
Open-RoyalServerDocument [-RoyalServer] <RoyalManagementEndpoint> [[-RoyalServerDocument] <DocStoreEntry>]
 [[-Password] <SecureString>] [[-LockdownPassword] <SecureString>] [-IgnoreCertificateWarning] [-Interactive]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet opens an existing Royal TS/X document from a Royal Server.

## EXAMPLES

### EXAMPLE 1
```
$doc = Open-RoyalServerDocument -RoyalServer $server -RoyalServerDocument $serverDocument
```

This command opens an existing Royal TS/X document from the specified Royal Server.
The RoyalServerDocument parameter can be set with an object from Get-RoyalServerDocument cmdlet.

## PARAMETERS

### -RoyalServer
The Royal Server to connect to and retrieve the list of documents.

```yaml
Type: RoyalManagementEndpoint
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RoyalServerDocument
The Royal Server document to open (can be obtained using the Get-RoyalServerDocument cmdlet).

```yaml
Type: DocStoreEntry
Parameter Sets: (All)
Aliases:

Required: False
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

### -IgnoreCertificateWarning
The Royal Server to connect to and retrieve the list of documents.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
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
Position: 5
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

### RoyalDocumentLibrary.RoyalManagementEndpoint
The Royal Server to connect to and retrieve the list of documents.

### System.Management.Automation.SwitchParameter
If specified, the password will be prompted (the password parameter is ignored).

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-RoyalServerDocument]()

[Out-RoyalServerDocument]()

[Close-RoyalServerDocument]()

