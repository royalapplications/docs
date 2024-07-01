---
uid: royalts_reference_azurebastion
name: Azure Bastion
order: 9975
---

## ![](/r2023/images/RoyalTS/Application/SVG_PageAzureBastionGateway_32.svg#img_header) Azure Bastion

Some connection types support connecting through a Azure Bastion Gatewway.

## Usage of Azure Bastion

The Azure Bastion Gateway can be used to access Azure computers with private IP addresses through a tunnel (port forwarding). Azure CLI tools including the Bastion extension is required to be installed on the system.

Once you created and set up an Azure Bastion Gateway, you can assign it on the **Secure Gateway** page of a Terminal (SSH) connection or Remote Desktop connection. Simply specify the resource ID in the **Computer Name** field or the private IP address if your Azure Bastion is configured to allow **IP-based connections**. 

## Requirements

### Azure Bastion
An Azure Bastion must be deployed with the following configuration:
- The SKU / Tier must be **Standard**
- **Native client support** must be enabled

### Local Machine
- The [Azure CLI tools](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) must be installed (`az` commands).
- The `bastion` [extenstion](https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-list) for the Azure CLI must be [installed](https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-overview#how-to-install-extensions).
- `az login` may be required to be called to authenticate your Azure account before you can use the Azure Bastion integration.

> [!Important]
> After installing the Azure CLI tools and the bastion extension, make sure you close and restart Royal TS.

At the core, Royal TS will use the installed Azure CLI to open a web socket with local portforwarding by calling the `az network bastion tunnel` command.

> [!Note]
> Be aware that using the Azure Bastion and switching the SKU to **Standard** comes with higher monthly costs in addition to bandwidh costs from the Azure side. Make sure you check the Azure pricing page for more information. Deploying a [Royal Server](xref:royalts_intro_royalserver) or an SSH server (Secure Gateway) may be more cost effective.

### Azure CLI Configuration
Since Azure CLI Version **2.61.0**, Microsoft changed a couple of things related to `az login` command. Make sure you read the [following](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively) and configure the CLI to avoid additional interaction in the CLI:
- Disable [**Subscription selector**](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively) by executing `az config set core.login_experience_v2=off`
- (Optional) Disable [**Sign in with Web Account Manager (WAM) on Windows**](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively#sign-in-with-web-account-manager-wam-on-windows) to always use your default web browser to sign in by executing `az config set core.enable_broker_on_windows=false`

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

## ![](/r2023/images/RoyalTS/Application/SVG_PageAdvanced_32.svg#img_header) Advanced

You can use this page to change advanced settings for the Azure Bastion Gateway.

### Azure Configuration Directory

The Azure configuration directory (AZURE_CONFIG_DIR environment variable) to use for this Bastion Gateway. If not specify (empty), Royal TS will use the default directory: %USERPROFILE%\\.azure

> [!Note]
> Environment variables and replacement tokens are supported.

### Additional Tunnel Arguments

Additional arguments to be passed on to the az CLI when the tunnel is created.

[!include[notes.md](~/royalts/_shared/notes.md)]
[!include[customproperties.md](~/royalts/_shared/customproperties.md)]
[!include[customfields.md](~/royalts/_shared/customfields.md)]
[!include[parentfolder.md](~/royalts/_shared/parentfolder.md)]
[!include[parentfolder-connection-warning.md](~/royalts/_shared/parentfolder-connection-warning.md)]
