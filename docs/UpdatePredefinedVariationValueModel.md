# UpdatePredefinedVariationValueModel

Represents the value of a Predefined Variation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolValue** | **boolean** | The served value in case of a boolean Feature Flag. | [optional] [default to undefined]
**stringValue** | **string** | The served value in case of a text Setting. | [optional] [default to undefined]
**intValue** | **number** | The served value in case of a whole number Setting. | [optional] [default to undefined]
**doubleValue** | **number** | The served value in case of a decimal number Setting. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePredefinedVariationValueModel } from './api';

const instance: UpdatePredefinedVariationValueModel = {
    boolValue,
    stringValue,
    intValue,
    doubleValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
