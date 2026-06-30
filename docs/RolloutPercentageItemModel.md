# RolloutPercentageItemModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **number** | The percentage value for the rule. | [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The value to serve when the user falls in the percentage rule. It must respect the setting type. In some generated clients for strictly typed languages you may use double/float properties to handle integer values. | [default to undefined]

## Example

```typescript
import { RolloutPercentageItemModel } from './api';

const instance: RolloutPercentageItemModel = {
    percentage,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
