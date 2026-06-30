# ProductsApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProduct**](#createproduct) | **POST** /v1/organizations/{organizationId}/products | Create Product|
|[**deleteProduct**](#deleteproduct) | **DELETE** /v1/products/{productId} | Delete Product|
|[**getProduct**](#getproduct) | **GET** /v1/products/{productId} | Get Product|
|[**getProductPreferences**](#getproductpreferences) | **GET** /v1/products/{productId}/preferences | Get Product Preferences|
|[**getProducts**](#getproducts) | **GET** /v1/products | List Products|
|[**updateProduct**](#updateproduct) | **PUT** /v1/products/{productId} | Update Product|
|[**updateProductPreferences**](#updateproductpreferences) | **POST** /v1/products/{productId}/preferences | Update Product Preferences|

# **createProduct**
> ProductModel createProduct(createProductRequest)

This endpoint creates a new Product in a specified Organization  identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    CreateProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let createProductRequest: CreateProductRequest; //

const { status, data } = await apiInstance.createProduct(
    organizationId,
    createProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductRequest** | **CreateProductRequest**|  | |
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**ProductModel**

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

# **deleteProduct**
> deleteProduct()

This endpoint removes a Product identified by the `productId` parameter.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.deleteProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


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

# **getProduct**
> ProductModel getProduct()

This endpoint returns the metadata of a Product  identified by the `productId`.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**ProductModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the product data is returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProductPreferences**
> PreferencesModel getProductPreferences()

This endpoint returns the preferences of a Product  identified by the `productId`.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getProductPreferences(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**PreferencesModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When everything is ok, the product preferences data is returned. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProducts**
> Array<ProductModel> getProducts()

This endpoint returns the list of the Products that belongs to the user.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

const { status, data } = await apiInstance.getProducts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ProductModel>**

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

# **updateProduct**
> ProductModel updateProduct(updateProductRequest)

This endpoint updates a Product identified by the `productId` parameter.

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdateProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let updateProductRequest: UpdateProductRequest; //

const { status, data } = await apiInstance.updateProduct(
    productId,
    updateProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductRequest** | **UpdateProductRequest**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**ProductModel**

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

# **updateProductPreferences**
> PreferencesModel updateProductPreferences(updatePreferencesRequest)

This endpoint updates the preferences of a Product identified by the `productId` parameter.

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdatePreferencesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let updatePreferencesRequest: UpdatePreferencesRequest; //

const { status, data } = await apiInstance.updateProductPreferences(
    productId,
    updatePreferencesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePreferencesRequest** | **UpdatePreferencesRequest**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**PreferencesModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the update was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

