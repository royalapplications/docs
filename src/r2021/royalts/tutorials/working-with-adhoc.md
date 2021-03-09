---
uid: royaltsx_tutorials_adhoc
name: Working with Ad Hoc Connections
order: 9920
---

# Working with Ad Hoc Connections
An **Ad Hoc** connection is a temporary connection which, by default, will be removed from the **Navigation** panel when disconnected.

> [!Note]
> Ad Hoc connections are created in the **Ad Hoc folder** of the **Application** document and removed by default after the connection is disconnected. In case you want to keep an Ad Hoc connection, just drag the connection to one of your documents. In the [Options](xref:royalts_reference_options) you can configure Royal TS to not remove the Ad Hoc connection after disconnect. Note that all connections in the Ad Hoc folder are always automatically removed when Royal TS is closed.

To create an Ad Hoc connection use one of the following methods:

## Ad Hoc using the Ribbon
1.  On the **Home** tab, in the **Ad Hoc** group, enter a hostname/IP address/URL (depending on the connection type).
2.  Select the connection type using the **Connect** drop down button.
3.  Click on one of the **Default Settings** items to create an Ad Hoc connection based on the current Default Settings or click on one of the Templates (if available) to create an Ad Hoc connection based on the selected template.

> [!Tip]
> **Keyboard Usage**:  
> Press CTRL + SHIFT + A to focus the Ad Hoc connection field in the ribbon.  
> Pressing ENTER in the Ad Hoc field shows the drop down list to select a connection type or template.  
> Pressing CTRL + ENTER in the Ad Hoc field will use the previously used connection type or template.  
> **Protocol Identifier**:  
> You can optionally prefix the hostname/IP address with one of the supported protocol identifier (such as rdp:// or ssh://).  
> Pressing ENTER when using the protocol identifier, Royal TS will directly connect using the default settings of the specified connection type.  
> **Credential Picker**:  
> Use "?@" (without the double-quotes) as a prefix to your hostname/IP address/URL (after the protocol identifier, if specified) to indicate that you want to pick or specify a different credential for the connection.  
> Specifying ?@ in front of your URI will display a credential picker providing all credentials found in your current documents.  
> Specifying a name and ?@ (like "admin?@") in front of your URI will either filter your credentials in the credential picker dialog or pre-populate the username field with the name specified.
> **Port Setting**:  
> You can also specify the port in the URI string using a colon (computer1:3388) for supported connection types (Remote Desktop and Terminal connections). The port in the URI string will override the port configuration of the connection. 
>  
> Read our [online KB article](http://support.royalapplications.com/knowledgebase/articles/431107) for more information. |

## Ad Hoc using the Dashboard
1.  Select a connection from the **Default Settings** folder in the Application document or a Template connection in the **Navigation** panel.
2.  Enter a hostname/IP address/URL (depending on the connection type).
3.  Press **Enter** or click the **Connect** button in the text box.

## Ad Hoc from existing Connection
If you need to create multiple connections to the same host (often needed for the Terminal connection) you can also open additional Ad Hoc connections using your existing connections:
1.  In the **Navigation** panel, select a connection.
2.  Click on **Connect with Options**. You may also override some settings for the Ad Hoc connection (like Prompt for Credential or a different Window Mode).
3.  Click on **Connect Ad Hoc** to create an ad hoc connection based on the current selection.
