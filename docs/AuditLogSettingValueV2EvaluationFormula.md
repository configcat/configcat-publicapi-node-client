# AuditLogSettingValueV2EvaluationFormula

A complete evaluation formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | [**ValueModel**](ValueModel.md) |  | [default to undefined]
**defaultValuePredefinedVariationName** | **string** | Optional name of the predefined variation for the default value. | [default to undefined]
**targetingRules** | [**Array&lt;AuditLogSettingValueV2EvaluationFormulaTargetingRuleModel&gt;**](AuditLogSettingValueV2EvaluationFormulaTargetingRuleModel.md) | List of targeting rules that determine when different values should be returned. | [default to undefined]
**percentageEvaluationAttribute** | **string** | Optional name of the user attribute for percentage-based user bucketing (for A/B testing). | [default to undefined]

## Example

```typescript
import { AuditLogSettingValueV2EvaluationFormula } from './api';

const instance: AuditLogSettingValueV2EvaluationFormula = {
    defaultValue,
    defaultValuePredefinedVariationName,
    targetingRules,
    percentageEvaluationAttribute,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
