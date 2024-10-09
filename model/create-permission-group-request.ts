/* tslint:disable */
/* eslint-disable */
/**
 * ConfigCat Public Management API
 * The purpose of this API is to access the ConfigCat platform programmatically. You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.  **Base API URL**: https://api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).  The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  format.   **Important:** Do not use this API for accessing and evaluating feature flag values. Use the [SDKs](https://configcat.com/docs/sdk-reference/overview) or the [ConfigCat Proxy](https://configcat.com/docs/advanced/proxy/proxy-overview/) instead.  # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AccessType } from './access-type';
// May contain unused imports in some cases
// @ts-ignore
import { CreateOrUpdateEnvironmentAccessModel } from './create-or-update-environment-access-model';
// May contain unused imports in some cases
// @ts-ignore
import { EnvironmentAccessType } from './environment-access-type';

/**
 * 
 * @export
 * @interface CreatePermissionGroupRequest
 */
export interface CreatePermissionGroupRequest {
    /**
     * Name of the Permission Group.
     * @type {string}
     * @memberof CreatePermissionGroupRequest
     */
    'name': string;
    /**
     * Group members can manage team members.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canManageMembers'?: boolean;
    /**
     * Group members can create/update Configs.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canCreateOrUpdateConfig'?: boolean;
    /**
     * Group members can delete Configs.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDeleteConfig'?: boolean;
    /**
     * Group members can create/update Environments.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canCreateOrUpdateEnvironment'?: boolean;
    /**
     * Group members can delete Environments.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDeleteEnvironment'?: boolean;
    /**
     * Group members can create/update Feature Flags and Settings.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canCreateOrUpdateSetting'?: boolean;
    /**
     * Group members can attach/detach Tags to Feature Flags and Settings.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canTagSetting'?: boolean;
    /**
     * Group members can delete Feature Flags and Settings.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDeleteSetting'?: boolean;
    /**
     * Group members can create/update Tags.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canCreateOrUpdateTag'?: boolean;
    /**
     * Group members can delete Tags.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDeleteTag'?: boolean;
    /**
     * Group members can create/update/delete Webhooks.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canManageWebhook'?: boolean;
    /**
     * Group members can use the export/import feature.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canUseExportImport'?: boolean;
    /**
     * Group members can update Product preferences.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canManageProductPreferences'?: boolean;
    /**
     * Group members can add and configure integrations.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canManageIntegrations'?: boolean;
    /**
     * Group members has access to SDK keys.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canViewSdkKey'?: boolean;
    /**
     * Group members can rotate SDK keys.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canRotateSdkKey'?: boolean;
    /**
     * Group members can create/update Segments.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canCreateOrUpdateSegments'?: boolean;
    /**
     * Group members can delete Segments.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDeleteSegments'?: boolean;
    /**
     * Group members has access to audit logs.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canViewProductAuditLog'?: boolean;
    /**
     * Group members has access to product statistics.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canViewProductStatistics'?: boolean;
    /**
     * 
     * @type {AccessType}
     * @memberof CreatePermissionGroupRequest
     */
    'accessType'?: AccessType;
    /**
     * 
     * @type {EnvironmentAccessType}
     * @memberof CreatePermissionGroupRequest
     */
    'newEnvironmentAccessType'?: EnvironmentAccessType;
    /**
     * List of environment specific permissions.
     * @type {Array<CreateOrUpdateEnvironmentAccessModel>}
     * @memberof CreatePermissionGroupRequest
     */
    'environmentAccesses'?: Array<CreateOrUpdateEnvironmentAccessModel> | null;
    /**
     * Group members can disable two-factor authentication for other members.
     * @type {boolean}
     * @memberof CreatePermissionGroupRequest
     */
    'canDisable2FA'?: boolean;
}



