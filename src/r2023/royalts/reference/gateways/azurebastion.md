---
uid: royalts_reference_azurebastion
name: Azure Bastion
order: 9975
---

## ![](/r2023/images/RoyalTS/Application/SVG_PageAzureBastionGateway_32.svg#img_header) Azure Bastion

Some connection types support connecting through a Azure Bastion Gatewway.

## Usage of Azure Bastion

The Azure Bastion Gateway can be used to access Azure computers with private IP addresses through a tunnel (port forwarding). Azure CLI tools including the Bastion extension is required to be installed on the system.

## Requirements

### Azure Bastion
An Azure Bastion must be deployed with the following configuration:
- The SKU / Tier must be **Standard**
- **Native client support** must be enabled

### Local Machine
- The Azure CLI tools must be installed (`az` commands)
- The `bastion` extenstion for the Azure CLI must be installed
- `az login` may be required to be called to authenticate your Azure account before you can use the Azure Bastion integration

At the core, Royal TS will use the installed Azure CLI to open a web socket with local portforwarding by calling the `az network bastion tunnel` command.

> [!Note]
> Be aware that using the Azure Bastion and switching the SKU to **Standard** comes with higher monthly costs in addition to bandwidh costs from the Azure side. Make sure you check the Azure pricing page for more information. Deploying a [Royal Server](xref:royalts_intro_royalserver) or an SSH server (Secure Gateway) may be more cost effective.

## Object Properties

The Azure Bastion Properties dialog is shown:

- for a new Azure Bastion object by clicking the **Azure Bastion** command in the **Add** group on the **Edit** ribbon tab.
- for an existing Azure Bastion objects by selecting an Azure Bastion object and clicking on the **Properties** command in the **Edit** group on the **Home** ribbon tab.
- as a bulk-edit dialog when multiple Azure Bastion objects were selected in the Folder / Document Dashboard and the **Properties** command in the **Edit** group on the **Home** ribbon tab is clicked. See also: [Bulk Operations](xref:royalts_tutorials_bulk)

## Azure Bastion Properties

The **Azure Bastion** page allows you to configure the name, subscription and resource group of the Azure Bastion Resource.

[!include[displayname.md](~/royalts/_shared/displayname.md)]

#### Bastion Name

Enter the name of the Azure Bastion resource.

#### Subscription

Optionally specify the name or ID of your Azure subscription.

#### Resource Group

Optionally specify the resource group.


[!include[description.md](~/royalts/_shared/description.md)]

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
