# CodeReferencesApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1CodeReferencesDeleteReportsPost**](#v1codereferencesdeletereportspost) | **POST** /v1/code-references/delete-reports | Delete Reference reports|
|[**v1CodeReferencesPost**](#v1codereferencespost) | **POST** /v1/code-references | Upload References|
|[**v1SettingsSettingIdCodeReferencesGet**](#v1settingssettingidcodereferencesget) | **GET** /v1/settings/{settingId}/code-references | Get References for Feature Flag or Setting|

# **v1CodeReferencesDeleteReportsPost**
> v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest)



### Example

```typescript
import {
    CodeReferencesApi,
    Configuration,
    DeleteRepositoryReportsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let deleteRepositoryReportsRequest: DeleteRepositoryReportsRequest; //

const { status, data } = await apiInstance.v1CodeReferencesDeleteReportsPost(
    deleteRepositoryReportsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRepositoryReportsRequest** | **DeleteRepositoryReportsRequest**|  | |


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
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1CodeReferencesPost**
> v1CodeReferencesPost(codeReferenceRequest)



### Example

```typescript
import {
    CodeReferencesApi,
    Configuration,
    CodeReferenceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let codeReferenceRequest: CodeReferenceRequest; //

const { status, data } = await apiInstance.v1CodeReferencesPost(
    codeReferenceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeReferenceRequest** | **CodeReferenceRequest**|  | |


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
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1SettingsSettingIdCodeReferencesGet**
> Array<CodeReferenceModel> v1SettingsSettingIdCodeReferencesGet()



### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let settingId: number; //The identifier of the Feature Flag or Setting. (default to undefined)

const { status, data } = await apiInstance.v1SettingsSettingIdCodeReferencesGet(
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingId** | [**number**] | The identifier of the Feature Flag or Setting. | defaults to undefined|


### Return type

**Array<CodeReferenceModel>**

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

