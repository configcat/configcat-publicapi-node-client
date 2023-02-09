export * from './auditLogsApi';
import { AuditLogsApi } from './auditLogsApi';
export * from './codeReferencesApi';
import { CodeReferencesApi } from './codeReferencesApi';
export * from './configsApi';
import { ConfigsApi } from './configsApi';
export * from './environmentsApi';
import { EnvironmentsApi } from './environmentsApi';
export * from './featureFlagSettingValuesApi';
import { FeatureFlagSettingValuesApi } from './featureFlagSettingValuesApi';
export * from './featureFlagSettingValuesUsingSDKKeyApi';
import { FeatureFlagSettingValuesUsingSDKKeyApi } from './featureFlagSettingValuesUsingSDKKeyApi';
export * from './featureFlagsSettingsApi';
import { FeatureFlagsSettingsApi } from './featureFlagsSettingsApi';
export * from './integrationLinksApi';
import { IntegrationLinksApi } from './integrationLinksApi';
export * from './meApi';
import { MeApi } from './meApi';
export * from './membersApi';
import { MembersApi } from './membersApi';
export * from './organizationsApi';
import { OrganizationsApi } from './organizationsApi';
export * from './permissionGroupsApi';
import { PermissionGroupsApi } from './permissionGroupsApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './sDKKeysApi';
import { SDKKeysApi } from './sDKKeysApi';
export * from './segmentsApi';
import { SegmentsApi } from './segmentsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuditLogsApi, CodeReferencesApi, ConfigsApi, EnvironmentsApi, FeatureFlagSettingValuesApi, FeatureFlagSettingValuesUsingSDKKeyApi, FeatureFlagsSettingsApi, IntegrationLinksApi, MeApi, MembersApi, OrganizationsApi, PermissionGroupsApi, ProductsApi, SDKKeysApi, SegmentsApi, TagsApi];
