/**
 * ConfigCat Public Management API
 * **Base API URL**: https://test-api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://test-api.configcat.com/swagger).  The purpose of this API is to access the ConfigCat platform programmatically.  You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.   The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).   # OpenAPI Specification  The complete specification is publicly available here: [swagger.json](v1/swagger.json).  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ConfigModelHaljsonEmbedded } from './configModelHaljsonEmbedded';
import { EnvironmentModelHaljsonLinks } from './environmentModelHaljsonLinks';
import { RolloutRuleComparator } from './rolloutRuleComparator';

export class SegmentModelHaljson {
    'embedded'?: ConfigModelHaljsonEmbedded;
    'segmentId'?: string;
    'name'?: string | null;
    'description'?: string | null;
    'creatorEmail'?: string | null;
    'creatorFullName'?: string | null;
    'createdAt'?: Date;
    'lastUpdaterEmail'?: string | null;
    'lastUpdaterFullName'?: string | null;
    'updatedAt'?: Date;
    'comparisonAttribute'?: string | null;
    'comparator'?: RolloutRuleComparator;
    'comparisonValue'?: string | null;
    'links'?: EnvironmentModelHaljsonLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "ConfigModelHaljsonEmbedded"
        },
        {
            "name": "segmentId",
            "baseName": "segmentId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "creatorEmail",
            "baseName": "creatorEmail",
            "type": "string"
        },
        {
            "name": "creatorFullName",
            "baseName": "creatorFullName",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "lastUpdaterEmail",
            "baseName": "lastUpdaterEmail",
            "type": "string"
        },
        {
            "name": "lastUpdaterFullName",
            "baseName": "lastUpdaterFullName",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "comparisonAttribute",
            "baseName": "comparisonAttribute",
            "type": "string"
        },
        {
            "name": "comparator",
            "baseName": "comparator",
            "type": "RolloutRuleComparator"
        },
        {
            "name": "comparisonValue",
            "baseName": "comparisonValue",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "EnvironmentModelHaljsonLinks"
        }    ];

    static getAttributeTypeMap() {
        return SegmentModelHaljson.attributeTypeMap;
    }
}

