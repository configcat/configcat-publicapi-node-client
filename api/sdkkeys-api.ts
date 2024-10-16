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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { SdkKeysModel } from '../model';
/**
 * SDKKeysApi - axios parameter creator
 * @export
 */
export const SDKKeysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint returns the SDK Key for your Config in a specified Environment.
         * @summary Get SDK Key
         * @param {string} configId The identifier of the Config.
         * @param {string} environmentId The identifier of the Environment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSdkKeys: async (configId: string, environmentId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'configId' is not null or undefined
            assertParamExists('getSdkKeys', 'configId', configId)
            // verify required parameter 'environmentId' is not null or undefined
            assertParamExists('getSdkKeys', 'environmentId', environmentId)
            const localVarPath = `/v1/configs/{configId}/environments/{environmentId}`
                .replace(`{${"configId"}}`, encodeURIComponent(String(configId)))
                .replace(`{${"environmentId"}}`, encodeURIComponent(String(environmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SDKKeysApi - functional programming interface
 * @export
 */
export const SDKKeysApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SDKKeysApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint returns the SDK Key for your Config in a specified Environment.
         * @summary Get SDK Key
         * @param {string} configId The identifier of the Config.
         * @param {string} environmentId The identifier of the Environment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSdkKeys(configId: string, environmentId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SdkKeysModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSdkKeys(configId, environmentId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SDKKeysApi.getSdkKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SDKKeysApi - factory interface
 * @export
 */
export const SDKKeysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SDKKeysApiFp(configuration)
    return {
        /**
         * This endpoint returns the SDK Key for your Config in a specified Environment.
         * @summary Get SDK Key
         * @param {string} configId The identifier of the Config.
         * @param {string} environmentId The identifier of the Environment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSdkKeys(configId: string, environmentId: string, options?: any): AxiosPromise<SdkKeysModel> {
            return localVarFp.getSdkKeys(configId, environmentId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SDKKeysApi - object-oriented interface
 * @export
 * @class SDKKeysApi
 * @extends {BaseAPI}
 */
export class SDKKeysApi extends BaseAPI {
    /**
     * This endpoint returns the SDK Key for your Config in a specified Environment.
     * @summary Get SDK Key
     * @param {string} configId The identifier of the Config.
     * @param {string} environmentId The identifier of the Environment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SDKKeysApi
     */
    public getSdkKeys(configId: string, environmentId: string, options?: RawAxiosRequestConfig) {
        return SDKKeysApiFp(this.configuration).getSdkKeys(configId, environmentId, options).then((request) => request(this.axios, this.basePath));
    }
}

