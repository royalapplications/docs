---
uid: scripting_rjson_advanced-scenarios
order: 9930
name: Advanced scenarios
---

# Advanced scenarios

While rJSON was designed to be easy to use for regular users as well as developers, we also wanted it to be as powerful as you need it to be. For that reason we decided to expose only a small subset of functionality as first-class properties but also provide a way to drop down one level lower, to our [RoyalDocument](~/scripting/objects/index.md) data model.

Because dropping down to the RoyalDocument level requires knowledge of our internal data model, it's generally not recommended to go that route unless you really need to access properties that aren't exposed through rJSON.

The RoyalDocument data model is vastly more complicated to use than rJSON. A good example for demonstrating the complexity is setting up credentials for a connection. While in rJSON, the only thing required to assign a username and password to a connection is to set the two respective properties (`Username` and `Password`). In the RoyalDocument data model however five properties are required: First you need to disable inheritance (`CredentialFromParent`), then you need to set the correct credential mode (`CredentialMode`), you also need to ensure that autologon is enabled (`CredentialAutologon`) and finally you assign the username (`CredentialUsername`) and password (`CredentialPassword`).

Of course not everything is that complicated in the RoyalDocument data model but complexity is often hidden and will only become apparent when something doesn't work as expected. Another reason we do not recommend using the RoyalDocument data model is that it can change at any time and we cannot guarantee a stable API.

So with the disclaimer out of the way, let's look at how you can access the RoyalDocument data model. Here's an example:

```json
{
	"Objects": [
		{
			"Type": "TerminalConnection",
			"TerminalConnectionType": "SSH",
			"Name": "VM01",
			"ComputerName": "vm01",
			"Properties": {
				"EnableLoggingOSX": true,
				"LogDirectoryOSX": "~/vm01-logs",
				"RecorderOutputPath": "%USERPROFILE%\\vm01-logs",
				"RecordStartOnConnect": true,
				"PuttyLogging": 1
			}
		}
	]
}
```

In this example we configure an SSH connection using rJSON and then start dropping down into the RoyalDocument layer starting at line 8. The [`Properties`](~/scripting/rjson/available-properties/royaljsonobject.md#properties) key is used to specify that we intend to set some RoyalDocument properties. Line 9 and 10 are Royal TSX (for macOS) specific and enable logging for the SSH connection and configure the logging directory respectively. Line 11-13 basically do the same for Royal TS (for Windows).
The result of this example is a single SSH connection which is properly configured for logging on both macOS and Windows.