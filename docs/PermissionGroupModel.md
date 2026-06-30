# PermissionGroupModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissionGroupId** | **number** | Identifier of the Permission Group. | [default to undefined]
**name** | **string** | Name of the Permission Group. | [default to undefined]
**canManageMembers** | **boolean** | Group members can manage team members. | [default to undefined]
**canCreateOrUpdateConfig** | **boolean** | Group members can create/update Configs. | [default to undefined]
**canDeleteConfig** | **boolean** | Group members can delete Configs. | [default to undefined]
**canCreateOrUpdateEnvironment** | **boolean** | Group members can create/update Environments. | [default to undefined]
**canDeleteEnvironment** | **boolean** | Group members can delete Environments. | [default to undefined]
**canCreateOrUpdateSetting** | **boolean** | Group members can create/update Feature Flags and Settings. | [default to undefined]
**canTagSetting** | **boolean** | Group members can attach/detach Tags to Feature Flags and Settings. | [default to undefined]
**canDeleteSetting** | **boolean** | Group members can delete Feature Flags and Settings. | [default to undefined]
**canCreateOrUpdateTag** | **boolean** | Group members can create/update Tags. | [default to undefined]
**canDeleteTag** | **boolean** | Group members can delete Tags. | [default to undefined]
**canManageWebhook** | **boolean** | Group members can create/update/delete Webhooks. | [default to undefined]
**canUseExportImport** | **boolean** | Group members can use the export/import feature. | [default to undefined]
**canManageProductPreferences** | **boolean** | Group members can update Product preferences. | [default to undefined]
**canManageIntegrations** | **boolean** | Group members can add and configure integrations. | [default to undefined]
**canViewSdkKey** | **boolean** | Group members has access to SDK keys. | [default to undefined]
**canRotateSdkKey** | **boolean** | Group members can rotate SDK keys. | [default to undefined]
**canCreateOrUpdateSegments** | **boolean** | Group members can create/update Segments. | [default to undefined]
**canDeleteSegments** | **boolean** | Group members can delete Segments. | [default to undefined]
**canViewProductAuditLog** | **boolean** | Group members has access to audit logs. | [default to undefined]
**canViewProductStatistics** | **boolean** | Group members has access to product statistics. | [default to undefined]
**canDisable2FA** | **boolean** | Group members can disable two-factor authentication for other members. | [default to undefined]
**accessType** | [**AccessType**](AccessType.md) |  | [default to undefined]
**newEnvironmentAccessType** | [**EnvironmentAccessType**](EnvironmentAccessType.md) |  | [default to undefined]
**environmentAccesses** | [**Array&lt;PermissionGroupEnvironmentAccessModel&gt;**](PermissionGroupEnvironmentAccessModel.md) | List of environment specific permissions. | [default to undefined]
**product** | [**ProductModel**](ProductModel.md) |  | [default to undefined]
**approvalPermissionType** | [**ApprovalPermissionType**](ApprovalPermissionType.md) |  | [default to undefined]
**newEnvironmentApprovalPermissionType** | [**EnvironmentApprovalPermissionType**](EnvironmentApprovalPermissionType.md) |  | [default to undefined]
**environmentApprovalPermissions** | [**Array&lt;PermissionGroupEnvironmentApprovalPermissionModel&gt;**](PermissionGroupEnvironmentApprovalPermissionModel.md) | List of environment specific approval permissions. | [default to undefined]

## Example

```typescript
import { PermissionGroupModel } from './api';

const instance: PermissionGroupModel = {
    permissionGroupId,
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
    canDisable2FA,
    accessType,
    newEnvironmentAccessType,
    environmentAccesses,
    product,
    approvalPermissionType,
    newEnvironmentApprovalPermissionType,
    environmentApprovalPermissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
