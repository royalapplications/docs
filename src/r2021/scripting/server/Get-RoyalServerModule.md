---
external help file: RoyalServer.Powershell.dll-Help.xml
Module Name: RoyalServer.Powershell
online version:
schema: 2.0.0
name: Get-RoyalServerModule
uid: Get-RoyalServerModule
order: 9980
---

# Get-RoyalServerModule

## SYNOPSIS
Gets the installed Royal Server Modules of a Royal Server installation.

## SYNTAX

```
Get-RoyalServerModule [-RoyalServerConfig] <RoyalServerConfig> [<CommonParameters>]
```

## DESCRIPTION
The Get-RoyalServerModule cmdlet gets the installed Modules of a Royal Server installation.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalServerModule -RoyalServerConfig $config
```

## PARAMETERS

### -RoyalServerConfig
The configuration needed to talk to Royal Server.
Use New-RoyalServerConfig to specify this.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalServer.Powershell.RoyalServerConfig
The configuration needed to talk to Royal Server.
Use New-RoyalServerConfig to specify this.

## OUTPUTS

## NOTES

## RELATED LINKS

[Invoke-RoyalServerCommand](Invoke-RoyalServerCommand.md)

[New-RoyalServerconfig](New-RoyalServerconfig.md)

[Get-RoyalServerModule](Get-RoyalServerModule.md)

[Get-RoyalServerModuleCommandParameter](Get-RoyalServerModuleCommandParameter.md)