# UserConditionModel

Describes a condition that is based on user attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparisonAttribute** | **string** | The User Object attribute that the condition is based on. Can be \&quot;User ID\&quot;, \&quot;Email\&quot;, \&quot;Country\&quot; or any custom attribute. | [default to undefined]
**comparator** | [**UserComparator**](UserComparator.md) |  | [default to undefined]
**comparisonValue** | [**ComparisonValueModel**](ComparisonValueModel.md) |  | [default to undefined]

## Example

```typescript
import { UserConditionModel } from './api';

const instance: UserConditionModel = {
    comparisonAttribute,
    comparator,
    comparisonValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
