# PermissionGroupEnvironmentAccessModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentId** | **string** | Identifier of the Environment. | [default to undefined]
**name** | **string** | Name of the Environment. | [default to undefined]
**color** | **string** | Color of the Environment. | [default to undefined]
**description** | **string** | Description of the Environment. | [default to undefined]
**order** | **number** | The order of the Environment represented on the ConfigCat Dashboard. | [default to undefined]
**reasonRequired** | **boolean** | Determines whether a mandatory reason must be given every time when the Feature Flags or Settings in the given Environment are saved. | [default to undefined]
**approveRequired** | **boolean** | Determines whether changes must be approved before they are applied in the given Environment. | [default to undefined]
**environmentAccessType** | [**EnvironmentAccessType**](EnvironmentAccessType.md) |  | [default to undefined]

## Example

```typescript
import { PermissionGroupEnvironmentAccessModel } from './api';

const instance: PermissionGroupEnvironmentAccessModel = {
    environmentId,
    name,
    color,
    description,
    order,
    reasonRequired,
    approveRequired,
    environmentAccessType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
