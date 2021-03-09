---
name: Application Settings
order: 5000
---

# Application Settings

Royal Server is providing advanced settings in the RoyalServer.exe.config file.

## Supported Settings:

| Name                             | Description                                                                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sg_allowed_encryption_algorithms | Limits the allowed encryption algorithms for the Secure Gateway.                                                                                               |
| sg_ssh_software_version          | In order to not leak the implementation of the Secure Gateway to provide hackers with additional information, the SSH software version can be configured here. |
| UserCachingInSeconds             | Caching time in seconds of group memberships for users are cached in Royal Server. Default is 300 (5 Minutes).                                                 |
