# ReferenceLinesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **string** | The file\&#39;s name in where the code reference has been found. (Appears on the ConfigCat Dashboard) | [default to undefined]
**fileUrl** | **string** | The file\&#39;s url. (Used to point to the file on the repository\&#39;s website) | [optional] [default to undefined]
**preLines** | [**Array&lt;ReferenceLineRequest&gt;**](ReferenceLineRequest.md) | The lines before the actual reference line. | [optional] [default to undefined]
**postLines** | [**Array&lt;ReferenceLineRequest&gt;**](ReferenceLineRequest.md) | The lines after the actual reference line. | [optional] [default to undefined]
**referenceLine** | [**ReferenceLineRequest**](ReferenceLineRequest.md) |  | [default to undefined]

## Example

```typescript
import { ReferenceLinesRequest } from './api';

const instance: ReferenceLinesRequest = {
    file,
    fileUrl,
    preLines,
    postLines,
    referenceLine,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
