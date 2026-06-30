# UpdateProxyProfileSelectionRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**SelectionRuleKind**](SelectionRuleKind.md) |  | [optional] [default to undefined]
**productIdFilter** | **string** | Defines the filter for matching Products by their unique identifier. | [optional] [default to undefined]
**configIdFilter** | **string** | Defines the filter for matching Configs by their unique identifier. | [optional] [default to undefined]
**environmentIdFilter** | **string** | Defines the filter for matching Environments by their unique identifier. | [optional] [default to undefined]
**productNameMatchFilter** | **string** | Specifies a filter to match Product names in the proxy profile selection rule. It accepts wildcards (*). | [optional] [default to undefined]
**configNameMatchFilter** | **string** | Specifies a filter to match Config names in the proxy profile selection rule. It accepts wildcards (*). | [optional] [default to undefined]
**environmentNameMatchFilter** | **string** | Specifies a filter to match Environment names in the proxy profile selection rule. It accepts wildcards (*). | [optional] [default to undefined]

## Example

```typescript
import { UpdateProxyProfileSelectionRule } from './api';

const instance: UpdateProxyProfileSelectionRule = {
    kind,
    productIdFilter,
    configIdFilter,
    environmentIdFilter,
    productNameMatchFilter,
    configNameMatchFilter,
    environmentNameMatchFilter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
