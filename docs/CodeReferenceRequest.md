# CodeReferenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configId** | **string** | The Config\&#39;s identifier the scanning was performed against. | [default to undefined]
**repository** | **string** | The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard) | [default to undefined]
**branch** | **string** | The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard) | [default to undefined]
**commitUrl** | **string** | The related commit\&#39;s URL. (Appears on the ConfigCat Dashboard) | [optional] [default to undefined]
**commitHash** | **string** | The related commit\&#39;s hash. (Appears on the ConfigCat Dashboard) | [optional] [default to undefined]
**uploader** | **string** | The scanning tool\&#39;s name. (Appears on the ConfigCat Dashboard) | [optional] [default to undefined]
**activeBranches** | **Array&lt;string&gt;** | The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted. | [optional] [default to undefined]
**flagReferences** | [**Array&lt;FlagReference&gt;**](FlagReference.md) | The actual code reference collection. | [optional] [default to undefined]

## Example

```typescript
import { CodeReferenceRequest } from './api';

const instance: CodeReferenceRequest = {
    configId,
    repository,
    branch,
    commitUrl,
    commitHash,
    uploader,
    activeBranches,
    flagReferences,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
