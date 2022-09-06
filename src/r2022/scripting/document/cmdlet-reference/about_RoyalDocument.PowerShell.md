# RoyalDocument PowerShell Module
## about_RoyalDocument.PowerShell

# SHORT DESCRIPTION

Describes how to use PowerShell to create and modify Royal TS/X documents (.rtsz files).

# LONG DESCRIPTION

The PowerShell module can be used on Windows, macOS and Linux (using PowerShell Core). There is no need to install Royal TS/X or to apply a license in order to use the PowerShell module. Simply install the module and import it in your scripts.

<!-- ## Optional Subtopics
{{ Optional Subtopic Placeholder }} -->

# EXAMPLES

## SETUP
The PowerShell module is available for free on the PowerShell Gallery:
https://www.powershellgallery.com/packages/RoyalDocument.PowerShell

Install the latest module on your system using this command:
```powershell
Install-Module -Name RoyalDocument.PowerShell
```
In order to work with the RoyalDocument PowerShell commandlets, you need to register them (import them) into your PowerShell session. Just issue the following command and you are good to go:
```powershell
Import-Module RoyalDocument.PowerShell
```

## FIRST STEPS
Most of the RoyalDocument related objects are known from the Royal TS UI - e.g. RoyalDocument (a document), RoyalCredential (a credential), RoyalFolder (a folder) etc. With the exception of the RoyalStore which is the base class that holds all references to open RoyalDocuments.

For a complete list of all available objects and properties can be found in the scripting reference.

A simple script that just opens a RoyalStore, adds a RoyalDocument, saves it and closes it looks like this:

```powershell
# create a new RoyalStore in memory
$store = New-RoyalStore -UserName "michaelseirer"

# create a new RoyalDocument with the new .rtsz format
$newDocumentPath = "C:\Users\michaelseirer\Documents\new.rtsz"
$newDocument = New-RoyalDocument -Name "Powershell TestDocument" -FileName $newDocumentPath -Store $store 

# save it to disk
Out-RoyalDocument -Document $newDocument
```

## WORKING WITH OBJECTS
Adding different objects to an open RoyalDocument is easy:

```powershell
$doc = New-RoyalObject -folder $newDocument -Type RoyalFolder -Name "DMZ-NET"

$events = New-RoyalObject -folder $newDocument -Type RoyalWindowsEventsConnection -Name "Windows Events"

Set-RoyalObjectValue -Object $events -Property "URI" -Value "192.168.1.145"
```

To get a list of all available types, browse the -Type parameter with pressing TAB multiple times.

# NOTE
In a PowerShell session, you can get information to all commandlets by using the Get-Help command.


<!-- 

# NOTE
{{ Note Placeholder - Additional information that a user needs to know.}}

# TROUBLESHOOTING NOTE
{{ Troubleshooting Placeholder - Warns users of bugs}}

{{ Explains behavior that is likely to change with fixes }}

# SEE ALSO
{{ See also placeholder }}

{{ You can also list related articles, blogs, and video URLs. }}

# KEYWORDS
{{List alternate names or titles for this topic that readers might use.}}

- {{ Keyword Placeholder }}
- {{ Keyword Placeholder }}
- {{ Keyword Placeholder }}
- {{ Keyword Placeholder }} -->
