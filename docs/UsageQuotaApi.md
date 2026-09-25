# UsageQuotaApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOrganizationUsageAndQuota**](#getorganizationusageandquota) | **GET** /v1/organizations/{organizationId}/usage-and-quota | Get usage and quota|

# **getOrganizationUsageAndQuota**
> StatisticsV2Model getOrganizationUsageAndQuota()

This endpoint returns the current usage and quota information for an Organization. You can optionally filter the result by Product using the `productId` query parameter.  The response includes monthly aggregate values, detailed request statistics, and quota limits used to monitor consumption and over-limit conditions.

### Example

```typescript
import {
    UsageQuotaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsageQuotaApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let productId: string; //The identifier of the Product to filter statistics for. (optional) (default to undefined)

const { status, data } = await apiInstance.getOrganizationUsageAndQuota(
    organizationId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|
| **productId** | [**string**] | The identifier of the Product to filter statistics for. | (optional) defaults to undefined|


### Return type

**StatisticsV2Model**

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

