# ConnectionPreferences

The connection preferences for the proxy profile, including SDK poll interval and webhook proxy URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdkPollInterval** | **number** | The SDK poll interval in seconds that determines how often SDKs should fetch config JSON updates. | [default to undefined]
**webhookNotification** | [**WebhookNotification**](WebhookNotification.md) |  | [default to undefined]

## Example

```typescript
import { ConnectionPreferences } from './api';

const instance: ConnectionPreferences = {
    sdkPollInterval,
    webhookNotification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
