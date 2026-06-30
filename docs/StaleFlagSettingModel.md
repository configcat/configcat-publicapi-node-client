# StaleFlagSettingModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingId** | **number** | Identifier of the Feature Flag or Setting. | [default to undefined]
**name** | **string** | Name of the Feature Flag or Setting. | [default to undefined]
**key** | **string** | Key of the Feature Flag or Setting. | [default to undefined]
**hint** | **string** | Description of the Feature Flag or Setting. | [default to undefined]
**hasCodeReferences** | **boolean** | Feature Flag or Setting has code references uploaded. | [default to undefined]
**tags** | [**Array&lt;StaleFlagSettingTagModel&gt;**](StaleFlagSettingTagModel.md) | The tags\&#39; identifiers attached to the Feature Flag or Setting. | [default to undefined]
**settingValues** | [**Array&lt;StaleFlagSettingValueModel&gt;**](StaleFlagSettingValueModel.md) | Environment level feature flag stale data. | [default to undefined]

## Example

```typescript
import { StaleFlagSettingModel } from './api';

const instance: StaleFlagSettingModel = {
    settingId,
    name,
    key,
    hint,
    hasCodeReferences,
    tags,
    settingValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
