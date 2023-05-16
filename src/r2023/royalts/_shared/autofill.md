## ![](/r2023/images/RoyalTS/Application/SVG_PageAutoFill_32.svg#img_header) Auto Fill

The **Auto Fill** page allows you to configure automatic form submission for web pages in Royal TS using Web Page connections or using the [Royal Passwords](http://www.royalts.com/main/Passwords/Browsers.aspx) browser plugins.

#### URL _(only visible for Credential objects)_

You can provide a web page address where this credential should be used.

#### Elements

A list of HTML INPUT elements found on the web page which can be used to fill out and submit login forms. Select the element to fill, focus or click from the list.

> [!Tip]
> You can also specify a jQuery selector in the Elements combo box.

#### Refresh

Click to refresh the list of available HTML elements.

#### Type

- **Fill:** allows you to map a value from the credential (such as username or password) to the selected HTML INPUT element.
- **Click:** allows you to perform a click on the selected HTML INPUT element (such as Login or Submit button).
- **Focus:** allows you to set the keyboard focus to the selected HTML INPUT element.

#### Value

Specify a value to map to the selected HTML INPUT element. Use the fly-out button to select replacement tokens to fill in values from the credential object.

> [!Important]
> Do not enter credentials directly in the auto fill page. Use credentials or credential-assignments and the fly-out button on the right to insert replacement tokens (such as **$EffectiveUsername$**, **$EffectivePasswords$**, etc.).

#### Add

Adds the selected element, type and value to the mappings list.

#### Remove

Removes the selected element, type and value from the mappings list.

#### Delay (in ms)

Specify the delay in milliseconds before auto fill is executed.

#### Retry until success

If checked, Royal TS will retry to fill forms in subsequent requests until the auto fill is successful. This setting can be useful when a web page redirects to the login page.
