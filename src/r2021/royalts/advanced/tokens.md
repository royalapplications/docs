---
uid: royalts_advanced_tokens
name: Replacement Tokens
order: 10450
---

# Replacement Tokens

## What are Replacement Tokens?
Replacement tokens are special variables which can be used in certain places to replace/insert data or information which is only available at execution time, such as starting a connection, executing a task in context of a connection, or creating an object from a template.

## Example
Let's take a look at the built-in **Ping** task, which can be executed in context of a connection by right-clicking an existing connection and selecting the **Command Tasks -> Ping** command. 

The **URI** of the selected connection (computer name / IP address) will be replaced in the **Ping** command task argument using the `$URI$` replacement token.

See also [Working with Tasks](xref:royalts_tutorials_tasks)

## Where can I use Replacement Tokens?
Replacement Tokens can be used in [Command Tasks](xref:royalts_reference_tasks_command), [Key Sequence Tasks](xref:royalts_reference_tasks_key-sequence), [Templates](xref:royalts_tutorials_templates) but also in [Connections](xref:royalts_reference_connections) in some places where mentioned.

- In [Command Tasks](xref:royalts_reference_tasks_command), use the **fly-out-button** (right arrow) in the `Command`, `Arguments` or `Working Directory`.
- In [Key Sequence Tasks](xref:royalts_reference_tasks_key-sequence), use the **Insert** button to insert replacement tokens and/or special keys.
- In [Templates](xref:royalts_tutorials_templates) use the **Template Tokens** button at the top right for a list of available tokens.
- In [Connections](xref:royalts_reference_connections) you can use replacement tokens only in places where it is explicitly mentioned in the docs. The **URI** property (computer name or web address), for example, can resolve replacment tokens. In these cases, the tokens must be entered manually as there's no fly-out-button available.

## Context
When you execute a task or template in context of one or more connections (the selected connections), the specified tokens such as `$URI$` or `$CustomField1$` are resolved and replaced from the context connection.

> [!Note]
> If no context is available (for example, by simply connecting to a connection), the context is the object itself. This means, using the token `$CustomField1$` in the **Computer Name** field of a connection will use the value of **Custom Field 1** of the very same connection.

> [!TIP]
> If you want to use a value from the task itself instead of the context connection, you can prefix the token with `this.`. For example: `$this.CustomField1$` will resolve the value of the **Custom Field 1** from the task instead of the context connection.

## Available Tokens
### Object Properties
In general, you can refer to any of the available properties for each involved object type. A complete reference of properties for each type can be found [here](xref:scripting_objects).

For example: if you want to use the **MAC address** specified in a [Terminal](xref:royalts_reference_connections_terminal-rebex#mac-address) connection, you can use the [corresponding property](xref:scripting_object_royalsshconnection#physicaladdress) as replacement token: `$PhysicalAddress$`

### Custom Properties
Each object can have an arbitrary number of **Custom Properties**, such as the [Remote Desktop connection](xref:royalts_reference_connections_rdp#-custom-properties). To access the value of a custom properties, you need to use the `CustomProperty.` prefix and the **alphanumeric name WITHOUT spaces** of the property.

For example: if you have a custom property with the name: `User's Start-Date:` you can access the value using the token `$CustomProperty.UsersStartDate$`

### Date and Time
With the prefix `DateTime.` and the [format string](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings) after the `.` character you can get the current date and/or time in the format specified.

For example: `$DateTime.yyyy-MM-dd$` you will get `2021-08-31`.

### Environment Variables
The prefix `Env.` provides access to environment variables.

For example: `$Env.USERNAME$` will resolve the environment variable `%USERNAME%`.

### Special Tokens
A number of special tokens are also available, mainly for easier access to credential information after the credential (either set directly or referenced by ID or name) has been resolved:
- `$EffectiveUsername$`: the user name of the resolved credential
- `$EffectiveUserdomain$`: the domain portion of the effective user name (if available)
- `$EffectiveUsernameWithoutDomain$`: the user name portion without the domain of the effective user name
- `$EffectivePassword$`: the password of the resolved credential
- `$EffectiveKeyFile$`: the configured key file path of the resolved credential
- `$EffectivePassphrase$`: the pass phrase for the key file of the resolved credential
- `$EffectiveID$`: the ID (GUID) of the context object
- `$DocumentFilePath`: the path to the .rtsz file (document) of the context object
- `$DocumentFolderPath$`: the path to the folder where the .rtsz file (document)  of the context object is located

### RoyalJSON (rJSON) Tokens
There are a couple of special tokens/prefixes for dynamic folder scripts. Read the [Tokens](xref:scripting_rjson_tokens) section of the RoyalJSON documentation for more information.

## Lockdown Documents
Replacement tokens for **protected/encrypted** properties, such as passwords, may not be resolved if the document of the object is locked down. See also: [Working with Lockdown Documents](xref:royalts_tutorials_lockdown#lock-and-unlock-lockdown-documents)