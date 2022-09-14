---
name: How is Royal Server Working?
order: 10080
---

# How is Royal Server Working?

Royal Server consists of three components: the Management Endpoint, the Secure Gateway and the Document Store.
For the Management Endpoint and the Document Store component: Royal Server is based on HTTP/S and is using Windows security features like local users and groups to ensure proper authentication.

The Secure Gateway component is based on SSH standards.

![](/r2021/images/RoyalServer/screenshot_howroyalserverworks.png)

The basic flow of Management Endpoint connections works like this: Client devices like desktop computers running Royal TS/X or mobile devices running Royal TS for Android or iOS are accessing Royal Server over HTTP/S (possibly using a VPN tunnel). Royal Server itself is using different technologies to talk to the managed servers, depending on the used [component](./what-are-royal-server-components.md) and module. The Secure Gateway component is using a standards-based SSH connection.

### Royal Server is agentless
There is no need for the installation of an agent on the managed server. Nevertheless, the machine where Royal Server is running needs to be able to access the managed server over the network. Please check [Configuration of Managed Servers](./configuration.md#configuration-of-managed-servers) for details.

## Under the hood

Royal Server needs to query managed servers in order to get the required information (e.g. getting the list of Windows Services).

For this, there are two basic ways this can be done:

- using WMI
- using CIM


|Module                 |Protocol  |Remark                                                       |
|-----------------------|----------|-------------------------------------------------------------|
|Eventlog               |WMI/CIM   |user needs to have the rights to read the Windows eventlog   |
|Hyper-V                |WMI/CIM   |                                                             |
|Processes              |WMI/CIM   |                                                             |
|RoyalDocumentStore     |-         |internal module for Royal Server                             |
|RoyalServerManagement  |-         |internal module for Royal Server                             |
|Script                 |WMI/CIM   |PowerShell remoting for PS                                   |
|Terminal Services      |WTS API   |Proprietary protocol by Microsoft                            |
|Windows Services       |WMI/CIM   |                                                             |


### Using WMI

From [Wikipedia](http://en.wikipedia.org/wiki/Windows_Management_Instrumentation), the free encyclopedia:

> WMI (Windows Management Instrumentation) is a set of driver extensions to the Windows Driver Model that provides an operating system interface through which instrumented components provide information and notification.

WMI is Microsoft's implementation of Web-Based Enterprise Management (WBEM) and Common Information Model (CIM). It relies on a binary communication protocol that is using dynamic ports (TCP/135 for standard RPC and a randomly assigned port between 1024-65535 (for Windows 2003 and older) or 49152-65535 (for Windows 2008 and newer).


For details to prepare servers to be managed by Royal Server please check our [Pepare a Managed Server](./pepare-managed-server.md) script.