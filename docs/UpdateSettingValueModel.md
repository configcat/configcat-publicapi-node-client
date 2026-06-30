# UpdateSettingValueModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rolloutRules** | [**Array&lt;UpdateRolloutRuleModel&gt;**](UpdateRolloutRuleModel.md) | The targeting rule collection. | [optional] [default to undefined]
**rolloutPercentageItems** | [**Array&lt;UpdateRolloutPercentageItemModel&gt;**](UpdateRolloutPercentageItemModel.md) | The percentage rule collection. | [optional] [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The value to serve. It must respect the setting type. In some generated clients for strictly typed languages you may use double/float properties to handle integer values. | [default to undefined]

## Example

```typescript
import { UpdateSettingValueModel } from './api';

const instance: UpdateSettingValueModel = {
    rolloutRules,
    rolloutPercentageItems,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
