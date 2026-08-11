# AuditLogSettingValueV2EvaluationFormulaConditionModel

A condition that needs to be evaluated to determine if a targeting rule applies to a user. Conditions can be based on user attributes, segments, or prerequisite settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditionType** | [**ConditionType**](ConditionType.md) |  | [default to undefined]
**comparisonAttribute** | **string** | The name of the user attribute to compare. (For User Conditions.) | [default to undefined]
**userComparator** | [**UserComparator**](UserComparator.md) |  | [default to undefined]
**comparisonValue** | [**ComparisonValueModel**](ComparisonValueModel.md) |  | [default to undefined]
**segmentComparator** | [**SegmentComparator**](SegmentComparator.md) |  | [default to undefined]
**segmentId** | **string** | The ID of the segment referenced in this condition. (For Segment Conditions.) | [default to undefined]
**segmentName** | **string** | The name of the segment referenced in this condition. (For Segment Conditions.) | [default to undefined]
**prerequisiteComparator** | [**PrerequisiteComparator**](PrerequisiteComparator.md) |  | [default to undefined]
**prerequisiteSettingId** | **number** | The ID of the prerequisite setting referenced. (For Flag Conditions.) | [default to undefined]
**prerequisiteSettingKey** | **string** | The key identifier of the prerequisite setting. (For Flag Conditions.) | [default to undefined]
**prerequisiteComparisonValue** | [**ValueModel**](ValueModel.md) |  | [default to undefined]
**prerequisiteComparisonValuePredefinedVariationName** | **string** | Optional name of the predefined variation for the prerequisite comparison value. (For Flag Conditions.) | [default to undefined]

## Example

```typescript
import { AuditLogSettingValueV2EvaluationFormulaConditionModel } from './api';

const instance: AuditLogSettingValueV2EvaluationFormulaConditionModel = {
    conditionType,
    comparisonAttribute,
    userComparator,
    comparisonValue,
    segmentComparator,
    segmentId,
    segmentName,
    prerequisiteComparator,
    prerequisiteSettingId,
    prerequisiteSettingKey,
    prerequisiteComparisonValue,
    prerequisiteComparisonValuePredefinedVariationName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
