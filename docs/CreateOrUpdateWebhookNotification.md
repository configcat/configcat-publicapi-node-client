# CreateOrUpdateWebhookNotification

The preferences related to a connection, including polling intervals and webhook proxy configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookProxyUrl** | **string** | The webhook proxy URL for receiving config JSON change notifications. | [default to undefined]

## Example

```typescript
import { CreateOrUpdateWebhookNotification } from './api';

const instance: CreateOrUpdateWebhookNotification = {
    webhookProxyUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
