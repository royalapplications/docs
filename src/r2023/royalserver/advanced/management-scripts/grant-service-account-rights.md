---
uid: royalserver_advanced_management_scripts_grant_rights
name: Grant Service Account Rights
order: 5100
---

# Grant Service Account Rights

When the Royal Server service runs as a Windows account other than `LOCAL SYSTEM`, that account needs two user rights to run [Dynamic Folder and Dynamic Credential scripts](xref:royalserver_management_dynamic-folder#service-account) as the requesting user:

- **Replace a process level token** (`SeAssignPrimaryTokenPrivilege`)
- **Adjust memory quotas for a process** (`SeIncreaseQuotaPrivilege`, administrators hold it by default)

Royal Server starts the script interpreter of a Dynamic Folder or Dynamic Credential script - including PowerShell, when it is the configured interpreter - as a separate process running as the requesting user, and Windows requires both rights for that.

> [!NOTE]
> The rights are needed **only** for Dynamic Folder and Dynamic Credential scripts. All other Royal Server features, including PowerShell execution through the Script module, work without them: that PowerShell runs inside the Royal Server service or on the target machine via WinRM, and no process is started as another user. If you do not use Dynamic Folders or Dynamic Credentials with Royal Server, you do not need this script.

The Services console does not grant these rights when you configure the service account. The script `grant_service_account_rights.ps1`, shipped with Royal Server 5.04.50928 and newer, grants them. You can find it in `<royal-server-installation-directory>\Scripts\grant_service_account_rights.ps1`.

## Usage

1. Open the script in an editor and set the variable `$Account` at the top to the account the Royal Server service runs as (Services console > Royal Server > Log On). Accepted forms: `DOMAIN\user`, `user@domain.tld`, `COMPUTERNAME\user`, `.\user` for a local account, or a SID.
2. Optionally set `$WhatIf = $true` to only show which rights are already granted and which are missing, without changing anything.
3. Run the script from an elevated PowerShell.

```powershell
# --- configuration ---
$Account        = 'DOMAIN\svc-royalserver'
$ServiceName    = 'RoyalServer'
$RestartService = $true
$WhatIf         = $false
```

The script exports the current user rights assignment with `secedit`, adds the account to both rights - keeping all existing members - and applies only these two rights. Afterwards it restarts the Royal Server service, because the rights only apply to a new logon of the account. Set `$RestartService = $false` to restart it yourself.

> [!NOTE]
> If a domain Group Policy defines one of these user rights, it overwrites the local assignment on the next policy refresh. In that case, add the service account to that Group Policy instead. `gpresult /h report.html` shows which policy applies.

Royal Server 5.04.50928 and newer log a warning at startup as long as one of the rights is missing, and reject Dynamic Folder and Dynamic Credential scripts with a clear error message. Everything else keeps working.
