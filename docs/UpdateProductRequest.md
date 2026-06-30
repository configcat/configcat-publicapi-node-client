# UpdateProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Product. | [optional] [default to undefined]
**description** | **string** | The description of the Product. | [optional] [default to undefined]
**order** | **number** | The order of the Product represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]

## Example

```typescript
import { UpdateProductRequest } from './api';

const instance: UpdateProductRequest = {
    name,
    description,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
