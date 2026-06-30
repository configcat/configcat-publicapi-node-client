# ProxyProfileSdkKeysRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ProxyProfileSdkKeyRequestItem&gt;**](ProxyProfileSdkKeyRequestItem.md) | The list of Config / Environment pairs. By only setting a &#x60;configId&#x60; means all Environments of that Config will be included. Similarly, by only setting an &#x60;environmentId&#x60; means all Configs with that Environment will be included. | [default to undefined]

## Example

```typescript
import { ProxyProfileSdkKeysRequest } from './api';

const instance: ProxyProfileSdkKeysRequest = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
