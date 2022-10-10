---
uid: royalts_ui_commands
name: Commands
order: 9980
---

# Commands
Whenever you click on a button on the ribbon or execute a context menu item, the corresponding Royal TS command is executed. All available commands from the application itself and from each plugin are centrally registered and can be invoked in different ways. You can execute commands using the Command Palette we introduced in Royal TS V6 or you can execute a command by a keyboard shortcut - which you can also customize.

## ![](/r2022/images/RoyalTS/Application/SVG_ActionCommandPalette_32.svg#img_header) Command Palette
The **Command Palette** is designed to enable you to control as much as possible using the keyboard instead of mouse-point-and-clicking. To invoke the command palette, use the keyboard shortcut 'CTRL + WIN + .' or simply click the command palette command on the **Home** ribbon tab in the **Actions** group.
> [!Tip]
> Since by default, the keyboard shortcut scope for the Command Palette is set to **Global**, the keyboard shortcut will also work if Royal TS is running in the background. If you want the palette to show up only when Royal TS is active, simply customize the keyboard shortcut's scope to Local or Deep.

### Keyboard Navigation
Navigating the command palette using keyboard is quick and efficient:
* Once the palette appears, simply start typing to search/filter the list of available commands.
* Use *CURSOR UP*, *CURSOR DOWN*, *PAGE UP*, *PAGE DOWN* to select the command.
* Press the *Enter* key to either execute the command or, in case of a context command, navigate to the context selection.
* In the context selection, start typing to filter the available context.
* Use *CURSOR UP*, *CURSOR DOWN*, *PAGE UP*, *PAGE DOWN*, to select an item.
* Commands which can handle multiple context items, allow you to select multiple items by holding the *SHIFT* key.
* Press the *Enter* key to execute the selected command for the selected context.

> [!Tip]
> Use the *ESC* key to go back one step at any time. Pressing *ESC* when no command has been filtered will close the palette. You can also simply close the palette by clicking outside of the palette.

### Simple Commands
A simple command can be executed without any further context information. For example, invoke the command palette, then type *options*, select the **Options** command and hit the *Enter* key to open the **Options** dialog.

### Commands with Context
There are many commnds which require some sort of context in order to execute them. For example, if you want to execute the **Connect** command, you need to specify which connection you want to connect to. In case you already selected a valid item, it will appear on top of the context list. Once you selected for which context you want to execute the command, press *ENTER*. Another situation you can run into is when a command doesn't have a valid context. For example: invoking a **Disconnect** command doesn't make much sense if no connections are connected. In this case, selecting the command will show an indicator that there's no context available.

## ![](/r2022/images/RoyalTS/Application/SVG_ActionContextPalette_32.svg#img_header) Global Search
The **Global Search** works very similar as the **Command Palette** but 'the other way around'. Invoking the global search allows you to quickly search all objects in all your open documents. You can search by name using 'fuzzy search', the description field or by URI. Keybard navigation is works and behaves the same way as in the command palette. Once you have one or more objects selected, press the *ENTER* key to move to the next screen where you can choose which command you want to execute for the selected objects.

## ![](/r2022/images/RoyalTS/Application/SVG_PageKeyboard_32.svg#img_header) Keyboard Shortcuts
In Royal TS V6 or later, you assign or edit keyboard shortcuts to commands via View -> Options -> [Keyboard Shortcuts](xref:royalts_reference_options#-keyboard-shortcuts). When you select a command, click on the **Edit** button to assign or edit a keyboard shortcut. Click on the **Remove** button to delete a keyboard shortcut.

When you assign or edit a keyboard shortcut, you need to provide the following configuration:

### Scope
The scope controls when and where the keyboard shortcut should be effective. There are three scopes available:

* **Local**  
  The application must have the input focus.

* **Deep**  
  Use this scope if you want the shortcut to be recognized even when keyboard input is redirected into a remote session (like Remote Desktop).

* **Global**  
  Configuring a keyboard shortcut using this scope will be recognized even when Royal TS does not have the input focus.

> [!Note]
> All 3 scopes require Royal TS to be running. Also make sure when using the **Deep** and **Global** scope, that no other application locally or remote is interferring with the shortcut. If that's the case, assign a different shortcut.

### Modifiers
Configure one or more of the available modifies to be used for the keyboard shortcut. When you configure a global keyboard shortcut, you should also use the *Win*-Key modifier.

### Key and Chord Key
Configure the key for the keyboard shortcut. A chord key can be assigned if you want to group multiple commands together. For example, the keyboard shortcut for the [Credentials Panel](xref:royalts_ui_panels#-credentials) is Control + P, with the chord key C. This means that the you need to hold the *Control* key, press the *P* key, afterwards press the *C* key. This allows you to use the keyboard shortcut Control + P, T for the [Tasks Panel](xref:royalts_ui_panels#-tasks).

> [!Important]
> You can only use Chord keys with the Local scope!

## Add Context Command
A context command allows you to configure a command with which is executed with a pre-defined "context". For example: you could create a context command which invokes the "Connect" command for a pre-defined list of connections. You can also create a context command which invokes a key sequence task for the currently selected connection.

To add a new context command, click the "Gear" dropdown button next to the search field and click on **Add Context Command**. A dialog will open which allows you to configure the following settings:

### Command
A list of all available commands which can be executed using a context. This includes commands like Connect or Disconnect and also includes Templates, Command Tasks as well as Key Sequence Tasks.

### Context Source
* **Selection**  
  The command will be executed with the current selection as context.
* **Prompt**  
  A prompt will appear which allows you to specify the context. You can also provide a **Prompt Filter** to apply a filter when the prompt shows up.
* **Items**  
  You can specify one or more context items (if supported) to execute the command.

> [!Note]
> Templates, tasks and context items are stored in Royal TS documents. Make sure the required documents are open when you execute a command. If Royal TS cannot find the item because the document has not been opened, it will ignore the command or item.

## Location of the Configuration File
All modifications related to keyboard shortcuts are stored in the file ```%appdata%\code4ward\keyboardshortcuts.json```. You can backup this file or deploy this file to a different machine in order to use the configuration on a different installation.