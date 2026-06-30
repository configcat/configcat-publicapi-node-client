# WebhookNotification

The webhook notification settings, including the proxy URL and signing keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookProxyUrl** | **string** | The webhook proxy URL for receiving config JSON change notifications. | [default to undefined]
**signingKey1** | **string** | The primary signing key used for verifying the authenticity of webhook requests. | [default to undefined]
**signingKey2** | **string** | The secondary signing key used for verifying the authenticity of webhook requests. | [default to undefined]

## Example

```typescript
import { WebhookNotification } from './api';

const instance: WebhookNotification = {
    webhookProxyUrl,
    signingKey1,
    signingKey2,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
