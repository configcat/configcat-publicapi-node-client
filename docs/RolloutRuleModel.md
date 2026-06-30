# RolloutRuleModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparisonAttribute** | **string** | The user attribute to compare. | [default to undefined]
**comparator** | [**RolloutRuleComparator**](RolloutRuleComparator.md) |  | [default to undefined]
**comparisonValue** | **string** | The value to compare against. | [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The value to serve when the comparison matches. It must respect the setting type. In some generated clients for strictly typed languages you may use double/float properties to handle integer values. | [default to undefined]
**segmentComparator** | [**SegmentComparator**](SegmentComparator.md) |  | [default to undefined]
**segmentId** | **string** | The segment to compare against. | [default to undefined]

## Example

```typescript
import { RolloutRuleModel } from './api';

const instance: RolloutRuleModel = {
    comparisonAttribute,
    comparator,
    comparisonValue,
    value,
    segmentComparator,
    segmentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
