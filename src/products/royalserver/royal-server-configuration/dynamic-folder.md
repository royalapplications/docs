---
uid: royalserver_management_dynamic-folder
name: Dynamic Folder
order: 7320
---

<img src="/r2023/images/RoyalServer/Svg/SVG_DynamicFolder_32.svg" class="icon-left icon-lg" alt="" />

# Dynamic Folder

The Dynamic Folder Configuration panel displays and changes the configuration of executing Dynamic Folders for Royal TS/X.

## Show or Activate the Dynamic Folder Configuration Panel

Dynamic Folders enable Royal TS/X clients to create a dynamic navigation tree based on the result of a script. Royal Server is capable of executing these scripts and return back the information for Royal TS/X.

> [!NOTE]
> For detailed information about Dynamic Folders and how they can be used, please refer to the [Dynamic Folder documentation of Royal TS/X](https://docs.royalapps.com/r2023/royalts/reference/).

In The Royal Server Console Navigation Bar, click on the **Royal Server** group and then on the **Dynamic Folder** entry.

## Configuring Script interpreters

In order to execute script, Royal Server needs configuration information on where to find the script interpreter.
The following script interpreters are supported:

- PowerShell
- Bash   
- Python
- PHP
- Perl
- Ruby


For each interpreter, you can configure the path of the executable, e.g. php.exe for PHP.

> [!NOTE]
> All interpreters except PowerShell are not installed on Windows by default and need to be installed upfront.

## Script Execution Context

Dynamic Folder and Dynamic Credential scripts are executed **as the Royal Server user who requested them** - never as the Royal Server service account and never as the [Worker Account](xref:royalserver_getting-started_setting-the-worker-account). The Royal TS/X client therefore has to send the Royal Server credentials of the requesting user with the request.

> [!NOTE]
> This applies to Royal Server 26.0.12 and newer. In previous versions, Dynamic Folder and Dynamic Credential scripts were executed with the Windows service account of the Royal Server service (by default `LOCAL SYSTEM`).

> [!IMPORTANT]
> If these credentials are missing, the script is not executed and the request fails with:
> `Script execution requires the Royal Server credentials of the requesting user.`

Two [Trace Flags](xref:royalserver_advanced_traceflags) control how that user is logged on. Both are resolved on the server, so a client cannot influence them:

| Trace Flag                                | Default | Effect                                                                       |
| ----------------------------------------- | ------- | ---------------------------------------------------------------------------- |
| `TRACEFLAG_LOAD_USER_PROFILE_FOR_SCRIPTS` | `false` | Load the user's real Windows profile instead of a transient scratch profile  |
| `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS`   | `false` | Use a batch logon (full token) instead of an interactive logon               |

### Required Windows User Rights

The account a script runs as needs a logon right on the Royal Server machine:

| Logon type                | Used when                                      | Required user right                          |
| ------------------------- | ---------------------------------------------- | -------------------------------------------- |
| Interactive               | `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS` is off | **Allow log on locally**                     |
| Batch                     | `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS` is on  | **Log on as a batch job**                    |

There is no fallback between the two. If the account is missing the right for the configured logon type, the script fails with a logon error instead of silently running with different privileges.

### User Profile

By default, scripts run **without the user's Windows profile**. Royal Server creates a throwaway working directory for each run below `%ProgramData%\RoyalServer\Temp` and points `USERPROFILE`, `APPDATA`, `LOCALAPPDATA` and `TEMP` at it. The directory is removed when the script finishes; directories orphaned by a hard kill of the service are purged the next time the service starts.

This avoids creating a persistent user profile on the Royal Server machine for every user who runs a script, but it also means that everything stored in the real profile is unavailable to the script:

- user-scoped DPAPI (for example `ConvertTo-SecureString` without an explicit key, or `ProtectedData`)
- the user's certificate store
- token caches of cloud CLIs (Azure, AWS, ...)
- anything the script expects in the real `HKEY_CURRENT_USER` hive or in `%APPDATA%`

Enable the Trace Flag `TRACEFLAG_LOAD_USER_PROFILE_FOR_SCRIPTS` for scripts that need any of these. Royal Server then loads the user's real Windows profile, which also creates a persistent profile folder on the Royal Server machine the first time that user runs a script.

### Elevation

With the default interactive logon, a script started by an **administrator** runs with the UAC-filtered, non-elevated token - the same token that administrator would get in an interactive session before elevating. Scripts that genuinely require administrative rights need the Trace Flag `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS`, which uses a batch logon and therefore the full, unfiltered token.

Standard user accounts are not affected: they have no elevated token to filter and behave identically either way.

Before Royal Server 26.0.12, scripts ran under the Windows service account of the Royal Server service (by default `LOCAL SYSTEM`) and therefore always had full administrative rights on the Royal Server machine. Scripts that relied on those rights will fail after an upgrade: enabling `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS` restores elevation only for accounts that are administrators themselves, it does not restore `LOCAL SYSTEM` privileges.

> [!WARNING]
> Only enable `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS` if your scripts really need administrative rights. Scripts of administrative accounts then run elevated, which increases the impact should such an account be compromised.

### Troubleshooting

| Symptom                                                                 | Cause and solution                                                                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `Script execution requires the Royal Server credentials of the requesting user.` | No Royal Server credentials were sent. Configure the credentials for the Royal Server object used by the Dynamic Folder. |
| The script fails immediately with a logon error                         | The account is missing **Allow log on locally** (or **Log on as a batch job**, see above) on the Royal Server machine.    |
| The script cannot decrypt secrets or find files it stored earlier       | The script depends on the user profile. Enable `TRACEFLAG_LOAD_USER_PROFILE_FOR_SCRIPTS`.                                 |
| The script fails with "access denied" although the user is an administrator | The script runs with the UAC-filtered token. Enable `TRACEFLAG_USE_BATCH_LOGON_FOR_SCRIPTS`.                          |
