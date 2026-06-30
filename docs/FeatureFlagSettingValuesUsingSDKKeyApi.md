# FeatureFlagSettingValuesUsingSDKKeyApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSettingValueBySdkkey**](#getsettingvaluebysdkkey) | **GET** /v1/settings/{settingKeyOrId}/value | Get value|
|[**replaceSettingValueBySdkkey**](#replacesettingvaluebysdkkey) | **PUT** /v1/settings/{settingKeyOrId}/value | Replace value|
|[**updateSettingValueBySdkkey**](#updatesettingvaluebysdkkey) | **PATCH** /v1/settings/{settingKeyOrId}/value | Update value|

# **getSettingValueBySdkkey**
> SettingValueModel getSettingValueBySdkkey()

This endpoint returns the value of a Feature Flag or Setting  in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.  The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`. The `value` represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The `rolloutRules` and `percentageRules` attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).

### Example

```typescript
import {
    FeatureFlagSettingValuesUsingSDKKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesUsingSDKKeyApi(configuration);

let settingKeyOrId: string; //The key or id of the Setting. (default to undefined)
let xCONFIGCATSDKKEY: string; //The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) (optional) (default to undefined)

const { status, data } = await apiInstance.getSettingValueBySdkkey(
    settingKeyOrId,
    xCONFIGCATSDKKEY
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingKeyOrId** | [**string**] | The key or id of the Setting. | defaults to undefined|
| **xCONFIGCATSDKKEY** | [**string**] | The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) | (optional) defaults to undefined|


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
|**200** |  |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceSettingValueBySdkkey**
> SettingValueModel replaceSettingValueBySdkkey(updateSettingValueModel)

This endpoint replaces the value of a Feature Flag or Setting  in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t  want to change to its original state. Not listing one means it will reset.  For example: We have the following resource. ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": false } ``` If we send a replace request body as below: ```json {   \"value\": true } ``` Then besides that the default served value is set to `true`, all the Percentage Rules are deleted.  So we get a response like this: ```json {   \"rolloutPercentageItems\": [],   \"rolloutRules\": [],   \"value\": true } ```

### Example

```typescript
import {
    FeatureFlagSettingValuesUsingSDKKeyApi,
    Configuration,
    UpdateSettingValueModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesUsingSDKKeyApi(configuration);

let settingKeyOrId: string; //The key or id of the Setting. (default to undefined)
let updateSettingValueModel: UpdateSettingValueModel; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)
let xCONFIGCATSDKKEY: string; //The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) (optional) (default to undefined)

const { status, data } = await apiInstance.replaceSettingValueBySdkkey(
    settingKeyOrId,
    updateSettingValueModel,
    reason,
    xCONFIGCATSDKKEY
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSettingValueModel** | **UpdateSettingValueModel**|  | |
| **settingKeyOrId** | [**string**] | The key or id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|
| **xCONFIGCATSDKKEY** | [**string**] | The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) | (optional) defaults to undefined|


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

# **updateSettingValueBySdkkey**
> SettingValueModel updateSettingValueBySdkkey(jsonPatchOperation)

This endpoint updates the value of a Feature Flag or Setting  with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change. It supports collection reordering, so it also  can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource. ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": false } ``` If we send an update request body as below: ```json [   {     \"op\": \"replace\",     \"path\": \"/value\",     \"value\": true   } ] ``` Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged. So we get a response like this: ```json {   \"rolloutPercentageItems\": [     {       \"percentage\": 30,       \"value\": true     },     {       \"percentage\": 70,       \"value\": false     }   ],   \"rolloutRules\": [],   \"value\": true } ```

### Example

```typescript
import {
    FeatureFlagSettingValuesUsingSDKKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesUsingSDKKeyApi(configuration);

let settingKeyOrId: string; //The key or id of the Setting. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)
let xCONFIGCATSDKKEY: string; //The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) (optional) (default to undefined)

const { status, data } = await apiInstance.updateSettingValueBySdkkey(
    settingKeyOrId,
    jsonPatchOperation,
    reason,
    xCONFIGCATSDKKEY
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **settingKeyOrId** | [**string**] | The key or id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|
| **xCONFIGCATSDKKEY** | [**string**] | The ConfigCat SDK Key. (https://app.configcat.com/sdkkey) | (optional) defaults to undefined|


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
|**204** | When no change applied on the resource. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

