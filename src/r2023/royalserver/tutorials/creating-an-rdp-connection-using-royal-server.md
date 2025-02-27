---
uid: royalserver_tutorials_creating-an-rdp-connection-using-royal-server
name: Creating an RDP Connection
order: 1
---
# Example: Creating an RDP connection that is using Royal Server

[!include[components-list.md](../_shared/tutorials-setup.md)]

[!include[components-list.md](../_shared/tutorials-setup-royalserverobject.md)]

Continue by adding a Remote Desktop Connection by clicking **Add** and **Remote Desktip Connection**.

![](~/images/RoyalServer/Tutorials/Creating_RDP_1.png)

Specify a Display Name and a Computer Name (which is the DNS name or IP of the server you want to connect to):

![](~/images/RoyalServer/Tutorials/Creating_RDP_2.png)

Specify a credential that can be used to connect to the server via RDP. These credentials are used to logon to the Windows machine you want to remotely connect to.

![](~/images/RoyalServer/Tutorials/Creating_RDP_3.png)

> [!NOTE]
> You don't need to specify passwords directly. There are [more flexible ways to specify a credential](xref:royalts_tutorials_credentials).

Now, in order to use Royal Server for the connection, specify a **Secure Gateway** object. This makes sure that Royal TS is not connecting directly to the server but through an SSH tunnel via Royal Server.

![](~/images/RoyalServer/Tutorials/Creating_RDP_5.png)

Note that you have to set the **Gateway Usage** to **Always** and select the previously created Royal Server object.

> [!NOTE]
> You might have noticed a configuration category called "Royal Server" on the RDP connection. This is not used for actually connecting via RDP but to show the currently open Terminal sessions open in the Dashboard tab (if open). You can leave this blank if you are not interested in the open Terminal Sessions on this server.

> [!NOTE]
> There is also a **Secure Gateway** object that can be used for connections to Royal Server. This type is only supported by connections that can use the Secure Gateway.

Right-click on the RDP connection and click **Connect**.

> [!NOTE]
> When connecting using a specifc Royal Server object (or a Secure Gateway object) for the first time, Royal TS is asking to validate thumbprint of the server certificate. This helps to prevent man-in-the-middle attacks. [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack). ![](~/images/RoyalServer/Tutorials/Querying_Processes_13.png) The correct thumbprint is shown under in the Royal Server Configuration Tool under **Royal Server** -> **Service Configuration** -> **Primary Server Binding - Certificate**.

The open Secure Gateway connection can be seen on the Royal Server Configuration Tool **General** -> **Health** view:

![](~/images/RoyalServer/Tutorials/Creating_RDP_7.png)