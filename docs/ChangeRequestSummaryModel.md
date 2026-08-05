# ChangeRequestSummaryModel

Summary of a Change Request with essential information for list views.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeRequestId** | **number** | Identifier of the Change Request. | [default to undefined]
**changeRequestStatus** | [**ChangeRequestStatus**](ChangeRequestStatus.md) |  | [default to undefined]
**needsAttention** | **boolean** | Indicates whether the Change Request needs attention. | [default to undefined]
**title** | **string** | Title of the Change Request. | [default to undefined]
**reason** | **string** | Optional notes describing the purpose of the Change Request. | [default to undefined]
**applyAt** | **string** | Optional UTC date and time when the Change Request should be applied automatically. | [default to undefined]
**createdAt** | **string** | The UTC date and time when the Change Request was created. | [default to undefined]
**creatorUserEmail** | **string** | Email of the user who created the Change Request. | [default to undefined]
**creatorUserFullName** | **string** | Full name of the user who created the Change Request. | [default to undefined]
**creatorUserId** | **string** | Identifier of the creator user. | [default to undefined]
**affectedSettingKeys** | **Array&lt;string&gt;** | List of the keys of Settings affected by this Change Request. | [default to undefined]
**commentCount** | **number** | Number of comments on the Change Request. | [default to undefined]
**approved** | **boolean** | Indicates whether the Change Request has been approved. | [default to undefined]
**conflictCount** | **number** | Number of conflicting settings in the Change Request. | [default to undefined]
**bypassApproval** | **boolean** | Indicates whether approval flow is bypassed. | [default to undefined]
**appliedAt** | **string** | Optional UTC date and time when the Change Request was applied. | [default to undefined]
**appliedByUserId** | **string** | Identifier of the user who applied the Change Request. | [default to undefined]
**appliedByUserEmail** | **string** | Email of the user who applied the Change Request. | [default to undefined]
**appliedByUserFullName** | **string** | Full name of the user who applied the Change Request. | [default to undefined]
**closedAt** | **string** | Optional UTC date and time when the Change Request was closed. | [default to undefined]
**closedByUserId** | **string** | Identifier of the user who closed the Change Request. | [default to undefined]
**closedByUserEmail** | **string** | Email of the user who closed the Change Request. | [default to undefined]
**closedByUserFullName** | **string** | Full name of the user who closed the Change Request. | [default to undefined]

## Example

```typescript
import { ChangeRequestSummaryModel } from './api';

const instance: ChangeRequestSummaryModel = {
    changeRequestId,
    changeRequestStatus,
    needsAttention,
    title,
    reason,
    applyAt,
    createdAt,
    creatorUserEmail,
    creatorUserFullName,
    creatorUserId,
    affectedSettingKeys,
    commentCount,
    approved,
    conflictCount,
    bypassApproval,
    appliedAt,
    appliedByUserId,
    appliedByUserEmail,
    appliedByUserFullName,
    closedAt,
    closedByUserId,
    closedByUserEmail,
    closedByUserFullName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
