# UpdatePreferencesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasonRequired** | **boolean** | Indicates that a mandatory note is required for saving and publishing. | [optional] [default to undefined]
**keyGenerationMode** | [**KeyGenerationMode**](KeyGenerationMode.md) |  | [optional] [default to undefined]
**showVariationId** | **boolean** | Indicates whether a variation ID\&#39;s must be shown on the ConfigCat Dashboard. | [optional] [default to undefined]
**mandatorySettingHint** | **boolean** | Indicates whether Feature flags and Settings must have a hint. | [optional] [default to undefined]
**reasonRequiredEnvironments** | [**Array&lt;UpdateReasonRequiredEnvironmentModel&gt;**](UpdateReasonRequiredEnvironmentModel.md) | List of Environments where mandatory note must be set before saving and publishing. | [optional] [default to undefined]
**approveRequired** | **boolean** | Indicates that a mandatory approval is required before changes are applied. | [optional] [default to undefined]
**approveRequiredEnvironments** | [**Array&lt;UpdateApproveRequiredEnvironmentModel&gt;**](UpdateApproveRequiredEnvironmentModel.md) | List of Environments where mandatory approval must be given before changes are applied. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePreferencesRequest } from './api';

const instance: UpdatePreferencesRequest = {
    reasonRequired,
    keyGenerationMode,
    showVariationId,
    mandatorySettingHint,
    reasonRequiredEnvironments,
    approveRequired,
    approveRequiredEnvironments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
