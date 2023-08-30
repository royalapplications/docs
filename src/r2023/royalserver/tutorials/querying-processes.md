---
uid: royalserver_tutorials_querying-processes
name: Query Windows Processes
order: 11005
---
# Example: Query Windows Processes

[!include[components-list.md](../_shared/tutorials-setup.md)]

Then, click **Add** and **Royal Server**

![](~/images/RoyalServer/Tutorials/Querying_Processes_3.png)

Specify a Name and a Computer Name (which is the DNS name or IP of Royal Server)

![](~/images/RoyalServer/Tutorials/Querying_Processes_4.png)


**Using credentials for Royal Server**
Royal Server offers three components. 
- The Management Endpoint (used for managing servers by e.g. viewing Windows Events or listing Windows Processes) is based on HTTPs. 
-  The Document Store is used for working with Documents hosted by Royal Server and based on HTTPs. 
- The Secure Gatway is an SSH tunnel and can be used for connection types like Remote Desktop Connections or Terminal Connections. 

The Royal Server object supports both HTTPs (specify "Royal Server Credentials") and SSH tunnel access (specify "Secure Gateway Credentials") of Royal Server.

For this tutorial, we need to specify Royal Server Credentials:

![](~/images/RoyalServer/Tutorials/Querying_Processes_5.png)

These credentials are used to authenticate against Royal Server and the account needs to be a member of the "Royal Server Users" group to get access.

Now we have a way to use Royal Server for managing Windows Processes. 
Next, we create a **Windows Processes** connection:

![](~/images/RoyalServer/Tutorials/Querying_Processes_8.png)

Specify a Display Name and a Computer Name (which is the DNS name or IP of the server you want to manage the processes):

![](~/images/RoyalServer/Tutorials/Querying_Processes_9.png)

Specify a credential that can be used to connect and manage Windows Processes. These credentials are used to authenticate against the managed server (the one where we want to list the processes).

![](~/images/RoyalServer/Tutorials/Querying_Processes_10.png)

> [!NOTE]
> You don't need to specify passwords directly. There are [more flexible ways to specify a credential](xref:royalts_tutorials_credentials).

Next, specify the Royal Server that should be used for this Windows Processes connection:

![](~/images/RoyalServer/Tutorials/Querying_Processes_11.png)

> [!NOTE]
> If you do not specify a credential, Royal TS is trying to query the processes directly without Royal Server. Depending on your network configuration this might not work, e.g. when the managed server has an internal IP which is not accessible from Royal TS.

![](~/images/RoyalServer/Tutorials/Querying_Processes_11.png)

Right-click on the Windows Processes connection and click **Connect**.

![](~/images/RoyalServer/Tutorials/Querying_Processes_12.png)


> [!NOTE]
> When connecting for the first time, Royal TS is asking to validate thumbprint of the certificate. This helps to prevent man-in-the-middle attacks. [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack). ![](~/images/RoyalServer/Tutorials/Querying_Processes_13.png) The correct thumbprint is shown under in the Royal Server Configuration Tool under **Royal Server** -> **Service Configuration** -> **Primary Server Binding - Certificate**.

When connecting, the following steps are executed:
1. Royal TS connects via HTTPs to Royal Server and presentw the configured Royal Server credential
2. Royal Server checks the username and password and if the specified User is in the "Royal Server Users" group
3. Royal Server then executes the requested module (in this case the Windows Processes) and passes the host name and credential to it.
4. The Windows Processes module queries the processes remotely and returns the data to Royal Server
5. Royal Server returns the module data to Royal TS

![](~/images/RoyalServer/Tutorials/Querying_Processes_14.png)
