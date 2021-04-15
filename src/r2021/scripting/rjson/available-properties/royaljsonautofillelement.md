---
order: 9960
name: RoyalJSONAutoFillElement
---

# RoyalJSONAutoFillElement

## Element
- **Required**: Yes
- **Data Type**: String
- **Description**: The selector for the auto fill element.
- **Example**: `"Element": "#username"`

## Action
- **Required**: Yes
- **Data Type**: Enumeration
- **Description**: The type of action to perform on this auto fill element.
- **Supported Values**:
    - Fill
    - Click
    - Focus
- **Example**: `"Action": "Fill"`

## Value
- **Data Type**: String or Boolean
- **Description**: The value to fill the element with.
- **Applies to**: Auto fill elements with the "Action" set to "Fill".
- **Example**: `"Value": "$$EffectiveUsername$$"`