# ProxyProfilesApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProxyProfile**](#createproxyprofile) | **POST** /v1/organizations/{organizationId}/proxy-profiles | Create Proxy Profile|
|[**deleteProxyProfile**](#deleteproxyprofile) | **DELETE** /v1/proxy-profiles/{proxyProfileId} | Delete Proxy Profile|
|[**deselectProxyProfileSdkKeys**](#deselectproxyprofilesdkkeys) | **POST** /v1/proxy-profiles/{proxyProfileId}/sdk-keys/deselect | Deselect SDK keys|
|[**generateProxyProfileSecret**](#generateproxyprofilesecret) | **POST** /v1/proxy-profiles/{proxyProfileId}/secret | Generate Secret|
|[**getProxyProfile**](#getproxyprofile) | **GET** /v1/proxy-profiles/{proxyProfileId} | Get Proxy Profile|
|[**getProxyProfileSdkKeys**](#getproxyprofilesdkkeys) | **GET** /v1/proxy-profiles/{proxyProfileId}/sdk-keys | Get selected SDK keys|
|[**getProxyProfiles**](#getproxyprofiles) | **GET** /v1/organizations/{organizationId}/proxy-profiles | List Proxy Profiles|
|[**replaceProxyProfile**](#replaceproxyprofile) | **PUT** /v1/proxy-profiles/{proxyProfileId} | Replace Proxy Profile|
|[**selectProxyProfileSdkKeys**](#selectproxyprofilesdkkeys) | **POST** /v1/proxy-profiles/{proxyProfileId}/sdk-keys/select | Select SDK keys|
|[**updateProxyProfile**](#updateproxyprofile) | **PATCH** /v1/proxy-profiles/{proxyProfileId} | Update Proxy Profile|

# **createProxyProfile**
> ProxyProfileModel createProxyProfile(createOrUpdateProxyProfileRequest)

This endpoint creates a new Proxy Profile in the given Organization identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration,
    CreateOrUpdateProxyProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let createOrUpdateProxyProfileRequest: CreateOrUpdateProxyProfileRequest; //

const { status, data } = await apiInstance.createProxyProfile(
    organizationId,
    createOrUpdateProxyProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrUpdateProxyProfileRequest** | **CreateOrUpdateProxyProfileRequest**|  | |
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**ProxyProfileModel**

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

# **deleteProxyProfile**
> deleteProxyProfile()

This endpoint removes a Proxy Profile identified by the `proxyProfileId` parameter.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)

const { status, data } = await apiInstance.deleteProxyProfile(
    proxyProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


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

# **deselectProxyProfileSdkKeys**
> ProxyProfileSdkKeysListModel deselectProxyProfileSdkKeys(proxyProfileSdkKeysRequest)

This endpoint removes the given list of Config / Environment pairs\' SDK Keys from a Proxy Profile identified by the `proxyProfileId`.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration,
    ProxyProfileSdkKeysRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)
let proxyProfileSdkKeysRequest: ProxyProfileSdkKeysRequest; //

const { status, data } = await apiInstance.deselectProxyProfileSdkKeys(
    proxyProfileId,
    proxyProfileSdkKeysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileSdkKeysRequest** | **ProxyProfileSdkKeysRequest**|  | |
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileSdkKeysListModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the deselection was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**403** | Forbidden. When selection rules are applied to the Proxy Profile. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateProxyProfileSecret**
> ProxyProfileSecretModel generateProxyProfileSecret()

This endpoint (re)generates a secret token for a Proxy Profile identified by the `proxyProfileId` parameter.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)

const { status, data } = await apiInstance.generateProxyProfileSecret(
    proxyProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileSecretModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the generation was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyProfile**
> ProxyProfileModel getProxyProfile()

This endpoint returns a Proxy Profile  identified by the `proxyProfileId`.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)

const { status, data } = await apiInstance.getProxyProfile(
    proxyProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the Proxy Profile is returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyProfileSdkKeys**
> ProxyProfileSdkKeysListModel getProxyProfileSdkKeys()

This endpoint returns the list of SDK keys selected for a Proxy Profile  identified by the `proxyProfileId`.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)

const { status, data } = await apiInstance.getProxyProfileSdkKeys(
    proxyProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileSdkKeysListModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the SDK keys selected for the Proxy Profile are returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyProfiles**
> ProxyProfileListModel getProxyProfiles()

This endpoint returns the list of Proxy profiles for the given Organization identified by the `organizationId` parameter.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)

const { status, data } = await apiInstance.getProxyProfiles(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**ProxyProfileListModel**

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

# **replaceProxyProfile**
> ProxyProfileModel replaceProxyProfile(createOrUpdateProxyProfileRequest)

This endpoint replaces a Proxy Profile identified by the `proxyProfileId` parameter.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t want to change in its original state. Not listing one means it will reset.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration,
    CreateOrUpdateProxyProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)
let createOrUpdateProxyProfileRequest: CreateOrUpdateProxyProfileRequest; //

const { status, data } = await apiInstance.replaceProxyProfile(
    proxyProfileId,
    createOrUpdateProxyProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrUpdateProxyProfileRequest** | **CreateOrUpdateProxyProfileRequest**|  | |
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileModel**

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

# **selectProxyProfileSdkKeys**
> ProxyProfileSdkKeysListModel selectProxyProfileSdkKeys(proxyProfileSdkKeysRequest)

This endpoint adds the given list of Config / Environment pairs\' SDK Keys to a Proxy Profile  identified by the `proxyProfileId`.

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration,
    ProxyProfileSdkKeysRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)
let proxyProfileSdkKeysRequest: ProxyProfileSdkKeysRequest; //

const { status, data } = await apiInstance.selectProxyProfileSdkKeys(
    proxyProfileId,
    proxyProfileSdkKeysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyProfileSdkKeysRequest** | **ProxyProfileSdkKeysRequest**|  | |
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileSdkKeysListModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the selection was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**403** | Forbidden. When selection rules are applied to the Proxy Profile. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProxyProfile**
> ProxyProfileModel updateProxyProfile(jsonPatchOperation)

This endpoint updates a Proxy Profile identified by the `proxyProfileId` parameter with a collection of [JSON Patch](https://jsonpatch.com) operations.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change.  For example: We have the following resource. ```json {   \"proxyProfileId\": \"4ebe288d-6415-44a8-85c8-7b9f78316a86\",   \"name\": \"production\",   \"description\": \"profile for production environments\",   \"lastAccessedAt\": \"2019-08-24T14:15:22Z\",   \"connectionPreferences\": {     \"sdkPollInterval\": 60,     \"webhookNotification\": null   },   \"sdkKeySelectionRules\": [] } ``` If we send an update request body as below (it changes the `sdkPollInterval` field and adds a new Proxy Webhook URL): ```json [   {     \"op\": \"replace\",      \"path\": \"/connectionPreferences/sdkPollInterval\",      \"value\": 120   },    {     \"op\": \"add\",     \"path\": \"/connectionPreferences/webhookNotification\",     \"value\": {       \"webhookProxyUrl\": \"https://my-proxy-url.com\"     }   } ] ``` Only the `sdkPollInterval` and `webhookProxyUrl` are updated and all the other attributes remain unchanged. So we get a response like this: ```json {   \"proxyProfileId\": \"4ebe288d-6415-44a8-85c8-7b9f78316a86\",   \"name\": \"production\",   \"description\": \"profile for production environments\",   \"lastAccessedAt\": \"2019-08-24T14:15:22Z\",   \"connectionPreferences\": {     \"sdkPollInterval\": 120,     \"webhookNotification\": {       \"webhookProxyUrl\": \"https://my-proxy-url.com\",       \"signingKey1\": \"<generated-signing-key>\",       \"signingKey2\": null     }   },   \"sdkKeySelectionRules\": [] } ```

### Example

```typescript
import {
    ProxyProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyProfilesApi(configuration);

let proxyProfileId: string; //The identifier of the Proxy Profile. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //

const { status, data } = await apiInstance.updateProxyProfile(
    proxyProfileId,
    jsonPatchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **proxyProfileId** | [**string**] | The identifier of the Proxy Profile. | defaults to undefined|


### Return type

**ProxyProfileModel**

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

