# ChangeRequestIssueModel

Model representing an issue encountered with a Change Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeRequestIssueId** | **number** | Identifier of the Change Request issue. | [default to undefined]
**issueType** | [**ChangeRequestIssueType**](ChangeRequestIssueType.md) |  | [default to undefined]
**issueDetails** | **string** | Description of the issue. | [default to undefined]
**issueDetectedAt** | **string** | The UTC date and time when the issue was detected. | [default to undefined]
**issueFixedAt** | **string** | Optional UTC date and time when the issue was fixed. | [default to undefined]

## Example

```typescript
import { ChangeRequestIssueModel } from './api';

const instance: ChangeRequestIssueModel = {
    changeRequestIssueId,
    issueType,
    issueDetails,
    issueDetectedAt,
    issueFixedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
