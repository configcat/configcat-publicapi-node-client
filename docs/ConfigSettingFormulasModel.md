# ConfigSettingFormulasModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ConfigModel**](ConfigModel.md) |  | [default to undefined]
**environment** | [**EnvironmentModel**](EnvironmentModel.md) |  | [default to undefined]
**readOnly** | **boolean** |  | [default to undefined]
**settingFormulas** | [**Array&lt;ConfigSettingFormulaModel&gt;**](ConfigSettingFormulaModel.md) | Evaluation descriptors of each updated Feature Flag and Setting. | [default to undefined]
**featureFlagLimitations** | [**FeatureFlagLimitations**](FeatureFlagLimitations.md) |  | [default to undefined]

## Example

```typescript
import { ConfigSettingFormulasModel } from './api';

const instance: ConfigSettingFormulasModel = {
    config,
    environment,
    readOnly,
    settingFormulas,
    featureFlagLimitations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
