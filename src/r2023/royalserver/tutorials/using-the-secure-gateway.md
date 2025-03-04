---
uid: royalserver_tutorials_secure-gateway
name: Using the Secure Gateway for a Terminal Connection
order: 11005
---
# Example: Using The Secure Gateway for a Terminal Connection

[!include[components-list.md](../_shared/tutorials-setup.md)]

[!include[components-list.md](../_shared/tutorials-setup-royalserverobject.md)]

> [!NOTE]
> The Secure Gateway can be used in the same way with either a Royal Server object or a Secure Gateway object.

Now we add a new **Terminal Connection**:

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_1.png)

Specify a **Display Name** and a **Computer Name** (the DNS name or IP address of the server you want to manage processes on).

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_2.png)

Specify the credentials to connect to and manage Windows processes. These credentials will be used to authenticate against the managed server, where the processes are listed.

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_3.png)


> [!NOTE]
> You don't need to specify passwords directly. There are [more flexible ways to specify a credential](xref:royalts_tutorials_credentials).

Next, specify the **Royal Server** to be used as a **Secure Gateway** for this Terminal connection.

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_4.png)

> [!NOTE]
> When specifying a Royal Server object, the Terminal connection does not connect directly to the host specified in Computer Name. Instead, it first establishes an SSH tunnel to the Royal Server host and then uses that tunnel to connect to the specified Computer Name host. 

> [!NOTE]
> When connecting for the first time, you may see a warning prompting you to verify the Royal Server by its fingerprint.
> ![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_5.png)
> The correct fingerprint can be found under General → Certificate Store in the Certificate Hash column for the selected certificate.
> Once saved, future connections will not prompt for this verification again.

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_9.png)

Having an open connection, you can monitor it in the **Configuration Tool**:

![](~/images/RoyalServer/Tutorials/Add_Terminal_Connection_8.png)
