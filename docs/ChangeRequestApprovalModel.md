# ChangeRequestApprovalModel

Model representing an approval on a Change Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeRequestApprovalId** | **number** | Identifier of the Change Request approval. | [default to undefined]
**userEmail** | **string** | Email of the user who approved the Change Request. | [default to undefined]
**userFullName** | **string** | Full name of the user who approved the Change Request. | [default to undefined]
**approvedAt** | **string** | The UTC date and time when the Change Request was approved. | [default to undefined]
**dismissedAt** | **string** | Optional UTC date and time when the approval was dismissed. | [default to undefined]

## Example

```typescript
import { ChangeRequestApprovalModel } from './api';

const instance: ChangeRequestApprovalModel = {
    changeRequestApprovalId,
    userEmail,
    userFullName,
    approvedAt,
    dismissedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
