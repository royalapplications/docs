---
uid: royalts_advanced_uri
name: URI Scheme
order: 10100
---

# URI Scheme

## CLI Commands
Royal TS allows you to execute any [CLI command](xref:royalts_advanced_cli) using the uri scheme `rtscli://`. Here's an example:
- Connect to a connection with the name `QNAP (SSH)` using the cli:
  ```batch
  rtscli.exe action connect -n "QNAP (SSH)"
  ```
- The same command using an URI:
  ```batch
  rtscli://local/action/connect?-n=QNAP+(SSH)
  ```

### Create Link
Every CLI command provides an option `--create-link` which allows you to convert the current CLI command in a URI command:
```batch
rtscli.exe action connect -n "QNAP (SSH)" --create-link
```
In this case, the command will not be executed, instead the `rtscli://local/action/connect?-n=QNAP+(SSH)` URI command will be printed out.

## Legacy URI Scheme
Royal TS V6 can still be invoked using the legacy URI scheme with the following syntax:

```batch
rtsx://<protocol-identifier>%3a%2f%2f[username:password@]<uri>
  ?action=<connect|disconnect>
  &using=<uri|name|id|adhoc>
  &username=<username>
  &password=<password>
  &credential=<name>
  &property_<name>=value
  &donotactivate=<true>
```

### Protocol Identifier
Specify the protocol identifier or an alias for the connection type you want to connect to. A list of available protocol identifiers can be found [here](https://www.royalapplications.com/go/kb-ts-win-protocolhandlers).  

**This parameter is required.**

> [!Important]
> The protocol-identifier must be terminated with the URL encoded :// characters (%3a%2f%2f). Make sure that special characters in the credential name or URI must be URL encoded as well.

### Username and Password
If both, username and password is specified, Royal TS will use these credentials to connect. If only the username is specified, Royal TS will use the username to find a credential with the specified name.

### URI
Depending on the using parameter, provide one of the following as URI:
- using=uri: computer name or ip address
- using=name: object name
- using=id: the ID (Guid) of the object
- using=adhoc: the computer name or ip address  

**This parameter is required.**

### Action
Action to execute (default is connect): connect or disconnect.

### Using
Search for existing object by uri, name, id or create a new ad hoc connection. The default value if not specified is *adhoc*.

### Username
Provide a user name.

### Password
Provide a password.

### Property_<name>
Provide one or more property values.

> [!Note] 
> This parameter is optional and can only be used for using=adhoc connections. For detailed information about properties and their values, visit Object Properties chapter in the scripting reference

### DoNotActivate
Main window will not be activated.

### Examples

```batch
rtsx://rdp%3a%2f%2f192.168.5.16?using=uri
```
Connects to the remote desktop connection with the computer name 192.168.5.16.

```batch
rtsx://rdp%3a%2f%2fadmin@192.168.5.16
```
Connects to an ad hoc remote desktop connection to 192.168.5.16 using the credential with the name admin.

```batch
rtsx://rdp%3a%2f%2fadmin@Web%20Server%201?using=name
```
Connects to an existing remote desktop connection named "Web Server 1" (without the quotes) using the credential with the name admin.

```batch
rtsx://rdp%3a%2f%2fWeb%20Server%201?using=name&action=disconnect
```
Disconnects the remote desktop connection named "Web Server 1" (without the quotes).

```batch
rtsx://filetransfer%3a%2f%2f3c74baad-8303-47cd-a2d5-7dc40975acdc?using=id
```
Connects to the file transfer connection with the specified id.

```batch
rtsx://rdp%3a%2f%2f192.168.5.16?using=adhoc&action=connect&property_Description=Connected%20using%20URI&property_ColorDepth=8
```
Connects to an ad hoc remote desktop connection with the computer name 192.168.5.16 and sets the property Description to "Connected using URI" and the property ColorDepth to 8 bit.