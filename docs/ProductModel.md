# ProductModel

Details of the Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**OrganizationModel**](OrganizationModel.md) |  | [default to undefined]
**productId** | **string** | Identifier of the Product. | [default to undefined]
**name** | **string** | Name of the Product. | [default to undefined]
**description** | **string** | Description of the Product. | [default to undefined]
**order** | **number** | The order of the Product represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers. | [default to undefined]
**reasonRequired** | **boolean** | Determines whether a mandatory reason must be given every time when the Feature Flags or Settings within a Product are saved. | [default to undefined]
**approveRequired** | **boolean** | Determines whether changes must be approved before they are applied within a Product. | [default to undefined]

## Example

```typescript
import { ProductModel } from './api';

const instance: ProductModel = {
    organization,
    productId,
    name,
    description,
    order,
    reasonRequired,
    approveRequired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
