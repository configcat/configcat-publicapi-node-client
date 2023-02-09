1. Regenerate public api
Linux:
```docker run --rm -v ${PWD}/projects/configcat-publicapi-node-client/src:/local openapitools/openapi-generator-cli:v6.2.1 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-node -o /local```
Windows: 
```docker run --rm -v %CD%/projects/configcat-publicapi-node-client/src:/local openapitools/openapi-generator-cli:v6.2.1 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-node -o /local```
