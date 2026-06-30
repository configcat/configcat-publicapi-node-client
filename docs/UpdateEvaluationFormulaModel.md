# UpdateEvaluationFormulaModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | [**UpdateValueModel**](UpdateValueModel.md) |  | [default to undefined]
**targetingRules** | [**Array&lt;UpdateTargetingRuleModel&gt;**](UpdateTargetingRuleModel.md) | The targeting rules of the Feature Flag or Setting. | [optional] [default to undefined]
**percentageEvaluationAttribute** | **string** | The user attribute used for percentage evaluation. If not set, it defaults to the &#x60;Identifier&#x60; user object attribute. | [optional] [default to undefined]

## Example

```typescript
import { UpdateEvaluationFormulaModel } from './api';

const instance: UpdateEvaluationFormulaModel = {
    defaultValue,
    targetingRules,
    percentageEvaluationAttribute,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
