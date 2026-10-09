---
uid: royalts_intro_security
name: Security
order: 9930
---

# Security

## Encryption

Royal TS integrates an Advanced Encryption Standard (AES) algorithm to protect sensitive data in your files. A strong encryption key (256 bit key) is generated based on your encryption password. The cipher used in Royal TS is regarded as being very secure. For more information about AES/Rijndael encryption, visit:
https://en.wikipedia.org/wiki/Advanced_Encryption_Standard

To avoid brute force or dictionary attacks against your password, we encourage using a rather long password (> 8 characters) also containing numbers and special characters. A password quality indicator shows how secure your chosen password is.

## What is Protected?

You can protect the Application document as well as any of the documents you create and work with. Protection is optional but it’s strongly recommended when you plan to store credentials with passwords in a document. As soon as encryption is enabled, all the sensitive data (password fields) are encrypted and protected. Opening a protected document in Royal TS without the encryption password is not possible.

## Password Strength Indicator

Royal TS also features password strength indicators wherever passwords are used. This way Royal TS can constantly bring the complexity and strength of the used passwords to your attention. Based on the commonly used zxcvbn algorithm, Royal TS is able to give sound advice through pattern matching and conservative entropy calculations. More information about zxcvbn can be found here: https://github.com/dropbox/zxcvbn

Whenever you enter a password in Royal TS, you get immediately a sense how secure your password is:

![](/r2023/images/RoyalTS/GettingStarted/Security_01.png)

## Password Generator

Royal TS includes a password generator in the menu of password fields:

![](/r2023/images/RoyalTS/GettingStarted/Security_02.png)

Use the popup to set a length of 4–50 characters and choose whether to include uppercase letters, digits and symbols, or avoid ambiguous characters. Changing a generator setting generates a new password. These settings are remembered globally. Opening the popup preserves the current password.

To customize the symbols or exclude specific characters, open **Application Options → User Interface → Password Generator**, below **Tabs**. **Allowed symbols** defines the symbol pool; leave it empty to use the built-in symbols, or click **Load default symbols** to insert the full built-in list for editing. **Excluded characters** removes characters from all enabled categories, including custom symbols, and matches case exactly.

Enabled categories are permitted in a password; the generator does not require every category to appear. If your preferences leave no characters available, Royal TS displays an error and keeps the current password.

For the character rules and save behavior, see [Password Generator options](xref:royalts_reference_options#password-generator).

See also: [Document Security](xref:royalts_reference_organization_document#-security)
