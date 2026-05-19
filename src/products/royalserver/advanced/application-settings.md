---
name: Application Settings
order: 5090
---

# Application Settings

As of Royal Server V4 advanced settings can be configured in `%ProgramData%\RoyalServer\appsettings.json`.

> [!NOTE]
> Whenever you make changes in the places mentioned below, it's best to stop Royal Server and start it again.

## Supported Settings

**Royal Server Database**
For more complex settings like the Document Access Rules or Multi-Factor configurations, Royal Server is using a database. This can be configured within the Node **Database** with the following settins:

| Name                          | Value                                   |
| ------------------------------------------ | ------------------------------------------------- |
| ConnectionType              | 0=Direct, 1=Shared                              |
| ReloadDatabaseOnChange              | DB Changes are reloaded periodically                              |
| ReloadDatabaseOnChangeDelay              | Timespan, e.g. "00:00:05" i.e 5 seconds.                             |

<br>

**Custom Headers**
Some environments with tight security require additional HTTP Header to be sent back by Royal Server.
You can specify these within the node **CustomHeaders**:

| Name  | Value  | Disabled  |
|---|---|---|
| Cache-Control  | private,max-age=31536000  | false  |
| Set-Cookie  | Secure;HttpOnly  | false |
| X-Frame-Options  | SAMEORIGIN  | false  |
| X-Content-Type-Options  | nosniff  | false  |

Remark: The previous settings are possible Header values, adjust to your liking.




<br>

| Name                                            | Description                                                                                                                                                                   | Value(s)                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UserCachingInSeconds (Royal Server v3 only)     | Time in seconds for which group memberships for users cached in Royal Server v3.                                                                                              | Default is 300 (5 Minutes)                                                                                                                                                                                                                                                                                                                                                                                     |
| RefreshUserGroupsCronInterval (Royal Server v4) | Cron expression for the time the group memberships for users are cached in Royal Server v4.                                                                                   | Default is "_/5 _ \* \* \*" (5 Minutes)                                                                                                                                                                                                                                                                                                                                                                        |
| SecureGateway:AllowedEncryptionAlgorithms       | Specifies a list of allowed encryption algorithms IDs and their order.                                                                                                        | "aes256-gcm@openssh.com", "aes128-gcm@openssh.com", "aes256-ctr", "aes192-ctr",<br>"aes128-ctr", "aes256-cbc", "aes192-cbc", "aes128-cbc",<br>"3des-ctr", "3des-cbc", "twofish256-ctr","twofish192-ctr",<br>"twofish128-ctr", "twofish256-cbc", "twofish192-cbc",<br>"twofish128-cbc", "twofish-cbc", "blowfish-ctr",<br>"blowfish-cbc", "chacha20-poly1305@openssh.com" "arcfour256", "arcfour128", "arcfour" |
| SecureGateway:AllowedHostKeyAlgorithms          | Specifies a list of allowed host key algorithms IDs and their order.                                                                                                          | "rsa-sha2-256", "ssh-rsa-sha256@ssh.com", "rsa-sha2-512", "ssh-rsa","x509v3-rsa2048-sha256", "x509v3-sign-rsa-sha256@ssh.com", "x509v3-sign-rsa", "x509v3-sign-dss", "ssh-ed25519", "ecdsa-sha2-nistp256", "x509v3-ecdsa-sha2-nistp256", "ecdsa-sha2-nistp384", "x509v3-ecdsa-sha2-nistp384", "ecdsa-sha2-nistp521", "x509v3-ecdsa-sha2-nistp521", "ecdsa-sha2-1.3.132.0.10"                                                                                                                                                                     |
| SecureGateway:AllowedKeyExchangeAlgorithms      | Specifies a list of allowed key exchange algorithms IDs and their order.                                                                                                      | "curve25519-sha256", "curve25519-sha256@libssh.org", "ecdh-sha2-nistp256", "ecdh-sha2-nistp384", "ecdh-sha2-nistp521", "ecdh-sha2-1.3.132.0.10", "diffie-hellman-group-exchange-sha256", "diffie-hellman-group14-sha256", "diffie-hellman-group15-sha512", "diffie-hellman-group16-sha512", "diffie-hellman-group-exchange-sha1", "diffie-hellman-group14-sha1", "diffie-hellman-group1-sha1"                                   |
| SecureGateway:AllowedMacAlgorithms              | Specifies a list of allowed MAC algorithms IDs and their order.                                                                                                               | "hmac-sha2-256-etm@openssh.com", "hmac-sha2-256","hmac-sha2-512-etm@openssh.com", "hmac-sha2-512", "hmac-sha1", "hmac-md5", "hmac-sha1-96", "hmac-md5-96"                                                                                                                                                                                                                                          |
| SecureGateway:SSHVersion                        | In order to not leak the implementation of the Secure Gateway to<br>provide hackers with additional information,<br>the reported SSH software version can be configured here. |                                                                                                                                                                                                                                                                                                                                                                                                                |

Up to Royal Server V3, these settings are configured in the `RoyalServer.exe.config` file (located in the installation directory) under `configuration/appsettings`. The corresponding appsetings keys are:

| Royal Server V4                            | Royal Server V3                                   |
| ------------------------------------------ | ------------------------------------------------- |
| RefreshUserGroupsCronInterval              | UserCachingInSeconds                              |
| SecureGateway:AllowedEncryptionAlgorithms  | sg_allowed_encryption_algorithms                  |
| SecureGateway:AllowedHostKeyAlgorithms     | sg_allowed_host_key_algorithms                    |
| SecureGateway:AllowedKeyExchangeAlgorithms | sg_allowed_key_exchange_algorithms                |
| SecureGateway:AllowedMacAlgorithms         | sg_allowed_message_authentication_code_algorithms |
| SecureGateway:SSHVersion                   | sg_ssh_software_version                           |
