# IntegrationLinksApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addOrUpdateIntegrationLink**](#addorupdateintegrationlink) | **POST** /v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key} | Add or update Integration link|
|[**deleteIntegrationLink**](#deleteintegrationlink) | **DELETE** /v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key} | Delete Integration link|
|[**getIntegrationLinkDetails**](#getintegrationlinkdetails) | **GET** /v1/integrationLink/{integrationLinkType}/{key}/details | Get Integration link|
|[**jiraAddOrUpdateIntegrationLink**](#jiraaddorupdateintegrationlink) | **POST** /v1/jira/environments/{environmentId}/settings/{settingId}/integrationLinks/{key} | |
|[**jiraConnect**](#jiraconnect) | **POST** /v1/jira/connect | |

# **addOrUpdateIntegrationLink**
> IntegrationLinkModel addOrUpdateIntegrationLink()



### Example

```typescript
import {
    IntegrationLinksApi,
    Configuration,
    AddOrUpdateIntegrationLinkModel
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationLinksApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let integrationLinkType: IntegrationLinkType; //The integration link\'s type. (default to undefined)
let key: string; //The key of the integration link. (default to undefined)
let addOrUpdateIntegrationLinkModel: AddOrUpdateIntegrationLinkModel; // (optional)

const { status, data } = await apiInstance.addOrUpdateIntegrationLink(
    environmentId,
    settingId,
    integrationLinkType,
    key,
    addOrUpdateIntegrationLinkModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addOrUpdateIntegrationLinkModel** | **AddOrUpdateIntegrationLinkModel**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **integrationLinkType** | **IntegrationLinkType** | The integration link\&#39;s type. | defaults to undefined|
| **key** | [**string**] | The key of the integration link. | defaults to undefined|


### Return type

**IntegrationLinkModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the integration link data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIntegrationLink**
> DeleteIntegrationLinkModel deleteIntegrationLink()



### Example

```typescript
import {
    IntegrationLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationLinksApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let integrationLinkType: IntegrationLinkType; //The integration\'s type. (default to undefined)
let key: string; //The key of the integration link. (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationLink(
    environmentId,
    settingId,
    integrationLinkType,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **integrationLinkType** | **IntegrationLinkType** | The integration\&#39;s type. | defaults to undefined|
| **key** | [**string**] | The key of the integration link. | defaults to undefined|


### Return type

**DeleteIntegrationLinkModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrationLinkDetails**
> IntegrationLinkDetailsModel getIntegrationLinkDetails()



### Example

```typescript
import {
    IntegrationLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationLinksApi(configuration);

let integrationLinkType: IntegrationLinkType; //The integration link\'s type. (default to undefined)
let key: string; //The key of the integration link. (default to undefined)

const { status, data } = await apiInstance.getIntegrationLinkDetails(
    integrationLinkType,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationLinkType** | **IntegrationLinkType** | The integration link\&#39;s type. | defaults to undefined|
| **key** | [**string**] | The key of the integration link. | defaults to undefined|


### Return type

**IntegrationLinkDetailsModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the details for the integration link returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jiraAddOrUpdateIntegrationLink**
> IntegrationLinkModel jiraAddOrUpdateIntegrationLink()


### Example

```typescript
import {
    IntegrationLinksApi,
    Configuration,
    AddOrUpdateJiraIntegrationLinkModel
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationLinksApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let key: string; //The key of the integration link. (default to undefined)
let addOrUpdateJiraIntegrationLinkModel: AddOrUpdateJiraIntegrationLinkModel; // (optional)

const { status, data } = await apiInstance.jiraAddOrUpdateIntegrationLink(
    environmentId,
    settingId,
    key,
    addOrUpdateJiraIntegrationLinkModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addOrUpdateJiraIntegrationLinkModel** | **AddOrUpdateJiraIntegrationLinkModel**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **key** | [**string**] | The key of the integration link. | defaults to undefined|


### Return type

**IntegrationLinkModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the integration link data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jiraConnect**
> jiraConnect()


### Example

```typescript
import {
    IntegrationLinksApi,
    Configuration,
    ConnectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationLinksApi(configuration);

let connectRequest: ConnectRequest; // (optional)

const { status, data } = await apiInstance.jiraConnect(
    connectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectRequest** | **ConnectRequest**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

