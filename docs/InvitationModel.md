# InvitationModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitationId** | **string** | The identifier of the Invitation. | [default to undefined]
**email** | **string** | The invited user\&#39;s email address. | [default to undefined]
**permissionGroupId** | **number** | The identifier of the Permission Group the user was invited to. | [default to undefined]
**createdAt** | **string** | Creation time of the Invitation. | [default to undefined]
**expired** | **boolean** | Determines whether the Invitation is expired. | [default to undefined]

## Example

```typescript
import { InvitationModel } from './api';

const instance: InvitationModel = {
    invitationId,
    email,
    permissionGroupId,
    createdAt,
    expired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
