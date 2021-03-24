---
uid: royalts_advanced_cli
name: Command Line
order: 10200
---

# Command Line
## Introduction
Royal TS ships with a command line interface (CLI) which allows you to execute certain commands through a command prompt or a batch script. To invoke these commands use the `rtscli.exe` program in the directory where Royal TS has been installed (usually `C:\Program Files\Royal TS V6`).

## Use Cases
The CLI can be used to automate common actions. For example, you can write a batch script which opens a document and establishes one or more connections.

## Usage
If you run `rtscli.exe -h` you will see a help screen like this:
```batch
Royal TS CLI: 6.0.20319
usage: rtscli <scope> <command> [args] [options]
Type 'rtscli [scope] [command] -h|--help' for help on a specific scope and/or command.

Available scopes:

  action    Provides the ability to work with connections.
  document  Provides the ability to work with documents (.rtsz file).

For more information, visit https://royalapps.com/go/help-ts-win-v6-commandline
```

### Scopes
The CLI provides different scopes and each scope provides a different set of commands. The **document** scope, for example, provides commands to open or close documents where the **action** scope provides commands to work with connections.  

To find out which commands are available for a specific scope, simply type `rtscli.exe document -h`:
```batch
Royal TS CLI: 6.0.20319
usage: rtscli document <command> [args] [options]
Type 'rtscli document <command> -h|--help' for help on a command in this scope.

Provides the ability to work with documents (.rtsz file).

  close  Closes a Royal TS document.
  open   Opens a Royal TS document.

For more information, visit https://royalapps.com/go/help-ts-win-commandline
```

### Commands
As shown above, you can see that the document scope provides two commands at the moment: **open** and **close**. To find out more about a command, you can type `rtscli.exe document open -h`:
```batch
usage: rtscli <scope> <command> [args] [options]
Type 'rtscli [scope] [command] -h|--help' for help on a specific scope and/or command.


  -h, --help                 Shows the help for this command.
  -v, --verbose              Shows additional output for troubleshooting.
  -s, --silent               Shows no output at all.
  -b, --background           Prevents the main window from being focused.
      --create-link          Creates a link instead of executing the command.
  -f, --file=VALUE           The path to the file to open.
  -p, --password=VALUE       Optional: The password for the document, in case
                               it is password protected.
```

### Arguments and Options
Each command provides a different set of arguments and options. Whether or not an argument is required or optional is shown on the help screen as well. Here's an example for the `rtscli.exe action connect -h` command:
```batch
usage: rtscli <scope> <command> [args] [options]
Type 'rtscli [scope] [command] -h|--help' for help on a specific scope and/or command.

The argument -i|--id and/or -n|--name are required.

  -h, --help                 Shows the help for this command.
  -v, --verbose              Shows additional output for troubleshooting.
  -s, --silent               Shows no output at all.
  -b, --background           Prevents the main window from being focused.
      --create-link          Creates a link instead of executing the command.
  -i, --id=VALUE             The unique identifier of the connection to execute
                               the action for. Note: Can be omitted when a name
                               is specified.
  -n, --name=VALUE           The name of the connection to execute the action.
                               Note: The action will be executed for all
                               matching connections when no id is specified.
  -a, --adhoc                Optional: Creates an ad hoc connection and
                               connects to it.
      --template-id=VALUE    Optional: The unique identifier of an existing
                               template which should be used to connect.
      --credential-id=VALUE  Optional: The unique identifier of an existing
                               credential which should be overridden to connect.
      --credential-name=VALUE
                             Optional: The name of an existing credential which
                               should be overridden to connect. Note: When the
                               argument --credential-id is not used and
                               multiple credentials with the specified name are
                               found, a prompt to select the correct credential
                               will appear.
  -u, --username=VALUE       Optional: The user name which should be overridden
                               to connect.
  -p, --password=VALUE       Optional: The password which should be overridden
                               to connect.
      --property=VALUE       Optional: Property to override. Can be used
                               multiple times to set multiple properties. For
                               example: --property="AutoRefresh":"True" --
                               property="AutoRefreshIntervalInSeconds":"5"
```
This command requires either the --id argument or the --name argument to work. All the other arguments are optional.