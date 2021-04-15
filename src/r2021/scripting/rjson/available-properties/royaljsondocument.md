---
order: 9990
name: RoyalJSONDocument
---

# RoyalJSONDocument (root element)

## Name
- **Data Type**: String
- **Description**: The (display) name of the document if the rJSON is opened via a ".rjson" file. If not specified, the filename is used as the document name instead.
- **Example**: `"Name": "My rJSON Document"`

## Objects
- **Data Type**: Array of [RoyalJSONObject](~/scripting/rjson/available-properties/royaljsonobject.html)
- **Description**: An array of objects that will be direct descendants of the dynamic folder or rJSON document.
- **Example**: `"Objects": [ { "Type": "Credential", "Name": "A Credential" } ]`