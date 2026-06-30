# PredefinedVariationsWithUsagesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingKey** | **string** | Key of the Feature Flag or Setting. | [default to undefined]
**settingType** | [**SettingType**](SettingType.md) |  | [default to undefined]
**predefinedVariations** | [**Array&lt;PredefinedVariationWithUsagesModel&gt;**](PredefinedVariationWithUsagesModel.md) | The Feature Flag or Setting\&#39;s Variations. | [default to undefined]
**environments** | [**Array&lt;PredefinedVariationEnvironmentModel&gt;**](PredefinedVariationEnvironmentModel.md) | The Environment descriptors for the Variations\&#39; usages. | [default to undefined]
**maxPredefinedVariations** | **number** | The maximum number of predefined variations allowed for the Feature Flag or Setting. | [default to undefined]

## Example

```typescript
import { PredefinedVariationsWithUsagesModel } from './api';

const instance: PredefinedVariationsWithUsagesModel = {
    settingKey,
    settingType,
    predefinedVariations,
    environments,
    maxPredefinedVariations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
