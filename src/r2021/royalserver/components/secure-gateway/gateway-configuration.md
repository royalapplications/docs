---
name: Gateway Configuration
order: 7040
---

# Gateway Configuration

<img src="/r2021/images/RoyalServer/PageSecureGateway_48x48.png" class="icon-def" alt="" />

The Gateway Configuration panel displays and changes the configuration of the Secure Gateway component of Royal Server.

## Show or Activate the Gateway Configuration Panel

In The Royal Server Configuration Navigation Bar, click on the Secure Gateway group and then on the Gateway Configuration entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Features

**Enable Royal Server Secure Gateway**

Enable or Disable the Secure Gateway.

**IP Address**

Specify the IP Address the Secure Gateway is binding to. Use this to IP Address to connect to the Secure Gateway - e.g. via Royal TS/X.

**Port**

Specify the Port the Secure Gateway is binding to. Default is 22.

> [!NOTE]
> The Secure Gateway is basically a SSH server with tunnel support. The default port of SSH is 22.  
> If you see a lot of SSH brute force attacks on Royal Server change the port to a non-standard one or use the "Only allow Royal TS/X as clients" setting.

**Timeout**

Specify the timeout of a Secure Gateway connection in seconds when the connection is idle.

**Max. Connections**

Specify the maximum number of connections the Secure Gateway is accepting.

**Use Compression**

Specify that the Secure Gateway supports compression of network traffic.

**Certificate**

The Secure Gateway is based on SSH and needs a certificate to work. During the installation of Royal Server a self-signed certificate with the name "RoyalServer-SecureGateway" is automatically installed. In the user interface, you can configure your own, issue a new one or export a certificate (this is useful when running Royal Server in a load balanced environment).
