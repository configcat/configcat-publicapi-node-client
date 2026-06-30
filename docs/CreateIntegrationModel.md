# CreateIntegrationModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrationType** | [**IntegrationType**](IntegrationType.md) |  | [default to undefined]
**name** | **string** | Name of the Integration. | [default to undefined]
**parameters** | **{ [key: string]: string; }** | Parameters of the Integration. | [default to undefined]
**environmentIds** | **Array&lt;string&gt;** | List of Environment IDs that are connected with this Integration. If the list is empty, all the Environments are connected. | [default to undefined]
**configIds** | **Array&lt;string&gt;** | List of Config IDs that are connected with this Integration. If the list is empty, all the Configs are connected. | [default to undefined]

## Example

```typescript
import { CreateIntegrationModel } from './api';

const instance: CreateIntegrationModel = {
    integrationType,
    name,
    parameters,
    environmentIds,
    configIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
