# MeApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMe**](#getme) | **GET** /v1/me | Get authenticated user details|

# **getMe**
> MeModel getMe()



### Example

```typescript
import {
    MeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.getMe();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MeModel**

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

