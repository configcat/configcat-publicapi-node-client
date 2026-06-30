# TargetingRuleModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;ConditionModel&gt;**](ConditionModel.md) | The list of conditions that are combined with logical AND operators. It can be one of the following: - User condition - Segment condition - Prerequisite flag condition | [default to undefined]
**percentageOptions** | [**Array&lt;PercentageOptionModel&gt;**](PercentageOptionModel.md) | The percentage options from where the evaluation process will choose a value based on the flag\&#39;s percentage evaluation attribute. | [default to undefined]
**value** | [**ValueModel**](ValueModel.md) |  | [default to undefined]

## Example

```typescript
import { TargetingRuleModel } from './api';

const instance: TargetingRuleModel = {
    conditions,
    percentageOptions,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
