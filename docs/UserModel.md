# UserModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | Identifier of the Member. | [default to undefined]
**fullName** | **string** | Name of the Member. | [default to undefined]
**email** | **string** | Email of the Member. | [default to undefined]
**twoFactorEnabled** | **boolean** | Determines whether 2FA is enabled for the Member. | [default to undefined]

## Example

```typescript
import { UserModel } from './api';

const instance: UserModel = {
    userId,
    fullName,
    email,
    twoFactorEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
