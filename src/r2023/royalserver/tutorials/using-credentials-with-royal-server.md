---
uid: royalserver_tutorials_using-credentials
name: Using Credentials with Royal Server
order: 10701
---
# Types of credentials used with Royal Server

**Using credentials for Royal Server**

Royal Server offers three components. 
- The **Management Endpoint** (used for managing servers by e.g. viewing Windows Events or listing Windows Processes) is based on HTTPs. 
-  The **Document Store** is used for working with Documents hosted by Royal Server and based on HTTPs. 
- The **Secure Gatway is** an SSH tunnel and can be used for connection types like Remote Desktop Connections or Terminal Connections. 

The Royal Server object supports both HTTPs (specify "Royal Server Credentials") and SSH tunnel access (specify "Secure Gateway Credentials") of Royal Server.
