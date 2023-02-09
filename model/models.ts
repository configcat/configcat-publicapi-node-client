import localVarRequest from 'request';

export * from './accessType';
export * from './addOrUpdateIntegrationLinkModel';
export * from './addOrUpdateJiraIntegrationLinkModel';
export * from './addUserToGroupRequest';
export * from './auditLogItemModel';
export * from './auditLogType';
export * from './codeReferenceRequest';
export * from './configModel';
export * from './configModelHaljson';
export * from './configModelHaljsonEmbedded';
export * from './configModelHaljsonEmbeddedProduct';
export * from './configModelHaljsonEmbeddedProductEmbedded';
export * from './configModelHaljsonEmbeddedProductEmbeddedOrganization';
export * from './configModelHaljsonEmbeddedProductEmbeddedOrganizationLinks';
export * from './configModelHaljsonEmbeddedProductLinks';
export * from './configModelHaljsonLinks';
export * from './configSettingValueModel';
export * from './configSettingValuesModel';
export * from './connectRequest';
export * from './createConfigRequest';
export * from './createEnvironmentModel';
export * from './createOrUpdateEnvironmentAccessModel';
export * from './createPermissionGroupRequest';
export * from './createProductRequest';
export * from './createSegmentModel';
export * from './createSettingInitialValues';
export * from './createTagModel';
export * from './deleteIntegrationLinkModel';
export * from './deleteRepositoryReportsRequest';
export * from './environmentAccessModel';
export * from './environmentAccessType';
export * from './environmentModel';
export * from './environmentModelHaljson';
export * from './environmentModelHaljsonLinks';
export * from './flagReference';
export * from './initialValue';
export * from './integrationLinkDetail';
export * from './integrationLinkDetailsModel';
export * from './integrationLinkModel';
export * from './integrationLinkType';
export * from './inviteMembersRequest';
export * from './jsonNode';
export * from './jsonNodeOptions';
export * from './jsonPatch';
export * from './jsonPointer';
export * from './jsonPointerKind';
export * from './meModel';
export * from './memberModel';
export * from './operationType';
export * from './organizationModel';
export * from './organizationModelHaljson';
export * from './patchOperation';
export * from './permissionGroupModel';
export * from './permissionGroupModelHaljson';
export * from './pointerSegment';
export * from './productModel';
export * from './productModelHaljson';
export * from './referenceLine';
export * from './referenceLines';
export * from './rolloutPercentageItemModel';
export * from './rolloutRuleComparator';
export * from './rolloutRuleModel';
export * from './sdkKeysModel';
export * from './segmentComparator';
export * from './segmentListModel';
export * from './segmentListModelHaljson';
export * from './segmentModel';
export * from './segmentModelHaljson';
export * from './settingDataModel';
export * from './settingModel';
export * from './settingModelHaljson';
export * from './settingModelHaljsonEmbedded';
export * from './settingModelHaljsonEmbeddedTagsInner';
export * from './settingTagModel';
export * from './settingType';
export * from './settingValueModel';
export * from './settingValueModelHaljson';
export * from './settingValueModelHaljsonEmbedded';
export * from './settingValueModelHaljsonEmbeddedConfig';
export * from './settingValueModelHaljsonEmbeddedEnvironment';
export * from './settingValueModelHaljsonEmbeddedIntegrationLinksInner';
export * from './settingValueModelHaljsonEmbeddedSetting';
export * from './settingValueModelHaljsonEmbeddedSettingTagsInner';
export * from './tagModel';
export * from './tagModelHaljson';
export * from './updateConfigRequest';
export * from './updateEnvironmentModel';
export * from './updatePermissionGroupRequest';
export * from './updateProductRequest';
export * from './updateSegmentModel';
export * from './updateSettingValueModel';
export * from './updateTagModel';
export * from './userModel';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessType } from './accessType';
import { AddOrUpdateIntegrationLinkModel } from './addOrUpdateIntegrationLinkModel';
import { AddOrUpdateJiraIntegrationLinkModel } from './addOrUpdateJiraIntegrationLinkModel';
import { AddUserToGroupRequest } from './addUserToGroupRequest';
import { AuditLogItemModel } from './auditLogItemModel';
import { AuditLogType } from './auditLogType';
import { CodeReferenceRequest } from './codeReferenceRequest';
import { ConfigModel } from './configModel';
import { ConfigModelHaljson } from './configModelHaljson';
import { ConfigModelHaljsonEmbedded } from './configModelHaljsonEmbedded';
import { ConfigModelHaljsonEmbeddedProduct } from './configModelHaljsonEmbeddedProduct';
import { ConfigModelHaljsonEmbeddedProductEmbedded } from './configModelHaljsonEmbeddedProductEmbedded';
import { ConfigModelHaljsonEmbeddedProductEmbeddedOrganization } from './configModelHaljsonEmbeddedProductEmbeddedOrganization';
import { ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks } from './configModelHaljsonEmbeddedProductEmbeddedOrganizationLinks';
import { ConfigModelHaljsonEmbeddedProductLinks } from './configModelHaljsonEmbeddedProductLinks';
import { ConfigModelHaljsonLinks } from './configModelHaljsonLinks';
import { ConfigSettingValueModel } from './configSettingValueModel';
import { ConfigSettingValuesModel } from './configSettingValuesModel';
import { ConnectRequest } from './connectRequest';
import { CreateConfigRequest } from './createConfigRequest';
import { CreateEnvironmentModel } from './createEnvironmentModel';
import { CreateOrUpdateEnvironmentAccessModel } from './createOrUpdateEnvironmentAccessModel';
import { CreatePermissionGroupRequest } from './createPermissionGroupRequest';
import { CreateProductRequest } from './createProductRequest';
import { CreateSegmentModel } from './createSegmentModel';
import { CreateSettingInitialValues } from './createSettingInitialValues';
import { CreateTagModel } from './createTagModel';
import { DeleteIntegrationLinkModel } from './deleteIntegrationLinkModel';
import { DeleteRepositoryReportsRequest } from './deleteRepositoryReportsRequest';
import { EnvironmentAccessModel } from './environmentAccessModel';
import { EnvironmentAccessType } from './environmentAccessType';
import { EnvironmentModel } from './environmentModel';
import { EnvironmentModelHaljson } from './environmentModelHaljson';
import { EnvironmentModelHaljsonLinks } from './environmentModelHaljsonLinks';
import { FlagReference } from './flagReference';
import { InitialValue } from './initialValue';
import { IntegrationLinkDetail } from './integrationLinkDetail';
import { IntegrationLinkDetailsModel } from './integrationLinkDetailsModel';
import { IntegrationLinkModel } from './integrationLinkModel';
import { IntegrationLinkType } from './integrationLinkType';
import { InviteMembersRequest } from './inviteMembersRequest';
import { JsonNode } from './jsonNode';
import { JsonNodeOptions } from './jsonNodeOptions';
import { JsonPatch } from './jsonPatch';
import { JsonPointer } from './jsonPointer';
import { JsonPointerKind } from './jsonPointerKind';
import { MeModel } from './meModel';
import { MemberModel } from './memberModel';
import { OperationType } from './operationType';
import { OrganizationModel } from './organizationModel';
import { OrganizationModelHaljson } from './organizationModelHaljson';
import { PatchOperation } from './patchOperation';
import { PermissionGroupModel } from './permissionGroupModel';
import { PermissionGroupModelHaljson } from './permissionGroupModelHaljson';
import { PointerSegment } from './pointerSegment';
import { ProductModel } from './productModel';
import { ProductModelHaljson } from './productModelHaljson';
import { ReferenceLine } from './referenceLine';
import { ReferenceLines } from './referenceLines';
import { RolloutPercentageItemModel } from './rolloutPercentageItemModel';
import { RolloutRuleComparator } from './rolloutRuleComparator';
import { RolloutRuleModel } from './rolloutRuleModel';
import { SdkKeysModel } from './sdkKeysModel';
import { SegmentComparator } from './segmentComparator';
import { SegmentListModel } from './segmentListModel';
import { SegmentListModelHaljson } from './segmentListModelHaljson';
import { SegmentModel } from './segmentModel';
import { SegmentModelHaljson } from './segmentModelHaljson';
import { SettingDataModel } from './settingDataModel';
import { SettingModel } from './settingModel';
import { SettingModelHaljson } from './settingModelHaljson';
import { SettingModelHaljsonEmbedded } from './settingModelHaljsonEmbedded';
import { SettingModelHaljsonEmbeddedTagsInner } from './settingModelHaljsonEmbeddedTagsInner';
import { SettingTagModel } from './settingTagModel';
import { SettingType } from './settingType';
import { SettingValueModel } from './settingValueModel';
import { SettingValueModelHaljson } from './settingValueModelHaljson';
import { SettingValueModelHaljsonEmbedded } from './settingValueModelHaljsonEmbedded';
import { SettingValueModelHaljsonEmbeddedConfig } from './settingValueModelHaljsonEmbeddedConfig';
import { SettingValueModelHaljsonEmbeddedEnvironment } from './settingValueModelHaljsonEmbeddedEnvironment';
import { SettingValueModelHaljsonEmbeddedIntegrationLinksInner } from './settingValueModelHaljsonEmbeddedIntegrationLinksInner';
import { SettingValueModelHaljsonEmbeddedSetting } from './settingValueModelHaljsonEmbeddedSetting';
import { SettingValueModelHaljsonEmbeddedSettingTagsInner } from './settingValueModelHaljsonEmbeddedSettingTagsInner';
import { TagModel } from './tagModel';
import { TagModelHaljson } from './tagModelHaljson';
import { UpdateConfigRequest } from './updateConfigRequest';
import { UpdateEnvironmentModel } from './updateEnvironmentModel';
import { UpdatePermissionGroupRequest } from './updatePermissionGroupRequest';
import { UpdateProductRequest } from './updateProductRequest';
import { UpdateSegmentModel } from './updateSegmentModel';
import { UpdateSettingValueModel } from './updateSettingValueModel';
import { UpdateTagModel } from './updateTagModel';
import { UserModel } from './userModel';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccessType": AccessType,
        "AuditLogType": AuditLogType,
        "EnvironmentAccessType": EnvironmentAccessType,
        "IntegrationLinkType": IntegrationLinkType,
        "JsonPointerKind": JsonPointerKind,
        "OperationType": OperationType,
        "RolloutRuleComparator": RolloutRuleComparator,
        "SegmentComparator": SegmentComparator,
        "SettingType": SettingType,
}

