# UpdateChangeRequestProposedChangesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposedChanges** | [**Array&lt;UpdateEvaluationFormulaWithLatestVersionModel&gt;**](UpdateEvaluationFormulaWithLatestVersionModel.md) | The setting values to update on the Change Request. | [optional] [default to undefined]
**forced** | **boolean** | When true, skips conflict (LatestVersionId) checking. | [optional] [default to undefined]

## Example

```typescript
import { UpdateChangeRequestProposedChangesModel } from './api';

const instance: UpdateChangeRequestProposedChangesModel = {
    proposedChanges,
    forced,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
