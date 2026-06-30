# UpdateMemberPermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissionGroupIds** | **Array&lt;number&gt;** | List of Permission Group identifiers to where the Member should be added. | [optional] [default to undefined]
**isAdmin** | **boolean** | Indicates that the member must be Organization Admin. | [optional] [default to undefined]
**isBillingManager** | **boolean** | Indicates that the member must be Billing Manager. | [optional] [default to undefined]
**removeFromPermissionGroupsWhereIdNotSet** | **boolean** | When &#x60;true&#x60;, the member will be removed from those Permission Groups that are not listed in the &#x60;permissionGroupIds&#x60; field. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMemberPermissionsRequest } from './api';

const instance: UpdateMemberPermissionsRequest = {
    permissionGroupIds,
    isAdmin,
    isBillingManager,
    removeFromPermissionGroupsWhereIdNotSet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
