---
uid: royalserver_advanced_kestrel
name: Server Limits
order: 5055
---

# Server Limits

Royal Server leverages Kestrel, the cross-platform web server included with ASP.NET Core, to handle its Management Endpoint and Document Store functionality.

When interacting with the Document Store—specifically during document load or save operations—users may encounter size limitations. These occur because documents are transferred via HTTP through the Royal TS/X client, involving a download (when loading) and an upload (when saving).

By default, Kestrel imposes a limit on the maximum request body size, which can restrict the size of documents that can be uploaded. To allow larger documents, you can configure the MaxRequestBodySize property in the Kestrel server settings within the appsettings.json.

This file can be found at`%AppData%\RoyalServer\appsettings.json`

Please include a new configuration section in the appsettings.json file:  

```
{
  "Kestrel": {
    "Limits": {
      "MaxRequestBodySize": 104857600  // 100 MB
    }
  }
}
```

> [!NOTE]
> Restart Royal Server after updating the appsettings.json file.

For all available settings see [KestrelServerLimits](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.server.kestrel.core.kestrelserverlimits).

