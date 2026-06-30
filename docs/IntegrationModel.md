# IntegrationModel

Details of the Integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ProductModel**](ProductModel.md) |  | [default to undefined]
**integrationId** | **string** | Identifier of the Integration. | [default to undefined]
**name** | **string** | Name of the Integration. | [default to undefined]
**integrationType** | [**IntegrationType**](IntegrationType.md) |  | [default to undefined]
**parameters** | **{ [key: string]: string; }** | Parameters of the Integration. | [default to undefined]
**environmentIds** | **Array&lt;string&gt;** | List of Environment IDs that are connected with this Integration. If the list is empty, all of the Environments are connected. | [default to undefined]
**configIds** | **Array&lt;string&gt;** | List of Config IDs that are connected with this Integration. If the list is empty, all of the Configs are connected. | [default to undefined]

## Example

```typescript
import { IntegrationModel } from './api';

const instance: IntegrationModel = {
    product,
    integrationId,
    name,
    integrationType,
    parameters,
    environmentIds,
    configIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
