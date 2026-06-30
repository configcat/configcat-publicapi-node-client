# ConfigsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConfig**](#createconfig) | **POST** /v1/products/{productId}/configs | Create Config|
|[**deleteConfig**](#deleteconfig) | **DELETE** /v1/configs/{configId} | Delete Config|
|[**getConfig**](#getconfig) | **GET** /v1/configs/{configId} | Get Config|
|[**getConfigs**](#getconfigs) | **GET** /v1/products/{productId}/configs | List Configs|
|[**updateConfig**](#updateconfig) | **PUT** /v1/configs/{configId} | Update Config|

# **createConfig**
> ConfigModel createConfig(createConfigRequest)

This endpoint creates a new Config in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    CreateConfigRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let createConfigRequest: CreateConfigRequest; //

const { status, data } = await apiInstance.createConfig(
    productId,
    createConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createConfigRequest** | **CreateConfigRequest**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**ConfigModel**

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

# **deleteConfig**
> deleteConfig()

This endpoint removes a Config identified by the `configId` parameter.

### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)

const { status, data } = await apiInstance.deleteConfig(
    configId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


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

# **getConfig**
> ConfigModel getConfig()

This endpoint returns the metadata of a Config identified by the `configId`.

### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)

const { status, data } = await apiInstance.getConfig(
    configId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


### Return type

**ConfigModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the config data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConfigs**
> Array<ConfigModel> getConfigs()

This endpoint returns the list of the Configs that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getConfigs(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<ConfigModel>**

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

# **updateConfig**
> ConfigModel updateConfig(updateConfigRequest)

This endpoint updates a Config identified by the `configId` parameter.

### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    UpdateConfigRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let updateConfigRequest: UpdateConfigRequest; //

const { status, data } = await apiInstance.updateConfig(
    configId,
    updateConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateConfigRequest** | **UpdateConfigRequest**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


### Return type

**ConfigModel**

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

