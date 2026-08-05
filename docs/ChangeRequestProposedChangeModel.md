# ChangeRequestProposedChangeModel

Model representing proposed changes to a Setting included in a Change Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingId** | **number** | Identifier of the Setting to change. | [default to undefined]
**settingKey** | **string** | Key identifier of the Setting. | [default to undefined]
**settingName** | **string** | Display name of the Setting. | [default to undefined]
**settingHint** | **string** | Optional hint or description for the Setting. | [default to undefined]
**settingType** | [**SettingType**](SettingType.md) |  | [default to undefined]
**hasConflict** | **boolean** | Indicates whether the proposed changes to the Setting are in conflict with concurrently published changes. | [default to undefined]
**originalEvaluationFormula** | [**AuditLogSettingValueV2EvaluationFormula**](AuditLogSettingValueV2EvaluationFormula.md) |  | [default to undefined]
**proposedEvaluationFormula** | [**AuditLogSettingValueV2EvaluationFormula**](AuditLogSettingValueV2EvaluationFormula.md) |  | [default to undefined]

## Example

```typescript
import { ChangeRequestProposedChangeModel } from './api';

const instance: ChangeRequestProposedChangeModel = {
    settingId,
    settingKey,
    settingName,
    settingHint,
    settingType,
    hasConflict,
    originalEvaluationFormula,
    proposedEvaluationFormula,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
