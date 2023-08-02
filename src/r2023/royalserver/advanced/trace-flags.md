---
uid: royalserver_advanced_traceflags
name: Trace Flags
order: 5050
---

# Trace Flags

Royal Server is using Trace Flags to fine tune its behavior. These are settings that can be tweaked that are too low-level to be integrated in the user interface. Most of the time they will be tweaked when you open a ticket and our support team needs more information on whats going on.

Trace Flags can be enabled in the application settings file (`%AppData%\RoyalServer\appsettings.json`):

```json
 {
     ...
     "TraceFlags": {
        ...
     }
    ...
 }
```

Add the Trace Flag to the section `TraceFlags` and set the value to `true` (`false` is the default value).

## List of supported Trace Flags

> [!NOTE]  
> Not all Trace Flags are available in all versions of Royal Server.

| Name                                              | Description                                                                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TRACEFLAG_POPULATE_PERFCOUNTER                    | Populate Royal Server Performance Counters                                                                                                                         |
| TRACEFLAG_LOG_PERFORMANCE_VALUES                  | Log Royal Server Performance Values                                                                                                                                |
| TRACEFLAG_LOG_REQUEST_BEGIN_END                   | Log start- and end-time for each request                                                                                                                           |
| TRACEFLAG_DISABLE_INTERNAL_PERFORMANCE_MONITORING | Disable Royal Server monitoring its own performance (Note: graphs on the Health won't work and the `TRACEFLAG_LOG_PERFORMANCE_VALUES` won't have accurate numbers) |
| TRACEFLAG_IS_MEMBER_OF_DEBUGLOG                   | Enables detailed log information for group membership resolutions                                                                                                  |
| TRACEFLAG_REBEX_DETAIL_LOG                        | Enables detailed log information for Secure Gateway connections                                                                                                    |
| TRACEFLAG_VALIDATE_CREDENTIALS                    | Uses a different way to authenticate Windows users ValidateCredentials() instead of Logon()                                                                        |
| TRACEFLAG_USE_NETWORK_AS_LOGON_TYPE               | Use Network as Logon Type                                                                                                                                          |
| TRACEFLAG_NON_ZERO_INITIAL_WINDOW_SIZE            | Secure Gateway (SSH) setting necessary in some environments                                                                                                        |
| TRACEFLAG_ACCOUNT_CACHE_DETAIL_LOG                | Detailed account cache logging                                                                                                                                     |
