# JsonPatchOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | [**OperationType**](OperationType.md) |  | [default to undefined]
**path** | **string** | The source path. | [default to undefined]
**from** | **string** | The target path. | [optional] [default to undefined]
**value** | **any** | The discrete value. | [optional] [default to undefined]

## Example

```typescript
import { JsonPatchOperation } from './api';

const instance: JsonPatchOperation = {
    op,
    path,
    from,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
