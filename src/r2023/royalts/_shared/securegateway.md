## ![](/r2023/images/RoyalTS/Application/SVG_PageSecureGateway_32.svg#img_header) Secure Gateway

The **Secure Gateway** page allows you to configure a Secure Gateway object for supported connections or choose to use a Secure Gateway configuration from the parent folder.

#### Use Secure Gateway from the parent folder

If checked, Royal TS will look for a configured Secure Gateway in the parent folder. This option is not available on the document level.

#### Gateway Usage

- **Never**  
  The Secure Gateway is never used and Royal TS will directly connect to the remote computer.
- **Always**  
  The Secure Gateway is always used and Royal TS will tunnel all communication to the remote computer through the gateway.
- **On Demand**  
  The Secure Gateway will be used if the target machine cannot be reached directly.

#### Direct Connect (No Secure Gateway)

This is the default value. If selected, no Secure Gateway is used and Royal TS will directly connect to the remote computer.

#### Specify a Secure Gateway object

The selected Secure Gateway object is used for supported connections.

> [!Note]
> A Secure Gateway is a component included in Royal Server and can be used to connect through an SSH tunnel (port forwarding).

[!include[inheritance-editsource.md](~/royalts/_shared/inheritance-editsource.md)]

See also: [Introducing Royal Server](xref:royalts_intro_royalserver)
