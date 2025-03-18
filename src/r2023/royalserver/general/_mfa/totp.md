---
name: TOTP Provider Configuration
order: 9053
---

### <a name="totp"></a>TOTP Provider Configuration

TOTP is a generic algorithm for time-based one-time-passwords that is implemented by many services and apps. Since it is a generic algorithm, any app that supports it can be used as a second factor for this provider. There are, for example, apps from Microsoft, Google and many others.

#### Configuring the TOTP Provider

In the Royal Server Configuration Tool ensure that the "Generic TOTP Authenticator (Google, Microsoft, etc)" provider is enabled.

#### Configuring User TOTP Self-Service

> [!NOTE]
> Optionally, users can be allowed to configure their own TOTP authentication via self-service pages which might be useful in scenarios where users are added programmatically e.g. via a Powershell script. This feature can be activated and deactivated on the Create/Edit dialog for TOTP MFA Users.
> 
> - _Allowed_: Indicates whether a user is allowed to access and verify the QR code under https://[IPAddress]:[Port]/mfa/totp.
> - _Verified_: Indicates whether the self service user is already verified. Once verified, the user will not be allowed to use the self service page again.
