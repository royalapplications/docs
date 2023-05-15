---
uid: royalserver_management_dynamic-folder
name: Dynamic Folder
order: 7320
---

<img src="/r2022/images/RoyalServer/Svg/SVG_DynamicFolder_32.svg" class="icon-left icon-lg" alt="" />

# Dynamic Folder

The Dynamic Folder Configuration panel displays and changes the configuration of executing Dynamic Folders for Royal TS/X.

## Show or Activate the Dynamic Folder Configuration Panel

Dynamic Folders enable Royal TS/X clients to create a dynamic navigation tree based on the result of a script. Royal Server is capable of executing these scripts and return back the information for Royal TS/X.

> [!NOTE]
> For detailed information about Dynamic Folders and how they can be used, please refer to the [Dynamic Folder documentation of Royal TS/X](https://docs.royalapps.com/r2021/royalts/reference/).

In The Royal Server Console Navigation Bar, click on the **Royal Server** group and then on the **Dynamic Folder** entry.

## Configuring Script interpreters

In order to execute script, Royal Server needs configuration information on where to find the script interpreter.
The following script interpreters are supported:

- PowerShell
- Bash (additional installation needed)
- Python (additional installation needed)
- PHP (additional installation needed)
- Perl (additional installation needed)
- Ruby (additional installation needed)

For each interpreter, you can configure the path of the executable, e.g. php.exe for PHP.

> [!NOTE]
> These interpreters are not installed on Windows by default and need to be installed upfront.
