# ConfigSettingFormulasModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ConfigModel**](ConfigModel.md) |  | [default to undefined]
**environment** | [**EnvironmentModel**](EnvironmentModel.md) |  | [default to undefined]
**readOnly** | **boolean** | Indicates whether you have Read-only access to the Environment. | [default to undefined]
**settingFormulas** | [**Array&lt;ConfigSettingFormulaModel&gt;**](ConfigSettingFormulaModel.md) | Evaluation descriptors of each updated Feature Flag and Setting. | [default to undefined]
**featureFlagLimitations** | [**FeatureFlagLimitations**](FeatureFlagLimitations.md) |  | [default to undefined]
**approveRequired** | **boolean** | Indicates that a mandatory approval is required for saving and publishing. | [default to undefined]
**canBypassApproval** | **boolean** | Indicates whether the user can bypass the approval flow. | [default to undefined]
**reasonRequired** | **boolean** | Indicates that a mandatory note is required for saving and publishing. | [default to undefined]

## Example

```typescript
import { ConfigSettingFormulasModel } from './api';

const instance: ConfigSettingFormulasModel = {
    config,
    environment,
    readOnly,
    settingFormulas,
    featureFlagLimitations,
    approveRequired,
    canBypassApproval,
    reasonRequired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
