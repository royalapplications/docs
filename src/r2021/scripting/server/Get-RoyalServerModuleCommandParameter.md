---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: Get-RoyalServerModuleCommandParameter
online version:
order: 9960
schema: 2.0.0
uid: Get-RoyalServerModuleCommandParameter
---

# Get-RoyalServerModuleCommandParameter

## SYNOPSIS
Gets the Command Parameters of a Royal Server Module Command.

## SYNTAX

```
Get-RoyalServerModuleCommandParameter [-RoyalServerConfig] <RoyalServerConfig> [-Module] <ModuleNames>
 [-Command] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-RoyalServerModuleCommandParameter cmdlet gets the parameters and additional meta-information of a Royal Server Module Command.

## EXAMPLES

### EXAMPLE 1
```
Get-RoyalServerModuleCommandParameter -RoyalServerConfig $config -Module EventLog -Command "GetEntries"
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
The RoyalServer Module

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

### -Command
The Command of which the parameters should be returned.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### RoyalServer.Powershell.RoyalServerConfig
The configuration needed to talk to Royal Server.
Use New-RoyalServerConfig to specify this.

### RoyalServer.Powershell.ModuleNames
The RoyalServer Module

### System.String
The Command of which the parameters should be returned.

## OUTPUTS

## NOTES

## RELATED LINKS

[Invoke-RoyalServerCommand](Invoke-RoyalServerCommand.md)

[New-RoyalServerconfig](New-RoyalServerconfig.md)

[Get-RoyalServerModule](Get-RoyalServerModule.md)

[Get-RoyalServerModuleCommandParameter](Get-RoyalServerModuleCommandParameter.md)

