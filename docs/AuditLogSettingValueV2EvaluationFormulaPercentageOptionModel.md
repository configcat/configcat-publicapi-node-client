# AuditLogSettingValueV2EvaluationFormulaPercentageOptionModel

A percentage option for percentage-based user bucketing (for A/B testing), specifying a percentage range and the value to return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **number** | The percentage of users (0-100) who should receive the value. | [default to undefined]
**value** | [**ValueModel**](ValueModel.md) |  | [default to undefined]
**valuePredefinedVariationName** | **string** | Optional name of the predefined variation for this percentage option. | [default to undefined]

## Example

```typescript
import { AuditLogSettingValueV2EvaluationFormulaPercentageOptionModel } from './api';

const instance: AuditLogSettingValueV2EvaluationFormulaPercentageOptionModel = {
    percentage,
    value,
    valuePredefinedVariationName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
