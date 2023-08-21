---
external help file: RoyalServer.PowerShell.dll-Help.xml
Module Name: RoyalServer.PowerShell
name: Invoke-RoyalServerCommand
online version:
order: 9950
schema: 2.0.0
uid: Invoke-RoyalServerCommand
---

# Invoke-RoyalServerCommand

## SYNOPSIS

Executes a Royal Server command.

## SYNTAX

```
Invoke-RoyalServerCommand [-ModuleID] <ModuleNames> [-Command] <String> [[-Arguments] <Hashtable>]
 [-RoyalServerConfig] <RoyalServerConfig> [-DestinationHost] <String> [[-Credential] <PSCredential>]
 [[-DestinationUsername] <String>] [[-DestinationPassword] <SecureString>] [[-MaxRecords] <Int32>]
 [[-Offset] <Int32>] [[-Timeout] <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Invoke-RoyalServerCommand cmdlet invokes a command at Royal Server.

## EXAMPLES

### EXAMPLE 1

```
$config = New-RoyalServerConfig -Host "localhost" -Port "54899" -Credential $cred
```

$cred is a PSCredential.

## PARAMETERS

### -Arguments

The list of arguments for the Command.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Command

The Command that is executed by the Module of Royal Server

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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

### -Credential

The credentials used for authenticating with Royal Server.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DestinationHost

The destination hostname or IP against which the command is issued by Royal Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DestinationPassword

The destination host password (as a Secure String).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DestinationUsername

The destination host username.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecords

Specifies the maximum number of records Royal Server returns.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: 0
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ModuleID

The Module that is executing the command of Royal Server.

Possible values: EventLog, HyperV, Processes, TerminalServices, WindowsServices, Script, RoyalDocumentStore, RoyalServerManagement

```yaml
Type: ModuleNames
Parameter Sets: (All)
Aliases:
Accepted values: EventLog, HyperV, Processes, TerminalServices, WindowsServices, Script, RoyalDocumentStore, RoyalServerManagement, VMware

Required: True
Position: 1
Default value: EventLog
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Offset

Specifies the offset of records Royal Server is returning (can be used in combination with MaxRecords for implementing paging)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: 0
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RoyalServerConfig

The configuration needed to talk to Royal Server.
Use `New-RoyalServerConfig` to specify this.

```yaml
Type: RoyalServerConfig
Parameter Sets: (All)
Aliases:

Required: True
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Timeout

Specifies the Timeout for the Royal Server command (in milliseconds)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: 0
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -ModuleID : RoyalServer.Powershell.ModuleNames

The Module that is executing the command of Royal Server.

### -Command: System.String

The Command that is executed by the Module of Royal Server

### -Arguments : System.Collections.Hashtable

The list of arguments for the Command.

### -RoyalServerConfig : RoyalServer.Powershell.RoyalServerConfig

The configuration needed to talk to Royal Server.
Use `New-RoyalServerConfig` to specify this.

### -DestinationHost : System.String

The destination hostname or IP against which the command is issued by Royal Server.

### -DestinationPassword : System.Security.SecureString

The password for the destination host. Use `ConvertFrom-SecureString` to obtain a secure string.

### -DestinationUsername : System.String

The username for the destination host.

### -Credential : System.Management.Automation.PSCredential

The credentials used for authenticating with Royal Server.

### -MaxRecords : System.Int32

Specifies the maximum number of records Royal Server returns.

### -Offset : System.Int32

Specifies the offset of records Royal Server is returning (can be used in combination with MaxRecords for implementing paging)

### -Timeout : System.Int32

Specifies the Timeout for the Royal Server command (in milliseconds)

## OUTPUTS

### RoyalServer.PowerShell.RoyalServerPowerShellResponse

For information on how to work with a `RoyalServerPowerShellResponse` look [here](./index.md#working-with-royal-server-responses).

## NOTES

## RELATED LINKS

[Invoke-RoyalServerCommand](Invoke-RoyalServerCommand.md)

[New-RoyalServerconfig](New-RoyalServerconfig.md)

[Get-RoyalServerModule](Get-RoyalServerModule.md)

[Get-RoyalServerModuleCommandParameter](Get-RoyalServerModuleCommandParameter.md)
