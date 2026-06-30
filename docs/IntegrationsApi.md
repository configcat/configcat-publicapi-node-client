# IntegrationsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegration**](#createintegration) | **POST** /v1/products/{productId}/integrations | Create Integration|
|[**deleteIntegration**](#deleteintegration) | **DELETE** /v1/integrations/{integrationId} | Delete Integration|
|[**getIntegration**](#getintegration) | **GET** /v1/integrations/{integrationId} | Get Integration|
|[**getIntegrations**](#getintegrations) | **GET** /v1/products/{productId}/integrations | List Integrations|
|[**updateIntegration**](#updateintegration) | **PUT** /v1/integrations/{integrationId} | Update Integration|

# **createIntegration**
> IntegrationModel createIntegration(createIntegrationModel)

This endpoint creates a new Integration in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.  The Parameters dictionary differs for each IntegrationType: - Datadog  - `apikey`: Required. Datadog API key.  - `site`: Datadog site. Available values: `Us`, `Eu`, `Us1Fed`, `Us3`, `Us5`. Default: `Us`. - Slack    Connecting the Slack integration through the Public Management API will not post messages with the ConfigCat Feature Flags Slack app but with an incoming webhook.  - `incoming_webhook.url`: Required. The [incoming webhook URL](https://api.slack.com/messaging/webhooks) where the integration should post messages.     - `includeSensitiveData`: Set to \"true\" to include [sensitive (hashed) comparison values](https://configcat.com/docs/targeting/targeting-rule/user-condition/#confidential-text-comparators). By default, the integration will mask these values in the posted messages. We recommend hiding sensitive comparison values for shared or public Slack channels. - Amplitude  - `apiKey`: Required. Amplitude API Key.  - `secretKey`: Required. Amplitude Secret Key. - Mixpanel  - `serviceAccountUserName`: Required. Mixpanel Service Account Username.  - `serviceAccountSecret`: Required. Mixpanel Service Account Secret.  - `projectId`: Required. Mixpanel Project ID.  - `server`: Mixpanel Server. Available values: `StandardServer`, `EUResidencyServer`. Default: `StandardServer`. - Twilio Segment  - `writeKey`: Required. Twilio Segment Write Key.  - `server`: Twilio Segment Server. Available values: `Us`, `Eu`. Default: `Us`. - PubNub (work in progress)

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    CreateIntegrationModel
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let createIntegrationModel: CreateIntegrationModel; //

const { status, data } = await apiInstance.createIntegration(
    productId,
    createIntegrationModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIntegrationModel** | **CreateIntegrationModel**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**IntegrationModel**

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

# **deleteIntegration**
> deleteIntegration()

This endpoint removes a Integration identified by the `integrationId` parameter.

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let integrationId: string; //The identifier of the Integration. (default to undefined)

const { status, data } = await apiInstance.deleteIntegration(
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationId** | [**string**] | The identifier of the Integration. | defaults to undefined|


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

# **getIntegration**
> IntegrationModel getIntegration()

This endpoint returns the metadata of an Integration identified by the `integrationId`.

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let integrationId: string; //The identifier of the Integration. (default to undefined)

const { status, data } = await apiInstance.getIntegration(
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationId** | [**string**] | The identifier of the Integration. | defaults to undefined|


### Return type

**IntegrationModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the integration data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrations**
> IntegrationsModel getIntegrations()

This endpoint returns the list of the Integrations that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getIntegrations(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**IntegrationsModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIntegration**
> IntegrationModel updateIntegration(modifyIntegrationRequest)

This endpoint updates a Config identified by the `integrationId` parameter.  The Parameters dictionary differs for each IntegrationType: - Datadog  - `apikey`: Required. Datadog API key.  - `site`: Datadog site. Available values: `Us`, `Eu`, `Us1Fed`, `Us3`, `Us5`. Default: `Us`. - Slack    Connecting the Slack integration through the Public Management API will not post messages with the ConfigCat Feature Flags Slack app but with an incoming webhook.  - `incoming_webhook.url`: Required. The [incoming webhook URL](https://api.slack.com/messaging/webhooks) where the integration should post messages.  - `includeSensitiveData`: Set to \"true\" to include [sensitive (hashed) comparison values](https://configcat.com/docs/targeting/targeting-rule/user-condition/#confidential-text-comparators). By default, the integration will mask these values in the posted messages. We recommend hiding sensitive comparison values for shared or public Slack channels. - Amplitude  - `apiKey`: Required. Amplitude API Key.  - `secretKey`: Required. Amplitude Secret Key. - Mixpanel  - `serviceAccountUserName`: Required. Mixpanel Service Account Username.  - `serviceAccountSecret`: Required. Mixpanel Service Account Secret.  - `projectId`: Required. Mixpanel Project ID.  - `server`: Mixpanel Server. Available values: `StandardServer`, `EUResidencyServer`. Default: `StandardServer`. - Twilio Segment  - `writeKey`: Required. Twilio Segment Write Key.  - `server`: Twilio Segment Server. Available values: `Us`, `Eu`. Default: `Us`. - PubNub (work in progress)

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    ModifyIntegrationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let integrationId: string; //The identifier of the Integration. (default to undefined)
let modifyIntegrationRequest: ModifyIntegrationRequest; //

const { status, data } = await apiInstance.updateIntegration(
    integrationId,
    modifyIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyIntegrationRequest** | **ModifyIntegrationRequest**|  | |
| **integrationId** | [**string**] | The identifier of the Integration. | defaults to undefined|


### Return type

**IntegrationModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

