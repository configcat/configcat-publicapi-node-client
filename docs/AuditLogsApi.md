# AuditLogsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuditlogs**](#getauditlogs) | **GET** /v1/products/{productId}/auditlogs | List Audit log items for Product|
|[**getAuditlogsV2**](#getauditlogsv2) | **GET** /v2/products/{productId}/auditlogs | List Audit log items for Product (V2)|
|[**getDeletedSettings**](#getdeletedsettings) | **GET** /v1/configs/{configId}/deleted-settings | List Deleted Settings|
|[**getOrganizationAuditlogs**](#getorganizationauditlogs) | **GET** /v1/organizations/{organizationId}/auditlogs | List Audit log items for Organization|
|[**getOrganizationAuditlogsV2**](#getorganizationauditlogsv2) | **GET** /v2/organizations/{organizationId}/auditlogs | List Audit log items for Organization (V2)|

# **getAuditlogs**
> Array<AuditLogItemModel> getAuditlogs()

This endpoint returns the list of Audit log items for a given Product and the result can be optionally filtered by Config and/or Environment.  If neither `fromUtcDateTime` nor `toUtcDateTime` is set, the audit logs for the **last 7 days** will be returned.  The distance between `fromUtcDateTime` and `toUtcDateTime` cannot exceed **30 days**.  **Important:** This endpoint is deprecated. Use the **List Audit log items for Product (V2)** endpoint instead. In the future, this endpoint will be redirected to the V2 version with default pagination parameters.

### Example

```typescript
import {
    AuditLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditLogsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let configId: string; //The identifier of the Config. (optional) (default to undefined)
let environmentId: string; //The identifier of the Environment. (optional) (default to undefined)
let auditLogType: AuditLogType; //Filter Audit logs by Audit log type. (optional) (default to undefined)
let fromUtcDateTime: string; //Filter Audit logs by starting UTC date. (optional) (default to undefined)
let toUtcDateTime: string; //Filter Audit logs by ending UTC date. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditlogs(
    productId,
    configId,
    environmentId,
    auditLogType,
    fromUtcDateTime,
    toUtcDateTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|
| **configId** | [**string**] | The identifier of the Config. | (optional) defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | (optional) defaults to undefined|
| **auditLogType** | **AuditLogType** | Filter Audit logs by Audit log type. | (optional) defaults to undefined|
| **fromUtcDateTime** | [**string**] | Filter Audit logs by starting UTC date. | (optional) defaults to undefined|
| **toUtcDateTime** | [**string**] | Filter Audit logs by ending UTC date. | (optional) defaults to undefined|


### Return type

**Array<AuditLogItemModel>**

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

# **getAuditlogsV2**
> AuditLogItemModelPagedList getAuditlogsV2()

This endpoint returns the list of Audit log items for a given Product and the result can be optionally filtered by Config and/or Environment.

### Example

```typescript
import {
    AuditLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditLogsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let configId: string; //The identifier of the Config. (optional) (default to undefined)
let environmentId: string; //The identifier of the Environment. (optional) (default to undefined)
let auditLogType: AuditLogType; //Filter Audit logs by Audit log type. (optional) (default to undefined)
let fromUtcDateTime: string; //Filter Audit logs by starting UTC date. (optional) (default to undefined)
let toUtcDateTime: string; //Filter Audit logs by ending UTC date. (optional) (default to undefined)
let pageNumber: number; //Page number (min: 1). (optional) (default to 1)
let pageSize: number; //Page size (min: 1, max: 100). (optional) (default to 100)

const { status, data } = await apiInstance.getAuditlogsV2(
    productId,
    configId,
    environmentId,
    auditLogType,
    fromUtcDateTime,
    toUtcDateTime,
    pageNumber,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|
| **configId** | [**string**] | The identifier of the Config. | (optional) defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | (optional) defaults to undefined|
| **auditLogType** | **AuditLogType** | Filter Audit logs by Audit log type. | (optional) defaults to undefined|
| **fromUtcDateTime** | [**string**] | Filter Audit logs by starting UTC date. | (optional) defaults to undefined|
| **toUtcDateTime** | [**string**] | Filter Audit logs by ending UTC date. | (optional) defaults to undefined|
| **pageNumber** | [**number**] | Page number (min: 1). | (optional) defaults to 1|
| **pageSize** | [**number**] | Page size (min: 1, max: 100). | (optional) defaults to 100|


### Return type

**AuditLogItemModelPagedList**

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

# **getDeletedSettings**
> Array<DeletedSettingModel> getDeletedSettings()

This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.

### Example

```typescript
import {
    AuditLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditLogsApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)

const { status, data } = await apiInstance.getDeletedSettings(
    configId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|


### Return type

**Array<DeletedSettingModel>**

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

# **getOrganizationAuditlogs**
> Array<AuditLogItemModel> getOrganizationAuditlogs()

This endpoint returns the list of Audit log items for a given Organization and the result can be optionally filtered by Product and/or Config and/or Environment.  If neither `fromUtcDateTime` nor `toUtcDateTime` is set, the audit logs for the **last 7 days** will be returned.  The distance between `fromUtcDateTime` and `toUtcDateTime` cannot exceed **30 days**.  **Important:** This endpoint is deprecated. Use the **List Audit log items for Organization (V2)** endpoint instead. In the future, this endpoint will be redirected to the V2 version with default pagination parameters.

### Example

```typescript
import {
    AuditLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditLogsApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let productId: string; //The identifier of the Product. (optional) (default to undefined)
let configId: string; //The identifier of the Config. (optional) (default to undefined)
let environmentId: string; //The identifier of the Environment. (optional) (default to undefined)
let auditLogType: AuditLogType; //Filter Audit logs by Audit log type. (optional) (default to undefined)
let fromUtcDateTime: string; //Filter Audit logs by starting UTC date. (optional) (default to undefined)
let toUtcDateTime: string; //Filter Audit logs by ending UTC date. (optional) (default to undefined)

const { status, data } = await apiInstance.getOrganizationAuditlogs(
    organizationId,
    productId,
    configId,
    environmentId,
    auditLogType,
    fromUtcDateTime,
    toUtcDateTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|
| **productId** | [**string**] | The identifier of the Product. | (optional) defaults to undefined|
| **configId** | [**string**] | The identifier of the Config. | (optional) defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | (optional) defaults to undefined|
| **auditLogType** | **AuditLogType** | Filter Audit logs by Audit log type. | (optional) defaults to undefined|
| **fromUtcDateTime** | [**string**] | Filter Audit logs by starting UTC date. | (optional) defaults to undefined|
| **toUtcDateTime** | [**string**] | Filter Audit logs by ending UTC date. | (optional) defaults to undefined|


### Return type

**Array<AuditLogItemModel>**

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

# **getOrganizationAuditlogsV2**
> AuditLogItemModelPagedList getOrganizationAuditlogsV2()

This endpoint returns the list of Audit log items for a given Organization and the result can be optionally filtered by Product and/or Config and/or Environment.

### Example

```typescript
import {
    AuditLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditLogsApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let productId: string; //The identifier of the Product. (optional) (default to undefined)
let configId: string; //The identifier of the Config. (optional) (default to undefined)
let environmentId: string; //The identifier of the Environment. (optional) (default to undefined)
let auditLogType: AuditLogType; //Filter Audit logs by Audit log type. (optional) (default to undefined)
let fromUtcDateTime: string; //Filter Audit logs by starting UTC date. (optional) (default to undefined)
let toUtcDateTime: string; //Filter Audit logs by ending UTC date. (optional) (default to undefined)
let pageNumber: number; //Page number (min: 1). (optional) (default to 1)
let pageSize: number; //Page size (min: 1, max: 100). (optional) (default to 100)

const { status, data } = await apiInstance.getOrganizationAuditlogsV2(
    organizationId,
    productId,
    configId,
    environmentId,
    auditLogType,
    fromUtcDateTime,
    toUtcDateTime,
    pageNumber,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|
| **productId** | [**string**] | The identifier of the Product. | (optional) defaults to undefined|
| **configId** | [**string**] | The identifier of the Config. | (optional) defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | (optional) defaults to undefined|
| **auditLogType** | **AuditLogType** | Filter Audit logs by Audit log type. | (optional) defaults to undefined|
| **fromUtcDateTime** | [**string**] | Filter Audit logs by starting UTC date. | (optional) defaults to undefined|
| **toUtcDateTime** | [**string**] | Filter Audit logs by ending UTC date. | (optional) defaults to undefined|
| **pageNumber** | [**number**] | Page number (min: 1). | (optional) defaults to 1|
| **pageSize** | [**number**] | Page size (min: 1, max: 100). | (optional) defaults to 100|


### Return type

**AuditLogItemModelPagedList**

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

