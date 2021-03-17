---
name: Trace Flags
order: 5000
---

# Trace Flags

Royal Server is using Trace Flags to fine tune its behavior. These are settings that can be tweaked that are too low-level to be integrated in the user interface.

Trace Flags can be enabled in the application configuration file (`RoyalServer.exe.config`):

```xml
 <appSettings>
     ...

     <add key="TraceFlag_1" value="true"/>

     <add key="TraceFlag_2" value="true"/>
     ...

 </appSettings>
```

Add the Trace Flag to the appSettings and set the value to "true" ("false" is default, any other value will be ignored)

## List of supported Trace Flags

| Name         | Description                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| TraceFlag_1  | Populate Royal Server Performance Counter                                                                                                    |
| TraceFlag_2  | Log Royal Server Performance Values                                                                                                          |
| TraceFlag_4  | Log start- and end-time for each request                                                                                                     |
| TraceFlag_5  | Disable Royal Server monitoring its own performance (Note: graphs on the Health won't work and the `TraceFlag_2` won't have accurate numbers |
| TraceFlag_6  | Triggers a garbage collection every 3 minutes                                                                                                |
| TraceFlag_7  | Use a synchronous authentication mechanism (instead of using the internal cache)                                                             |
| TraceFlag_8  | Enables detailed log information for group membership calculations                                                                           |
| TraceFlag_9  | Enables detailed log information for Secure Gateway connections                                                                              |
| TraceFlag_10 | Uses a different way to authenticate Windows users ValidateCredentials() instead of Logon()                                                  |

> [!NOTE]  
> Not all Trace Flags are available in all Versions of Royal Server.
