# DeleteRepositoryReportsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configId** | **string** | The Config\&#39;s identifier from where the reports should be deleted. | [default to undefined]
**repository** | **string** | The source control repository which\&#39;s reports should be deleted. | [default to undefined]
**branch** | **string** | If it\&#39;s set, only this branch\&#39;s reports belonging to the given repository will be deleted. | [optional] [default to undefined]
**settingId** | **number** | If it\&#39;s set, only this setting\&#39;s reports belonging to the given repository will be deleted. | [optional] [default to undefined]

## Example

```typescript
import { DeleteRepositoryReportsRequest } from './api';

const instance: DeleteRepositoryReportsRequest = {
    configId,
    repository,
    branch,
    settingId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
