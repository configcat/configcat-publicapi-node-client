# ValueModel

Represents the value of a Feature Flag or Setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolValue** | **boolean** | The served value in case of a boolean Feature Flag. | [default to undefined]
**stringValue** | **string** | The served value in case of a text Setting. | [default to undefined]
**intValue** | **number** | The served value in case of a whole number Setting. | [default to undefined]
**doubleValue** | **number** | The served value in case of a decimal number Setting. | [default to undefined]
**predefinedVariationId** | **string** | The served Variation\&#39;s identifier. | [default to undefined]

## Example

```typescript
import { ValueModel } from './api';

const instance: ValueModel = {
    boolValue,
    stringValue,
    intValue,
    doubleValue,
    predefinedVariationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
