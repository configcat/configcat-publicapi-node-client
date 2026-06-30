# PreferencesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasonRequired** | **boolean** | Indicates that a mandatory note required for saving and publishing. | [default to undefined]
**keyGenerationMode** | [**KeyGenerationMode**](KeyGenerationMode.md) |  | [default to undefined]
**showVariationId** | **boolean** | Indicates whether a variation ID\&#39;s must be shown on the ConfigCat Dashboard. | [default to undefined]
**reasonRequiredEnvironments** | [**Array&lt;ReasonRequiredEnvironmentModel&gt;**](ReasonRequiredEnvironmentModel.md) | List of Environments where mandatory note must be set before saving and publishing. | [default to undefined]
**mandatorySettingHint** | **boolean** | Indicates whether Feature flags and Settings must have a hint. | [default to undefined]
**approveRequired** | **boolean** | Indicates that a mandatory approval is required for saving and publishing. | [default to undefined]
**approveRequiredEnvironments** | [**Array&lt;ApproveRequiredEnvironmentModel&gt;**](ApproveRequiredEnvironmentModel.md) | List of Environments where mandatory approval must be given before changes are applied. | [default to undefined]

## Example

```typescript
import { PreferencesModel } from './api';

const instance: PreferencesModel = {
    reasonRequired,
    keyGenerationMode,
    showVariationId,
    reasonRequiredEnvironments,
    mandatorySettingHint,
    approveRequired,
    approveRequiredEnvironments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
