# UpdateEvaluationFormulaWithLatestVersionModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | [**UpdateValueModel**](UpdateValueModel.md) |  | [default to undefined]
**targetingRules** | [**Array&lt;UpdateTargetingRuleModel&gt;**](UpdateTargetingRuleModel.md) | The targeting rules of the Feature Flag or Setting. | [optional] [default to undefined]
**percentageEvaluationAttribute** | **string** | The user attribute used for percentage evaluation. If not set, it defaults to the &#x60;Identifier&#x60; user object attribute. | [optional] [default to undefined]
**settingId** | **number** | The identifier of the feature flag or setting. | [optional] [default to undefined]
**latestVersionId** | **string** | The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the &#x60;LastVersionId&#x60; property of the response models. | [optional] [default to undefined]

## Example

```typescript
import { UpdateEvaluationFormulaWithLatestVersionModel } from './api';

const instance: UpdateEvaluationFormulaWithLatestVersionModel = {
    defaultValue,
    targetingRules,
    percentageEvaluationAttribute,
    settingId,
    latestVersionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
