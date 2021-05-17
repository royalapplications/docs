---
order: 9950
name: Dynamic Folders
---

# Dynamic Folders

Dynamic Folders are the main way to get rJSON into Royal TS and Royal TSX. They allow you to specify scripts that are expected to return rJSON which is then parsed, converted into objects and populated underneath the dynamic folder.

Various script interpreters are supported but availability differs between platforms. For instance, AppleScript is supported on the Mac but unavailable on Windows. VBScript on the other hand is not available on the Mac but well supported under Windows. For testing purposes you can also directly specify JSON. This allows you to "play" with the data format and easily verify if you're writing valid rJSON.

Currently, two separate scripts can be configured:

- The **"Dynamic Folder Script"**:

	This script retrieves the content that should appear underneath the dynamic folder. Its return value must be a valid [RoyalJSONDocument](~/scripting/rjson/available-properties/royaljsondocument.md) object.

- The **"Dynamic Credential Script"**:

	This script retrieves detailed information (username, password, etc.) of [dynamic credentials](~/scripting/rjson/dynamic-credentials.md) when a connection referencing a dynamic credential is opened. Its return value must be a valid [RoyalJSONDynamicCredential](~/scripting/rjson/available-properties/royaljsondynamiccredential.md) object.

All scripts are expected to return their data in stdout and the exit code must be 0 for a script run to be considered successful. If either of those conditions is not met, an error will be displayed and the script output is discarded. For error handling purposes you may use stderr. If the exit code is not 0 and content is present on stderr, Royal TS/X will display the output of stderr to the user.

To actually execute a dynamic folder script the "Reload" command must be used from the context menu of a dynamic folder in the navigation panel. In the future, additional means of reloading a dynamic folder's content may be provided.


## Script Interpreters

Royal TS/X ships with support for the most common script interpreters. Among others, we support Bash, Python, Perl and PowerShell. Like previously mentioned, the list of supported script interpreters differs between platforms and will likely expand in the future.

Royal TS/X doesn't ship with binaries of the supported script interpreters. So in some cases, if the script interpreter of your choice doesn't ship with the operating system, you may have to install it before using it from Royal TS/X. For example, while PowerShell Core is supported on macOS, it doesn't ship with the OS and thus is required to be installed before use.

When a dynamic folder script is executed, any [tokens](~/scripting/rjson/tokens.md) contained within the script are replaced by actual values and a temporary file with the full, expanded content is written to disk. On macOS, we prepend the script's content with the shebang of the selected script interpreter. For example, this is Python's shebang: `#!/usr/bin/env python`. This ensures that the OS can find the correct script interpreter to execute the script with. After the script finishes execution, the temporary file is deleted.

> [!Note]
> In Royal TSX (for macOS) 5.0 we added support for the **"JavaScript"** script interpreter.
> 
> In addition to being the most popular scripting language, the JavaScript interpreter has one major advantage over all other script interpreters: Scripts are executed *in-memory* and **no temporary file is written to disk**.
> The new JavaScript interpreter also supports returning [promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) from your scripts which are then resolved by Royal TSX. This allows you to easily write web requests and not worry about having to synchronously return your data.
> 
> Unfortunately, the **"JavaScript"** is currently not supported in Royal TS (for Windows) due to technical limitations but we'll keep evaluating the viability of adding it to the Windows version.