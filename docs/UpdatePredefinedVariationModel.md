# UpdatePredefinedVariationModel

A Predefined Variation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**UpdatePredefinedVariationValueModel**](UpdatePredefinedVariationValueModel.md) |  | [default to undefined]
**name** | **string** | The name of the Predefined Variation, shown on the Dashboard UI. If not set, the Value will be shown. | [optional] [default to undefined]
**hint** | **string** | The name of the Predefined Variation, shown on the Dashboard UI. If not set, the Value will be shown. | [optional] [default to undefined]
**predefinedVariationId** | **string** | The Predefined Variation\&#39;s identifier to update. Omit the value if you want to add a new predefined variation. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePredefinedVariationModel } from './api';

const instance: UpdatePredefinedVariationModel = {
    value,
    name,
    hint,
    predefinedVariationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
