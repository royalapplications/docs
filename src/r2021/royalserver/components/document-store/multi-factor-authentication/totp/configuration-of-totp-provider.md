---
name: Configuration of TOTP Provider
order: 7010
---

# Configuration of TOTP Provider

The following steps outline the configuration of TOTP configuration for Royal Server.

## Configuring the TOTP provider

Check _"Generic TOTP Authenticator (Google, Microsoft etc)"_, save and restart Royal Server.

## Enrolling users

- Click on **Enroll...**.
- select a user and `Generic TOTP` as provider.
- Provide meaningful names for Issuer and Label (these are displayed in the Authenticator Apps later).

When done, you are presented with a Secret that you can copy and provide to the user and a QR Code that can be scanned by the Authenticator app directly. At a later time, you can click on **Show Secret...** for TOTP enrolled users as well.

> **Attention - TOTP time sensitivity**  
> The machine where Royal Server is installed and also the client machine where Royal TS/X is running need to have the correct time  in order to make TOTP work (use Time Services to ensure this).
