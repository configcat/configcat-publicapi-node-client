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
import { ConfigModel } from './config-model';
// May contain unused imports in some cases
// @ts-ignore
import { EnvironmentModel } from './environment-model';
// May contain unused imports in some cases
// @ts-ignore
import { FeatureFlagLimitations } from './feature-flag-limitations';
// May contain unused imports in some cases
// @ts-ignore
import { IntegrationLinkModel } from './integration-link-model';
// May contain unused imports in some cases
// @ts-ignore
import { RolloutPercentageItemModel } from './rollout-percentage-item-model';
// May contain unused imports in some cases
// @ts-ignore
import { RolloutRuleModel } from './rollout-rule-model';
// May contain unused imports in some cases
// @ts-ignore
import { SettingDataModel } from './setting-data-model';
// May contain unused imports in some cases
// @ts-ignore
import { SettingTagModel } from './setting-tag-model';

/**
 * 
 * @export
 * @interface SettingValueModel
 */
export interface SettingValueModel {
    /**
     * The targeting rule collection.
     * @type {Array<RolloutRuleModel>}
     * @memberof SettingValueModel
     */
    'rolloutRules'?: Array<RolloutRuleModel> | null;
    /**
     * The percentage rule collection.
     * @type {Array<RolloutPercentageItemModel>}
     * @memberof SettingValueModel
     */
    'rolloutPercentageItems'?: Array<RolloutPercentageItemModel> | null;
    /**
     * The value to serve. It must respect the setting type.
     * @type {any}
     * @memberof SettingValueModel
     */
    'value'?: any | null;
    /**
     * 
     * @type {SettingDataModel}
     * @memberof SettingValueModel
     */
    'setting'?: SettingDataModel;
    /**
     * The last updated date and time when the Feature Flag or Setting.
     * @type {string}
     * @memberof SettingValueModel
     */
    'updatedAt'?: string | null;
    /**
     * The email of the user who last updated the Feature Flag or Setting.
     * @type {string}
     * @memberof SettingValueModel
     */
    'lastUpdaterUserEmail'?: string | null;
    /**
     * The name of the user who last updated the Feature Flag or Setting.
     * @type {string}
     * @memberof SettingValueModel
     */
    'lastUpdaterUserFullName'?: string | null;
    /**
     * The integration links attached to the Feature Flag or Setting.
     * @type {Array<IntegrationLinkModel>}
     * @memberof SettingValueModel
     */
    'integrationLinks'?: Array<IntegrationLinkModel> | null;
    /**
     * The tags attached to the Feature Flag or Setting.
     * @type {Array<SettingTagModel>}
     * @memberof SettingValueModel
     */
    'settingTags'?: Array<SettingTagModel> | null;
    /**
     * 
     * @type {ConfigModel}
     * @memberof SettingValueModel
     */
    'config'?: ConfigModel;
    /**
     * 
     * @type {EnvironmentModel}
     * @memberof SettingValueModel
     */
    'environment'?: EnvironmentModel;
    /**
     * 
     * @type {FeatureFlagLimitations}
     * @memberof SettingValueModel
     */
    'featureFlagLimitations'?: FeatureFlagLimitations;
    /**
     * 
     * @type {boolean}
     * @memberof SettingValueModel
     */
    'readOnly'?: boolean;
}

