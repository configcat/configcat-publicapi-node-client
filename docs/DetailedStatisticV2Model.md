# DetailedStatisticV2Model

Represents the detailed request and traffic usage for a single Config/Environment entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date for which the usage was recorded. | [default to undefined]
**productId** | **string** | The identifier of the Product associated with the usage. | [default to undefined]
**productName** | **string** | The name of the Product associated with the usage. | [default to undefined]
**configId** | **string** | The identifier of the Config associated with the usage. | [default to undefined]
**configName** | **string** | The name of the Config associated with the usage. | [default to undefined]
**environmentId** | **string** | The identifier of the Environment associated with the usage, if available. | [default to undefined]
**environmentName** | **string** | The name of the Environment associated with the usage. | [default to undefined]
**sdk** | **string** | The SDK type that generated the usage. | [default to undefined]
**sdkKey** | **string** | The SDK key used for the request. | [default to undefined]
**requestCount** | **number** | The number of requests recorded for the entry. | [default to undefined]
**responseKiloBytes** | **number** | The total response payload size in kilobytes for the entry. | [default to undefined]

## Example

```typescript
import { DetailedStatisticV2Model } from './api';

const instance: DetailedStatisticV2Model = {
    date,
    productId,
    productName,
    configId,
    configName,
    environmentId,
    environmentName,
    sdk,
    sdkKey,
    requestCount,
    responseKiloBytes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
