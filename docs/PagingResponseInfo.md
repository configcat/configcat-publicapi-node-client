# PagingResponseInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentPage** | **number** |  | [default to undefined]
**totalPages** | **number** |  | [default to undefined]
**pageSize** | **number** |  | [default to undefined]
**totalCount** | **number** |  | [default to undefined]
**hasPrevious** | **boolean** |  | [readonly] [default to undefined]
**hasNext** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { PagingResponseInfo } from './api';

const instance: PagingResponseInfo = {
    currentPage,
    totalPages,
    pageSize,
    totalCount,
    hasPrevious,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
