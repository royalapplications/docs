---
uid: royalts_reference_connections_powershell
name: PowerShell Connection
order: 9880
---

# ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PluginIcon_32.svg#img_header) PowerShell Connection
The **PowerShell Connection** can be used to execute a PowerShell command or script and display the output from one or more computers in a grid view or as text.

## Dashboard
The results of the **PowerShell** script is shown in the **Dashboard** panel when you select a PowerShell Connection in the **Navigation** panel.

![PowerShell_Dashboard_01](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/powershell_dashboard_01.png)

The dashboard can also display the script output as text:
![PowerShell_Dashboard_02](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/powershell_dashboard_02.png)

## Dashboard Features
- Displays the result of a PowerShell command or script executed on one or more computers.
- Grid search and customization, including sort, filter and group.

> [!IMPORTANT]
> The PowerShell Connection relies on PSRemoting. To make sure that the PowerShell script can be executed on the remote machines, make sure the following requirements are in place:
> - All the necessary firewall ports must be open
> - WinRM must be configured correctly
> - Enable-PSRemoting command must be executed on the remote machine
> - The credentials set in the connection properties have the required permission on the remote machine.

[!include[royalserversupport.md](~/royalts/_shared/royalserversupport.md)]

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the PowerShell plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The PowerShell Connection plugin does not offer any plugin settings at this time.

## Connection Properties
The PowerShell Connection Properties dialog is shown:
- for a new PowerShell Connection by clicking the More... menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **PowerShell** entry from the list of available objects.
- for an existing PowerShell Connection by selecting a PowerShell Connection and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple PowerShell Connections were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PluginIcon_32.svg#img_header) PowerShell Connection Properties
The **PowerShell** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PowerShellScript_32.svg#img_header) Script
The **Script** page allows you to configure the PowerShell script and the parameters.

#### Script
Write or paste your PowerShell command or script in the script editor.

#### Parameters
Maintain a list of parameters which should be passed on to the script.

> [!Tip]
> To pass on parameters you need to define a param script block (named parameters). Positional parameters are not supported. As value you can either pass on static values (like a string or an integer) or dynamic properties of the connection using [replacement tokens](xref:royalts_advanced_tokens), such as $EffectiveUsername$ or $EffectivePassword$.
> 
> You can use dedicated test values (static values) to test your script within Royal TS.

> [!Note]
> To create parameters via scripting ([rJson](xref:scripting_rjson) or [PowerShell](xref:scripting_docps)) an XML encoded string of the following XML must be set to the `Parameters` property:
> ```
> <?xml version="1.0" encoding="utf-16">
> <ParamConfig xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
>     <ParamConfigItems>
>         <ParamConfigItem>
>             <ParameterName>Param1</ParameterName>
>             <Value>$EffectiveUsername$</Value>
>             <TestValue />
>         </ParamConfigItem> 
>         <ParamConfigItem>
>             <ParameterName>Param2</ParameterName>
>             <Value>Some Value</Value>
>             <TestValue />
>         </ParamConfigItem>
>     </ParamConfigItems>
> </ParamConfig>
> ```

#### Test
Click on the Test button and see if the script executes successfully. The Test tab will only show the result as text.

## ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure grid and auto refresh settings.

### General
#### Auto Refresh (in sec.)
If enabled, the data will be refreshed automatically.

#### Show Script Panel
If checked, the script panel is shown.

#### Default Output
Select if you primarily want to see the script output in the grid view or as text.

### Grid
#### Show Horizontal Lines
If checked, horizontal lines are shown in the grid.

#### Show Vertical Lines
If checked, vertical lines are shown in the grid.

#### Max. Column Width
If checked, the columns will use all available horizontal space.

### Text
#### Line Buffer
The max. number of lines to return from the PowerShell script as output.

#### Width
- **Automatic**  
  the number of characters (columns) will be calculated by Royal TS depending on the output and font size.
- **Custom**  
  allows you to specify a custom width
 
#### Characters
The number of characters (columns) per line. Only available when Custom is configured in the Width setting.

#### Font
Select the font used for the terminal control.

#### Font Size
Select the font size used for the terminal control.

## ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PageColors_32.svg#img_header) Colors
The **Colors** page allows you to modify the text output color palette.
 
#### Background
Select which color to use as background color.

#### Text
Select which color to use as text color.

#### Dark Colors
Configure the individual color values for all dark colors.

#### Bright Colors
Configure the individual color values for all bright colors.

[!include[terminalpalette.md](~/royalts/_shared/terminalpalette.md)]

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]
[!include[royalserver.md](~/royalts/_shared/royalserver.md)]

## ![](/r2022/images/RoyalTS/Plugins/Connections/PowerShell/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced PowerShell settings.

#### Use HTTPS
If enabled, Royal TS will use HTTPS/SSL to connect to the endpoint.

> [!Note]
> This setting will only work if your remote endpoint is configured to use HTTPS instead of HTTP (which is the default protocol).

#### Ignore Certificate Errors
If checked, the certificate errors are suppressed.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
