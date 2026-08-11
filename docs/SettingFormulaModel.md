# SettingFormulaModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastVersionId** | **string** | The version identifier of the last change made to the Feature Flag or Setting in the Environment. It can be used to make sure concurrent updates are not overwriting each other. If the version identifier does not match the current version, the update will be rejected with a 409 Conflict response. | [default to undefined]
**defaultValue** | [**ValueModel**](ValueModel.md) |  | [default to undefined]
**targetingRules** | [**Array&lt;TargetingRuleModel&gt;**](TargetingRuleModel.md) | The targeting rules of the Feature Flag or Setting. | [default to undefined]
**setting** | [**SettingDataV2Model**](SettingDataV2Model.md) |  | [default to undefined]
**updatedAt** | **string** | The last updated date and time when the Feature Flag or Setting. | [default to undefined]
**percentageEvaluationAttribute** | **string** | The user attribute used for percentage evaluation. If not set, it defaults to the &#x60;Identifier&#x60; user object attribute. | [default to undefined]
**lastUpdaterUserEmail** | **string** | The email of the user who last updated the Feature Flag or Setting. | [default to undefined]
**lastUpdaterUserFullName** | **string** | The name of the user who last updated the Feature Flag or Setting. | [default to undefined]
**integrationLinks** | [**Array&lt;IntegrationLinkModel&gt;**](IntegrationLinkModel.md) | The integration links attached to the Feature Flag or Setting. | [default to undefined]
**settingTags** | [**Array&lt;SettingTagModel&gt;**](SettingTagModel.md) | The tags attached to the Feature Flag or Setting. | [default to undefined]
**settingIdsWherePrerequisite** | **Array&lt;number&gt;** | List of Feature Flag and Setting IDs where the actual Feature Flag or Setting is prerequisite. | [default to undefined]
**changeRequestCount** | **number** | The number of change requests for the Feature Flag or Setting. | [default to undefined]
**config** | [**ConfigModel**](ConfigModel.md) |  | [default to undefined]
**environment** | [**EnvironmentModel**](EnvironmentModel.md) |  | [default to undefined]
**readOnly** | **boolean** | Indicates whether you have Read-only access to the Environment. | [default to undefined]
**featureFlagLimitations** | [**FeatureFlagLimitations**](FeatureFlagLimitations.md) |  | [default to undefined]
**approveRequired** | **boolean** | Indicates that a mandatory approval is required for saving and publishing. | [default to undefined]
**canBypassApproval** | **boolean** | Indicates whether the user can bypass the approval flow. | [default to undefined]
**reasonRequired** | **boolean** | Indicates that a mandatory note required for saving and publishing. | [default to undefined]

## Example

```typescript
import { SettingFormulaModel } from './api';

const instance: SettingFormulaModel = {
    lastVersionId,
    defaultValue,
    targetingRules,
    setting,
    updatedAt,
    percentageEvaluationAttribute,
    lastUpdaterUserEmail,
    lastUpdaterUserFullName,
    integrationLinks,
    settingTags,
    settingIdsWherePrerequisite,
    changeRequestCount,
    config,
    environment,
    readOnly,
    featureFlagLimitations,
    approveRequired,
    canBypassApproval,
    reasonRequired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
