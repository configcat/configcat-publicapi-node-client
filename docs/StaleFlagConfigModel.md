# StaleFlagConfigModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configId** | **string** | Identifier of the Config. | [default to undefined]
**name** | **string** | Name of the Config. | [default to undefined]
**evaluationVersion** | [**EvaluationVersion**](EvaluationVersion.md) |  | [default to undefined]
**hasCodeReferences** | **boolean** | Config has code references uploaded. | [default to undefined]
**settings** | [**Array&lt;StaleFlagSettingModel&gt;**](StaleFlagSettingModel.md) | Stale feature flags. | [default to undefined]

## Example

```typescript
import { StaleFlagConfigModel } from './api';

const instance: StaleFlagConfigModel = {
    configId,
    name,
    evaluationVersion,
    hasCodeReferences,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
