# ConfigSettingValueModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**setting** | [**SettingDataModel**](SettingDataModel.md) |  | [default to undefined]
**updatedAt** | **string** | The last updated date and time when the Feature Flag or Setting. | [default to undefined]
**lastUpdaterUserEmail** | **string** | The email of the user who last updated the Feature Flag or Setting. | [default to undefined]
**lastUpdaterUserFullName** | **string** | The name of the user who last updated the Feature Flag or Setting. | [default to undefined]
**integrationLinks** | [**Array&lt;IntegrationLinkModel&gt;**](IntegrationLinkModel.md) | The integration links attached to the Feature Flag or Setting. | [default to undefined]
**settingTags** | [**Array&lt;SettingTagModel&gt;**](SettingTagModel.md) | The tags attached to the Feature Flag or Setting. | [default to undefined]
**rolloutRules** | [**Array&lt;RolloutRuleModel&gt;**](RolloutRuleModel.md) | The targeting rule collection. | [default to undefined]
**rolloutPercentageItems** | [**Array&lt;RolloutPercentageItemModel&gt;**](RolloutPercentageItemModel.md) | The percentage rule collection. | [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The value to serve. It must respect the setting type. In some generated clients for strictly typed languages you may use double/float properties to handle integer values. | [default to undefined]

## Example

```typescript
import { ConfigSettingValueModel } from './api';

const instance: ConfigSettingValueModel = {
    setting,
    updatedAt,
    lastUpdaterUserEmail,
    lastUpdaterUserFullName,
    integrationLinks,
    settingTags,
    rolloutRules,
    rolloutPercentageItems,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
