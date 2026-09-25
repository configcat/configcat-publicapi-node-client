# StatisticsV2Model

Represents the monthly usage and quota statistics for an Organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasConnectedApplication** | **boolean** | Indicates whether the Organization has a connected application. | [default to undefined]
**millionRequestLimitPerMonth** | **number** | The monthly request quota limit in millions. | [default to undefined]
**networkTrafficGigaByteLimitPerMonth** | **number** | The monthly network traffic quota limit in gigabytes. | [default to undefined]
**organizationStatistics** | [**Array&lt;OrganizationMonthlyStatisticV2Model&gt;**](OrganizationMonthlyStatisticV2Model.md) | The aggregated monthly statistics for the Organization. | [default to undefined]
**productStatistics** | [**Array&lt;ProductMonthlyStatisticV2Model&gt;**](ProductMonthlyStatisticV2Model.md) | The aggregated monthly statistics for Products within the scope. | [default to undefined]
**detailedStatistics** | [**Array&lt;DetailedStatisticV2Model&gt;**](DetailedStatisticV2Model.md) | The detailed per-day, per-Config, per-Environment usage statistics. | [default to undefined]

## Example

```typescript
import { StatisticsV2Model } from './api';

const instance: StatisticsV2Model = {
    hasConnectedApplication,
    millionRequestLimitPerMonth,
    networkTrafficGigaByteLimitPerMonth,
    organizationStatistics,
    productStatistics,
    detailedStatistics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
