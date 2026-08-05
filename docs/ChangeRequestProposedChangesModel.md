# ChangeRequestProposedChangesModel

Model containing setting formulas for a Change Request with feature flag limitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureFlagLimitations** | [**FeatureFlagLimitations**](FeatureFlagLimitations.md) |  | [default to undefined]
**proposedChanges** | [**Array&lt;ConfigSettingFormulaModel&gt;**](ConfigSettingFormulaModel.md) | Collection of evaluation formulas for each Setting included in the Change Request. | [default to undefined]

## Example

```typescript
import { ChangeRequestProposedChangesModel } from './api';

const instance: ChangeRequestProposedChangesModel = {
    featureFlagLimitations,
    proposedChanges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
