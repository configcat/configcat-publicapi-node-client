# CreateConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Config. | [default to undefined]
**description** | **string** | The description of the Config. | [optional] [default to undefined]
**order** | **number** | The order of the Config represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]
**evaluationVersion** | [**EvaluationVersion**](EvaluationVersion.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateConfigRequest } from './api';

const instance: CreateConfigRequest = {
    name,
    description,
    order,
    evaluationVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
