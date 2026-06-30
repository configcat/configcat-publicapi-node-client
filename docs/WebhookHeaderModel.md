# WebhookHeaderModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The HTTP header key. | [default to undefined]
**value** | **string** | The HTTP header value. | [default to undefined]
**isSecure** | **boolean** | Indicates whether the header value is sensitive. | [optional] [default to undefined]

## Example

```typescript
import { WebhookHeaderModel } from './api';

const instance: WebhookHeaderModel = {
    key,
    value,
    isSecure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
