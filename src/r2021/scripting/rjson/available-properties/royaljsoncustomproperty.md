---
order: 9970
name: RoyalJSONCustomProperty
---

# RoyalJSONCustomProperty

## Name
- **Required**: Yes
- **Data Type**: String
- **Description**: The (display) name of the custom property.
- **Example**: `"Name": "Credit Card Number"`

## Type
- **Required**: Yes
- **Data Type**: Enumeration
- **Description**: The type of the custom property.
- **Supported Values**:
    - Text
    - Protected
    - URL
    - Email
    - Address
    - Phone
    - Date
    - YesNo
    - Header
- **Example**: `"Type": "Text"`

## Value
- **Data Type**: String or Boolean
- **Description**: The value of the custom property.
- **Example**: `"Value": "123456789"`
- **Example 2**: `"Value": true`