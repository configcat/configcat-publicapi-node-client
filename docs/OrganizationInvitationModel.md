# OrganizationInvitationModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitationId** | **string** | The identifier of the Invitation. | [default to undefined]
**email** | **string** | The invited user\&#39;s email address. | [default to undefined]
**productId** | **string** | The identifier of the Product the user was invited to. | [default to undefined]
**productName** | **string** | The name of the Product the user was invited to. | [default to undefined]
**permissionGroupId** | **number** | The identifier of the Permission Group the user was invited to. | [default to undefined]
**createdAt** | **string** | Creation time of the Invitation. | [default to undefined]
**expired** | **boolean** | Determines whether the Invitation is expired. | [default to undefined]
**expires** | **string** | Expiration time of the Invitation. | [default to undefined]

## Example

```typescript
import { OrganizationInvitationModel } from './api';

const instance: OrganizationInvitationModel = {
    invitationId,
    email,
    productId,
    productName,
    permissionGroupId,
    createdAt,
    expired,
    expires,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
