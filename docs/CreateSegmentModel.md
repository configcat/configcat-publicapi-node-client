# CreateSegmentModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the Segment. | [default to undefined]
**description** | **string** | Description of the Segment. | [optional] [default to undefined]
**comparisonAttribute** | **string** | The user\&#39;s attribute the evaluation process must take into account. | [default to undefined]
**comparator** | [**RolloutRuleComparator**](RolloutRuleComparator.md) |  | [default to undefined]
**comparisonValue** | **string** | The value to compare with the given user attribute\&#39;s value. | [default to undefined]

## Example

```typescript
import { CreateSegmentModel } from './api';

const instance: CreateSegmentModel = {
    name,
    description,
    comparisonAttribute,
    comparator,
    comparisonValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
