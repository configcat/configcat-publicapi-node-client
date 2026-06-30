# InitialValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentId** | **string** | The ID of the Environment where the initial value must be set. | [optional] [default to undefined]
**value** | [**SettingValueType**](SettingValueType.md) | The initial value in the given Environment. It must respect the setting type. In some generated clients for strictly typed languages, you may use double/float properties to handle integer values. In case of a Feature Flag with predefined variations, the value must match one of the predefined variations\&#39; value. | [default to undefined]

## Example

```typescript
import { InitialValue } from './api';

const instance: InitialValue = {
    environmentId,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
