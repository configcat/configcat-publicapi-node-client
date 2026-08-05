# CreateChangeRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of the Change Request. | [default to undefined]
**reason** | **string** | The optional notes describing the purpose of the Change Request. This will appear in the Audit Log (in the Notes section when you expand the corresponding entry) upon applying the change request. | [optional] [default to undefined]
**applyAt** | **string** | The optional UTC date and time when the scheduled Change Request should be applied automatically. | [optional] [default to undefined]
**bypassApproval** | **boolean** | When true, bypasses required approval checks for scheduled changes. | [optional] [default to undefined]
**proposedChanges** | [**Array&lt;CreateChangeRequestProposedChangeModel&gt;**](CreateChangeRequestProposedChangeModel.md) | The list of models describing the proposed changes to the Settings included in the new Change Request. | [optional] [default to undefined]

## Example

```typescript
import { CreateChangeRequestModel } from './api';

const instance: CreateChangeRequestModel = {
    title,
    reason,
    applyAt,
    bypassApproval,
    proposedChanges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
