---
order: 9980
name: RoyalJSONObject
---

# RoyalJSONObject

## Type
- **Required**: Yes
- **Data Type**: Enumeration
- **Applies To**: All object types
- **Description**: The type of the object.
- **Supported Values**:
	- Folder
	- Credential
	- DynamicCredential
	- ToDo
	- CommandTask
	- KeySequenceTask
	- SecureGateway
	- RoyalServer
	- RemoteDesktopGateway
	- RemoteDesktopConnection
	- TerminalConnection
	- WebConnection
	- VNCConnection
	- FileTransferConnection
	- TeamViewerConnection
	- ExternalApplicationConnection
	- PerformanceConnection
	- VMwareConnection
	- HyperVConnection
	- WindowsEventsConnection
	- WindowsServicesConnection
	- WindowsProcessesConnection
	- TerminalServicesConnection
	- PowerShellConnection
- **Example**: `"Type": "Folder"`

## Name
- **Required**: Yes
- **Data Type**: String
- **Applies To**: All object types
- **Description**: The (display) name of the object.
- **Example**: `"Name": "My Folder"`