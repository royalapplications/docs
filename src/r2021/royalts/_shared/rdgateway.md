## ![](/images/RoyalTS/Application/SVG_PageRDSGateway_32.svg#img_header) Remote Desktop Gateway
The **Remote Desktop Gateway** page allows you to configure a Remote Desktop Gateway object for supported connections or choose to use a Remote Desktop Gateway configuration from the parent folder.

#### Use Remote Desktop Gateway from the parent folder
If checked, Royal TS will look for a configured Remote Desktop Gateway in the parent folder. This option is not available on the document level.

#### Gateway Usage:
- **Never**  
  The Remote Desktop Gateway is never used and Royal TS will directly connect to the remote computer.
- **Always**  
  The Remote Desktop Gateway is always used and Royal TS connect to the remote computer through the gateway.
- **On Demand**  
  The Remote Desktop Gateway will only be used if direct connection is not possible.

#### Direct Connect (No Gateway)
This is the default value. If selected, no Remote Desktop Gateway is used and Royal TS will directly connect to the remote computer.

#### Specify a Remote Desktop Gateway object
The selected Remote Desktop Gateway object is used for supported connections.