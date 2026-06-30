# TagsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTag**](#createtag) | **POST** /v1/products/{productId}/tags | Create Tag|
|[**deleteTag**](#deletetag) | **DELETE** /v1/tags/{tagId} | Delete Tag|
|[**getSettingsByTag**](#getsettingsbytag) | **GET** /v1/tags/{tagId}/settings | List Settings by Tag|
|[**getTag**](#gettag) | **GET** /v1/tags/{tagId} | Get Tag|
|[**getTags**](#gettags) | **GET** /v1/products/{productId}/tags | List Tags|
|[**updateTag**](#updatetag) | **PUT** /v1/tags/{tagId} | Update Tag|

# **createTag**
> TagModel createTag(createTagModel)

This endpoint creates a new Tag in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    TagsApi,
    Configuration,
    CreateTagModel
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let productId: string; //The identifier of the Organization. (default to undefined)
let createTagModel: CreateTagModel; //

const { status, data } = await apiInstance.createTag(
    productId,
    createTagModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTagModel** | **CreateTagModel**|  | |
| **productId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**TagModel**

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

# **deleteTag**
> deleteTag()

This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: number; //The identifier of the Tag. (default to undefined)

const { status, data } = await apiInstance.deleteTag(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**number**] | The identifier of the Tag. | defaults to undefined|


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

# **getSettingsByTag**
> Array<SettingModel> getSettingsByTag()

This endpoint returns the list of the Settings that  has the specified Tag, identified by the `tagId` parameter.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: number; //The identifier of the Tag. (default to undefined)

const { status, data } = await apiInstance.getSettingsByTag(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**number**] | The identifier of the Tag. | defaults to undefined|


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
|**200** | When everything is ok, the settings data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTag**
> TagModel getTag()

This endpoint returns the metadata of a Tag  identified by the `tagId`.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: number; //The identifier of the Tag. (default to undefined)

const { status, data } = await apiInstance.getTag(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**number**] | The identifier of the Tag. | defaults to undefined|


### Return type

**TagModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the tag data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTags**
> Array<TagModel> getTags()

This endpoint returns the list of the Tags in a  specified Product, identified by the `productId` parameter.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getTags(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<TagModel>**

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

# **updateTag**
> TagModel updateTag(updateTagModel)

This endpoint updates a Tag identified by the `tagId` parameter.

### Example

```typescript
import {
    TagsApi,
    Configuration,
    UpdateTagModel
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: number; //The identifier of the Tag. (default to undefined)
let updateTagModel: UpdateTagModel; //

const { status, data } = await apiInstance.updateTag(
    tagId,
    updateTagModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTagModel** | **UpdateTagModel**|  | |
| **tagId** | [**number**] | The identifier of the Tag. | defaults to undefined|


### Return type

**TagModel**

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

