# StaleFlagProductModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **string** | Identifier of the Product. | [default to undefined]
**name** | **string** | Name of the Product. | [default to undefined]
**configs** | [**Array&lt;StaleFlagConfigModel&gt;**](StaleFlagConfigModel.md) | Configs that contain stale feature flags. | [default to undefined]
**environments** | [**Array&lt;StaleFlagEnvironmentModel&gt;**](StaleFlagEnvironmentModel.md) | Environment list. | [default to undefined]

## Example

```typescript
import { StaleFlagProductModel } from './api';

const instance: StaleFlagProductModel = {
    productId,
    name,
    configs,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
