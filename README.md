## Requests
# Example GET requests
curl http://localhost:3000/hello
curl http://localhost:3000/test

## Example PUT requests (to configure)
curl -X PUT http://localhost:3000/frefre -d
curl -X PUT -H 'Content-Type: application/json' http://localhost:3000/frefre -d '{"test": 1}'
curl -X PUT -H 'Content-Type: application/json' http://localhost:3000/frefre3 -d '{"test3": 3}'

## Example of getting back what you just put in
curl http://localhost:3000/frefre

## Running in Docker

Ensure that Docker is installed and configured correctly.

`docker compose up --build` will create the initial build
`docker compose up` on subsequent builds to run