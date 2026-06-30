# ReplaceSettingModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Feature Flag or Setting. | [default to undefined]
**hint** | **string** | A short description for the setting, shown on the Dashboard UI. | [optional] [default to undefined]
**tags** | **Array&lt;number&gt;** | The IDs of the tags which are attached to the setting. | [optional] [default to undefined]
**order** | **number** | The order of the Setting represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [optional] [default to undefined]
**isJson** | **boolean** | Indicates whether this setting should validate string values as JSON values. | [optional] [default to undefined]

## Example

```typescript
import { ReplaceSettingModel } from './api';

const instance: ReplaceSettingModel = {
    name,
    hint,
    tags,
    order,
    isJson,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
