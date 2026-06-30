# UpdateTargetingRuleModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;UpdateConditionModel&gt;**](UpdateConditionModel.md) | The list of conditions that are combined with logical AND operators. It can be one of the following: - User condition - Segment condition - Prerequisite flag condition | [optional] [default to undefined]
**percentageOptions** | [**Array&lt;UpdatePercentageOptionModel&gt;**](UpdatePercentageOptionModel.md) | The percentage options from where the evaluation process will choose a value based on the flag\&#39;s percentage evaluation attribute. | [optional] [default to undefined]
**value** | [**UpdateValueModel**](UpdateValueModel.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateTargetingRuleModel } from './api';

const instance: UpdateTargetingRuleModel = {
    conditions,
    percentageOptions,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
