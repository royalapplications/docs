---
name: New-RoyalServerConfig
order: 4000
---

# New-RoyalServerConfig

## NAME

New-RoyalServerConfig

## SYNOPSIS

Creates a new RoyalServerConfig.

## SYNTAX

```powershell
New-RoyalServerConfig
     -Host <string>
     -Port <int>
     [-Credential <PSCredential>]  
     [-UseSSL <bool>]
     [<CommonParameters>]
```

## DESCRIPTION

The New-RoyalServerConfig commandlet creates a new RoyalServerConfig object that encapsulates the necessary

information for communicating with a Royal Server installation.

**RELATED LINKS**

Invoke-RoyalServerCommand

## REMARKS

To see the examples, type: "get-help New-RoyalServerConfig -examples".

For more information, type: "get-help New-RoyalServerConfig -detailed".

For technical information, type: "get-help New-RoyalServerConfig -full".

For online help, type: "get-help New-RoyalServerConfig -online"

EXAMPLES

```powershell
#-------------------------- EXAMPLE 1 --------------------------#

$config = New-RoyalServerConfig -Host "127.0.0.1" -UseSSL $false -Port 54899 -Credential $cred

$config

# Example Output:
# Host        : 127.0.0.1
# Port        : 54899
# UserName    : demoadmin
# Password    : System.Security.SecureString
# Interactive : False
# UseSSL      : False

# This command shows how to create a new RoyalServerConfig. It is neede for the Invoke-RoyalServercommand commandlet.
```
