# MembersApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMemberToGroup**](#addmembertogroup) | **POST** /v1/organizations/{organizationId}/members/{userId} | Update Member Permissions|
|[**deleteInvitation**](#deleteinvitation) | **DELETE** /v1/invitations/{invitationId} | Delete Invitation|
|[**deleteOrganizationMember**](#deleteorganizationmember) | **DELETE** /v1/organizations/{organizationId}/members/{userId} | Delete Member from Organization|
|[**deleteProductMember**](#deleteproductmember) | **DELETE** /v1/products/{productId}/members/{userId} | Delete Member from Product|
|[**getOrganizationMembers**](#getorganizationmembers) | **GET** /v1/organizations/{organizationId}/members | List Organization Members|
|[**getOrganizationMembersV2**](#getorganizationmembersv2) | **GET** /v2/organizations/{organizationId}/members | List Organization Members|
|[**getPendingInvitations**](#getpendinginvitations) | **GET** /v1/products/{productId}/invitations | List Pending Invitations in Product|
|[**getPendingInvitationsOrg**](#getpendinginvitationsorg) | **GET** /v1/organizations/{organizationId}/invitations | List Pending Invitations in Organization|
|[**getProductMembers**](#getproductmembers) | **GET** /v1/products/{productId}/members | List Product Members|
|[**inviteMember**](#invitemember) | **POST** /v1/products/{productId}/members/invite | Invite Member|

# **addMemberToGroup**
> addMemberToGroup(updateMemberPermissionsRequest)

This endpoint updates the permissions of a Member identified by the `userId`.  This endpoint can also be used to move a Member between Permission Groups within a Product. Only a single Permission Group can be set per Product.

### Example

```typescript
import {
    MembersApi,
    Configuration,
    UpdateMemberPermissionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let userId: string; //The identifier of the Member. (default to undefined)
let updateMemberPermissionsRequest: UpdateMemberPermissionsRequest; //

const { status, data } = await apiInstance.addMemberToGroup(
    organizationId,
    userId,
    updateMemberPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberPermissionsRequest** | **UpdateMemberPermissionsRequest**|  | |
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|
| **userId** | [**string**] | The identifier of the Member. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the update was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInvitation**
> deleteInvitation()

This endpoint removes an Invitation identified by the `invitationId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let invitationId: string; //The identifier of the Invitation. (default to undefined)

const { status, data } = await apiInstance.deleteInvitation(
    invitationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**string**] | The identifier of the Invitation. | defaults to undefined|


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

# **deleteOrganizationMember**
> deleteOrganizationMember()

This endpoint removes a Member identified by the `userId` from the  given Organization identified by the `organizationId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)
let userId: string; //The identifier of the Member. (default to undefined)

const { status, data } = await apiInstance.deleteOrganizationMember(
    organizationId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|
| **userId** | [**string**] | The identifier of the Member. | defaults to undefined|


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

# **deleteProductMember**
> deleteProductMember()

This endpoint removes a Member identified by the `userId` from the  given Product identified by the `productId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let userId: string; //The identifier of the Member. (default to undefined)

const { status, data } = await apiInstance.deleteProductMember(
    productId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|
| **userId** | [**string**] | The identifier of the Member. | defaults to undefined|


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

# **getOrganizationMembers**
> Array<UserModel> getOrganizationMembers()

This endpoint returns the list of Members that belongs  to the given Organization, identified by the `organizationId` parameter.  The results may vary based on the access level of the user who calls the endpoint:  - When it\'s called with Organization Admin privileges, the result will contain each member in the Organization. - When it\'s called without Organization Admin privileges, the result will contain each Organization Admin along with members    of those products where the caller has `Team members and permission groups` (`canManageMembers`) permission.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)

const { status, data } = await apiInstance.getOrganizationMembers(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**Array<UserModel>**

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

# **getOrganizationMembersV2**
> OrganizationMembersModel getOrganizationMembersV2()

This endpoint returns the list of Members that belongs  to the given Organization, identified by the `organizationId` parameter.  The results may vary based on the access level of the user who calls the endpoint:  - When it\'s called with Organization Admin privileges, the result will contain each member in the Organization. - When it\'s called without Organization Admin privileges, the result will contain each Organization Admin along with members    of those products where the caller has `Team members and permission groups` (`canManageMembers`) permission.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)

const { status, data } = await apiInstance.getOrganizationMembersV2(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**OrganizationMembersModel**

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

# **getPendingInvitations**
> Array<InvitationModel> getPendingInvitations()

This endpoint returns the list of pending invitations within the given Product identified by the `productId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getPendingInvitations(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<InvitationModel>**

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

# **getPendingInvitationsOrg**
> Array<OrganizationInvitationModel> getPendingInvitationsOrg()

This endpoint returns the list of pending invitations within the given Organization identified by the `organizationId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let organizationId: string; //The identifier of the Organization. (default to undefined)

const { status, data } = await apiInstance.getPendingInvitationsOrg(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The identifier of the Organization. | defaults to undefined|


### Return type

**Array<OrganizationInvitationModel>**

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

# **getProductMembers**
> Array<MemberModel> getProductMembers()

This endpoint returns the list of Members that belongs  to the given Product, identified by the `productId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)

const { status, data } = await apiInstance.getProductMembers(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

**Array<MemberModel>**

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

# **inviteMember**
> inviteMember(inviteMembersRequest)

This endpoint invites a Member into the given Product identified by the `productId` parameter.

### Example

```typescript
import {
    MembersApi,
    Configuration,
    InviteMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MembersApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let inviteMembersRequest: InviteMembersRequest; //

const { status, data } = await apiInstance.inviteMember(
    productId,
    inviteMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteMembersRequest** | **InviteMembersRequest**|  | |
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the invite was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

