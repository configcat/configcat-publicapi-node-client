# SegmentsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSegment**](#createsegment) | **POST** /v1/products/{productId}/segments | Create Segment|
|[**deleteSegment**](#deletesegment) | **DELETE** /v1/segments/{segmentId} | Delete Segment|
|[**getSegment**](#getsegment) | **GET** /v1/segments/{segmentId} | Get Segment|
|[**getSegments**](#getsegments) | **GET** /v1/products/{productId}/segments | List Segments|
|[**updateSegment**](#updatesegment) | **PUT** /v1/segments/{segmentId} | Update Segment|

# **createSegment**
> SegmentModel createSegment(createSegmentModel)

This endpoint creates a new Segment in a specified Product  identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    CreateSegmentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let createSegmentModel: CreateSegmentModel; //

const { status, data } = await apiInstance.createSegment(
    productId,
    createSegmentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSegmentModel** | **CreateSegmentModel**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**SegmentModel**

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

# **deleteSegment**
> deleteSegment()

This endpoint removes a Segment identified by the `segmentId` parameter.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let segmentId: string; //The identifier of the Segment. (default to undefined)

const { status, data } = await apiInstance.deleteSegment(
    segmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentId** | [**string**] | The identifier of the Segment. | defaults to undefined|


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

# **getSegment**
> SegmentModel getSegment()

This endpoint returns the metadata of a Segment identified by the `segmentId`.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let segmentId: string; //The identifier of the Segment. (default to undefined)

const { status, data } = await apiInstance.getSegment(
    segmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentId** | [**string**] | The identifier of the Segment. | defaults to undefined|


### Return type

**SegmentModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the config data returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSegments**
> Array<SegmentListModel> getSegments()

This endpoint returns the list of the Segments that belongs to the given Product identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getSegments(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<SegmentListModel>**

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

# **updateSegment**
> SegmentModel updateSegment(updateSegmentModel)

This endpoint updates a Segment identified by the `segmentId` parameter.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    UpdateSegmentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let segmentId: string; //The identifier of the Segment. (default to undefined)
let updateSegmentModel: UpdateSegmentModel; //

const { status, data } = await apiInstance.updateSegment(
    segmentId,
    updateSegmentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSegmentModel** | **UpdateSegmentModel**|  | |
| **segmentId** | [**string**] | The identifier of the Segment. | defaults to undefined|


### Return type

**SegmentModel**

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

