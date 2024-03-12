/* tslint:disable */
/* eslint-disable */
/**
 * ConfigCat Public Management API
 * The purpose of this API is to access the ConfigCat platform programmatically. You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.  **Base API URL**: https://test-api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://test-api.configcat.com/swagger).  The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).   # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://test-api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://test-api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
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
import { FlagReference } from './flag-reference';

/**
 * 
 * @export
 * @interface CodeReferenceRequest
 */
export interface CodeReferenceRequest {
    /**
     * The Config\'s identifier the scanning was performed against.
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'configId': string;
    /**
     * The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'repository': string;
    /**
     * The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'branch': string;
    /**
     * The related commit\'s URL. (Appears on the ConfigCat Dashboard)
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'commitUrl'?: string | null;
    /**
     * The related commit\'s hash. (Appears on the ConfigCat Dashboard)
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'commitHash'?: string | null;
    /**
     * The scanning tool\'s name. (Appears on the ConfigCat Dashboard)
     * @type {string}
     * @memberof CodeReferenceRequest
     */
    'uploader'?: string | null;
    /**
     * The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted.
     * @type {Array<string>}
     * @memberof CodeReferenceRequest
     */
    'activeBranches'?: Array<string> | null;
    /**
     * The actual code reference collection.
     * @type {Array<FlagReference>}
     * @memberof CodeReferenceRequest
     */
    'flagReferences'?: Array<FlagReference> | null;
}

