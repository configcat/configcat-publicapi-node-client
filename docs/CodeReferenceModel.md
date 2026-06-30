# CodeReferenceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **string** | The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard) | [default to undefined]
**references** | [**Array&lt;ReferenceLinesModel&gt;**](ReferenceLinesModel.md) | The actual references to the given Feature Flag or Setting. | [default to undefined]
**commitUrl** | **string** | The related commit\&#39;s URL. | [default to undefined]
**commitHash** | **string** | The related commit\&#39;s hash. | [default to undefined]
**syncedAt** | **string** | The date and time when the reference report was uploaded. | [default to undefined]
**repository** | **string** | The source control repository that contains the scanned code. | [default to undefined]
**codeReferenceId** | **string** | The identifier of the reference report. | [default to undefined]
**uploader** | **string** | The code reference scanning tool\&#39;s name. | [default to undefined]

## Example

```typescript
import { CodeReferenceModel } from './api';

const instance: CodeReferenceModel = {
    branch,
    references,
    commitUrl,
    commitHash,
    syncedAt,
    repository,
    codeReferenceId,
    uploader,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
