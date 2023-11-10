---
name: YubiKey Provider Configuration
order: 9051
---

### <a name="yubikey"></a>YubiKey Provider Configuration

[YubiKey](https://www.yubico.com/) provides security solutions for companies using hardware authentication and can be integrated with Royal Server.

#### Configuring a YubiKey API Key

First, you need to configure a YubiKey API key for Royal Server. This can be done at [https://upgrade.yubico.com/getapikey/](https://upgrade.yubico.com/getapikey/).

Enter an email address, insert a YubiKey, then press the Yubikey button while the input focus is on YubiKey OTP. As a result, you get the `Client ID` and a `Secret Key`. Remember these as you need them later for configuring the Royal Server YubiKey integration.

Alternatively, you can use the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) tool to configure `Client ID` and `Secret Key`.

#### Configuring the YubiKey Provider

In the Royal Server Configuration Tool ensure that the _"YubiKey"_ provider is enabled.

Expand the details panel under YubiKey and enter the `Client ID`, the `Secret Key` that you previously generated while getting a YubiKey API Key.
