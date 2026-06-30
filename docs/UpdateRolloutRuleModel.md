# UpdateRolloutRuleModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparisonAttribute** | **string** | The user attribute to compare. | [optional] [default to undefined]
**comparator** | [**RolloutRuleComparator**](RolloutRuleComparator.md) |  | [optional] [default to undefined]
**comparisonValue** | **string** | The value to compare against. | [optional] [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The value to serve when the comparison matches. It must respect the setting type. In some generated clients for strictly typed languages you may use double/float properties to handle integer values. | [default to undefined]
**segmentComparator** | [**SegmentComparator**](SegmentComparator.md) |  | [optional] [default to undefined]
**segmentId** | **string** | The segment to compare against. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRolloutRuleModel } from './api';

const instance: UpdateRolloutRuleModel = {
    comparisonAttribute,
    comparator,
    comparisonValue,
    value,
    segmentComparator,
    segmentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
