# CreateOrUpdateProxyProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the proxy profile. | [default to undefined]
**description** | **string** | The description of the proxy profile. | [optional] [default to undefined]
**connectionPreferences** | [**CreateOrUpdateConnectionPreferences**](CreateOrUpdateConnectionPreferences.md) |  | [optional] [default to undefined]
**sdkKeySelectionRules** | [**Array&lt;UpdateProxyProfileSelectionRule&gt;**](UpdateProxyProfileSelectionRule.md) | A collection of selection rules that determine the SDK keys applicable for a proxy profile. | [optional] [default to undefined]

## Example

```typescript
import { CreateOrUpdateProxyProfileRequest } from './api';

const instance: CreateOrUpdateProxyProfileRequest = {
    name,
    description,
    connectionPreferences,
    sdkKeySelectionRules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
