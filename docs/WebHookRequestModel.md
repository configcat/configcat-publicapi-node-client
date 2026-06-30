# WebHookRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL of the Webhook. | [default to undefined]
**content** | **string** | The HTTP body content. | [optional] [default to undefined]
**httpMethod** | [**WebHookHttpMethod**](WebHookHttpMethod.md) |  | [optional] [default to undefined]
**webHookHeaders** | [**Array&lt;WebhookHeaderModel&gt;**](WebhookHeaderModel.md) | List of HTTP headers. | [optional] [default to undefined]

## Example

```typescript
import { WebHookRequestModel } from './api';

const instance: WebHookRequestModel = {
    url,
    content,
    httpMethod,
    webHookHeaders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
