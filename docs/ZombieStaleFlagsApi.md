# ZombieStaleFlagsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getStaleflags**](#getstaleflags) | **GET** /v1/products/{productId}/staleflags | List Zombie (stale) flags for Product|

# **getStaleflags**
> StaleFlagProductModel getStaleflags()

This endpoint returns the list of Zombie (stale) flags for a given Product  and the result can be optionally filtered by various parameters.

### Example

```typescript
import {
    ZombieStaleFlagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ZombieStaleFlagsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let scope: StaleFlagReminderScope; //The scope of the report. (optional) (default to undefined)
let staleFlagAgeDays: number; //The inactivity in days after a feature flag should be considered stale. (optional) (default to undefined)
let staleFlagStaleInEnvironmentsType: StaleFlagStaleInEnvironmentsType; //Consider a feature flag as stale if the feature flag is stale in all/any of the environments. (optional) (default to undefined)
let ignoredEnvironmentIds: Array<string>; //Ignore environment identifiers from the report. (optional) (default to undefined)
let ignoredTagIds: Array<number>; //Ignore feature flags from the report based on their tag identifiers. (optional) (default to undefined)

const { status, data } = await apiInstance.getStaleflags(
    productId,
    scope,
    staleFlagAgeDays,
    staleFlagStaleInEnvironmentsType,
    ignoredEnvironmentIds,
    ignoredTagIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|
| **scope** | **StaleFlagReminderScope** | The scope of the report. | (optional) defaults to undefined|
| **staleFlagAgeDays** | [**number**] | The inactivity in days after a feature flag should be considered stale. | (optional) defaults to undefined|
| **staleFlagStaleInEnvironmentsType** | **StaleFlagStaleInEnvironmentsType** | Consider a feature flag as stale if the feature flag is stale in all/any of the environments. | (optional) defaults to undefined|
| **ignoredEnvironmentIds** | **Array&lt;string&gt;** | Ignore environment identifiers from the report. | (optional) defaults to undefined|
| **ignoredTagIds** | **Array&lt;number&gt;** | Ignore feature flags from the report based on their tag identifiers. | (optional) defaults to undefined|


### Return type

**StaleFlagProductModel**

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

