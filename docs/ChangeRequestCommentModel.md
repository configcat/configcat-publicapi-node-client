# ChangeRequestCommentModel

Model representing a comment on a Change Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeRequestCommentId** | **number** | Identifier of the Change Request comment. | [default to undefined]
**body** | **string** | Body content of the comment. | [default to undefined]
**createdAt** | **string** | The UTC date and time when the comment was created. | [default to undefined]
**userEmail** | **string** | Email of the user who created the comment. | [default to undefined]
**userFullName** | **string** | Full name of the user who created the comment. | [default to undefined]
**editedAt** | **string** | Optional UTC date and time when the comment was last edited. | [default to undefined]

## Example

```typescript
import { ChangeRequestCommentModel } from './api';

const instance: ChangeRequestCommentModel = {
    changeRequestCommentId,
    body,
    createdAt,
    userEmail,
    userFullName,
    editedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
