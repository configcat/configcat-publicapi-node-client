# AuditLogSettingValueV2EvaluationFormulaTargetingRuleModel

A targeting rule that specifies conditions and value(s) to return when those conditions are met.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**ValueModel**](ValueModel.md) |  | [default to undefined]
**valuePredefinedVariationName** | **string** | Optional name of the predefined variation for the value. | [default to undefined]
**conditions** | [**Array&lt;AuditLogSettingValueV2EvaluationFormulaConditionModel&gt;**](AuditLogSettingValueV2EvaluationFormulaConditionModel.md) | List of conditions that must be satisfied for this targeting rule to apply. | [default to undefined]
**percentageOptions** | [**Array&lt;AuditLogSettingValueV2EvaluationFormulaPercentageOptionModel&gt;**](AuditLogSettingValueV2EvaluationFormulaPercentageOptionModel.md) | List of percentage options when percentage-based user bucketing (for A/B testing) is used in the targeting rule. | [default to undefined]

## Example

```typescript
import { AuditLogSettingValueV2EvaluationFormulaTargetingRuleModel } from './api';

const instance: AuditLogSettingValueV2EvaluationFormulaTargetingRuleModel = {
    value,
    valuePredefinedVariationName,
    conditions,
    percentageOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
