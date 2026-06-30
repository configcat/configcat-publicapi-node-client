# SettingModel

Metadata of a Feature Flag or Setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingId** | **number** | Identifier of the Feature Flag or Setting. | [default to undefined]
**key** | **string** | Key of the Feature Flag or Setting. | [default to undefined]
**name** | **string** | Name of the Feature Flag or Setting. | [default to undefined]
**hint** | **string** | Description of the Feature Flag or Setting. | [default to undefined]
**order** | **number** | The order of the Feature Flag or Setting represented on the ConfigCat Dashboard. | [default to undefined]
**settingType** | [**SettingType**](SettingType.md) |  | [default to undefined]
**isJson** | **boolean** |  | [default to undefined]
**configId** | **string** | Identifier of the Feature Flag\&#39;s Config. | [default to undefined]
**configName** | **string** | Name of the Feature Flag\&#39;s Config. | [default to undefined]
**createdAt** | **string** | The creation time of the Feature Flag or Setting. | [default to undefined]
**tags** | [**Array&lt;TagModel&gt;**](TagModel.md) | The tags attached to the Feature Flag or Setting. | [default to undefined]
**predefinedVariations** | [**Array&lt;PredefinedVariationModel&gt;**](PredefinedVariationModel.md) | The Feature Flag or Setting\&#39;s Variations. | [default to undefined]

## Example

```typescript
import { SettingModel } from './api';

const instance: SettingModel = {
    settingId,
    key,
    name,
    hint,
    order,
    settingType,
    isJson,
    configId,
    configName,
    createdAt,
    tags,
    predefinedVariations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
