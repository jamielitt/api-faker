## Requests
# Example GET requests
`curl http://localhost:3000/hello`
`curl http://localhost:3000/test`

## Example PUT requests (to configure)
`curl -X PUT http://localhost:3000/frefre -d`
`curl -X PUT -H 'Content-Type: application/json' http://localhost:3000/frefre -d '{"test": 1}'`
`curl -X PUT -H 'Content-Type: application/json' http://localhost:3000/frefre3 -d '{"test3": 3}'`

## Example of getting back what you just put in
`curl http://localhost:3000/frefre`

## Running in Docker

Ensure that Docker is installed and configured correctly.

`docker compose up --build` will create the initial build
`docker compose up` on subsequent builds to run

## Publishing to Azure Container Registry

There is already an ACR set up, here's how to publish to it. Ensure that Azure CLI Tools have been installed first

### Log into registry

`az login`
`az acr login --name apifakeracr`

### Push to registry

`docker push apifakeracr.azurecr.io/samples/hello-world`