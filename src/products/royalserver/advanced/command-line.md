---
uid: royalserver_advanced_command_line
name: Command-Line Options
order: 5070
---

# Command-Line Options

`RoyalServer.exe` in the Royal Server installation directory supports the following options. Run them from an elevated command prompt.

| Option                                | Description                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/i`, `-i`, `--install`               | Registers Royal Server as a Windows service. The setup does this automatically.                                                                                                                                                                                         |
| `/u`, `-u`, `--uninstall`             | Removes the Windows service registration. The setup does this automatically.                                                                                                                                                                                           |
| `--prepare-script-temp`               | Creates the folder `%ProgramData%\RoyalServer\Temp`, or repairs its owner and permissions, so that the service account can run Dynamic Folder and Dynamic Credential scripts. Only the folder itself is changed, never its contents, so this is safe to run at any time. The setup runs it on every install, upgrade and repair. |
| `--cleanup-script-temp`               | Removes leftovers from `%ProgramData%\RoyalServer\Temp`: working directories of interrupted script runs and the subfolders of previous service accounts. While the service is running, the subfolder it uses is skipped - stop the service to remove it as well. Links are removed, never followed. The setup runs it on every install, upgrade and repair. |
| `/h`, `-h`, `--help`                  | Shows the available options.                                                                                                                                                                                                                                            |

Without an option, `RoyalServer.exe` starts the Royal Server host. This is how the Windows service runs it.

`--prepare-script-temp` and `--cleanup-script-temp` are available in Royal Server 26.0.13 and newer.

> [!NOTE]
> Royal Server logs a warning at startup when the script temp folder is missing or cannot be accessed, or when it contains folders of previous service accounts. The warning includes the command to run.
