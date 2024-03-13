1. Regenerate public api
Linux:
```docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v7.3.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-axios -o /local --additional-properties=withSeparateModelsAndApi=true --additional-properties=apiPackage=api --additional-properties=modelPackage=model```
Windows: 
```docker run --rm -v %CD%:/local openapitools/openapi-generator-cli:v7.3.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-axios -o /local --additional-properties=withSeparateModelsAndApi=true --additional-properties=apiPackage=api --additional-properties=modelPackage=model```
