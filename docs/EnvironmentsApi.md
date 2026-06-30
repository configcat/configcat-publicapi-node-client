# EnvironmentsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEnvironment**](#createenvironment) | **POST** /v1/products/{productId}/environments | Create Environment|
|[**deleteEnvironment**](#deleteenvironment) | **DELETE** /v1/environments/{environmentId} | Delete Environment|
|[**getEnvironment**](#getenvironment) | **GET** /v1/environments/{environmentId} | Get Environment|
|[**getEnvironments**](#getenvironments) | **GET** /v1/products/{productId}/environments | List Environments|
|[**updateEnvironment**](#updateenvironment) | **PUT** /v1/environments/{environmentId} | Update Environment|

# **createEnvironment**
> EnvironmentModel createEnvironment(createEnvironmentModel)

This endpoint creates a new Environment in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    CreateEnvironmentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let createEnvironmentModel: CreateEnvironmentModel; //

const { status, data } = await apiInstance.createEnvironment(
    productId,
    createEnvironmentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEnvironmentModel** | **CreateEnvironmentModel**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**EnvironmentModel**

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

# **deleteEnvironment**
> deleteEnvironment()

This endpoint removes an Environment identified by the `environmentId` parameter. If the `cleanupAuditLogs` flag is set to true, it also deletes the audit log records related to the environment (except for the `Created a new environment` and `Deleted an environment` records).

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let cleanupAuditLogs: boolean; //An optional flag which indicates whether the audit log records related to the environment should be deleted or not. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEnvironment(
    environmentId,
    cleanupAuditLogs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **cleanupAuditLogs** | [**boolean**] | An optional flag which indicates whether the audit log records related to the environment should be deleted or not. | (optional) defaults to undefined|


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

# **getEnvironment**
> EnvironmentModel getEnvironment()

This endpoint returns the metadata of an Environment  identified by the `environmentId`.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)

const { status, data } = await apiInstance.getEnvironment(
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|


### Return type

**EnvironmentModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the environment data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironments**
> Array<EnvironmentModel> getEnvironments()

This endpoint returns the list of the Environments that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getEnvironments(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<EnvironmentModel>**

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

# **updateEnvironment**
> EnvironmentModel updateEnvironment(updateEnvironmentModel)

This endpoint updates an Environment identified by the `environmentId` parameter.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    UpdateEnvironmentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let updateEnvironmentModel: UpdateEnvironmentModel; //

const { status, data } = await apiInstance.updateEnvironment(
    environmentId,
    updateEnvironmentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvironmentModel** | **UpdateEnvironmentModel**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|


### Return type

**EnvironmentModel**

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

