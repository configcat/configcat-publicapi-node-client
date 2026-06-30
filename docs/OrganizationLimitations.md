# OrganizationLimitations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPercentageOptionCount** | **number** | Maximum number of percentage options a Feature Flag or Setting can have within a targeting rule. | [default to undefined]
**maxTargetingRuleCount** | **number** | Maximum number of targeting rules a Feature Flag or Setting can have. | [default to undefined]
**maxComparisonValueLength** | **number** | Maximum length of a text comparison value. | [default to undefined]
**maxComparisonValueListLength** | **number** | Maximum item count of a list comparison value. | [default to undefined]
**maxComparisonValueListItemLength** | **number** | Maximum length of a list comparison value\&#39;s item. | [default to undefined]
**maxStringFlagValueLength** | **number** | Maximum length of a text Setting\&#39;s value. | [default to undefined]
**maxConditionPerTargetingRuleCount** | **number** | Maximum number of &#x60;AND&#x60; conditions a Feature Flag or Setting can have within a targeting rule. | [default to undefined]
**maxPredefinedVariations** | **number** | The maximum number of predefined variations allowed for a Feature Flag or Setting. | [default to undefined]

## Example

```typescript
import { OrganizationLimitations } from './api';

const instance: OrganizationLimitations = {
    maxPercentageOptionCount,
    maxTargetingRuleCount,
    maxComparisonValueLength,
    maxComparisonValueListLength,
    maxComparisonValueListItemLength,
    maxStringFlagValueLength,
    maxConditionPerTargetingRuleCount,
    maxPredefinedVariations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
