---
order: 9940
name: JSON Schema
---

# JSON Schema

Here's the [JSON schema](https://json-schema.org/) to validate your JSON content against:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "RoyalJSONDocument",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "Name": {
      "type": [
        "null",
        "string"
      ]
    },
    "Objects": {
      "type": [
        "array",
        "null"
      ],
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
          "description": "Alias for ComputerName."
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
          "description": "The folder path of the object. This may be used as an alternative to nesting objects in Folder objects. The \"Path\" property takes precedence over folder nesting, so if both are used, the object will be placed in the folder pointed to by the \"Path\" property."
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
          "description": "Can be used to specify properties of the object that aren't exposed in the RoyalJSON object model. To be able to use this, knowledge of the RoyalDocument data model is required. Documentation is available here.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "CustomProperties": {
          "type": [
            "array",
            "null"
          ],
          "description": "The custom properties of the object. You can either pass in key/value pairs or an array of objects of type RoyalJSONCustomProperty. If using key/value pairs, the key will be the name of the custom property and the value will be its value. All custom properties specified that way will be of type “Text”. It’s not possible to specify a different type when using key/value pairs. If using an array of objects instead, specify the name of the custom property using \"Name\", the value using \"Value\" and the type using \"Type\" (Supported types are: Text, Protected, URL, Email, Address, Phone, Date, YesNo, Header)",
          "items": {
            "$ref": "#/definitions/RoyalJSONCustomProperty"
          }
        },
        "CredentialsFromParent": {
          "type": "boolean"
        },
        "CredentialsFromContextConnection": {
          "type": "boolean"
        },
        "CredentialID": {
          "type": [
            "null",
            "string"
          ]
        },
        "CredentialName": {
          "type": [
            "null",
            "string"
          ]
        },
        "Username": {
          "type": [
            "null",
            "string"
          ]
        },
        "Password": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeyFilePath": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeyFileContent": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeyFilePassphrase": {
          "type": [
            "null",
            "string"
          ]
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
          "items": {
            "$ref": "#/definitions/RoyalJSONObject"
          }
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
        },
        "Status": {
          "$ref": "#/definitions/RoyalJSONToDoStatus"
        },
        "NoConfirmationRequired": {
          "type": "boolean"
        },
        "CommandMac": {
          "type": [
            "null",
            "string"
          ]
        },
        "ArgumentsMac": {
          "type": [
            "null",
            "string"
          ]
        },
        "WorkingDirectoryMac": {
          "type": [
            "null",
            "string"
          ]
        },
        "CommandWindows": {
          "type": [
            "null",
            "string"
          ]
        },
        "ArgumentsWindows": {
          "type": [
            "null",
            "string"
          ]
        },
        "WorkingDirectoryWindows": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeySequence": {
          "type": [
            "null",
            "string"
          ]
        },
        "UseSSL": {
          "type": "boolean",
          "default": true
        },
        "SecureGatewayPort": {
          "type": "integer",
          "format": "int32"
        },
        "SecureGatewayCredentialID": {
          "type": [
            "null",
            "string"
          ]
        },
        "SecureGatewayCredentialName": {
          "type": [
            "null",
            "string"
          ]
        },
        "SecureGatewayUsername": {
          "type": [
            "null",
            "string"
          ]
        },
        "SecureGatewayPassword": {
          "type": [
            "null",
            "string"
          ]
        },
        "MACAddress": {
          "type": [
            "null",
            "string"
          ]
        },
        "WindowMode": {
          "$ref": "#/definitions/RoyalJSONWindowModes"
        },
        "ConsoleSession": {
          "type": "boolean"
        },
        "NLA": {
          "type": "boolean",
          "default": true
        },
        "ResizeMode": {
          "$ref": "#/definitions/RoyalJSONRemoteDesktopResizeModes"
        },
        "HyperVMode": {
          "$ref": "#/definitions/RoyalJSONRemoteDesktopHyperVModes"
        },
        "HyperVPort": {
          "type": "integer",
          "format": "int32"
        },
        "HyperVInstanceID": {
          "type": [
            "null",
            "string"
          ]
        },
        "UseEnhancedHyperVSessionMode": {
          "type": "boolean"
        },
        "RemoteDesktopGatewayComputerName": {
          "type": [
            "null",
            "string"
          ]
        },
        "RemoteDesktopGatewayCredentialsFromConnection": {
          "type": "boolean"
        },
        "RemoteDesktopGatewayUsername": {
          "type": [
            "null",
            "string"
          ]
        },
        "RemoteDesktopGatewayPassword": {
          "type": [
            "null",
            "string"
          ]
        },
        "RemoteDesktopGatewayCredentialID": {
          "type": [
            "null",
            "string"
          ]
        },
        "RemoteDesktopGatewayCredentialName": {
          "type": [
            "null",
            "string"
          ]
        },
        "TerminalConnectionType": {
          "$ref": "#/definitions/RoyalJSONTerminalConnectionTypes"
        },
        "SerialPortName": {
          "type": [
            "null",
            "string"
          ]
        },
        "BaudRate": {
          "type": "integer",
          "format": "int32"
        },
        "DataBits": {
          "type": "integer",
          "format": "int32",
          "default": 8
        },
        "Parity": {
          "$ref": "#/definitions/RoyalJSONSerialPortParity"
        },
        "StopBits": {
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
          ]
        },
        "FileTransferConnectionType": {
          "$ref": "#/definitions/RoyalJSONFileTransferConnectionTypes"
        },
        "PassiveMode": {
          "type": "boolean"
        },
        "TeamViewerConnectionType": {
          "$ref": "#/definitions/RoyalJSONTeamViewerConnectionTypes"
        },
        "UseCIM": {
          "type": "boolean"
        },
        "Script": {
          "type": [
            "null",
            "string"
          ]
        },
        "ConnectTaskFromParent": {
          "type": "boolean"
        },
        "ConnectTaskID": {
          "type": [
            "null",
            "string"
          ]
        },
        "ConnectTaskName": {
          "type": [
            "null",
            "string"
          ]
        },
        "DisconnectTaskFromParent": {
          "type": "boolean"
        },
        "DisconnectTaskID": {
          "type": [
            "null",
            "string"
          ]
        },
        "DisconnectTaskName": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeySequenceFromParent": {
          "type": "boolean"
        },
        "KeySequenceID": {
          "type": [
            "null",
            "string"
          ]
        },
        "KeySequenceName": {
          "type": [
            "null",
            "string"
          ]
        },
        "SecureGatewayFromParent": {
          "type": "boolean"
        },
        "SecureGatewayID": {
          "type": [
            "null",
            "string"
          ]
        },
        "RoyalServerFromParent": {
          "type": "boolean"
        },
        "RoyalServerID": {
          "type": [
            "null",
            "string"
          ]
        },
        "RemoteDesktopGatewayFromParent": {
          "type": "boolean"
        },
        "RemoteDesktopGatewayUsage": {
          "$ref": "#/definitions/RoyalJSONRemoteDesktopGatewayUsage"
        },
        "RemoteDesktopGatewayID": {
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
          "type": "string"
        },
        "Type": {
          "$ref": "#/definitions/RoyalJSONCustomPropertyTypes"
        },
        "Value": {
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
      ]
    },
    "Password": {
      "type": [
        "null",
        "string"
      ]
    },
    "KeyFilePath": {
      "type": [
        "null",
        "string"
      ]
    },
    "KeyFileContent": {
      "type": [
        "null",
        "string"
      ]
    },
    "KeyFilePassphrase": {
      "type": [
        "null",
        "string"
      ]
    }
  }
}
```