# FeatureFlagsSettingsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSetting**](#createsetting) | **POST** /v1/configs/{configId}/settings | Create Flag|
|[**deleteSetting**](#deletesetting) | **DELETE** /v1/settings/{settingId} | Delete Flag|
|[**getPredefinedVariations**](#getpredefinedvariations) | **GET** /v1/settings/{settingId}/predefined-variations | Get predefined variations|
|[**getSetting**](#getsetting) | **GET** /v1/settings/{settingId} | Get Flag|
|[**getSettings**](#getsettings) | **GET** /v1/configs/{configId}/settings | List Flags|
|[**replaceSetting**](#replacesetting) | **PUT** /v1/settings/{settingId} | Replace Flag|
|[**updatePredefinedVariations**](#updatepredefinedvariations) | **PUT** /v1/settings/{settingId}/predefined-variations | Update predefined variations|
|[**updateSetting**](#updatesetting) | **PATCH** /v1/settings/{settingId} | Update Flag|

# **createSetting**
> SettingModel createSetting(createSettingInitialValues)

This endpoint creates a new Feature Flag or Setting in a specified Config identified by the `configId` parameter.  **Important:** The `key` attribute must be unique within the given Config.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration,
    CreateSettingInitialValues
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let createSettingInitialValues: CreateSettingInitialValues; //

const { status, data } = await apiInstance.createSetting(
    configId,
    createSettingInitialValues
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSettingInitialValues** | **CreateSettingInitialValues**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


### Return type

**SettingModel**

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

# **deleteSetting**
> deleteSetting()

This endpoint removes a Feature Flag or Setting from a specified Config,  identified by the `configId` parameter.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)

const { status, data } = await apiInstance.deleteSetting(
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


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

# **getPredefinedVariations**
> PredefinedVariationsWithUsagesModel getPredefinedVariations()

This endpoint returns the predefined variations along with their usages in the Environments for a Feature Flag or Setting identified by the `settingId` parameter.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)

const { status, data } = await apiInstance.getPredefinedVariations(
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**PredefinedVariationsWithUsagesModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the update was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSetting**
> SettingModel getSetting()

This endpoint returns the metadata attributes of a Feature Flag or Setting  identified by the `settingId` parameter.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)

const { status, data } = await apiInstance.getSetting(
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**SettingModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the setting data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSettings**
> Array<SettingModel> getSettings()

This endpoint returns the list of the Feature Flags and Settings defined in a  specified Config, identified by the `configId` parameter.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)

const { status, data } = await apiInstance.getSettings(
    configId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


### Return type

**Array<SettingModel>**

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

# **replaceSetting**
> SettingModel replaceSetting(replaceSettingModel)

This endpoint replaces the whole value of a Feature Flag or Setting identified by the `settingId` parameter.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t  want to change in its original state. Not listing one means it will reset.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration,
    ReplaceSettingModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)
let replaceSettingModel: ReplaceSettingModel; //

const { status, data } = await apiInstance.replaceSetting(
    settingId,
    replaceSettingModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceSettingModel** | **ReplaceSettingModel**|  | |
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**SettingModel**

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

# **updatePredefinedVariations**
> PredefinedVariationsModel updatePredefinedVariations(updatePredefinedVariationsRequest)

This endpoint updates the predefined variations for a Feature Flag or Setting identified by the `settingId` parameter.  **Important:** You can only update a predefined variation\'s value if it is not used anywhere in your feature flags.

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration,
    UpdatePredefinedVariationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)
let updatePredefinedVariationsRequest: UpdatePredefinedVariationsRequest; //

const { status, data } = await apiInstance.updatePredefinedVariations(
    settingId,
    updatePredefinedVariationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePredefinedVariationsRequest** | **UpdatePredefinedVariationsRequest**|  | |
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**PredefinedVariationsModel**

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

# **updateSetting**
> SettingModel updateSetting(jsonPatchOperation)

This endpoint updates the metadata of a Feature Flag or Setting  with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Config.  Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint. The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change.  For example: We have the following resource. ```json {   \"settingId\": 5345,   \"key\": \"myGrandFeature\",   \"name\": \"Tihs is a naem with soem typos.\",   \"hint\": \"This flag controls my grandioso feature.\",   \"settingType\": \"boolean\",   \"tags\": [     {       \"tagId\": 0,        \"name\": \"sample tag\",        \"color\": \"whale\"     }   ] } ``` If we send an update request body as below (it changes the `name` and adds the already existing tag with the id `2`): ```json [   {     \"op\": \"replace\",      \"path\": \"/name\",      \"value\": \"This is the name without typos.\"   },    {     \"op\": \"add\",      \"path\": \"/tags/-\",      \"value\": 2   } ] ``` Only the `name` and `tags` are updated and all the other attributes remain unchanged. So we get a response like this: ```json {   \"settingId\": 5345,    \"key\": \"myGrandFeature\",    \"name\": \"This is the name without typos.\",    \"hint\": \"This flag controls my grandioso feature.\",    \"settingType\": \"boolean\",    \"tags\": [     {       \"tagId\": 0,        \"name\": \"sample tag\",        \"color\": \"whale\"     },      {       \"tagId\": 2,        \"name\": \"another tag\",        \"color\": \"koala\"     }   ] } ```

### Example

```typescript
import {
    FeatureFlagsSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagsSettingsApi(configuration);

let settingId: number; //The identifier of the Setting. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //

const { status, data } = await apiInstance.updateSetting(
    settingId,
    jsonPatchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**SettingModel**

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

