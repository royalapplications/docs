---
uid: royalserver_tutorials
name: Tutorials
order: 10700
---
# Tutorials

## Royal Server and Royal TS/X

Royal Server is in its very nature a Web Server and needs clients that talk to it. We support a variety of clients that can work with Royal Server:
1. [Royal TS (for Windows)](https://www.royalapps.com/ts/win/features)
2. [Royal TS (for macOS)](https://www.royalapps.com/ts/mac/features)
3. [Royal TS (for IOS)](https://www.royalapps.com/ts/ios/features)
3. [Royal TS (for Android)](https://www.royalapps.com/ts/android/features)
4. [Powershell Cmdlets](xref:scripting_serverps)

A set of basic terms need to be established before we describe some use cases for Royal Server and Royal TS/X:

**Managed Server**
A managed server is a machine, that is queried or managed by Royal Server Modules. You can, e.g. list all running processes or stop a Windows Service on a managed server. 

> [!NOTE]
> No deployment of software is needed to manage a server, though some [networking connectivity is required](xref:royalserver_advanced_management_scripts_prepare)

Basic usecase examples for working with Royal Server and Royal TS/X are:
1. [Querying the processes of a machine](xref:royalserver_tutorials_querying-processes)
2. [Creating an RDP connection using Royal Server](xref:royalserver_tutorials_creating-an-rdp-connection-using-royal-server)