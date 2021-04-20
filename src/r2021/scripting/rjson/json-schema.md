---
order: 9910
name: JSON Schema
---

# JSON Schema

Here's the [JSON schema](https://json-schema.org/) to validate your JSON content against:

## [RoyalJSONDocument](available-properties/royaljsondocument.md)

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "RoyalJSONDocument",
  "type": "object",
  "description": "Root Element",
  "additionalProperties": false,
  "properties": {
    "Name": {
      "type": [
        "null",
        "string"
      ],
      "description": "The (display) name of the document if the rJSON is opened via a \".rjson\" file. If not specified, the filename is used as the document name instead."
    },
    "Objects": {
      "type": [
        "array",
        "null"
      ],
      "description": "An array of objects that will be direct descendants of the dynamic folder or rJSON document.",
      "items": {
        "$ref": "#/definitions/RoyalJSONObject"
      }
    }
  },
  "definitions": {
    "RoyalJSONObject": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "Type",
        "Name"
      ],
      "properties": {
        "Type": {
          "description": "The type of the object.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONObjectTypes"
            }
          ]
        },
        "Name": {
          "type": "string",
          "description": "The (display) name of the object."
        },
        "ID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the ID of the resulting object. If you pass in any other string, a GUID will be generated for the object and the string you pass in will be stored as external ID."
        },
        "ComputerName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The computer name (IP address/FQDN) of this object. Can also be used to set the URL of web connections and credentials."
        },
        "URL": {
          "type": [
            "null",
            "string"
          ],
          "description": "Alias for [ComputerName](#computername)."
        },
        "Port": {
          "type": "integer",
          "description": "The port of this object.",
          "format": "int32"
        },
        "Description": {
          "type": [
            "null",
            "string"
          ],
          "description": "The description of the object."
        },
        "Favorite": {
          "type": "boolean",
          "description": "Specifies whether or not the object is a favorite."
        },
        "ColorFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not the object gets its color from its parent."
        },
        "Color": {
          "type": [
            "null",
            "string"
          ],
          "description": "The color of the object, specified as Hex (HTML) color (i.e. #FFFFFF for white)."
        },
        "IconName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The icon library icon name of the object."
        },
        "Notes": {
          "type": [
            "null",
            "string"
          ],
          "description": "The notes of the object."
        },
        "Path": {
          "type": [
            "null",
            "string"
          ],
          "description": "The folder path of the object. This may be used as an alternative to nesting objects in Folder objects. The [`Path`](#path) property takes precedence over folder nesting, so if both are used, the object will be placed in the folder pointed to by the [`Path`](#path) property."
        },
        "CustomField1": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 1 (non-protected)."
        },
        "CustomField2": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 2 (non-protected)."
        },
        "CustomField3": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 3 (non-protected)."
        },
        "CustomField4": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 4 (non-protected)."
        },
        "CustomField5": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 5 (non-protected)."
        },
        "CustomField6": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 6 (non-protected)."
        },
        "CustomField7": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 7 (non-protected)."
        },
        "CustomField8": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 8 (non-protected)."
        },
        "CustomField9": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 9 (non-protected)."
        },
        "CustomField10": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 10 (non-protected)."
        },
        "CustomField11": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 11 (protected)."
        },
        "CustomField12": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 12 (protected)."
        },
        "CustomField13": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 13 (protected)."
        },
        "CustomField14": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 14 (protected)."
        },
        "CustomField15": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 15 (protected)."
        },
        "CustomField16": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 16 (protected)."
        },
        "CustomField17": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 17 (protected)."
        },
        "CustomField18": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 18 (protected)."
        },
        "CustomField19": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 19 (protected)."
        },
        "CustomField20": {
          "type": [
            "null",
            "string"
          ],
          "description": "Custom Field 20 (protected)."
        },
        "Properties": {
          "type": [
            "null",
            "object"
          ],
          "description": "Can be used to specify properties of the object that aren't exposed in the RoyalJSON object model. To be able to use this, knowledge of the RoyalDocument data model is required. Documentation is [available here](~/scripting/objects/index.md).",
          "additionalProperties": {
            "type": "string"
          }
        },
        "CustomProperties": {
          "type": [
            "array",
            "object",
            "null"
          ],
          "description": "The custom properties of the object. You can either pass in key/value pairs or an array of objects of type RoyalJSONCustomProperty. If using key/value pairs, the key will be the name of the custom property and the value will be its value. All custom properties specified that way will be of type `Text`. It's not possible to specify a different type when using key/value pairs. If using an array of objects instead, specify the name of the custom property using `Name`, the value using `Value` and the type using `Type` (Supported types are: `Text`, `Protected`, `URL`, `Email`, `Address`, `Phone`, `Date`, `YesNo`, `Header`)",
          "items": {
            "$ref": "#/definitions/RoyalJSONCustomProperty"
          }
        },
        "CredentialsFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the credentials of the parent folder."
        },
        "CredentialsFromContextConnection": {
          "type": "boolean",
          "description": "Specifies whether or not to use the credentials of the context connection."
        },
        "CredentialID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the credential that is assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "CredentialName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the credential that is assigned to this object."
        },
        "Username": {
          "type": [
            "null",
            "string"
          ],
          "description": "The username of this object."
        },
        "Password": {
          "type": [
            "null",
            "string"
          ],
          "description": "The password of this object."
        },
        "KeyFilePath": {
          "type": [
            "null",
            "string"
          ],
          "description": "The private key file path of this object."
        },
        "KeyFileContent": {
          "type": [
            "null",
            "string"
          ],
          "description": "The content of the private key file of this object."
        },
        "KeyFilePassphrase": {
          "type": [
            "null",
            "string"
          ],
          "description": "The passphrase of this object's private key file."
        },
        "AutoFillElements": {
          "type": [
            "array",
            "null"
          ],
          "description": "The auto fill elements for the credential or web connection.",
          "items": {
            "$ref": "#/definitions/RoyalJSONAutoFillElement"
          }
        },
        "AutoFillDelay": {
          "type": "integer",
          "description": "The delay in milliseconds before the auto fill script is executed.",
          "format": "int32",
          "default": 200
        },
        "RetryAutoFillUntilSuccess": {
          "type": "boolean",
          "description": "Whether or not auto fill is retried until all fields have been found."
        },
        "Objects": {
          "type": [
            "array",
            "null"
          ],
          "description": "An array of objects that will be direct descendants of the current folder.",
          "items": {
            "$ref": "#/definitions/RoyalJSONObject"
          }
        },
        "Status": {
          "description": "The status of this To-Do item.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONToDoStatus"
            }
          ]
        },
        "NoConfirmationRequired": {
          "type": "boolean",
          "description": "Specifies whether or not user confirmation is required to run this task."
        },
        "CommandMac": {
          "type": [
            "null",
            "string"
          ],
          "description": "The command this task executes on macOS."
        },
        "ArgumentsMac": {
          "type": [
            "null",
            "string"
          ],
          "description": "The arguments required to run this task on macOS."
        },
        "WorkingDirectoryMac": {
          "type": [
            "null",
            "string"
          ],
          "description": "The working directory of this task for macOS."
        },
        "CommandWindows": {
          "type": [
            "null",
            "string"
          ],
          "description": "The command this task executes on Windows."
        },
        "ArgumentsWindows": {
          "type": [
            "null",
            "string"
          ],
          "description": "The arguments required to run this task on Windows."
        },
        "WorkingDirectoryWindows": {
          "type": [
            "null",
            "string"
          ],
          "description": "The working directory of this task for Windows."
        },
        "KeySequence": {
          "type": [
            "null",
            "string"
          ],
          "description": "The key sequence that will be executed before the connection is established if set on a connection or a folder. The key sequence that the key sequence task executes if set on a key sequence task object."
        },
        "UseSSL": {
          "type": "boolean",
          "description": "Specifies whether or not to use SSL for this object.",
          "default": true
        },
        "SecureGatewayPort": {
          "type": "integer",
          "description": "The Secure Gateway port.",
          "format": "int32"
        },
        "SecureGatewayCredentialID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the credential that is assigned to the Secure Gateway. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Secure Gateway Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "SecureGatewayCredentialName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the credential that is assigned to the Secure Gateway."
        },
        "SecureGatewayUsername": {
          "type": [
            "null",
            "string"
          ],
          "description": "The username of the Secure Gateway."
        },
        "SecureGatewayPassword": {
          "type": [
            "null",
            "string"
          ],
          "description": "The password of the Secure Gateway."
        },
        "MACAddress": {
          "type": [
            "null",
            "string"
          ],
          "description": "The physical (MAC) address of this connection."
        },
        "WindowMode": {
          "description": "The window mode of this connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONWindowModes"
            }
          ]
        },
        "ConsoleSession": {
          "type": "boolean",
          "description": "Specifies whether or not to connect to the console/admin session of this Remote Desktop connection."
        },
        "NLA": {
          "type": "boolean",
          "description": "Specifies whether or not to use NLA (Network Level Authentication) for this Remote Desktop connection.",
          "default": true
        },
        "ResizeMode": {
          "description": "The resize mode of this Remote Desktop connection.",
          "default": "SmartReconnect",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONRemoteDesktopResizeModes"
            }
          ]
        },
        "HyperVMode": {
          "description": "The Hyper-V mode of this Remote Desktop connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONRemoteDesktopHyperVModes"
            }
          ]
        },
        "HyperVPort": {
          "type": "integer",
          "description": "The Hyper-V port of this Remote Desktop Connection.",
          "format": "int32"
        },
        "HyperVInstanceID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The Hyper-V Instance ID (VM ID) of this Remote Desktop connection."
        },
        "UseEnhancedHyperVSessionMode": {
          "type": "boolean",
          "description": "Specifies whether or not to use enhanced Hyper-V session mode for this Remote Desktop connection."
        },
        "RemoteDesktopGatewayComputerName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The computer name (IP address/FQDN) of the Remote Desktop Gateway."
        },
        "RemoteDesktopGatewayCredentialsFromConnection": {
          "type": "boolean",
          "description": "Specifies whether or not to use the credentials of the connection for the Remote Desktop Gateway."
        },
        "RemoteDesktopGatewayUsername": {
          "type": [
            "null",
            "string"
          ],
          "description": "The username of the Remote Desktop Gateway."
        },
        "RemoteDesktopGatewayPassword": {
          "type": [
            "null",
            "string"
          ],
          "description": "The password of the Remote Desktop Gateway."
        },
        "RemoteDesktopGatewayCredentialID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the credential that is assigned to the Remote Desktop Gateway. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Remote Desktop Gateway Credential ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "RemoteDesktopGatewayCredentialName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the credential that is assigned to the Remote Desktop Gateway."
        },
        "TerminalConnectionType": {
          "description": "The connection type of this terminal connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONTerminalConnectionTypes"
            }
          ]
        },
        "SerialPortName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The serial port name of this terminal connection."
        },
        "BaudRate": {
          "type": "integer",
          "description": "The baud rate of the serial port connection.",
          "format": "int32"
        },
        "DataBits": {
          "type": "integer",
          "description": "The standard length of data bits per byte of the serial port connection.",
          "format": "int32",
          "default": 8
        },
        "Parity": {
          "description": "The parity bit for the serial port connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONSerialPortParity"
            }
          ]
        },
        "StopBits": {
          "description": "The number of stop bits used for the serial port connection.",
          "default": "One",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONSerialPortStopBits"
            }
          ]
        },
        "CustomCommand": {
          "type": [
            "null",
            "string"
          ],
          "description": "The custom command of this terminal connection."
        },
        "FileTransferConnectionType": {
          "description": "The connection type of this file transfer connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONFileTransferConnectionTypes"
            }
          ]
        },
        "PassiveMode": {
          "type": "boolean",
          "description": "Specifies whether or not to use passive mode for this FTP file transfer connection."
        },
        "TeamViewerConnectionType": {
          "description": "The connection type of this TeamViewer connection.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONTeamViewerConnectionTypes"
            }
          ]
        },
        "UseCIM": {
          "type": "boolean",
          "description": "Specifies whether or not to use CIM for this management connection."
        },
        "Script": {
          "type": [
            "null",
            "string"
          ],
          "description": "The script of this PowerShell connection."
        },
        "ConnectTaskFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the connect task from the parent folder of this object."
        },
        "ConnectTaskID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the command task that is to be assigned to this object as connect task. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Connect Task ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "ConnectTaskName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the command task that is to be assigned to this object as connect task."
        },
        "DisconnectTaskFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the disconnect task from the parent folder of this object."
        },
        "DisconnectTaskID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the command task that is to be assigned to this object as disconnect task. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Disconnect Task ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "DisconnectTaskName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the command task that is to be assigned to this object as disconnect task."
        },
        "KeySequenceFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the connect key sequence from the parent folder of this object."
        },
        "KeySequenceID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the key sequence task that is to be assigned to this object as connect key sequence. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Key Sequence ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "KeySequenceName": {
          "type": [
            "null",
            "string"
          ],
          "description": "The name of the key sequence task that is to be assigned to this object as connect key sequence."
        },
        "SecureGatewayFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the Secure Gateway from the parent folder of this object."
        },
        "SecureGatewayID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the Secure Gateway that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Secure Gateway ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "SecureGatewayUsage": {
          "description": "Specifies how the assigned Secure Gateway should be used.",
          "default": "Always",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONSecureGatewayUsage"
            }
          ]
        },
        "RoyalServerFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the Royal Server from the parent folder of this object."
        },
        "RoyalServerID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the Royal Server that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Royal Server ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "RemoteDesktopGatewayFromParent": {
          "type": "boolean",
          "description": "Specifies whether or not to use the Remote Desktop Gateway from the parent folder of this object."
        },
        "RemoteDesktopGatewayUsage": {
          "description": "The usage mode of the Remote Desktop Gateway.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONRemoteDesktopGatewayUsage"
            }
          ]
        },
        "RemoteDesktopGatewayID": {
          "type": [
            "null",
            "string"
          ],
          "description": "The ID of the Remote Desktop Gateway that is to be assigned to this object. This can either be a GUID (formatted as string) or any other generic string. If you pass in a GUID it will be directly used to set the Remote Desktop Gateway ID of the resulting object. No validation is performed in this case. If you pass in any other string, the external to internal ID mapping table will be searched for a match. If no match is found, the property will be ignored. Otherwise the internal ID will be used to reference the credential."
        },
        "ScriptInterpreter": {
          "type": [
            "null",
            "string"
          ]
        },
        "DynamicCredentialScriptInterpreter": {
          "type": [
            "null",
            "string"
          ]
        },
        "DynamicCredentialScript": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "RoyalJSONObjectTypes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "__Unknown",
        "Folder",
        "DynamicFolder",
        "Credential",
        "DynamicCredential",
        "ToDo",
        "CommandTask",
        "KeySequenceTask",
        "SecureGateway",
        "RoyalServer",
        "RemoteDesktopGateway",
        "RemoteDesktopConnection",
        "TerminalConnection",
        "WebConnection",
        "VNCConnection",
        "FileTransferConnection",
        "TeamViewerConnection",
        "ExternalApplicationConnection",
        "PerformanceConnection",
        "VMwareConnection",
        "HyperVConnection",
        "WindowsEventsConnection",
        "WindowsServicesConnection",
        "WindowsProcessesConnection",
        "TerminalServicesConnection",
        "PowerShellConnection"
      ],
      "enum": [
        "__Unknown",
        "Folder",
        "DynamicFolder",
        "Credential",
        "DynamicCredential",
        "ToDo",
        "CommandTask",
        "KeySequenceTask",
        "SecureGateway",
        "RoyalServer",
        "RemoteDesktopGateway",
        "RemoteDesktopConnection",
        "TerminalConnection",
        "WebConnection",
        "VNCConnection",
        "FileTransferConnection",
        "TeamViewerConnection",
        "ExternalApplicationConnection",
        "PerformanceConnection",
        "VMwareConnection",
        "HyperVConnection",
        "WindowsEventsConnection",
        "WindowsServicesConnection",
        "WindowsProcessesConnection",
        "TerminalServicesConnection",
        "PowerShellConnection"
      ]
    },
    "RoyalJSONCustomProperty": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "Name",
        "Type"
      ],
      "properties": {
        "Name": {
          "type": "string",
          "description": "The (display) name of the custom property."
        },
        "Type": {
          "description": "The type of the custom property.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONCustomPropertyTypes"
            }
          ]
        },
        "Value": {
          "description": "The value of the custom property.",
          "oneOf": [
            {},
            {
              "type": "null"
            }
          ]
        }
      }
    },
    "RoyalJSONCustomPropertyTypes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Text",
        "Protected",
        "URL",
        "Email",
        "Address",
        "Phone",
        "Date",
        "YesNo",
        "Header"
      ],
      "enum": [
        "Text",
        "Protected",
        "URL",
        "Email",
        "Address",
        "Phone",
        "Date",
        "YesNo",
        "Header"
      ]
    },
    "RoyalJSONAutoFillElement": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "Element"
      ],
      "properties": {
        "Element": {
          "type": "string",
          "description": "The selector for the auto fill element."
        },
        "Action": {
          "description": "The type of action to perform on this auto fill element.",
          "oneOf": [
            {
              "$ref": "#/definitions/RoyalJSONAutoFillElementActions"
            }
          ]
        },
        "Value": {
          "type": [
            "null",
            "string"
          ],
          "description": "The value to fill the element with."
        }
      }
    },
    "RoyalJSONAutoFillElementActions": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Fill",
        "Click",
        "Focus"
      ],
      "enum": [
        "Fill",
        "Click",
        "Focus"
      ]
    },
    "RoyalJSONToDoStatus": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Active",
        "Completed"
      ],
      "enum": [
        "Active",
        "Completed"
      ]
    },
    "RoyalJSONWindowModes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Embedded",
        "External",
        "FullScreen"
      ],
      "enum": [
        "Embedded",
        "External",
        "FullScreen"
      ]
    },
    "RoyalJSONRemoteDesktopResizeModes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "ScrollBars",
        "SmartSizing",
        "SmartReconnect"
      ],
      "enum": [
        "ScrollBars",
        "SmartSizing",
        "SmartReconnect"
      ]
    },
    "RoyalJSONRemoteDesktopHyperVModes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "None",
        "HyperVHost",
        "HyperVInstance"
      ],
      "enum": [
        "None",
        "HyperVHost",
        "HyperVInstance"
      ]
    },
    "RoyalJSONTerminalConnectionTypes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "SSH",
        "Telnet",
        "SerialPort",
        "CustomTerminal"
      ],
      "enum": [
        "SSH",
        "Telnet",
        "SerialPort",
        "CustomTerminal"
      ]
    },
    "RoyalJSONSerialPortParity": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "None",
        "Odd",
        "Even",
        "Mark",
        "Space"
      ],
      "enum": [
        "None",
        "Odd",
        "Even",
        "Mark",
        "Space"
      ]
    },
    "RoyalJSONSerialPortStopBits": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "None",
        "One",
        "Two",
        "OnePointFive"
      ],
      "enum": [
        "None",
        "One",
        "Two",
        "OnePointFive"
      ]
    },
    "RoyalJSONFileTransferConnectionTypes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "FTP",
        "FTPWithImplicitSSL",
        "FTPWithExplicitTLSSSL",
        "SFTP",
        "SCP"
      ],
      "enum": [
        "FTP",
        "FTPWithImplicitSSL",
        "FTPWithExplicitTLSSSL",
        "SFTP",
        "SCP"
      ]
    },
    "RoyalJSONTeamViewerConnectionTypes": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "RemoteControl",
        "FileTransfer",
        "Meeting",
        "VPN",
        "ManagementConsole",
        "PromptForType"
      ],
      "enum": [
        "RemoteControl",
        "FileTransfer",
        "Meeting",
        "VPN",
        "ManagementConsole",
        "PromptForType"
      ]
    },
    "RoyalJSONSecureGatewayUsage": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Never",
        "Always",
        "OnDemand"
      ],
      "enum": [
        "Never",
        "Always",
        "OnDemand"
      ]
    },
    "RoyalJSONRemoteDesktopGatewayUsage": {
      "type": "string",
      "description": "",
      "x-enumNames": [
        "Never",
        "Always",
        "OnDemand"
      ],
      "enum": [
        "Never",
        "Always",
        "OnDemand"
      ]
    }
  }
}
```

## [RoyalJSONDynamicCredential](available-properties/royaljsondynamiccredential.md)

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "RoyalJSONDynamicCredential",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "Username": {
      "type": [
        "null",
        "string"
      ],
      "description": "The username of this object."
    },
    "Password": {
      "type": [
        "null",
        "string"
      ],
      "description": "The password of this object."
    },
    "KeyFilePath": {
      "type": [
        "null",
        "string"
      ],
      "description": "The private key file path of this object."
    },
    "KeyFileContent": {
      "type": [
        "null",
        "string"
      ],
      "description": "The content of the private key file of this object."
    },
    "KeyFilePassphrase": {
      "type": [
        "null",
        "string"
      ],
      "description": "The passphrase of this object's private key file."
    }
  }
}
```