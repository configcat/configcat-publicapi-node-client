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
import { ProductModel } from './product-model';

/**
 * 
 * @export
 * @interface SegmentListModel
 */
export interface SegmentListModel {
    /**
     * 
     * @type {ProductModel}
     * @memberof SegmentListModel
     */
    'product'?: ProductModel;
    /**
     * Identifier of the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'segmentId'?: string;
    /**
     * Name of the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'name'?: string | null;
    /**
     * Description of the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'description'?: string | null;
    /**
     * The email of the user who created the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'creatorEmail'?: string | null;
    /**
     * The name of the user who created the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'creatorFullName'?: string | null;
    /**
     * The date and time when the Segment was created.
     * @type {string}
     * @memberof SegmentListModel
     */
    'createdAt'?: string;
    /**
     * The email of the user who last updated the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'lastUpdaterEmail'?: string | null;
    /**
     * The name of the user who last updated the Segment.
     * @type {string}
     * @memberof SegmentListModel
     */
    'lastUpdaterFullName'?: string | null;
    /**
     * The date and time when the Segment was last updated.
     * @type {string}
     * @memberof SegmentListModel
     */
    'updatedAt'?: string;
    /**
     * Determines how many Feature Flags and Settings are using the Segment.
     * @type {number}
     * @memberof SegmentListModel
     */
    'usage'?: number;
}

