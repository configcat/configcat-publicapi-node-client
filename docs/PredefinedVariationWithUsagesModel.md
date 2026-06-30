# PredefinedVariationWithUsagesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**PredefinedVariationValueModel**](PredefinedVariationValueModel.md) |  | [default to undefined]
**name** | **string** | The name of the Predefined Variation, shown on the Dashboard UI. If not set, the Value will be shown. | [default to undefined]
**hint** | **string** | The name of the Predefined Variation, shown on the Dashboard UI. If not set, the Value will be shown. | [default to undefined]
**predefinedVariationId** | **string** | The Predefined Variation\&#39;s identifier. | [default to undefined]
**usages** | [**Array&lt;PredefinedVariationUsageModel&gt;**](PredefinedVariationUsageModel.md) | The Feature Flag or Setting Variation\&#39;s usages in the given Environments. | [default to undefined]
**usagesInOtherEnvironments** | **number** | The Feature Flag or Setting Variation\&#39;s usages in the Environments you don\&#39;t have access to. | [default to undefined]
**changeRequestUsages** | [**Array&lt;PredefinedVariationChangeRequestUsageModel&gt;**](PredefinedVariationChangeRequestUsageModel.md) | The Feature Flag or Setting Variation\&#39;s usages in the given Change Requests. | [default to undefined]
**changeRequestUsagesInOtherEnvironments** | **number** | The Feature Flag or Setting Variation\&#39;s usages in the Change Requests you don\&#39;t have access to. | [default to undefined]

## Example

```typescript
import { PredefinedVariationWithUsagesModel } from './api';

const instance: PredefinedVariationWithUsagesModel = {
    value,
    name,
    hint,
    predefinedVariationId,
    usages,
    usagesInOtherEnvironments,
    changeRequestUsages,
    changeRequestUsagesInOtherEnvironments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
