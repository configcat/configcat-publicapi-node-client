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
import { UpdateReasonRequiredEnvironmentModel } from './update-reason-required-environment-model';

/**
 * 
 * @export
 * @interface UpdatePreferencesRequest
 */
export interface UpdatePreferencesRequest {
    /**
     * Indicates that a mandatory note is required for saving and publishing.
     * @type {boolean}
     * @memberof UpdatePreferencesRequest
     */
    'reasonRequired'?: boolean | null;
    /**
     * Determines the Feature Flag key generation mode.
     * @type {string}
     * @memberof UpdatePreferencesRequest
     */
    'keyGenerationMode'?: UpdatePreferencesRequestKeyGenerationModeEnum | null;
    /**
     * Indicates whether a variation ID\'s must be shown on the ConfigCat Dashboard.
     * @type {boolean}
     * @memberof UpdatePreferencesRequest
     */
    'showVariationId'?: boolean | null;
    /**
     * Indicates whether Feature flags and Settings must have a hint.
     * @type {boolean}
     * @memberof UpdatePreferencesRequest
     */
    'mandatorySettingHint'?: boolean | null;
    /**
     * List of Environments where mandatory note must be set before saving and publishing.
     * @type {Array<UpdateReasonRequiredEnvironmentModel>}
     * @memberof UpdatePreferencesRequest
     */
    'reasonRequiredEnvironments'?: Array<UpdateReasonRequiredEnvironmentModel> | null;
}

export const UpdatePreferencesRequestKeyGenerationModeEnum = {
    CamelCase: 'camelCase',
    LowerCase: 'lowerCase',
    UpperCase: 'upperCase',
    PascalCase: 'pascalCase',
    KebabCase: 'kebabCase'
} as const;

export type UpdatePreferencesRequestKeyGenerationModeEnum = typeof UpdatePreferencesRequestKeyGenerationModeEnum[keyof typeof UpdatePreferencesRequestKeyGenerationModeEnum];


