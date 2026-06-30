# MemberModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | Identifier of the Member. | [default to undefined]
**productId** | **string** | Identifier of the Product where the Member has access. | [default to undefined]
**permissionGroupId** | **number** | Identifier of the Member\&#39;s Permission Group. | [default to undefined]
**fullName** | **string** | Name of the Member. | [default to undefined]
**email** | **string** | Email of the Member. | [default to undefined]

## Example

```typescript
import { MemberModel } from './api';

const instance: MemberModel = {
    userId,
    productId,
    permissionGroupId,
    fullName,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
