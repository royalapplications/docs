---
uid: royalserver_modules_terminal-services
name: Terminal Services Module
order: 8050
---

# Terminal Services Module

The Terminal Services Module allows you to work with Terminal Sessions.

## Features

- Get a list of Terminal Sessions
- Reset a session
- Restart the host server
- Send a message to a session

## Usage

Add a [Terminal Service](xref:royalts_reference_connections_terminal-services) connection in RoyalTS and assign a Royal Server object to it.

> [!NOTE]
> When a Remote Desktop Connection is selected in Royal TS/X, a Royal Server object is specified and the Dashboard is active, Royal TS/X tries to load the list of available Terminal Sessions from that server via Royal Server. 