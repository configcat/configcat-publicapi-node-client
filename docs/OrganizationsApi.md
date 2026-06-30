# OrganizationsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOrganizationLimitations**](#getorganizationlimitations) | **GET** /v1/organizations/{organizationId}/organization-limitations | Get Organization limitations|
|[**getOrganizations**](#getorganizations) | **GET** /v1/organizations | List Organizations|

# **getOrganizationLimitations**
> OrganizationLimitations getOrganizationLimitations()

This endpoint returns the limitations of an Organization identified by the `organizationId`.

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)

const { status, data } = await apiInstance.getOrganizationLimitations(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**OrganizationLimitations**

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

# **getOrganizations**
> Array<OrganizationModel> getOrganizations()

This endpoint returns the list of the Organizations that belongs to the user.

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

const { status, data } = await apiInstance.getOrganizations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<OrganizationModel>**

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

