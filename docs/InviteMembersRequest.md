# InviteMembersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **Array&lt;string&gt;** | List of email addresses to invite. | [default to undefined]
**permissionGroupId** | **number** | Identifier of the Permission Group to where the invited users should be added. | [default to undefined]

## Example

```typescript
import { InviteMembersRequest } from './api';

const instance: InviteMembersRequest = {
    emails,
    permissionGroupId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
