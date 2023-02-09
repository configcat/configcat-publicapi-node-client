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
import { ConfigSettingValuesModel } from '../model/configSettingValuesModel';
import { JsonPatch } from '../model/jsonPatch';
import { SettingValueModel } from '../model/settingValueModel';
import { SettingValueModelHaljson } from '../model/settingValueModelHaljson';
import { UpdateSettingValueModel } from '../model/updateSettingValueModel';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://test-api.configcat.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FeatureFlagSettingValuesApiApiKeys {
}

export class FeatureFlagSettingValuesApi {
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

    public setApiKey(key: FeatureFlagSettingValuesApiApiKeys, value: string) {
        (this.authentications as any)[FeatureFlagSettingValuesApiApiKeys[key]].apiKey = value;
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
     * This endpoint returns the value of a Feature Flag or Setting  in a specified Environment identified by the `environmentId` parameter.  The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`. The `value` represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The `rolloutRules` and `percentageRules` attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
     * @summary Get value
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     */
    public async getSettingValue (environmentId: string, settingId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }> {
        const localVarPath = this.basePath + '/v1/environments/{environmentId}/settings/{settingId}/value'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'settingId' + '}', encodeURIComponent(String(settingId)));
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

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling getSettingValue.');
        }

        // verify required parameter 'settingId' is not null or undefined
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling getSettingValue.');
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
            return new Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SettingValueModel");
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
     * This endpoint returns the value of a specified Config\'s Feature Flags or Settings identified by the `configId` parameter in a specified Environment identified by the `environmentId` parameter.  The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`. The `value` represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The `rolloutRules` and `percentageRules` attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
     * @summary Get values
     * @param configId The identifier of the Config.
     * @param environmentId The identifier of the Environment.
     */
    public async getSettingValues (configId: string, environmentId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ConfigSettingValuesModel;  }> {
        const localVarPath = this.basePath + '/v1/configs/{configId}/environments/{environmentId}/values'
            .replace('{' + 'configId' + '}', encodeURIComponent(String(configId)))
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)));
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
            throw new Error('Required parameter configId was null or undefined when calling getSettingValues.');
        }

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling getSettingValues.');
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
            return new Promise<{ response: http.IncomingMessage; body: ConfigSettingValuesModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ConfigSettingValuesModel");
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
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t  want to change in its original state. Not listing one means that it will reset.  For example: We have the following resource. ``` {  \"rolloutPercentageItems\": [   {    \"percentage\": 30,    \"value\": true   },   {    \"percentage\": 70,    \"value\": false   }  ],  \"rolloutRules\": [],  \"value\": false } ``` If we send a replace request body as below: ``` {  \"value\": true } ``` Then besides that the default value is set to `true`, all the Percentage Rules are deleted.  So we get a response like this: ``` {  \"rolloutPercentageItems\": [],  \"rolloutRules\": [],  \"value\": true } ```  The `rolloutRules` property describes two types of rules:  - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required. - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
     * @summary Replace value
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     * @param updateSettingValueModel 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     */
    public async replaceSettingValue (environmentId: string, settingId: number, updateSettingValueModel: UpdateSettingValueModel, reason?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }> {
        const localVarPath = this.basePath + '/v1/environments/{environmentId}/settings/{settingId}/value'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'settingId' + '}', encodeURIComponent(String(settingId)));
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

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling replaceSettingValue.');
        }

        // verify required parameter 'settingId' is not null or undefined
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling replaceSettingValue.');
        }

        // verify required parameter 'updateSettingValueModel' is not null or undefined
        if (updateSettingValueModel === null || updateSettingValueModel === undefined) {
            throw new Error('Required parameter updateSettingValueModel was null or undefined when calling replaceSettingValue.');
        }

        if (reason !== undefined) {
            localVarQueryParameters['reason'] = ObjectSerializer.serialize(reason, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateSettingValueModel, "UpdateSettingValueModel")
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
            return new Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SettingValueModel");
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
     * This endpoint updates the value of a Feature Flag or Setting  with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.  Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\'t want to change. It supports collection reordering, so it also  can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource. ``` {  \"rolloutPercentageItems\": [   {    \"percentage\": 30,    \"value\": true   },   {    \"percentage\": 70,    \"value\": false   }  ],  \"rolloutRules\": [],  \"value\": false } ``` If we send an update request body as below: ``` [  {   \"op\": \"replace\",   \"path\": \"/value\",   \"value\": true  } ] ``` Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged. So we get a response like this: ``` {  \"rolloutPercentageItems\": [   {    \"percentage\": 30,    \"value\": true   },   {    \"percentage\": 70,    \"value\": false   }  ],  \"rolloutRules\": [],  \"value\": true } ```  The `rolloutRules` property describes two types of rules:  - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required. - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
     * @summary Update value
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     * @param jsonPatch 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     */
    public async updateSettingValue (environmentId: string, settingId: number, jsonPatch: JsonPatch, reason?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }> {
        const localVarPath = this.basePath + '/v1/environments/{environmentId}/settings/{settingId}/value'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'settingId' + '}', encodeURIComponent(String(settingId)));
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

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling updateSettingValue.');
        }

        // verify required parameter 'settingId' is not null or undefined
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling updateSettingValue.');
        }

        // verify required parameter 'jsonPatch' is not null or undefined
        if (jsonPatch === null || jsonPatch === undefined) {
            throw new Error('Required parameter jsonPatch was null or undefined when calling updateSettingValue.');
        }

        if (reason !== undefined) {
            localVarQueryParameters['reason'] = ObjectSerializer.serialize(reason, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(jsonPatch, "JsonPatch")
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
            return new Promise<{ response: http.IncomingMessage; body: SettingValueModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SettingValueModel");
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