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
import { CodeReferenceModel } from '../model';
// @ts-ignore
import { CodeReferenceRequest } from '../model';
// @ts-ignore
import { DeleteRepositoryReportsRequest } from '../model';
/**
 * CodeReferencesApi - axios parameter creator
 * @export
 */
export const CodeReferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Reference reports
         * @param {DeleteRepositoryReportsRequest} deleteRepositoryReportsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1CodeReferencesDeleteReportsPost: async (deleteRepositoryReportsRequest: DeleteRepositoryReportsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deleteRepositoryReportsRequest' is not null or undefined
            assertParamExists('v1CodeReferencesDeleteReportsPost', 'deleteRepositoryReportsRequest', deleteRepositoryReportsRequest)
            const localVarPath = `/v1/code-references/delete-reports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteRepositoryReportsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload References
         * @param {CodeReferenceRequest} codeReferenceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1CodeReferencesPost: async (codeReferenceRequest: CodeReferenceRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeReferenceRequest' is not null or undefined
            assertParamExists('v1CodeReferencesPost', 'codeReferenceRequest', codeReferenceRequest)
            const localVarPath = `/v1/code-references`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(codeReferenceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get References for Feature Flag or Setting
         * @param {number} settingId The identifier of the Feature Flag or Setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1SettingsSettingIdCodeReferencesGet: async (settingId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'settingId' is not null or undefined
            assertParamExists('v1SettingsSettingIdCodeReferencesGet', 'settingId', settingId)
            const localVarPath = `/v1/settings/{settingId}/code-references`
                .replace(`{${"settingId"}}`, encodeURIComponent(String(settingId)));
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
 * CodeReferencesApi - functional programming interface
 * @export
 */
export const CodeReferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CodeReferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete Reference reports
         * @param {DeleteRepositoryReportsRequest} deleteRepositoryReportsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest: DeleteRepositoryReportsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CodeReferencesApi.v1CodeReferencesDeleteReportsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Upload References
         * @param {CodeReferenceRequest} codeReferenceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1CodeReferencesPost(codeReferenceRequest: CodeReferenceRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1CodeReferencesPost(codeReferenceRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CodeReferencesApi.v1CodeReferencesPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get References for Feature Flag or Setting
         * @param {number} settingId The identifier of the Feature Flag or Setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1SettingsSettingIdCodeReferencesGet(settingId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeReferenceModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1SettingsSettingIdCodeReferencesGet(settingId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CodeReferencesApi.v1SettingsSettingIdCodeReferencesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CodeReferencesApi - factory interface
 * @export
 */
export const CodeReferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CodeReferencesApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete Reference reports
         * @param {DeleteRepositoryReportsRequest} deleteRepositoryReportsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest: DeleteRepositoryReportsRequest, options?: any): AxiosPromise<void> {
            return localVarFp.v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload References
         * @param {CodeReferenceRequest} codeReferenceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1CodeReferencesPost(codeReferenceRequest: CodeReferenceRequest, options?: any): AxiosPromise<void> {
            return localVarFp.v1CodeReferencesPost(codeReferenceRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get References for Feature Flag or Setting
         * @param {number} settingId The identifier of the Feature Flag or Setting.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1SettingsSettingIdCodeReferencesGet(settingId: number, options?: any): AxiosPromise<Array<CodeReferenceModel>> {
            return localVarFp.v1SettingsSettingIdCodeReferencesGet(settingId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CodeReferencesApi - object-oriented interface
 * @export
 * @class CodeReferencesApi
 * @extends {BaseAPI}
 */
export class CodeReferencesApi extends BaseAPI {
    /**
     * 
     * @summary Delete Reference reports
     * @param {DeleteRepositoryReportsRequest} deleteRepositoryReportsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest: DeleteRepositoryReportsRequest, options?: RawAxiosRequestConfig) {
        return CodeReferencesApiFp(this.configuration).v1CodeReferencesDeleteReportsPost(deleteRepositoryReportsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload References
     * @param {CodeReferenceRequest} codeReferenceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public v1CodeReferencesPost(codeReferenceRequest: CodeReferenceRequest, options?: RawAxiosRequestConfig) {
        return CodeReferencesApiFp(this.configuration).v1CodeReferencesPost(codeReferenceRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get References for Feature Flag or Setting
     * @param {number} settingId The identifier of the Feature Flag or Setting.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public v1SettingsSettingIdCodeReferencesGet(settingId: number, options?: RawAxiosRequestConfig) {
        return CodeReferencesApiFp(this.configuration).v1SettingsSettingIdCodeReferencesGet(settingId, options).then((request) => request(this.axios, this.basePath));
    }
}

