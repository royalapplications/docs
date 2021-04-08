---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: Get-RoyalServerModuleCommand
online version:
order: 9970
schema: 2.0.0
uid: Get-RoyalServerModuleCommand
---

# Get-RoyalServerModuleCommand

## SYNOPSIS
Gets the available Royal Server Commands of a Royal Server Module.

## SYNTAX

```
Get-RoyalServerModuleCommand [-RoyalServerConfig] <RoyalServerConfig> [-Module] <ModuleNames>
 [<CommonParameters>]
```

## DESCRIPTION
The Get-RoyalServerModuleCommand cmdlet gets the available Commands of a Royal Server Module.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalServerModuleCommand -RoyalServerConfig $config -Module EventLog
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

### -Module
The RoyalServer Module.

Possible values: EventLog, HyperV, Processes, TerminalServices, WindowsServices, Script, RoyalDocumentStore, RoyalServerManagement

```yaml
Type: ModuleNames
Parameter Sets: (All)
Aliases:
Accepted values: EventLog, HyperV, Processes, TerminalServices, WindowsServices, Script, RoyalDocumentStore, RoyalServerManagement

Required: True
Position: 2
Default value: EventLog
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalServer.Powershell.RoyalServerConfig
The configuration needed to talk to Royal Server.
Use New-RoyalServerConfig to specify this.

### RoyalServer.Powershell.ModuleNames
The RoyalServer Module.

## OUTPUTS

## NOTES

## RELATED LINKS

[Invoke-RoyalServerCommand](Invoke-RoyalServerCommand.md)

[New-RoyalServerconfig](New-RoyalServerconfig.md)

[Get-RoyalServerModule](Get-RoyalServerModule.md)

[Get-RoyalServerModuleCommandParameter](Get-RoyalServerModuleCommandParameter.md)

