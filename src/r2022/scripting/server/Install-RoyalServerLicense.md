---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: Install-RoyalServerLicense
online version:
order: 9930
schema: 2.0.0
uid: Install-RoyalServerLicense
---

# Install-RoyalServerLicense

## SYNOPSIS

Installs a Royal Server license.

## SYNTAX

```
Install-RoyalServerLicense [-RoyalServerConfig] <RoyalServerConfig> -LicensedTo <String> [-LicenseKey] <String>
 [-Timeout <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Install-RoyalServerLicense cmdlet installs a Royal Server license.

## EXAMPLES

### Example 1

```powershell
Install-RoyalServerLicense -LicensedTo "Company ABC" -LicenseKey "XXXX-XXXX-..." -RoyalServerConfiguration
```

## PARAMETERS

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

### -LicenseKey

The license key of the license to install.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RoyalServerConfig

The RoyalServerConfiguration is the configuration created with the `New-RoyalServerConfig` cmdlet.

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

### -LicensedTo

The regisration name the license is issued to.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### -RoyalServerConfig : RoyalServer.PowerShell.RoyalServerConfig

The configuration needed to talk to Royal Server.
Use `New-RoyalServerConfig` to specify this.

### -LicenseKey : System.String

The license key to install.

### -LicensedTo : System.String

The regisration name the license is issued to.

## OUTPUTS

## NOTES

This commandlet requires you to be in the Royal Server Administrators role.

## RELATED LINKS

[Get-RoyalServerLicense](Get-RoyalServerLicense.md)

[Uninstall-RoyalServerLicense](Uninstall-RoyalServerLicense.md)
