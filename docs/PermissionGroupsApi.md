# PermissionGroupsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPermissionGroup**](#createpermissiongroup) | **POST** /v1/products/{productId}/permissions | Create Permission Group|
|[**deletePermissionGroup**](#deletepermissiongroup) | **DELETE** /v1/permissions/{permissionGroupId} | Delete Permission Group|
|[**getPermissionGroup**](#getpermissiongroup) | **GET** /v1/permissions/{permissionGroupId} | Get Permission Group|
|[**getPermissionGroups**](#getpermissiongroups) | **GET** /v1/products/{productId}/permissions | List Permission Groups|
|[**updatePermissionGroup**](#updatepermissiongroup) | **PUT** /v1/permissions/{permissionGroupId} | Update Permission Group|

# **createPermissionGroup**
> PermissionGroupModel createPermissionGroup(createPermissionGroupRequest)

This endpoint creates a new Permission Group in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    PermissionGroupsApi,
    Configuration,
    CreatePermissionGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionGroupsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let createPermissionGroupRequest: CreatePermissionGroupRequest; //

const { status, data } = await apiInstance.createPermissionGroup(
    productId,
    createPermissionGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPermissionGroupRequest** | **CreatePermissionGroupRequest**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**PermissionGroupModel**

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

# **deletePermissionGroup**
> deletePermissionGroup()

This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.

### Example

```typescript
import {
    PermissionGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionGroupsApi(configuration);

let permissionGroupId: number; //The identifier of the Permission Group. (default to undefined)

const { status, data } = await apiInstance.deletePermissionGroup(
    permissionGroupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionGroupId** | [**number**] | The identifier of the Permission Group. | defaults to undefined|


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

# **getPermissionGroup**
> PermissionGroupModel getPermissionGroup()

This endpoint returns the metadata of a Permission Group  identified by the `permissionGroupId`.

### Example

```typescript
import {
    PermissionGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionGroupsApi(configuration);

let permissionGroupId: number; //The identifier of the Permission Group. (default to undefined)

const { status, data } = await apiInstance.getPermissionGroup(
    permissionGroupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionGroupId** | [**number**] | The identifier of the Permission Group. | defaults to undefined|


### Return type

**PermissionGroupModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the permission group data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPermissionGroups**
> Array<PermissionGroupModel> getPermissionGroups()

This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    PermissionGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionGroupsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getPermissionGroups(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<PermissionGroupModel>**

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

# **updatePermissionGroup**
> PermissionGroupModel updatePermissionGroup(updatePermissionGroupRequest)

This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.

### Example

```typescript
import {
    PermissionGroupsApi,
    Configuration,
    UpdatePermissionGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionGroupsApi(configuration);

let permissionGroupId: number; //The identifier of the Permission Group. (default to undefined)
let updatePermissionGroupRequest: UpdatePermissionGroupRequest; //

const { status, data } = await apiInstance.updatePermissionGroup(
    permissionGroupId,
    updatePermissionGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePermissionGroupRequest** | **UpdatePermissionGroupRequest**|  | |
| **permissionGroupId** | [**number**] | The identifier of the Permission Group. | defaults to undefined|


### Return type

**PermissionGroupModel**

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