let typeMap: {[index: string]: any} = {
    "AddOrUpdateIntegrationLinkModel": AddOrUpdateIntegrationLinkModel,
    "AddOrUpdateJiraIntegrationLinkModel": AddOrUpdateJiraIntegrationLinkModel,
    "AddUserToGroupRequest": AddUserToGroupRequest,
    "AuditLogItemModel": AuditLogItemModel,
    "CodeReferenceRequest": CodeReferenceRequest,
    "ConfigModel": ConfigModel,
    "ConfigModelHaljson": ConfigModelHaljson,
    "ConfigModelHaljsonEmbedded": ConfigModelHaljsonEmbedded,
    "ConfigModelHaljsonEmbeddedProduct": ConfigModelHaljsonEmbeddedProduct,
    "ConfigModelHaljsonEmbeddedProductEmbedded": ConfigModelHaljsonEmbeddedProductEmbedded,
    "ConfigModelHaljsonEmbeddedProductEmbeddedOrganization": ConfigModelHaljsonEmbeddedProductEmbeddedOrganization,
    "ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks": ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks,
    "ConfigModelHaljsonEmbeddedProductLinks": ConfigModelHaljsonEmbeddedProductLinks,
    "ConfigModelHaljsonLinks": ConfigModelHaljsonLinks,
    "ConfigSettingValueModel": ConfigSettingValueModel,
    "ConfigSettingValuesModel": ConfigSettingValuesModel,
    "ConnectRequest": ConnectRequest,
    "CreateConfigRequest": CreateConfigRequest,
    "CreateEnvironmentModel": CreateEnvironmentModel,
    "CreateOrUpdateEnvironmentAccessModel": CreateOrUpdateEnvironmentAccessModel,
    "CreatePermissionGroupRequest": CreatePermissionGroupRequest,
    "CreateProductRequest": CreateProductRequest,
    "CreateSegmentModel": CreateSegmentModel,
    "CreateSettingInitialValues": CreateSettingInitialValues,
    "CreateTagModel": CreateTagModel,
    "DeleteIntegrationLinkModel": DeleteIntegrationLinkModel,
    "DeleteRepositoryReportsRequest": DeleteRepositoryReportsRequest,
    "EnvironmentAccessModel": EnvironmentAccessModel,
    "EnvironmentModel": EnvironmentModel,
    "EnvironmentModelHaljson": EnvironmentModelHaljson,
    "EnvironmentModelHaljsonLinks": EnvironmentModelHaljsonLinks,
    "FlagReference": FlagReference,
    "InitialValue": InitialValue,
    "IntegrationLinkDetail": IntegrationLinkDetail,
    "IntegrationLinkDetailsModel": IntegrationLinkDetailsModel,
    "IntegrationLinkModel": IntegrationLinkModel,
    "InviteMembersRequest": InviteMembersRequest,
    "JsonNode": JsonNode,
    "JsonNodeOptions": JsonNodeOptions,
    "JsonPatch": JsonPatch,
    "JsonPointer": JsonPointer,
    "MeModel": MeModel,
    "MemberModel": MemberModel,
    "OrganizationModel": OrganizationModel,
    "OrganizationModelHaljson": OrganizationModelHaljson,
    "PatchOperation": PatchOperation,
    "PermissionGroupModel": PermissionGroupModel,
    "PermissionGroupModelHaljson": PermissionGroupModelHaljson,
    "PointerSegment": PointerSegment,
    "ProductModel": ProductModel,
    "ProductModelHaljson": ProductModelHaljson,
    "ReferenceLine": ReferenceLine,
    "ReferenceLines": ReferenceLines,
    "RolloutPercentageItemModel": RolloutPercentageItemModel,
    "RolloutRuleModel": RolloutRuleModel,
    "SdkKeysModel": SdkKeysModel,
    "SegmentListModel": SegmentListModel,
    "SegmentListModelHaljson": SegmentListModelHaljson,
    "SegmentModel": SegmentModel,
    "SegmentModelHaljson": SegmentModelHaljson,
    "SettingDataModel": SettingDataModel,
    "SettingModel": SettingModel,
    "SettingModelHaljson": SettingModelHaljson,
    "SettingModelHaljsonEmbedded": SettingModelHaljsonEmbedded,
    "SettingModelHaljsonEmbeddedTagsInner": SettingModelHaljsonEmbeddedTagsInner,
    "SettingTagModel": SettingTagModel,
    "SettingValueModel": SettingValueModel,
    "SettingValueModelHaljson": SettingValueModelHaljson,
    "SettingValueModelHaljsonEmbedded": SettingValueModelHaljsonEmbedded,
    "SettingValueModelHaljsonEmbeddedConfig": SettingValueModelHaljsonEmbeddedConfig,
    "SettingValueModelHaljsonEmbeddedEnvironment": SettingValueModelHaljsonEmbeddedEnvironment,
    "SettingValueModelHaljsonEmbeddedIntegrationLinksInner": SettingValueModelHaljsonEmbeddedIntegrationLinksInner,
    "SettingValueModelHaljsonEmbeddedSetting": SettingValueModelHaljsonEmbeddedSetting,
    "SettingValueModelHaljsonEmbeddedSettingTagsInner": SettingValueModelHaljsonEmbeddedSettingTagsInner,
    "TagModel": TagModel,
    "TagModelHaljson": TagModelHaljson,
    "UpdateConfigRequest": UpdateConfigRequest,
    "UpdateEnvironmentModel": UpdateEnvironmentModel,
    "UpdatePermissionGroupRequest": UpdatePermissionGroupRequest,
    "UpdateProductRequest": UpdateProductRequest,
    "UpdateSegmentModel": UpdateSegmentModel,
    "UpdateSettingValueModel": UpdateSettingValueModel,
    "UpdateTagModel": UpdateTagModel,
    "UserModel": UserModel,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
