---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: Get-RoyalServerLicense
online version:
order: 9940
schema: 2.0.0
uid: Get-RoyalServerLicense
---

# Get-RoyalServerLicense

## SYNOPSIS

Gets the installed Royal Server licenses.

## SYNTAX

```
Get-RoyalServerLicense [-RoyalServerConfig] <RoyalServerConfig> [-Timeout <Int32>] [<CommonParameters>]
```

## DESCRIPTION

The Get-RoyalServerLicense cmdlet lists all licenses installed for Royal Server.

## EXAMPLES

### Example 1

```powershell
$licenses = Get-RoyalServerLicense -RoyalServerConfig $config
$licenses[0].Result | Format-Table
```

## PARAMETERS

### -RoyalServerConfig

The RoyalServerConfiguration is the configuration created with the New-RoyalServerConfig cmdlet.

```yaml
Type: RoyalServerConfig
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Timeout

Timeout is the timout of a Royal Server call in milliseconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalServer.PowerShell.RoyalServerConfig

The configuration needed to talk to Royal Server.
Use New-RoyalServerConfig to specify this.

## OUTPUTS

## NOTES

This commandlet requires you to be in the Royal Server Administrators role.

## RELATED LINKS

[Install-RoyalServerLicense](Install-RoyalServerLicense.md)

[Uninstall-RoyalServerLicense](Uninstall-RoyalServerLicense.md)
