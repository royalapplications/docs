param ([switch]$serve = $false)


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

$generator = Join-Path -Path $PSScriptRoot -ChildPath "docfx-toc-generator.ps1"

. $generator

Build-TocHereRecursive

New-Item -ItemType Directory -Force ../../.output

if (!(Test-Path ../../.output/gh-pages))  {
  git clone https://github.com/royalapplications/docs.git ../../.output/gh-pages
  Set-Location ../../.output/gh-pages
  git checkout gh-pages
}

Set-Location $PSScriptRoot
$docfxJson = Join-Path -Path $PSScriptRoot -ChildPath "docfx.json"
docfx $docfxJson --logLevel=Warning

if ($serve) {
  $docfxJsonServe = Join-Path -Path $PSScriptRoot -ChildPath "docfx-serve.json"
  Write-Host "The root is $PSScriptRoot"
  docfx $docfxJsonServe --serve
}
