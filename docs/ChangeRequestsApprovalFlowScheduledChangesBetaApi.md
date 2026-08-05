# ChangeRequestsApprovalFlowScheduledChangesBetaApi

All URIs are relative to *https://api.configcat.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addChangeRequestComment**](#addchangerequestcomment) | **POST** /v2/change-requests/{changeRequestId}/comments | Add Comment|
|[**applyChangeRequest**](#applychangerequest) | **POST** /v2/change-requests/{changeRequestId}/apply | Apply Change Request|
|[**approveChangeRequest**](#approvechangerequest) | **POST** /v2/change-requests/{changeRequestId}/approve | Approve Change Request|
|[**claimChangeRequestOwnership**](#claimchangerequestownership) | **POST** /v2/change-requests/{changeRequestId}/claim-ownership | Claim Ownership|
|[**closeChangeRequest**](#closechangerequest) | **POST** /v2/change-requests/{changeRequestId}/close | Close Change Request|
|[**createChangeRequest**](#createchangerequest) | **POST** /v2/configs/{configId}/environments/{environmentId}/change-requests | Create Change Request|
|[**deleteChangeRequestComment**](#deletechangerequestcomment) | **DELETE** /v2/change-request-comments/{commentId} | Delete Comment|
|[**deleteChangeRequestProposedChange**](#deletechangerequestproposedchange) | **DELETE** /v2/change-requests/{changeRequestId}/proposed-changes/{settingId} | Delete Setting from Change Request|
|[**getChangeRequest**](#getchangerequest) | **GET** /v2/change-requests/{changeRequestId} | Get Change Request|
|[**getChangeRequestProposedChanges**](#getchangerequestproposedchanges) | **GET** /v2/change-requests/{changeRequestId}/proposed-changes | Get Settings included in Change Request|
|[**getChangeRequests**](#getchangerequests) | **GET** /v2/products/{productId}/change-requests | List Change Requests|
|[**removeChangeRequestApproval**](#removechangerequestapproval) | **POST** /v2/change-requests/{changeRequestId}/remove-approval | Remove Approval|
|[**resolveChangeRequestSettingConflicts**](#resolvechangerequestsettingconflicts) | **POST** /v2/change-requests/{changeRequestId}/proposed-changes/{settingId}/resolve-conflicts | Resolve Setting Conflicts|
|[**updateChangeRequest**](#updatechangerequest) | **PUT** /v2/change-requests/{changeRequestId} | Update Change Request|
|[**updateChangeRequestComment**](#updatechangerequestcomment) | **PUT** /v2/change-request-comments/{commentId} | Update Comment|
|[**updateChangeRequestProposedChanges**](#updatechangerequestproposedchanges) | **PUT** /v2/change-requests/{changeRequestId}/proposed-changes | Update Settings included in Change Request|

# **addChangeRequestComment**
> ChangeRequestCommentModel addChangeRequestComment(addChangeRequestCommentModel)

Adds a new comment to the Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    AddChangeRequestCommentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let addChangeRequestCommentModel: AddChangeRequestCommentModel; //

const { status, data } = await apiInstance.addChangeRequestComment(
    changeRequestId,
    addChangeRequestCommentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addChangeRequestCommentModel** | **AddChangeRequestCommentModel**|  | |
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestCommentModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When adding the comment was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applyChangeRequest**
> ChangeRequestModel applyChangeRequest()

Applies the Change Request. The proposed changes will be applied and published immediately.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.applyChangeRequest(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When applying the Change Request was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **approveChangeRequest**
> ChangeRequestModel approveChangeRequest()

Adds your approval to the Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.approveChangeRequest(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the approval was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claimChangeRequestOwnership**
> ChangeRequestModel claimChangeRequestOwnership()

Claims ownership of the Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.claimChangeRequestOwnership(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When claiming ownership was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **closeChangeRequest**
> ChangeRequestModel closeChangeRequest()

Closes the Change Request without applying it.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.closeChangeRequest(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When closing the Change Request was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createChangeRequest**
> ChangeRequestModel createChangeRequest(createChangeRequestModel)

Creates a new Change Request for the specified Config and Environment.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    CreateChangeRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let configId: string; //The identifier of the Config. (default to undefined)
let environmentId: string; //The identifier of the Environment. (default to undefined)
let createChangeRequestModel: CreateChangeRequestModel; //

const { status, data } = await apiInstance.createChangeRequest(
    configId,
    environmentId,
    createChangeRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createChangeRequestModel** | **CreateChangeRequestModel**|  | |
| **configId** | [**string**] | The identifier of the Config. | defaults to undefined|
| **environmentId** | [**string**] | The identifier of the Environment. | defaults to undefined|


### Return type

**ChangeRequestModel**

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

# **deleteChangeRequestComment**
> deleteChangeRequestComment()

Deletes a Change Request comment.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let commentId: number; //The identifier of the Change Request comment. (default to undefined)

const { status, data } = await apiInstance.deleteChangeRequestComment(
    commentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentId** | [**number**] | The identifier of the Change Request comment. | defaults to undefined|


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
|**204** | When deleting the comment was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteChangeRequestProposedChange**
> ChangeRequestModel deleteChangeRequestProposedChange()

Removes a setting from a Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let settingId: number; //The identifier of the Setting. (default to undefined)

const { status, data } = await apiInstance.deleteChangeRequestProposedChange(
    changeRequestId,
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the delete was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChangeRequest**
> ChangeRequestModel getChangeRequest()

Returns the details of a specific Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.getChangeRequest(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

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

# **getChangeRequestProposedChanges**
> ChangeRequestProposedChangesModel getChangeRequestProposedChanges()

Returns the proposed changes to the Settings included in a Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let settingId: number; //The optional identifier of the Setting. (optional) (default to undefined)

const { status, data } = await apiInstance.getChangeRequestProposedChanges(
    changeRequestId,
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|
| **settingId** | [**number**] | The optional identifier of the Setting. | (optional) defaults to undefined|


### Return type

**ChangeRequestProposedChangesModel**

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

# **getChangeRequests**
> ChangeRequestsModel getChangeRequests()

Returns Change Requests of a Product with optional filtering and pagination.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let productId: string; //The identifier of the Product. (default to undefined)
let configId: string; //Filter Change Requests by Config identifier. (optional) (default to undefined)
let environmentId: string; //Filter Change Requests by Environment identifier. (optional) (default to undefined)
let settingId: number; //Filter Change Requests by Setting identifier. (optional) (default to undefined)
let changeRequestStatusFilter: Array<ChangeRequestStatus>; //Filter Change Requests by status values. (optional) (default to undefined)
let scheduleFilter: ChangeRequestScheduleFilter; //Filter Change Requests by schedule state. (optional) (default to undefined)
let approveRequiredFilter: ChangeRequestApproveRequiredFilter; //Filter Change Requests by approval requirement. (optional) (default to undefined)
let needsAttentionFilter: NeedsAttentionFilter; //Filter Change Requests by whether they need attention. (optional) (default to undefined)
let pageNumber: number; //Page number (min: 1). (optional) (default to 1)
let pageSize: number; //Page size (min: 1, max: 100). (optional) (default to 25)

const { status, data } = await apiInstance.getChangeRequests(
    productId,
    configId,
    environmentId,
    settingId,
    changeRequestStatusFilter,
    scheduleFilter,
    approveRequiredFilter,
    needsAttentionFilter,
    pageNumber,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The identifier of the Product. | defaults to undefined|
| **configId** | [**string**] | Filter Change Requests by Config identifier. | (optional) defaults to undefined|
| **environmentId** | [**string**] | Filter Change Requests by Environment identifier. | (optional) defaults to undefined|
| **settingId** | [**number**] | Filter Change Requests by Setting identifier. | (optional) defaults to undefined|
| **changeRequestStatusFilter** | **Array&lt;ChangeRequestStatus&gt;** | Filter Change Requests by status values. | (optional) defaults to undefined|
| **scheduleFilter** | **ChangeRequestScheduleFilter** | Filter Change Requests by schedule state. | (optional) defaults to undefined|
| **approveRequiredFilter** | **ChangeRequestApproveRequiredFilter** | Filter Change Requests by approval requirement. | (optional) defaults to undefined|
| **needsAttentionFilter** | **NeedsAttentionFilter** | Filter Change Requests by whether they need attention. | (optional) defaults to undefined|
| **pageNumber** | [**number**] | Page number (min: 1). | (optional) defaults to 1|
| **pageSize** | [**number**] | Page size (min: 1, max: 100). | (optional) defaults to 25|


### Return type

**ChangeRequestsModel**

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

# **removeChangeRequestApproval**
> ChangeRequestModel removeChangeRequestApproval()

Removes your existing approval from the Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)

const { status, data } = await apiInstance.removeChangeRequestApproval(
    changeRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When removing the approval was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolveChangeRequestSettingConflicts**
> ChangeRequestModel resolveChangeRequestSettingConflicts(resolveChangeRequestSettingConflictsModel)

Updates the proposed changes to a Setting included in the Change Request to resolve conflicts caused by concurrently published changes.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    ResolveChangeRequestSettingConflictsModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let settingId: number; //The identifier of the Setting. (default to undefined)
let resolveChangeRequestSettingConflictsModel: ResolveChangeRequestSettingConflictsModel; //

const { status, data } = await apiInstance.resolveChangeRequestSettingConflicts(
    changeRequestId,
    settingId,
    resolveChangeRequestSettingConflictsModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveChangeRequestSettingConflictsModel** | **ResolveChangeRequestSettingConflictsModel**|  | |
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|
| **settingId** | [**number**] | The identifier of the Setting. | defaults to undefined|


### Return type

**ChangeRequestModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When the conflict resolution was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateChangeRequest**
> ChangeRequestModel updateChangeRequest(updateChangeRequestModel)

Updates the metadata of a Change Request, such as title, note, schedule, etc.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    UpdateChangeRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let updateChangeRequestModel: UpdateChangeRequestModel; //

const { status, data } = await apiInstance.updateChangeRequest(
    changeRequestId,
    updateChangeRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateChangeRequestModel** | **UpdateChangeRequestModel**|  | |
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|


### Return type

**ChangeRequestModel**

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

# **updateChangeRequestComment**
> ChangeRequestCommentModel updateChangeRequestComment(updateChangeRequestCommentModel)

Updates an existing Change Request comment.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    UpdateChangeRequestCommentModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let commentId: number; //The identifier of the Change Request comment. (default to undefined)
let updateChangeRequestCommentModel: UpdateChangeRequestCommentModel; //

const { status, data } = await apiInstance.updateChangeRequestComment(
    commentId,
    updateChangeRequestCommentModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateChangeRequestCommentModel** | **UpdateChangeRequestCommentModel**|  | |
| **commentId** | [**number**] | The identifier of the Change Request comment. | defaults to undefined|


### Return type

**ChangeRequestCommentModel**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | When updating the comment was successful. |  -  |
|**400** | Bad request. |  -  |
|**404** | Not found. |  -  |
|**429** | Too many requests. In case of the request rate exceeds the rate limits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateChangeRequestProposedChanges**
> ChangeRequestModel updateChangeRequestProposedChanges(updateChangeRequestProposedChangesModel)

Updates the proposed changes to the Settings included in a Change Request.

### Example

```typescript
import {
    ChangeRequestsApprovalFlowScheduledChangesBetaApi,
    Configuration,
    UpdateChangeRequestProposedChangesModel
} from './api';

const configuration = new Configuration();
const apiInstance = new ChangeRequestsApprovalFlowScheduledChangesBetaApi(configuration);

let changeRequestId: number; //The identifier of the Change Request. (default to undefined)
let updateChangeRequestProposedChangesModel: UpdateChangeRequestProposedChangesModel; //
let settingId: number; //The optional identifier of the Setting. (optional) (default to undefined)

const { status, data } = await apiInstance.updateChangeRequestProposedChanges(
    changeRequestId,
    updateChangeRequestProposedChangesModel,
    settingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateChangeRequestProposedChangesModel** | **UpdateChangeRequestProposedChangesModel**|  | |
| **changeRequestId** | [**number**] | The identifier of the Change Request. | defaults to undefined|
| **settingId** | [**number**] | The optional identifier of the Setting. | (optional) defaults to undefined|


### Return type

**ChangeRequestModel**

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

