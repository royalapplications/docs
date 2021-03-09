function Import-ModuleSafe([string] $name)
{
    $module = Get-InstalledModule -Name $name;
    if ($null -eq $module)
    {
        Install-Module -Name $name -Scope CurrentUser -Force
    }
    Import-Module $name
}

# 'npm init' might be necessary to use vscode integration

Import-ModuleSafe 'powershell-yaml'
Import-ModuleSafe 'docfx-toc-generator'

. ".\docfx-toc-generator.ps1"

Build-TocHereRecursive

docfx $PSScriptRoot\docfx.json