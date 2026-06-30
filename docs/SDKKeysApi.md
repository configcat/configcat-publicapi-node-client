# SDKKeysApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSdkKeys**](#getsdkkeys) | **GET** /v1/configs/{configId}/environments/{environmentId} | Get SDK Key|

# **getSdkKeys**
> SdkKeysModel getSdkKeys()

This endpoint returns the SDK Key for your Config in a specified Environment.

### Example

```typescript
import {
    SDKKeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SDKKeysApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)

const { status, data } = await apiInstance.getSdkKeys(
    configId,
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|


### Return type

**SdkKeysModel**

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

