---
order: 9940
name: Dynamic Credentials
---

# Dynamic Credentials

Dynamic Credentials can be useful in cases where it's unfeasible (or just not possible) to retrieve the full dataset of an external credential management system in one go. Instead, you can retrieve just the metadata (Name, ID, etc.) of your credentials and populate the other fields (Username, Password, etc.) on demand, when a connection referencing the credentials is established.

> [!Note]
> **Advantages**:
> - Fast retrieval of credential objects with the bare minimum of information that can be assigned to connections just like regular credential objects.
> - Confidential information can be kept on the remote system until required.
> - Can be useful in scenarios where the administrator needs to provide users access to a set of credentials but the end users should not be able to "see" the actual usernames or passwords of those credentials.

> [!Warning]
> **Things to consider**:
> - Properties that aren't pre-populated (Username, Password, etc.) are only available when establishing a connection that references the credential.
> - Two distinct calls are required to retrieve the full data set.
> - If the dynamic credentials are stored on a remote database, a network connection to that database must be available when establishing connections that reference dynamic credentials.

Dynamic Credentials share the same properties as regular credential objects. That means, the process of creating dynamic credentials is exactly the same as for regular credentials. The difference is that the following properties can (but don't have to) be left empty and fetched on demand by the dedicated "Dynamic Credential Script" of your dynamic folder:
- [`Username`](~/scripting/rjson/available-properties/royaljsondynamiccredential.md#username)
- [`Password`](~/scripting/rjson/available-properties/royaljsondynamiccredential.md#password)
- [`KeyFilePath`](~/scripting/rjson/available-properties/royaljsondynamiccredential.md#keyfilepath)
- [`KeyFileContent`](~/scripting/rjson/available-properties/royaljsondynamiccredential.md#keyfilecontent)
- [`KeyFilePassphrase`](~/scripting/rjson/available-properties/royaljsondynamiccredential.md#keyfilepassphrase)

Here's an example of how to create a dynamic credential object and assign it to an SSH connection:

```json
{
	"Objects": [
		{
			"Type": "DynamicCredential",
			"Name": "User 1",
			"ID": "Cred01"
		},
		{
			"Type": "TerminalConnection",
			"ComputerName": "localhost",
			"Name": "Localhost",
			"CredentialID": "Cred01"
		}
	]
}
```

Like previously mentioned, creating dynamic credentials works exactly the same as regular credentials. You can however leave the username, password, etc. properties empty and fill them on demand with the dedicated "Dynamic Credential Script".

This second script is expected to return a single [RoyalJSONDynamicCredential](~/scripting/rjson/available-properties/royaljsondynamiccredential.md) object like in the following example:

```json
{
	"Username": "user",
	"Password": "pass"
}
```

So let's see what happens here:
- From line 3 to 7 we define a dynamic credential object named "User 1". We set its ID to "Cred01". We don't specify username or password values.
- From line 8 to 13 we create a new SSH connection and reference the dynamic credential by its ID.
- In the separate dynamic credential script we return a RoyalJSONDynamicCredential object which provides the values for `Username` and `Password`.
- Just before the SSH connection is established, the dedicated dynamic credential script is executed and its return value is used to populate the missing information, namely the username and password of the credential.

> [!Note]
> Obviously this is not a real-world example as the dynamic credential script just returns the same credential data for any requested dynamic credential. To actually differentiate between multiple credentials in your scripts and return the corresponding data, please refer to the documentation about [tokens](~/scripting/rjson/tokens.md). Specifically, there are [special tokens](~/scripting/rjson/tokens.md) which are only valid in the context of a dynamic credential script.