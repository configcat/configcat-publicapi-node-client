# ConfigSettingValuesModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ConfigModel**](ConfigModel.md) |  | [default to undefined]
**environment** | [**EnvironmentModel**](EnvironmentModel.md) |  | [default to undefined]
**readOnly** | **boolean** |  | [default to undefined]
**settingValues** | [**Array&lt;ConfigSettingValueModel&gt;**](ConfigSettingValueModel.md) |  | [default to undefined]
**featureFlagLimitations** | [**FeatureFlagLimitations**](FeatureFlagLimitations.md) |  | [default to undefined]

## Example

```typescript
import { ConfigSettingValuesModel } from './api';

const instance: ConfigSettingValuesModel = {
    config,
    environment,
    readOnly,
    settingValues,
    featureFlagLimitations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
