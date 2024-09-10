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
import { CreateProductRequest } from '../model';
// @ts-ignore
import { PreferencesModel } from '../model';
// @ts-ignore
import { ProductModel } from '../model';
// @ts-ignore
import { UpdatePreferencesRequest } from '../model';
// @ts-ignore
import { UpdateProductRequest } from '../model';
/**
 * ProductsApi - axios parameter creator
 * @export
 */
export const ProductsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint creates a new Product in a specified Organization  identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
         * @summary Create Product
         * @param {string} organizationId The identifier of the Organization.
         * @param {CreateProductRequest} createProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct: async (organizationId: string, createProductRequest: CreateProductRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('createProduct', 'organizationId', organizationId)
            // verify required parameter 'createProductRequest' is not null or undefined
            assertParamExists('createProduct', 'createProductRequest', createProductRequest)
            const localVarPath = `/v1/organizations/{organizationId}/products`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createProductRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint removes a Product identified by the `productId` parameter.
         * @summary Delete Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct: async (productId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('deleteProduct', 'productId', productId)
            const localVarPath = `/v1/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * This endpoint returns the metadata of a Product  identified by the `productId`.
         * @summary Get Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct: async (productId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getProduct', 'productId', productId)
            const localVarPath = `/v1/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
        /**
         * This endpoint returns the preferences of a Product  identified by the `productId`.
         * @summary Get Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPreferences: async (productId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getProductPreferences', 'productId', productId)
            const localVarPath = `/v1/products/{productId}/preferences`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
        /**
         * This endpoint returns the list of the Products that belongs to the user.
         * @summary List Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProducts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/products`;
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
        /**
         * This endpoint updates a Product identified by the `productId` parameter.
         * @summary Update Product
         * @param {string} productId The identifier of the Product.
         * @param {UpdateProductRequest} updateProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct: async (productId: string, updateProductRequest: UpdateProductRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateProduct', 'productId', productId)
            // verify required parameter 'updateProductRequest' is not null or undefined
            assertParamExists('updateProduct', 'updateProductRequest', updateProductRequest)
            const localVarPath = `/v1/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateProductRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint updates the preferences of a Product identified by the `productId` parameter.
         * @summary Update Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {UpdatePreferencesRequest} updatePreferencesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProductPreferences: async (productId: string, updatePreferencesRequest: UpdatePreferencesRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateProductPreferences', 'productId', productId)
            // verify required parameter 'updatePreferencesRequest' is not null or undefined
            assertParamExists('updateProductPreferences', 'updatePreferencesRequest', updatePreferencesRequest)
            const localVarPath = `/v1/products/{productId}/preferences`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePreferencesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductsApi - functional programming interface
 * @export
 */
export const ProductsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductsApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint creates a new Product in a specified Organization  identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
         * @summary Create Product
         * @param {string} organizationId The identifier of the Organization.
         * @param {CreateProductRequest} createProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProduct(organizationId: string, createProductRequest: CreateProductRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProduct(organizationId, createProductRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.createProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint removes a Product identified by the `productId` parameter.
         * @summary Delete Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProduct(productId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProduct(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.deleteProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint returns the metadata of a Product  identified by the `productId`.
         * @summary Get Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProduct(productId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProduct(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.getProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint returns the preferences of a Product  identified by the `productId`.
         * @summary Get Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductPreferences(productId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferencesModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductPreferences(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.getProductPreferences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint returns the list of the Products that belongs to the user.
         * @summary List Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProducts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProductModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProducts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.getProducts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint updates a Product identified by the `productId` parameter.
         * @summary Update Product
         * @param {string} productId The identifier of the Product.
         * @param {UpdateProductRequest} updateProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProduct(productId: string, updateProductRequest: UpdateProductRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProduct(productId, updateProductRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.updateProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This endpoint updates the preferences of a Product identified by the `productId` parameter.
         * @summary Update Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {UpdatePreferencesRequest} updatePreferencesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProductPreferences(productId: string, updatePreferencesRequest: UpdatePreferencesRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferencesModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProductPreferences(productId, updatePreferencesRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.updateProductPreferences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProductsApi - factory interface
 * @export
 */
export const ProductsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductsApiFp(configuration)
    return {
        /**
         * This endpoint creates a new Product in a specified Organization  identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
         * @summary Create Product
         * @param {string} organizationId The identifier of the Organization.
         * @param {CreateProductRequest} createProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(organizationId: string, createProductRequest: CreateProductRequest, options?: any): AxiosPromise<ProductModel> {
            return localVarFp.createProduct(organizationId, createProductRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint removes a Product identified by the `productId` parameter.
         * @summary Delete Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct(productId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the metadata of a Product  identified by the `productId`.
         * @summary Get Product
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct(productId: string, options?: any): AxiosPromise<ProductModel> {
            return localVarFp.getProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the preferences of a Product  identified by the `productId`.
         * @summary Get Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPreferences(productId: string, options?: any): AxiosPromise<PreferencesModel> {
            return localVarFp.getProductPreferences(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the list of the Products that belongs to the user.
         * @summary List Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProducts(options?: any): AxiosPromise<Array<ProductModel>> {
            return localVarFp.getProducts(options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint updates a Product identified by the `productId` parameter.
         * @summary Update Product
         * @param {string} productId The identifier of the Product.
         * @param {UpdateProductRequest} updateProductRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct(productId: string, updateProductRequest: UpdateProductRequest, options?: any): AxiosPromise<ProductModel> {
            return localVarFp.updateProduct(productId, updateProductRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint updates the preferences of a Product identified by the `productId` parameter.
         * @summary Update Product Preferences
         * @param {string} productId The identifier of the Product.
         * @param {UpdatePreferencesRequest} updatePreferencesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProductPreferences(productId: string, updatePreferencesRequest: UpdatePreferencesRequest, options?: any): AxiosPromise<PreferencesModel> {
            return localVarFp.updateProductPreferences(productId, updatePreferencesRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductsApi - object-oriented interface
 * @export
 * @class ProductsApi
 * @extends {BaseAPI}
 */
export class ProductsApi extends BaseAPI {
    /**
     * This endpoint creates a new Product in a specified Organization  identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
     * @summary Create Product
     * @param {string} organizationId The identifier of the Organization.
     * @param {CreateProductRequest} createProductRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public createProduct(organizationId: string, createProductRequest: CreateProductRequest, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).createProduct(organizationId, createProductRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint removes a Product identified by the `productId` parameter.
     * @summary Delete Product
     * @param {string} productId The identifier of the Product.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public deleteProduct(productId: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).deleteProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the metadata of a Product  identified by the `productId`.
     * @summary Get Product
     * @param {string} productId The identifier of the Product.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProduct(productId: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the preferences of a Product  identified by the `productId`.
     * @summary Get Product Preferences
     * @param {string} productId The identifier of the Product.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProductPreferences(productId: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProductPreferences(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the list of the Products that belongs to the user.
     * @summary List Products
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProducts(options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProducts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint updates a Product identified by the `productId` parameter.
     * @summary Update Product
     * @param {string} productId The identifier of the Product.
     * @param {UpdateProductRequest} updateProductRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public updateProduct(productId: string, updateProductRequest: UpdateProductRequest, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).updateProduct(productId, updateProductRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint updates the preferences of a Product identified by the `productId` parameter.
     * @summary Update Product Preferences
     * @param {string} productId The identifier of the Product.
     * @param {UpdatePreferencesRequest} updatePreferencesRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public updateProductPreferences(productId: string, updatePreferencesRequest: UpdatePreferencesRequest, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).updateProductPreferences(productId, updatePreferencesRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

