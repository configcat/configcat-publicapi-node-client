# UpdateValueModel

Represents the value of a Feature Flag or Setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolValue** | **boolean** | The served value in case of a boolean Feature Flag. | [optional] [default to undefined]
**stringValue** | **string** | The served value in case of a text Setting. | [optional] [default to undefined]
**intValue** | **number** | The served value in case of a whole number Setting. | [optional] [default to undefined]
**doubleValue** | **number** | The served value in case of a decimal number Setting. | [optional] [default to undefined]
**predefinedVariationId** | **string** | The served Variation\&#39;s identifier. | [optional] [default to undefined]

## Example

```typescript
import { UpdateValueModel } from './api';

const instance: UpdateValueModel = {
    boolValue,
    stringValue,
    intValue,
    doubleValue,
    predefinedVariationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
