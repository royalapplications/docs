function Get-FolderGrabCondition($folderName)
{
    $ignoreItemName = ".nodoc"
    $IgnoreFolderDeafultList = ".\.git", ".\_site", ".\obj", ".\src"

    $notInListCondition = (-not $IgnoreFolderDeafultList.Contains($folderName))
    $doesntHaveNoDocFileCondition = (-not [System.IO.File]::Exists([System.IO.Path]::Combine($folderName, $ignoreItemName)))

    return $notInListCondition -and $doesntHaveNoDocFileCondition
}

function Get-SubDocFolders($Path)
{
    $dirs = [System.IO.Directory]::GetDirectories($Path, "*", [System.IO.SearchOption]::AllDirectories)

    return $dirs | where { Get-FolderGrabCondition $_ }
}

function Get-RootDocFolder($Path)
{
    $dirs = [System.IO.Directory]::GetDirectories($Path, "*", [System.IO.SearchOption]::TopDirectoryOnly)

    return $dirs  | where { Get-FolderGrabCondition $_ }
}

function Get-YamlFrontMatter([string]$mdContent, [string]$mdpath)
{
    # both line endings: splitting on [Environment]::NewLine (CRLF) misses the front matter of LF files and drops the page
    $lines = $mdContent -Split "\r?\n"
    if (($lines | where {$_ -eq "---"}).Length -eq 2)
    {
        $firstIndex = $lines.IndexOf("---") + 1
        $secondIndex = $lines[$firstIndex..$lines.Length].IndexOf("---")
        Write-Host "Indexing '$mdpath'..." -ForegroundColor DarkGray
        return [string]::Join([System.Environment]::NewLine, $lines[$firstIndex..$secondIndex])
    } else
    {
        Write-Host "Front-matter (Yaml meta-data) for '$mdpath' : NOT FOUND" -ForegroundColor DarkGray
        return "" 
    }
}

function New-TocYaml($folder, $tocFolder)
{
    $mdFiles = [System.IO.Directory]::GetFiles($folder, "*.md", [System.IO.SearchOption]::TopDirectoryOnly) 
    
    $topLevelTocItems = New-Object Collections.Generic.List[Object]
    
    $mdFiles | % { 
        if([System.IO.Path]::GetFileName($_) -ne "index.md")
        {
            $tocItem = Get-MarkdownSingleTocItem $_ $tocfolder
            $topLevelTocItems.Add($tocItem)
        }
    }

    $subdocTopFolders = Get-RootDocFolder $folder
    $indexFiles = $subdocTopFolders | % { Join-Path $_ "index.md" } | where { [System.IO.File]::Exists($_) }
    
    $indexTocItems = New-Object Collections.Generic.List[Object]
    $indexFiles | % {

        $tocItem = Get-MarkdownSingleTocItem $_ $tocFolder      
        $dirOfIndex = [System.IO.Path]::GetDirectoryName($_)
        $toc = New-TocYaml $dirOfIndex $tocFolder
        $items = $toc | Sort-Object -Property { $_.order } -Descending -Stable
        $items = @($items)
            
        if($null -ne $items -and $null -ne $tocItem -and $items.Length -gt 0)
        {
            $tocItem.Add("items", @($items))
        }
            
        $indexTocItems.Add($tocItem)
        
    }

    $result = ($topLevelTocItems + $indexTocItems) | Sort-Object -Property { $_.order } -Descending -Stable
    $result = @($result)
    return ([Collections.Generic.List[Object]]$result)
}

function Get-MarkdownSingleTocItem([string]$markdownPath, $tocFolder)
{
    $content = [System.IO.File]::ReadAllText($markdownPath)
    $frontMatter = Get-YamlFrontMatter $content $markdownPath

    if([string]::IsNullOrEmpty($frontMatter))
    {
        return $null
    }
    $yaml = $frontMatter | ConvertFrom-Yaml

    $noName = $null -eq $yaml.name

    if($noName)
    {
        Write-Host "Front-matter of file '$markdownPath' needs a 'name' tag." -ForegroundColor Red
        return $null
    }

    $relPath = [System.IO.Path]::GetRelativePath($tocFolder, $markdownPath)

    $order = $yaml.order
    if($null -eq $order)
    { 
        $order = 0 
    }

    if ($yaml.href)
    {
        $relPath = $yaml.href
    }

    # [ordered]: a plain hashtable enumerates its keys in a per-process random order (randomized string hashing),
    # so every run would rewrite every toc.yml with its keys shuffled
    # Sort these items with -Property { $_.order }: -Property order does not see the keys of an [ordered] dictionary.
    $model = [ordered]@{ "name" = $yaml.name }
    if($yaml.nocontent -ne $true)
    { $model.Add("href", $relPath)
    }
    $model.Add("order", $order)
    return $model
}

function Build-TocHereRecursive
{
    foreach ($docFolder in Get-RootDocFolder (Join-Path -Path $PSScriptRoot -ChildPath "."))
    {
        Write-Host "==== Generating TOC for [$docFolder] ====================" -ForegroundColor DarkGray
        $raw = New-TocYaml $docFolder $docFolder
        $tocFile = ConvertTo-Yaml @($raw)
        $tocFile > (Join-Path $docFolder "toc.yml")
        Write-Host "==== End Generating for TOC [$docFolder] ================" -ForegroundColor DarkGray
        Write-Host
    }
}