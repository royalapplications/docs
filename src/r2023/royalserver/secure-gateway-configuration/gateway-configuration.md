---
uid: royalserver_components_secure-gateway_gateway-configuration
name: Secure Gateway Configuration
order: 7240
---

<img src="/r2023/images/RoyalServer/Svg/SVG_SecureGateway_32.svg" class="icon-left icon-lg" alt="" />

# Gateway Configuration

The Gateway Configuration panel displays and changes the configuration of the Secure Gateway component of Royal Server.

## Show or Activate the Gateway Configuration Panel

In The Royal Server Configuration Tool Navigation Bar, click on the **Secure Gateway** group and then on the **Secure Gateway Configuration** entry.

> [!NOTE]
> Any change in this panel requires a restart of Royal Server.

## Features

**Enable Royal Server Secure Gateway**

If checked, the Secure Gateway Component is active.

**Use Compression**

Specify that the Secure Gateway supports compression of network traffic.

**Timeout (in sec)**

Specify the timeout of a Secure Gateway connection in seconds when the connection is idle.
Setting the value to 0 disables closing idle sessions. The minimum allowed duration is 30 seconds.

**Max. Connections**

Specify the maximum number of concurrent open connections the Secure Gateway is accepting.

**Certificate**

The Secure Gateway is based on SSH and needs a certificate to work. During the installation of Royal Server a self-signed certificate with the name "RoyalServer-SecureGateway" is automatically installed. Alternatively, you can configure your own certificate, issue a new one or export a certificate.

> [!NOTE]
> If you plan to use Royal Server in a load balanced environment, you need to make sure that all Royal Servers are using the same certificate for the Secure Gateway.
> If this is not the case, Royal TS/X clients will issue a changed Thumbprint warning each time the load balancer routs to a different Royal Server installation.

**Primary Secure Gateway Binding**

Specify the IP Address and Port the Secure Gateway is binding to. Use this to IP Address to connect to the Secure Gateway - e.g. via Royal TS/X. By default, the unspecified address (0.0.0.0) is assigned .i.e it listens on all available IP4 addresses.

> [!NOTE]
> The Secure Gateway is basically a SSH server with tunnel support. The default port of SSH is 22.  
> If your Royal Server is reachable over the internet and you see a lot of SSH brute force attacks harden the [security configuration of Royal Server](./gateway-security-configuration.md).

**Additional Bindings**

Additionally to the Primary Binding you can specify Additional Bindings. These can be disabled, edited or deleted.

**Advanced Performance Configuration Settings**

Tweaking the settings below may occasionally increase transfer speed.

> [!NOTE]
> These settings can only be applied by editing the section `SecureGateway` in `%AppData%\RoyalServer\appsettings.json`.

- _ReceiveBuffer_: Optionally, set a value (in bytes) that specifies the size of the buffer for incoming data. Default value is null.
- _SendBuffer_: Optionally, set a value (in bytes) that specifies the size of the buffer for outgoing data. Default value is null.
- _UseLargeBuffers_: If true, large buffers will be applied for send and receive, if not explicitly configured otherwise. Default value is false.
