# ConfigModel

Details of the Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ProductModel**](ProductModel.md) |  | [default to undefined]
**configId** | **string** | Identifier of the Config. | [default to undefined]
**name** | **string** | Name of the Config. | [default to undefined]
**description** | **string** | Description of the Config. | [default to undefined]
**order** | **number** | The order of the Config represented on the ConfigCat Dashboard. | [default to undefined]
**migratedConfigId** | **string** |  | [default to undefined]
**evaluationVersion** | [**EvaluationVersion**](EvaluationVersion.md) |  | [default to undefined]

## Example

```typescript
import { ConfigModel } from './api';

const instance: ConfigModel = {
    product,
    configId,
    name,
    description,
    order,
    migratedConfigId,
    evaluationVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
