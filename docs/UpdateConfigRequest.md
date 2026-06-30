# UpdateConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Config. | [optional] [default to undefined]
**description** | **string** | The description of the Config. | [optional] [default to undefined]
**order** | **number** | The order of the Config represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]

## Example

```typescript
import { UpdateConfigRequest } from './api';

const instance: UpdateConfigRequest = {
    name,
    description,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
