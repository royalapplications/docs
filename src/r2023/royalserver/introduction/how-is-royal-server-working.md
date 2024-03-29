---
uid: royalserver_introduction_how-is-royal-server-working
name: How is Royal Server Working?
order: 10056
---

# How is Royal Server Working?

Royal Server consists of three components: the Management Endpoint, the Secure Gateway and the Document Store.
For the Management Endpoint and Document Store components: Royal Server is based on HTTP/S and uses Windows security features such as local users and groups to ensure proper authentication.

The Secure Gateway component is based on SSH standards.

![](/r2023/images/RoyalServer/screenshot_howroyalserverworks.png)

The basic flow of Management Endpoint connections is as follows: Client devices such as desktop computers running Royal TS/X or mobile devices running Royal TS for Android or iOS access Royal Server via HTTP/S (possibly using a VPN tunnel). Royal Server itself uses different technologies to communicate with the managed servers, depending on the [component](./what-are-royal-server-components.md) and module used. The Secure Gateway component uses a standards-based SSH connection.

### Royal Server is Agentless

There is no need to install an agent on the managed server. However, the machine running Royal Server must be able to access the managed server over the network. Please refer to [Configuration of Managed Servers](./configuration.md#configuration-of-managed-servers) for details.

Royal Server consists of three main components:

- Management Endpoint (a way to manage servers remotely)
- Document Store (hosts Royal documents and shares them with the team)
- Secure Gateway (enables secure SSH based communication with your servers)

## Under the Hood - Management Endpoint

Royal Server needs to query managed servers to get the information it needs (e.g. to get the list of Windows services).

There are two basic ways to do this:

- Using WMI
- Using CIM

[!include[module-protocols.md](../_shared/module-protocols.md)]

> [!NOTE]
> Using WMI
> From [Wikipedia](http://en.wikipedia.org/wiki/Windows_Management_Instrumentation), the free encyclopedia:
>
> WMI (Windows Management Instrumentation) is a set of driver extensions to the Windows Driver Model that provides an operating system
> interface through which instrumented components provide information and notification.
>
> WMI is Microsoft's implementation of Web-Based Enterprise Management (WBEM) and Common Information Model (CIM). It relies on a binary
> communication protocol that is using dynamic ports (TCP/135 for > standard RPC and a randomly assigned port between 1024-65535
> (for Windows 2003 and older) or 49152-65535 (for Windows 2008 and newer).
>
> For details to prepare servers to be managed by Royal Server please check our [Prepare a Managed Server](xref:royalserver_advanced_management_scripts_prepare) script.

## Under the Hood - Document Store

The Document Store component is based on HTTPs/SSL communication between Royal TS/X and Royal Server. Check the
[Service Configuration](xref:royalserver_management_service-configuration) and [Security Configuration](xref:royalserver_management_security-configuration) for
more details.

## Under the Hood - Secure Gateway

Secure Gateway connections are based on SSH. Check [Gateway Configuration](xref:royalserver_components_secure-gateway_gateway-configuration) and
[Gateway Security Configuration](xref:royalserver_components_secure-gateway_gateway-security-configuration) for more details.
