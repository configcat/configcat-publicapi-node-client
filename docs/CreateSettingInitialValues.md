# CreateSettingInitialValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Feature Flag or Setting. | [default to undefined]
**hint** | **string** | A short description for the setting, shown on the Dashboard UI. | [optional] [default to undefined]
**tags** | **Array&lt;number&gt;** | The IDs of the tags which are attached to the setting. | [optional] [default to undefined]
**order** | **number** | The order of the Setting represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]
**isJson** | **boolean** | Indicates whether this setting should validate string values as JSON values. | [optional] [default to undefined]
**key** | **string** | The key of the Feature Flag or Setting. | [default to undefined]
**settingType** | [**SettingType**](SettingType.md) |  | [default to undefined]
**predefinedVariations** | [**Array&lt;CreatePredefinedVariationModel&gt;**](CreatePredefinedVariationModel.md) | The Feature Flag or Setting\&#39;s Variations. | [optional] [default to undefined]
**initialValues** | [**Array&lt;InitialValue&gt;**](InitialValue.md) | Optional, initial value of the Feature Flag or Setting in the given Environments. Only one of the SettingIdToInitFrom or the InitialValues properties can be set. | [optional] [default to undefined]
**settingIdToInitFrom** | **number** | Optional, the SettingId to initialize the values and tags of the Feature Flag or Setting from. Only can be set if you have at least ReadOnly access in all the Environments. Only one of the SettingIdToInitFrom or the InitialValues properties can be set. | [optional] [default to undefined]

## Example

```typescript
import { CreateSettingInitialValues } from './api';

const instance: CreateSettingInitialValues = {
    name,
    hint,
    tags,
    order,
    isJson,
    key,
    settingType,
    predefinedVariations,
    initialValues,
    settingIdToInitFrom,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
