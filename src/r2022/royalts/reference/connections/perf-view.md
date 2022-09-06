---
uid: royalts_reference_connections_perf-view
name: Performance View
order: 9890
---

# ![](/r2021/images/RoyalTS/Plugins/Connections/Performance/SVG_PluginIcon_32.svg#img_header) Performance View
The **Performance View** connection can be used to show real time performance counter data in Royal TS.

## Dashboard
The **Performance View Dashboard** is shown in the **Dashboard** panel when you select an Performance View connection in the **Navigation** panel. It can be configured to immediately show the performance data - without actually connecting to the session.

![Performance_Dashboard](/r2021/images/RoyalTS/Plugins/Connections/Performance/performance_dashboard.png)

## Dashboard Features
- **Pause Sampling** pauses/resumes sampling.
- **Show Legend** shows/hides the legend in the chart.

## Dashboard Settings
To configure the application default settings for the included dashboard, open the [Plugins Management](xref:royalts_intro_plugins) and click on **Dashboard** for the Performance View plugin.  
To configure individual dashboard settings for a connection, use the [Dashboard](#dashboard) property page.

## Plugin Settings
The External Application plugin does not offer any plugin settings at this time.

## Connection Properties
The Performance View Properties dialog is shown:
- for a new Performance View by clicking the **More...** menu item in the **Add** drop down menu in the **Edit** group on the **Home** ribbon tab and selecting the **Performance View** entry from the list of available objects.
- for an existing Performance View by selecting a Performance View and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Performance Views were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Performance View Properties
The **Performance View** page allows you to configure basic connection settings.

[!include[displayname.md](~/royalts/_shared/displayname.md)]
[!include[computername.md](~/royalts/_shared/computername.md)]
[!include[description.md](~/royalts/_shared/description.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/Performance/SVG_PageCounters_32.svg#img_header) Counters
The **Counters** page allows you to configure which performance counter(s) to collect and show.

#### Object
Select or enter the object name of the performance counter.

#### Counter
Select or enter the counter name of the performance counter.

#### Instance
Select or enter the instance name of the performance counter.

#### Scale
Select the scale for the performance counter.

#### Computer
Select from which computer the performance counter should be retrieved. The list of computers depends on the computer name field configuration of the Performance View settings page.
> [!Tip]
> When using Template Connections use $URI$ or $URIS$ as replacement tokens in the Performance View page, depending whether you want to open one connection per selected item or one connection for all selected items.

#### Color
Use the color column in the Counters list to change the color for each counter.

## ![](/r2021/images/RoyalTS/Plugins/Connections/Performance/SVG_PageDisplayOptions_32.svg#img_header) Display Options
The **Display Options** page allows you to configure captions and appearance settings.

### Chart Title and Marker
#### Scroll Mode
If set to wrap the chart will be drawn the same way as in "Performance Monitor". If set to scroll, the chart will be drawn the same way as in the "Task Manager".

#### Chart Title
You may optionally set a title/header for the chart. Leave the chart title field empty if you do not want to show a title.

#### Vertical Axis Caption
You may optionally set a caption for the vertical axis. Leave the vertical axis caption field empty if you do not want to show a caption at all.

#### Point Marker Type
The shape used for each measured and displayed data point.

#### Point Marker Size
Specify the size of the marker.

### Gridlines and Scale
#### Show Time Axis Labels
Whether or not to show the labels on the time axis.

#### Show Horizontal Grid
Whether or not to show horizontal grid lines.

#### Show Vertical Grid
Whether or not to show vertical grid lines.

#### Show Vertical Scale Numbers
Whether or not to show vertical scale numbers.

#### Automatic Vertical Scale
If checked, scaling for the vertical axis is done automatically based on the measured values.

#### Min. Vertical Scale
Specify the minimum value of the vertical axis.

#### Max. Vertical Scale
Specify the maximum value on the vertical axis.

## ![](/r2021/images/RoyalTS/Plugins/Connections/Performance/SVG_PageColors_32.svg#img_header) Colors
The **Colors** page allows you to modify the chart colors used for the Performance View.

#### Appearance
Royal TS offers some predefined color schemes for your charts.

#### Chart Background Color 1
You can set a vertical gradient as chart background. Specify the background color 1 for the gradient.

#### Chart Background Color 2
You can set a vertical gradient as chart background. Specify the background color 2 for the gradient.

#### Time Bar Color
Specify the color for the time bar. The time bar is only shown when the chart is configured to use "Wrap" as scroll mode.

[!include[credentials.md](~/royalts/_shared/credentials.md)]
[!include[tasks.md](~/royalts/_shared/tasks.md)]
[!include[windowmode.md](~/royalts/_shared/windowmode.md)]
[!include[dashboard.md](~/royalts/_shared/dashboard.md)]

## ![](/r2021/images/RoyalTS/Plugins/Connections/Performance/SVG_PageAdvanced_32.svg#img_header) Advanced
The **Advanced** page allows you to configure advanced Performance View settings.

#### Show Counter List
Whether or not to initially show the list of configured counters. The counter list can always be shown or hidden using the Actions context tab.

#### Show Chart Legend
Whether or not to initially show the chart legend. The chart legend can always be shown or hidden using the Actions context tab.

#### Sample Automatically
Whether or not sampling is started immediately after the connect command. Sampling can be paused or resumed at any time using the Actions context tab.

#### Update interval (sec.)
The interval in seconds between each data point.

#### Number of Samples
The number of samples to collect and show before Royal TS starts to overwrite the oldest samples.

#### Polling Interval Strategy
You can set the Polling Interval Strategy to Per Server (one thread per server), Per Counter (one thread per counter) and Auto (which is a combination that determines if Per Server or Per Counter is more helpful depending on the number of servers / counters.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
