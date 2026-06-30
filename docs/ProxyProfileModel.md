# ProxyProfileModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proxyProfileId** | **string** | The unique identifier of the proxy profile. | [default to undefined]
**name** | **string** | The name of the proxy profile. | [default to undefined]
**description** | **string** | The description of the proxy profile. | [default to undefined]
**lastAccessedAt** | **string** | The date and time when the proxy profile was last accessed. | [default to undefined]
**connectionPreferences** | [**ConnectionPreferences**](ConnectionPreferences.md) |  | [default to undefined]
**sdkKeySelectionRules** | [**Array&lt;ProxyProfileSelectionRule&gt;**](ProxyProfileSelectionRule.md) |  | [default to undefined]

## Example

```typescript
import { ProxyProfileModel } from './api';

const instance: ProxyProfileModel = {
    proxyProfileId,
    name,
    description,
    lastAccessedAt,
    connectionPreferences,
    sdkKeySelectionRules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
