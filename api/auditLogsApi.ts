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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AuditLogItemModel } from '../model/auditLogItemModel';
import { AuditLogType } from '../model/auditLogType';
import { SettingModel } from '../model/settingModel';
import { SettingModelHaljson } from '../model/settingModelHaljson';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://test-api.configcat.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AuditLogsApiApiKeys {
}

export class AuditLogsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'Basic': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AuditLogsApiApiKeys, value: string) {
        (this.authentications as any)[AuditLogsApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.Basic.username = username;
    }

    set password(password: string) {
        this.authentications.Basic.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This endpoint returns the list of Audit log items for a given Product  and the result can be optionally filtered by Config and/or Environment.
     * @summary List Audit log items for Product
     * @param productId The identifier of the Product.
     * @param configId The identifier of the Config.
     * @param environmentId The identifier of the Environment.
     * @param auditLogType Filter Audit logs by Audit log type.
     * @param fromUtcDateTime Filter Audit logs by starting UTC date.
     * @param toUtcDateTime Filter Audit logs by ending UTC date.
     */
    public async getAuditlogs (productId: string, configId?: string, environmentId?: string, auditLogType?: AuditLogType, fromUtcDateTime?: Date, toUtcDateTime?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<AuditLogItemModel>;  }> {
        const localVarPath = this.basePath + '/v1/products/{productId}/auditlogs'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getAuditlogs.');
        }

        if (configId !== undefined) {
            localVarQueryParameters['configId'] = ObjectSerializer.serialize(configId, "string");
        }

        if (environmentId !== undefined) {
            localVarQueryParameters['environmentId'] = ObjectSerializer.serialize(environmentId, "string");
        }

        if (auditLogType !== undefined) {
            localVarQueryParameters['auditLogType'] = ObjectSerializer.serialize(auditLogType, "AuditLogType");
        }

        if (fromUtcDateTime !== undefined) {
            localVarQueryParameters['fromUtcDateTime'] = ObjectSerializer.serialize(fromUtcDateTime, "Date");
        }

        if (toUtcDateTime !== undefined) {
            localVarQueryParameters['toUtcDateTime'] = ObjectSerializer.serialize(toUtcDateTime, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Basic.username && this.authentications.Basic.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Basic.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<AuditLogItemModel>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<AuditLogItemModel>");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
     * @summary List Deleted Settings
     * @param configId The identifier of the Config.
     */
    public async getDeletedSettings (configId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<SettingModel>;  }> {
        const localVarPath = this.basePath + '/v1/configs/{configId}/deleted-settings'
            .replace('{' + 'configId' + '}', encodeURIComponent(String(configId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'configId' is not null or undefined
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling getDeletedSettings.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Basic.username && this.authentications.Basic.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Basic.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<SettingModel>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<SettingModel>");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint returns the list of Audit log items for a given Organization  and the result can be optionally filtered by Product and/or Config and/or Environment.
     * @summary List Audit log items for Organization
     * @param organizationId The identifier of the Organization.
     * @param productId The identifier of the Product.
     * @param configId The identifier of the Config.
     * @param environmentId The identifier of the Environment.
     * @param auditLogType Filter Audit logs by Audit log type.
     * @param fromUtcDateTime Filter Audit logs by starting UTC date.
     * @param toUtcDateTime Filter Audit logs by ending UTC date.
     */
    public async getOrganizationAuditlogs (organizationId: string, productId?: string, configId?: string, environmentId?: string, auditLogType?: AuditLogType, fromUtcDateTime?: Date, toUtcDateTime?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<AuditLogItemModel>;  }> {
        const localVarPath = this.basePath + '/v1/organizations/{organizationId}/auditlogs'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling getOrganizationAuditlogs.');
        }

        if (productId !== undefined) {
            localVarQueryParameters['productId'] = ObjectSerializer.serialize(productId, "string");
        }

        if (configId !== undefined) {
            localVarQueryParameters['configId'] = ObjectSerializer.serialize(configId, "string");
        }

        if (environmentId !== undefined) {
            localVarQueryParameters['environmentId'] = ObjectSerializer.serialize(environmentId, "string");
        }

        if (auditLogType !== undefined) {
            localVarQueryParameters['auditLogType'] = ObjectSerializer.serialize(auditLogType, "AuditLogType");
        }

        if (fromUtcDateTime !== undefined) {
            localVarQueryParameters['fromUtcDateTime'] = ObjectSerializer.serialize(fromUtcDateTime, "Date");
        }

        if (toUtcDateTime !== undefined) {
            localVarQueryParameters['toUtcDateTime'] = ObjectSerializer.serialize(toUtcDateTime, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Basic.username && this.authentications.Basic.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Basic.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<AuditLogItemModel>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<AuditLogItemModel>");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}