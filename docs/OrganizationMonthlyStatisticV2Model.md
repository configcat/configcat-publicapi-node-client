# OrganizationMonthlyStatisticV2Model

Represents the aggregated monthly usage statistics for an Organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date for which the aggregate statistics are reported. | [default to undefined]
**millionRequestCount** | **number** | The total request volume in millions for the period. | [default to undefined]
**responseMegaBytes** | **number** | The total network traffic in megabytes for the period. | [default to undefined]
**overLimit** | **boolean** | Indicates whether the request quota was exceeded. | [default to undefined]
**overNetworkTrafficLimit** | **boolean** | Indicates whether the network traffic quota was exceeded. | [default to undefined]
**millionRequestLimitPerMonth** | **number** | The monthly request quota limit in millions. | [default to undefined]
**networkTrafficGigaByteLimitPerMonth** | **number** | The monthly network traffic quota limit in gigabytes. | [default to undefined]
**publicApiCallCount** | **number** | The number of Public API calls recorded for the period. | [default to undefined]

## Example

```typescript
import { OrganizationMonthlyStatisticV2Model } from './api';

const instance: OrganizationMonthlyStatisticV2Model = {
    date,
    millionRequestCount,
    responseMegaBytes,
    overLimit,
    overNetworkTrafficLimit,
    millionRequestLimitPerMonth,
    networkTrafficGigaByteLimitPerMonth,
    publicApiCallCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
