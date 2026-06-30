# UpdateEnvironmentModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Environment. | [optional] [default to undefined]
**color** | **string** | The color of the Environment. RGB or HTML color codes are allowed. | [optional] [default to undefined]
**description** | **string** | The description of the Environment. | [optional] [default to undefined]
**order** | **number** | The order of the Environment represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]

## Example

```typescript
import { UpdateEnvironmentModel } from './api';

const instance: UpdateEnvironmentModel = {
    name,
    color,
    description,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
