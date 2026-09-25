# ProductMonthlyStatisticV2Model

Represents the aggregated monthly usage statistics for a Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **string** | The identifier of the Product associated with the statistics. | [default to undefined]
**date** | **string** | The date for which the statistics are reported. | [default to undefined]
**millionRequestCount** | **number** | The total request volume in millions for the Product. | [default to undefined]
**responseMegaBytes** | **number** | The total network traffic in megabytes for the Product. | [default to undefined]

## Example

```typescript
import { ProductMonthlyStatisticV2Model } from './api';

const instance: ProductMonthlyStatisticV2Model = {
    productId,
    date,
    millionRequestCount,
    responseMegaBytes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
