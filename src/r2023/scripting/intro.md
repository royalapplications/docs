---
name: Introduction
order: 15000
---

# Introduction

The scripting section covers various ways to automate workflows. You can use our PowerShell cmdlets to create or modify Royal TS/X documents (.rtsz files) or execute Royal Server modules. It also covers how to use your script language of choice to dynamically populate folders with objects using our dynamic folder feature.

## [RoyalJSON](rjson/index.md)
RoyalJSON is a specialized JSON format which allows you to populate folder structures with connections and other objects in a dynamic folder with your script interpreter of choice (Python, JavaScript, PowerShell, etc.).
There are already many samples showing how to use external data sources to generate RoyalJSON output which can be used in Royal TS/X in our [Toolbox Github repository](https://www.royalapps.com/go/dynamicfolder-samples).

## [Object Properties](objects/index.md)
Browse the object types and properties we support for each type. This reference helps you with our PowerShell cmdlets, which allows you to create these object types and set the properties you need. It is also very useful for dynamic folder scripts when you want to set specific properties in the Royal JSON output.

## [RoyalDocument.PowerShell](document/index.md)
The PowerShell module can be used on Windows, macOS and Linux (using PowerShell Core). There is no need to install Royal TS/X or to apply a license in order to use the PowerShell module. Simply install the module from the PowerShell gallery and import it in your scripts.

## [RoyalServer.PowerShell](server/index.md)
Royal Server provides a list of loaded Royal Server Modules which contain Commands which in turn require a list of Parameters. All this is exposed and discoverable via PowerShell cmdlets.
