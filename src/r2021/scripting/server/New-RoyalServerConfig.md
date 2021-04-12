---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: New-RoyalServerConfig
online version:
order: 9990
schema: 2.0.0
uid: New-RoyalServerConfig
---

# New-RoyalServerConfig

## SYNOPSIS
Creates a new RoyalServerConfig.

## SYNTAX

```
New-RoyalServerConfig -Host <String> -Port <Int32> [-Credential <PSCredential>] [-UseSSL <Boolean>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The New-RoyalServerConfig cmdlet creates a new RoyalServerConfig object that encapsulates the necessary information for communicating with a Royal Server installation.

## EXAMPLES

### EXAMPLE 1
```
$config = New-RoyalServerConfig -Host "localhost" -Port "54899" -Credential $cred
```

$cred is a PS-Credential.

## PARAMETERS

### -Host
Hostname or IP address of the Royal Server Installation.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Port
Port number of the Royal Server Installation.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: 0
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
The username used for authenticating with Royal Server.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
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

### -UseSSL
Use SSL/HTTPS for communication with Royal Server. Note that as of Royal Server V4 only secure connections are supported.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
Hostname or IP address of the Royal Server Installation.

### System.Int32
Port number of the Royal Server Installation.

### System.Management.Automation.PSCredential
The username used for authenticating with Royal Server.

## OUTPUTS

### RoyalServer.Powershell.RoyalServerConfig
Data structure for holding Royal Server connection information

## NOTES

## RELATED LINKS

[Invoke-RoyalServerCommand](Invoke-RoyalServerCommand.md)

