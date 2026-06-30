# PrerequisiteFlagConditionModel

Describes a condition that is based on a prerequisite flag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prerequisiteSettingId** | **number** | The prerequisite flag\&#39;s identifier. | [default to undefined]
**comparator** | [**PrerequisiteComparator**](PrerequisiteComparator.md) |  | [default to undefined]
**prerequisiteComparisonValue** | [**ValueModel**](ValueModel.md) |  | [default to undefined]

## Example

```typescript
import { PrerequisiteFlagConditionModel } from './api';

const instance: PrerequisiteFlagConditionModel = {
    prerequisiteSettingId,
    comparator,
    prerequisiteComparisonValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
