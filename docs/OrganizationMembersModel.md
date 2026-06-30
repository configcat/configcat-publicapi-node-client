# OrganizationMembersModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins** | [**Array&lt;OrganizationAdminModel&gt;**](OrganizationAdminModel.md) | List of Organization Admins. | [default to undefined]
**billingManagers** | [**Array&lt;OrganizationAdminModel&gt;**](OrganizationAdminModel.md) | List of Billing Managers. | [default to undefined]
**members** | [**Array&lt;OrganizationMemberModel&gt;**](OrganizationMemberModel.md) | List of Organization Members. | [default to undefined]

## Example

```typescript
import { OrganizationMembersModel } from './api';

const instance: OrganizationMembersModel = {
    admins,
    billingManagers,
    members,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
