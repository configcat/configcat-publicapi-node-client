# CreateOrUpdateConnectionPreferences

The preferences related to a connection, including polling intervals and webhook proxy configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdkPollInterval** | **number** | The SDK poll interval in seconds. If not specified, a default value (60) will be used. | [optional] [default to undefined]
**webhookNotification** | [**CreateOrUpdateWebhookNotification**](CreateOrUpdateWebhookNotification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOrUpdateConnectionPreferences } from './api';

const instance: CreateOrUpdateConnectionPreferences = {
    sdkPollInterval,
    webhookNotification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
