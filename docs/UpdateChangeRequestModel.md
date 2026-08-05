# UpdateChangeRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The updated title of the Change Request. | [default to undefined]
**reason** | **string** | The updated optional notes describing the purpose of the Change Request. | [optional] [default to undefined]
**applyAt** | **string** | The updated optional UTC date and time when the Change Request should be applied automatically. | [optional] [default to undefined]
**bypassApproval** | **boolean** | The updated bypass-approval flag for scheduled changes. | [optional] [default to undefined]

## Example

```typescript
import { UpdateChangeRequestModel } from './api';

const instance: UpdateChangeRequestModel = {
    title,
    reason,
    applyAt,
    bypassApproval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
