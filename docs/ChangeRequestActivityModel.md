# ChangeRequestActivityModel

Model representing an activity/event in a Change Request\'s history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeRequestActivityId** | **number** | Identifier of the Change Request activity. | [default to undefined]
**changeRequestActivityType** | [**ChangeRequestActivityType**](ChangeRequestActivityType.md) |  | [default to undefined]
**date** | **string** | The UTC date and time when the activity occurred. | [default to undefined]
**userId** | **string** | Identifier of the user who triggered the activity. | [default to undefined]
**userFullName** | **string** | Full name of the user who triggered the activity. | [default to undefined]
**userEmail** | **string** | Email of the user who triggered the activity. | [default to undefined]
**details** | **string** | Detailed description of the activity. | [default to undefined]
**error** | **string** | Optional error message if the activity failed. | [default to undefined]

## Example

```typescript
import { ChangeRequestActivityModel } from './api';

const instance: ChangeRequestActivityModel = {
    changeRequestActivityId,
    changeRequestActivityType,
    date,
    userId,
    userFullName,
    userEmail,
    details,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
