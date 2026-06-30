# SegmentListModel


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
**usage** | **number** | Determines how many Feature Flags and Settings are using the Segment. | [default to undefined]

## Example

```typescript
import { SegmentListModel } from './api';

const instance: SegmentListModel = {
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
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
