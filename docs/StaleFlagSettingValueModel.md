# StaleFlagSettingValueModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentId** | **string** | Identifier of the Environment. | [default to undefined]
**updatedAt** | **string** | The last updated date and time when the Feature Flag or Setting. | [default to undefined]
**isStale** | **boolean** | Is the feature flag considered stale in the environment. | [default to undefined]

## Example

```typescript
import { StaleFlagSettingValueModel } from './api';

const instance: StaleFlagSettingValueModel = {
    environmentId,
    updatedAt,
    isStale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
