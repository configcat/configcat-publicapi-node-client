# SettingDataV2Model

Metadata of a Feature Flag or Setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingId** | **number** | Identifier of the Feature Flag or Setting. | [default to undefined]
**key** | **string** | Key of the Feature Flag or Setting. | [default to undefined]
**name** | **string** | Name of the Feature Flag or Setting. | [default to undefined]
**hint** | **string** | Description of the Feature Flag or Setting. | [default to undefined]
**settingType** | [**SettingType**](SettingType.md) |  | [default to undefined]
**isJson** | **boolean** | Indicates whether this setting should validate string values as JSON values. | [default to undefined]
**order** | **number** | The order of the Feature Flag or Setting represented on the ConfigCat Dashboard. | [default to undefined]
**createdAt** | **string** | The creation time of the Feature Flag or Setting. | [default to undefined]
**creatorEmail** | **string** | The user\&#39;s email address who created the Feature Flag or Setting. | [default to undefined]
**creatorFullName** | **string** | The user\&#39;s name who created the Feature Flag or Setting. | [default to undefined]
**predefinedVariations** | [**Array&lt;PredefinedVariationModel&gt;**](PredefinedVariationModel.md) | A collection of Variations for a Feature Flag or Setting. | [default to undefined]
**isWatching** | **boolean** |  | [default to undefined]

## Example

```typescript
import { SettingDataV2Model } from './api';

const instance: SettingDataV2Model = {
    settingId,
    key,
    name,
    hint,
    settingType,
    isJson,
    order,
    createdAt,
    creatorEmail,
    creatorFullName,
    predefinedVariations,
    isWatching,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
