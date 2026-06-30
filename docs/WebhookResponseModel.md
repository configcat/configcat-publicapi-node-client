# WebhookResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookId** | **number** | The identifier of the Webhook. | [default to undefined]
**url** | **string** | The URL of the Webhook. | [default to undefined]
**httpMethod** | [**WebHookHttpMethod**](WebHookHttpMethod.md) |  | [default to undefined]
**content** | **string** | The HTTP body content. | [default to undefined]
**webHookHeaders** | [**Array&lt;WebhookHeaderResponseModel&gt;**](WebhookHeaderResponseModel.md) | List of HTTP headers that the Webhook must send. | [default to undefined]
**config** | [**WebhookConfig**](WebhookConfig.md) |  | [default to undefined]
**environment** | [**WebhookEnvironment**](WebhookEnvironment.md) |  | [default to undefined]

## Example

```typescript
import { WebhookResponseModel } from './api';

const instance: WebhookResponseModel = {
    webhookId,
    url,
    httpMethod,
    content,
    webHookHeaders,
    config,
    environment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
