# OrganizationAdminModel

Describes an Organization Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | Identifier of the Organization Admin. | [default to undefined]
**fullName** | **string** | Name of the Organization Admin. | [default to undefined]
**email** | **string** | Email of the OrganizationAdmin. | [default to undefined]
**twoFactorEnabled** | **boolean** | Determines whether 2FA is enabled for the Organization Admin. | [default to undefined]

## Example

```typescript
import { OrganizationAdminModel } from './api';

const instance: OrganizationAdminModel = {
    userId,
    fullName,
    email,
    twoFactorEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
