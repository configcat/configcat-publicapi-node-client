# WebhooksApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /v1/configs/{configId}/environments/{environmentId}/webhooks | Create Webhook|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /v1/webhooks/{webhookId} | Delete Webhook|
|[**getWebhook**](#getwebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook|
|[**getWebhookSigningKeys**](#getwebhooksigningkeys) | **GET** /v1/webhooks/{webhookId}/keys | Get Webhook Signing Keys|
|[**getWebhooks**](#getwebhooks) | **GET** /v1/products/{productId}/webhooks | List Webhooks|
|[**replaceWebhook**](#replacewebhook) | **PUT** /v1/webhooks/{webhookId} | Replace Webhook|
|[**updateWebhook**](#updatewebhook) | **PATCH** /v1/webhooks/{webhookId} | Update Webhook|

# **createWebhook**
> WebhookResponseModel createWebhook(webHookRequestModel)

This endpoint creates a new Webhook in a specified Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebHookRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)
let webHookRequestModel: WebHookRequestModel; //

const { status, data } = await apiInstance.createWebhook(
    configId,
    environmentId,
    webHookRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webHookRequestModel** | **WebHookRequestModel**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | When the creation was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhook**
> deleteWebhook()

This endpoint removes a Webhook identified by the `webhookId` parameter.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: number; //The identifier of the Webhook. (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**number**] | The identifier of the Webhook. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | When the delete was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhook**
> WebhookResponseModel getWebhook()

This endpoint returns the metadata of a Webhook  identified by the `webhookId`.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: number; //The identifier of the Webhook. (default to undefined)

const { status, data } = await apiInstance.getWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**number**] | The identifier of the Webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the webhook data is returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookSigningKeys**
> WebhookSigningKeysModel getWebhookSigningKeys()

This endpoint returns the signing keys of a Webhook  identified by the `webhookId`.  Signing keys are used for ensuring the Webhook requests you receive are actually sent by ConfigCat.  <a href=\"https://configcat.com/docs/advanced/notifications-webhooks/#verifying-webhook-requests\" target=\"_blank\" rel=\"noopener noreferrer\">Here</a> you can read more about Webhook request verification.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: number; //The identifier of the Webhook. (default to undefined)

const { status, data } = await apiInstance.getWebhookSigningKeys(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**number**] | The identifier of the Webhook. | defaults to undefined|


### Return type

**WebhookSigningKeysModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the webhook signing keys are returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhooks**
> Array<WebhookResponseModel> getWebhooks()

This endpoint returns the list of the Webhooks that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getWebhooks(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<WebhookResponseModel>**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceWebhook**
> WebhookResponseModel replaceWebhook(webHookRequestModel)

This endpoint replaces the whole value of a Webhook identified by the `webhookId` parameter.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t want to change in its original state. Not listing one means it will reset.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebHookRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: number; //The identifier of the Webhook. (default to undefined)
let webHookRequestModel: WebHookRequestModel; //

const { status, data } = await apiInstance.replaceWebhook(
    webhookId,
    webHookRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webHookRequestModel** | **WebHookRequestModel**|  | |
| **webhookId** | [**number**] | The identifier of the Webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the replace was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> WebhookResponseModel updateWebhook(jsonPatchOperation)

This endpoint updates a Webhook identified by the `webhookId` parameter with a collection of [JSON Patch](https://jsonpatch.com) operations.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change.  For example: We have the following resource. ```json {   \"webhookId\": 6,   \"url\": \"https://example.com/hook\",   \"httpMethod\": \"post\",   \"content\": \"null\",   \"webHookHeaders\": [] } ``` If we send an update request body as below (it changes the `content` field and adds a new HTTP header): ```json [   {     \"op\": \"replace\",      \"path\": \"/content\",      \"value\": \"Some webhook content.\"   },    {     \"op\": \"add\",      \"path\": \"/webHookHeaders/-\",      \"value\": {       \"key\": \"X-Custom-Header\",        \"value\": \"Custom header value\"     }   } ] ``` Only the `content` and `webHookHeaders` are updated and all the other attributes remain unchanged. So we get a response like this: ```json {   \"webhookId\": 6,   \"url\": \"https://example.com/hook\",   \"httpMethod\": \"post\",    \"content\": \"Some webhook content.\",    \"webHookHeaders\": [     {       \"key\": \"X-Custom-Header\",        \"value\": \"Custom header value\",        \"isSecure\": false     }   ] } ```

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: number; //The identifier of the Webhook. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //

const { status, data } = await apiInstance.updateWebhook(
    webhookId,
    jsonPatchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **webhookId** | [**number**] | The identifier of the Webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the update was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

