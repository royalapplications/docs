---
uid: scripting_docs_samples_workingwithcredentials
name: Working with Credentials
order: 8970
---

# Working with Credentials

There is a couple of ways you can specify a credential for a connection or a folder. 
1. Do not use any credentials - no credentials are defined and the 
connection might ask for credentials (See example 1)
2. Use credentials from parent folder - this delegates the lookup for a 
credential to a parent folder int the current Royal Document
3. Specify username and password - stores the information directly on the connection
object (see example 3)
4. Use an existing credential - this references another credential via ID. This
ID is searched in all open documents in the current Royal Store.  (see example 4)
5. Specify a credential name - this references another credential via name. This
name is searched in all open documents in the current Royal Store. (see example 5)


> [!NOTE]
> $exampleRDPConnection is an RDP connection object


### Example 1: Do not specify any credentials
```powershell
$exampleRDPConnection.CredentialMode = 0
```

###  Example 2: Use Credential from parent folder
```powershell
$exampleRDPConnection.CredentialFromParent = $true
```

### Example 3: Specify username and password directly on the object itself 
```powershell
$exampleRDPConnection.CredentialMode = 2
$exampleRDPConnection.CredentialUsername = "username"
$exampleRDPConnection.CredentialPassword = "secure-pwd"
$exampleRDPConnection.CredentialAutologon = $true
```

### Example 4: Use another Credential object (=reference it, it has to be open in Royal TS/X / a RoyalStore)
```powershell
$exampleRDPConnection.CredentialMode = 3
$exampleRDPConnection.CredentialId = "12345678-d89a-434e-b42d-ae3985f2ceb1"
# Royal TSX will omit the domain portion of the username
$exampleRDPConnection.CredentialOmitDomain = $false 
# Royal TSX will use it to logon automatically
$exampleRDPConnection.CredentialAutologon = $true 
```

### Example 5: Specify a credential Name (=reference it, it has to be open in Royal TS/X aka a RoyalStore)
```powershell
$exampleRDPConnection.CredentialMode = 4
#any Name from a credential object
$exampleRDPConnection.CredentialName = "credential-name" 
# Royal TSX will omit the domain portion of the username
$exampleRDPConnection.CredentialOmitDomain = $false
# Royal TSX will use it to logon automatically 
$exampleRDPConnection.CredentialAutologon = $true 
```