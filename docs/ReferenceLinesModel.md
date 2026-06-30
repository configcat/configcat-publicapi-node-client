# ReferenceLinesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **string** | The file\&#39;s name in where the code reference has been found. (Appears on the ConfigCat Dashboard) | [default to undefined]
**fileUrl** | **string** | The file\&#39;s url. (Used to point to the file on the repository\&#39;s website) | [default to undefined]
**preLines** | [**Array&lt;ReferenceLineModel&gt;**](ReferenceLineModel.md) | The lines before the actual reference line. | [default to undefined]
**postLines** | [**Array&lt;ReferenceLineModel&gt;**](ReferenceLineModel.md) | The lines after the actual reference line. | [default to undefined]
**referenceLine** | [**ReferenceLineModel**](ReferenceLineModel.md) |  | [default to undefined]

## Example

```typescript
import { ReferenceLinesModel } from './api';

const instance: ReferenceLinesModel = {
    file,
    fileUrl,
    preLines,
    postLines,
    referenceLine,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
