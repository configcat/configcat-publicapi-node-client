# FeatureFlagSettingValuesApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSettingValue**](#getsettingvalue) | **GET** /v1/environments/{environmentId}/settings/{settingId}/value | Get value|
|[**getSettingValues**](#getsettingvalues) | **GET** /v1/configs/{configId}/environments/{environmentId}/values | Get values|
|[**postSettingValues**](#postsettingvalues) | **POST** /v1/configs/{configId}/environments/{environmentId}/values | Post values|
|[**replaceSettingValue**](#replacesettingvalue) | **PUT** /v1/environments/{environmentId}/settings/{settingId}/value | Replace value|
|[**updateSettingValue**](#updatesettingvalue) | **PATCH** /v1/environments/{environmentId}/settings/{settingId}/value | Update value|

# **getSettingValue**
> SettingValueModel getSettingValue()

This endpoint returns the value of a Feature Flag or Setting  in a specified Environment identified by the `environmentId` parameter.  The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`. The `value` represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The `rolloutRules` and `percentageRules` attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview).

### Example

```typescript
import {
    FeatureFlagSettingValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)

const { status, data } = await apiInstance.getSettingValue(
    environmentId,
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|


### Return type

**SettingValueModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the setting value data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSettingValues**
> ConfigSettingValuesModel getSettingValues()

This endpoint returns the value of a specified Config\'s Feature Flags or Settings identified by the `configId` parameter in a specified Environment identified by the `environmentId` parameter.  The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`. The `value` represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The `rolloutRules` and `percentageRules` attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).

### Example

```typescript
import {
    FeatureFlagSettingValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)

const { status, data } = await apiInstance.getSettingValues(
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

**ConfigSettingValuesModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the setting values returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSettingValues**
> ConfigSettingValuesModel postSettingValues(updateSettingValuesWithIdModel)

This endpoint replaces the values of a specified Config\'s Feature Flags or Settings identified by the `configId` parameter in a specified Environment identified by the `environmentId` parameter.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t  want to change in its original state. Not listing one means it will reset.  For example: We have the following resource. ```json {   \"settingValues\": [     {       \"rolloutPercentageItems\": [         {           \"percentage\": 30,           \"value\": true         },         {           \"percentage\": 70,           \"value\": false         }       ],       \"rolloutRules\": [],       \"value\": false,       \"settingId\": 1     }   ] } ``` If we send a replace request body as below: ```json {    \"settingValues\": [     {       \"value\": true,       \"settingId\": 1     }   ] } ``` Then besides that the default value is set to `true`, all the Percentage Rules are deleted.  So we get a response like this: ```json {   \"settingValues\": [     {       \"rolloutPercentageItems\": [],       \"rolloutRules\": [],       \"value\": true,       \"setting\":        {         \"settingId\": 1       }     }   ] } ```  The `rolloutRules` property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required. - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example

```typescript
import {
    FeatureFlagSettingValuesApi,
    Configuration,
    UpdateSettingValuesWithIdModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)
let updateSettingValuesWithIdModel: UpdateSettingValuesWithIdModel; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)

const { status, data } = await apiInstance.postSettingValues(
    configId,
    environmentId,
    updateSettingValuesWithIdModel,
    reason
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSettingValuesWithIdModel** | **UpdateSettingValuesWithIdModel**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|


### Return type

**ConfigSettingValuesModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the updated setting values returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceSettingValue**
> SettingValueModel replaceSettingValue(updateSettingValueModel)

This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t  want to change in its original state. Not listing one means it will reset.  For example: We have the following resource. ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": false } ``` If we send a replace request body as below: ```json {   \"value\": true } ``` Then besides that the default value is set to `true`, all the Percentage Rules are deleted.  So we get a response like this: ```json {   \"rolloutPercentageItems\": [],   \"rolloutRules\": [],   \"value\": true } ```  The `rolloutRules` property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required. - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example

```typescript
import {
    FeatureFlagSettingValuesApi,
    Configuration,
    UpdateSettingValueModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let updateSettingValueModel: UpdateSettingValueModel; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)

const { status, data } = await apiInstance.replaceSettingValue(
    environmentId,
    settingId,
    updateSettingValueModel,
    reason
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSettingValueModel** | **UpdateSettingValueModel**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|


### Return type

**SettingValueModel**

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

# **updateSettingValue**
> SettingValueModel updateSettingValue(jsonPatchOperation)

This endpoint updates the value of a Feature Flag or Setting  with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Environment.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change. It supports collection reordering, so it also  can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource. ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": false } ``` If we send an update request body as below: ```json [   {     \"op\": \"replace\",     \"path\": \"/value\",     \"value\": true   } ] ``` Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged. So we get a response like this: ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": true } ```  The `rolloutRules` property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required. - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example

```typescript
import {
    FeatureFlagSettingValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesApi(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)

const { status, data } = await apiInstance.updateSettingValue(
    environmentId,
    settingId,
    jsonPatchOperation,
    reason
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|


### Return type

**SettingValueModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the patch was successful. |  -  |
|**204** | When no change applied on the resource. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

