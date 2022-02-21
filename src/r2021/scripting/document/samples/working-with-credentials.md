---
uid: scripting_docs_samples_workingwithcredentials
name: Working with Credentials
order: 8970
---

# Working with Credentials

There is a couple of ways you can specify a credential for a connection or a folder. 
1. Do not use any credentials - no credentials are defined and the 
connection might ask for credentials
2. Use credentials from parent folder - this delegates the lookup for a 
credential to a parent folder int the current Royal Document
3. Specify username and password - stores the information directly on the connection
object
4. Use an existing credential - this references another credential via ID. This
ID is searched in all open documents in the current Royal Store. 
5. Specify a credential name - this references another credential via name. This
name is searched in all open documents in the current Royal Store.


Create a new connection

```powershell
################################################################################
# example: Do not specify any credentials
################################################################################
$exampleRDPConnection.CredentialMode = 0

################################################################################
# example: Specify username and password directly on the object itself 
################################################################################
$exampleRDPConnection.CredentialMode = 2
$exampleRDPConnection.CredentialUsername = "username"
$exampleRDPConnection.CredentialPassword = "secure-pwd"
$exampleRDPConnection.CredentialAutologon = $true

################################################################################
# example: Use Credential from parent folder
################################################################################
$exampleRDPConnection.CredentialFromParent = $true

################################################################################
# example: Use another Credential object (=reference it, it has to be open in 
# Royal TS/X / a RoyalStore)
################################################################################
$exampleRDPConnection.CredentialMode = 3
$exampleRDPConnection.CredentialId = "12345678-d89a-434e-b42d-ae3985f2ceb1"
# Royal TSX will omit the domain portion of the username
$exampleRDPConnection.CredentialOmitDomain = $false 
# Royal TSX will use it to logon automatically
$exampleRDPConnection.CredentialAutologon = $true 

################################################################################
# example: Specify a credential Name (=reference it, it has to be open in 
# Royal TS/X aka a RoyalStore)
################################################################################
$exampleRDPConnection.CredentialMode = 4
#any Name from a credential object
$exampleRDPConnection.CredentialName = "credential-name" 
# Royal TSX will omit the domain portion of the username
$exampleRDPConnection.CredentialOmitDomain = $false
# Royal TSX will use it to logon automatically 
$exampleRDPConnection.CredentialAutologon = $true 
```