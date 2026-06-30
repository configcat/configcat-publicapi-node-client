# CreatePermissionGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the Permission Group. | [default to undefined]
**canManageMembers** | **boolean** | Group members can manage team members. | [optional] [default to undefined]
**canCreateOrUpdateConfig** | **boolean** | Group members can create/update Configs. | [optional] [default to undefined]
**canDeleteConfig** | **boolean** | Group members can delete Configs. | [optional] [default to undefined]
**canCreateOrUpdateEnvironment** | **boolean** | Group members can create/update Environments. | [optional] [default to undefined]
**canDeleteEnvironment** | **boolean** | Group members can delete Environments. | [optional] [default to undefined]
**canCreateOrUpdateSetting** | **boolean** | Group members can create/update Feature Flags and Settings. | [optional] [default to undefined]
**canTagSetting** | **boolean** | Group members can attach/detach Tags to Feature Flags and Settings. | [optional] [default to undefined]
**canDeleteSetting** | **boolean** | Group members can delete Feature Flags and Settings. | [optional] [default to undefined]
**canCreateOrUpdateTag** | **boolean** | Group members can create/update Tags. | [optional] [default to undefined]
**canDeleteTag** | **boolean** | Group members can delete Tags. | [optional] [default to undefined]
**canManageWebhook** | **boolean** | Group members can create/update/delete Webhooks. | [optional] [default to undefined]
**canUseExportImport** | **boolean** | Group members can use the export/import feature. | [optional] [default to undefined]
**canManageProductPreferences** | **boolean** | Group members can update Product preferences. | [optional] [default to undefined]
**canManageIntegrations** | **boolean** | Group members can add and configure integrations. | [optional] [default to undefined]
**canViewSdkKey** | **boolean** | Group members has access to SDK keys. | [optional] [default to undefined]
**canRotateSdkKey** | **boolean** | Group members can rotate SDK keys. | [optional] [default to undefined]
**canCreateOrUpdateSegments** | **boolean** | Group members can create/update Segments. | [optional] [default to undefined]
**canDeleteSegments** | **boolean** | Group members can delete Segments. | [optional] [default to undefined]
**canViewProductAuditLog** | **boolean** | Group members has access to audit logs. | [optional] [default to undefined]
**canViewProductStatistics** | **boolean** | Group members has access to product statistics. | [optional] [default to undefined]
**accessType** | [**AccessType**](AccessType.md) |  | [optional] [default to undefined]
**newEnvironmentAccessType** | [**EnvironmentAccessType**](EnvironmentAccessType.md) |  | [optional] [default to undefined]
**environmentAccesses** | [**Array&lt;CreateOrUpdateEnvironmentAccessModel&gt;**](CreateOrUpdateEnvironmentAccessModel.md) | List of environment specific permissions. | [optional] [default to undefined]
**approvalPermissionType** | [**ApprovalPermissionType**](ApprovalPermissionType.md) |  | [optional] [default to undefined]
**newEnvironmentApprovalPermissionType** | [**EnvironmentApprovalPermissionType**](EnvironmentApprovalPermissionType.md) |  | [optional] [default to undefined]
**environmentApprovalPermissions** | [**Array&lt;CreateOrUpdateEnvironmentApprovalPermissionModel&gt;**](CreateOrUpdateEnvironmentApprovalPermissionModel.md) | List of environment specific change request approval permissions. | [optional] [default to undefined]
**canDisable2FA** | **boolean** | Group members can disable two-factor authentication for other members. | [optional] [default to undefined]

## Example

```typescript
import { CreatePermissionGroupRequest } from './api';

const instance: CreatePermissionGroupRequest = {
    name,
    canManageMembers,
    canCreateOrUpdateConfig,
    canDeleteConfig,
    canCreateOrUpdateEnvironment,
    canDeleteEnvironment,
    canCreateOrUpdateSetting,
    canTagSetting,
    canDeleteSetting,
    canCreateOrUpdateTag,
    canDeleteTag,
    canManageWebhook,
    canUseExportImport,
    canManageProductPreferences,
    canManageIntegrations,
    canViewSdkKey,
    canRotateSdkKey,
    canCreateOrUpdateSegments,
    canDeleteSegments,
    canViewProductAuditLog,
    canViewProductStatistics,
    accessType,
    newEnvironmentAccessType,
    environmentAccesses,
    approvalPermissionType,
    newEnvironmentApprovalPermissionType,
    environmentApprovalPermissions,
    canDisable2FA,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
