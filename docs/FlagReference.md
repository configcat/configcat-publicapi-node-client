# FlagReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingId** | **number** | The identifier of the Feature Flag or Setting the code reference belongs to. | [default to undefined]
**references** | [**Array&lt;ReferenceLinesRequest&gt;**](ReferenceLinesRequest.md) | The actual references to the given Feature Flag or Setting. | [default to undefined]

## Example

```typescript
import { FlagReference } from './api';

const instance: FlagReference = {
    settingId,
    references,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
