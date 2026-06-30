# SegmentModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ProductModel**](ProductModel.md) |  | [default to undefined]
**segmentId** | **string** | Identifier of the Segment. | [default to undefined]
**name** | **string** | Name of the Segment. | [default to undefined]
**description** | **string** | Description of the Segment. | [default to undefined]
**creatorEmail** | **string** | The email of the user who created the Segment. | [default to undefined]
**creatorFullName** | **string** | The name of the user who created the Segment. | [default to undefined]
**createdAt** | **string** | The date and time when the Segment was created. | [default to undefined]
**lastUpdaterEmail** | **string** | The email of the user who last updated the Segment. | [default to undefined]
**lastUpdaterFullName** | **string** | The name of the user who last updated the Segment. | [default to undefined]
**updatedAt** | **string** | The date and time when the Segment was last updated. | [default to undefined]
**comparisonAttribute** | **string** | The user\&#39;s attribute the evaluation process must take into account. | [default to undefined]
**comparator** | [**RolloutRuleComparator**](RolloutRuleComparator.md) |  | [default to undefined]
**comparisonValue** | **string** | The value to compare with the given user attribute\&#39;s value. | [default to undefined]

## Example

```typescript
import { SegmentModel } from './api';

const instance: SegmentModel = {
    product,
    segmentId,
    name,
    description,
    creatorEmail,
    creatorFullName,
    createdAt,
    lastUpdaterEmail,
    lastUpdaterFullName,
    updatedAt,
    comparisonAttribute,
    comparator,
    comparisonValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
