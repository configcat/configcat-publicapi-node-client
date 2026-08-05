# FeatureFlagSettingValuesV2Api

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSettingValueV2**](#getsettingvaluev2) | **GET** /v2/environments/{environmentId}/settings/{settingId}/value | Get value|
|[**getSettingValuesV2**](#getsettingvaluesv2) | **GET** /v2/configs/{configId}/environments/{environmentId}/values | Get values|
|[**postSettingValuesV2**](#postsettingvaluesv2) | **POST** /v2/configs/{configId}/environments/{environmentId}/values | Post values|
|[**replaceSettingValueV2**](#replacesettingvaluev2) | **PUT** /v2/environments/{environmentId}/settings/{settingId}/value | Replace value|
|[**updateSettingValueV2**](#updatesettingvaluev2) | **PATCH** /v2/environments/{environmentId}/settings/{settingId}/value | Update value|

# **getSettingValueV2**
> SettingFormulaModel getSettingValueV2()

This endpoint returns the value of a Feature Flag or Setting in a specified Environment identified by the `environmentId` parameter.  The most important fields in the response are the `defaultValue`, `targetingRules`, and `percentageEvaluationAttribute`. The `defaultValue` represents what the clients will get when the evaluation requests of our SDKs are not matching to any of the defined Targeting Rules, or when there are no additional rules to evaluate.  The `targetingRules` represents the current Targeting Rule configuration of the actual Feature Flag or Setting in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).  The `percentageEvaluationAttribute` represents the custom [User Object](https://configcat.com/docs/targeting/user-object/) attribute that must be used for [percentage evaluation](https://configcat.com/docs/targeting/percentage-options/) of the Feature Flag or Setting.

### Example

```typescript
import {
    FeatureFlagSettingValuesV2Api,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesV2Api(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)

const { status, data } = await apiInstance.getSettingValueV2(
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

**SettingFormulaModel**

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

# **getSettingValuesV2**
> ConfigSettingFormulasModel getSettingValuesV2()

This endpoint returns all Feature Flag and Setting values of a Config identified by the `configId` parameter in a specified Environment identified by the `environmentId` parameter.  The most important fields in the response are the `defaultValue`, `targetingRules`. The `defaultValue` represents what the clients will get when the evaluation requests of our SDKs are not matching to any of the defined Targeting Rules, or when there are no additional rules to evaluate.  The `targetingRules` represents the current Targeting Rule configuration of the actual Feature Flag or Setting in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).  The `percentageEvaluationAttribute` represents the custom [User Object](https://configcat.com/docs/targeting/user-object/) attribute that must be used for [percentage evaluation](https://configcat.com/docs/targeting/percentage-options/) of the Feature Flag or Setting.

### Example

```typescript
import {
    FeatureFlagSettingValuesV2Api,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesV2Api(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)

const { status, data } = await apiInstance.getSettingValuesV2(
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

**ConfigSettingFormulasModel**

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

# **postSettingValuesV2**
> ConfigSettingFormulasModel postSettingValuesV2(updateEvaluationFormulasModel)

This endpoint batch updates the Feature Flags and Settings of a Config identified by the `configId` parameter in a specified Environment identified by the `environmentId` parameter.  Only those Feature Flags and Settings are updated which are part of the request, all the others are left untouched.  **Important:** As this endpoint is doing a complete replace on those Feature Flags and Settings, which are set in the request.  It\'s important to set every other field that you don\'t want to change in its original state. Not listing a field means that it will reset.  For example: We have the following resource of a Feature Flag. ```json {   \"settingFormulas\": [     {       \"defaultValue\": {         \"boolValue\": false       },       \"targetingRules\": [         {           \"conditions\": [             {               \"userCondition\": {                 \"comparisonAttribute\": \"Email\",                 \"comparator\": \"sensitiveTextEquals\",                 \"comparisonValue\": {                   \"stringValue\": \"test@example.com\"                 }               }             }           ],           \"percentageOptions\": [],           \"value\": {             \"boolValue\": true           }         }       ],       \"settingId\": 1     }   ] } ``` If we send a batch replace request body as below: ```json {    \"updateFormulas\": [     {       \"defaultValue\": {         \"boolValue\": false       },       \"settingId\": 1     }   ] } ``` Then besides that the default value is set to `true`, all Targeting Rules of the related Feature Flag are deleted. So we get a response like this: ```json {   \"settingFormulas\": [     {       \"defaultValue\": {         \"boolValue\": false       },       \"targetingRules\": [],       \"setting\":        {         \"settingId\": 1       }     }   ] } ```

### Example

```typescript
import {
    FeatureFlagSettingValuesV2Api,
    Configuration,
    UpdateEvaluationFormulasModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesV2Api(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)
let updateEvaluationFormulasModel: UpdateEvaluationFormulasModel; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)
let bypassApproval: boolean; //Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. (optional) (default to undefined)
let latestVersionId: string; //Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the `LastVersionId` property of the response models. (optional) (default to undefined)

const { status, data } = await apiInstance.postSettingValuesV2(
    configId,
    environmentId,
    updateEvaluationFormulasModel,
    reason,
    bypassApproval,
    latestVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEvaluationFormulasModel** | **UpdateEvaluationFormulasModel**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|
| **bypassApproval** | [**boolean**] | Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. | (optional) defaults to undefined|
| **latestVersionId** | [**string**] | Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the &#x60;LastVersionId&#x60; property of the response models. | (optional) defaults to undefined|


### Return type

**ConfigSettingFormulasModel**

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

# **replaceSettingValueV2**
> SettingFormulaModel replaceSettingValueV2(updateEvaluationFormulaModel)

This endpoint replaces the value and the Targeting Rules of a Feature Flag or Setting in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.  Only the `defaultValue`, `targetingRules`, and `percentageEvaluationAttribute` fields are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other field that you don\'t want to change to its original state. Not listing one means it will reset.  For example: We have the following resource of a Feature Flag. ```json {   \"defaultValue\": {     \"boolValue\": false   },   \"targetingRules\": [     {       \"conditions\": [         {           \"userCondition\": {             \"comparisonAttribute\": \"Email\",             \"comparator\": \"sensitiveTextEquals\",             \"comparisonValue\": {               \"stringValue\": \"test@example.com\"             }           }         }       ],       \"percentageOptions\": [],       \"value\": {         \"boolValue\": true       }     }   ] } ``` If we send a replace request body as below: ```json {   \"defaultValue\": {     \"boolValue\": true   } } ``` Then besides that the default served value is set to `true`, all the Targeting Rules are deleted. So we get a response like this: ```json {   \"defaultValue\": {     \"boolValue\": true   },   \"targetingRules\": [] } ```

### Example

```typescript
import {
    FeatureFlagSettingValuesV2Api,
    Configuration,
    UpdateEvaluationFormulaModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesV2Api(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let updateEvaluationFormulaModel: UpdateEvaluationFormulaModel; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)
let bypassApproval: boolean; //Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. (optional) (default to undefined)
let latestVersionId: string; //Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the `LastVersionId` property of the response models. (optional) (default to undefined)

const { status, data } = await apiInstance.replaceSettingValueV2(
    environmentId,
    settingId,
    updateEvaluationFormulaModel,
    reason,
    bypassApproval,
    latestVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEvaluationFormulaModel** | **UpdateEvaluationFormulaModel**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|
| **bypassApproval** | [**boolean**] | Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. | (optional) defaults to undefined|
| **latestVersionId** | [**string**] | Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the &#x60;LastVersionId&#x60; property of the response models. | (optional) defaults to undefined|


### Return type

**SettingFormulaModel**

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

# **updateSettingValueV2**
> SettingFormulaModel updateSettingValueV2(jsonPatchOperation)

This endpoint updates the value of a Feature Flag or Setting with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Environment.  Only the `defaultValue`, `targetingRules`, and `percentageEvaluationAttribute` fields are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change. It supports collection reordering, so it also can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource of a Feature Flag. ```json {   \"defaultValue\": {     \"boolValue\": false   },   \"targetingRules\": [     {       \"conditions\": [         {           \"userCondition\": {             \"comparisonAttribute\": \"Email\",             \"comparator\": \"sensitiveTextEquals\",             \"comparisonValue\": {               \"stringValue\": \"test@example.com\"             }           }         }       ],       \"percentageOptions\": [],       \"value\": {         \"boolValue\": true       }     }   ] } ``` If we send an update request body as below: ```json [   {     \"op\": \"replace\",     \"path\": \"/targetingRules/0/value/boolValue\",     \"value\": true   } ] ``` Only the first Targeting Rule\'s `value` is going to be set to `false` and all the other fields are remaining unchanged.  So we get a response like this: ```json {   \"defaultValue\": {     \"boolValue\": false   },   \"targetingRules\": [     {       \"conditions\": [         {           \"userCondition\": {             \"comparisonAttribute\": \"Email\",             \"comparator\": \"sensitiveTextEquals\",             \"comparisonValue\": {               \"stringValue\": \"test@example.com\"             }           }         }       ],       \"percentageOptions\": [],       \"value\": {         \"boolValue\": false       }     }   ] } ```

### Example

```typescript
import {
    FeatureFlagSettingValuesV2Api,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureFlagSettingValuesV2Api(configuration);

let environmentId: string; //The identifier of the Environment. (default to undefined)
let settingId: number; //The id of the Setting. (default to undefined)
let jsonPatchOperation: Array<JsonPatchOperation>; //
let reason: string; //The reason note for the Audit Log if the Product\'s \"Config changes require a reason\" preference is turned on. (optional) (default to undefined)
let bypassApproval: boolean; //Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. (optional) (default to undefined)
let latestVersionId: string; //Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the `LastVersionId` property of the response models. (optional) (default to undefined)

const { status, data } = await apiInstance.updateSettingValueV2(
    environmentId,
    settingId,
    jsonPatchOperation,
    reason,
    bypassApproval,
    latestVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jsonPatchOperation** | **Array<JsonPatchOperation>**|  | |
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|
| **settingId** | [**number**] | The id of the Setting. | defaults to undefined|
| **reason** | [**string**] | The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on. | (optional) defaults to undefined|
| **bypassApproval** | [**boolean**] | Whether to bypass the approval process and directly apply the change. This is only applicable for users with bypass approval permission. | (optional) defaults to undefined|
| **latestVersionId** | [**string**] | Optional. The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If provided and the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. The latest version id can be acquired from the &#x60;LastVersionId&#x60; property of the response models. | (optional) defaults to undefined|


### Return type

**SettingFormulaModel**

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

