#!/bin/sh

# Start the db
#docker compose up database --detach
#sleep 10

# [interactive] Populate the db
#docker compose run --entrypoint '/bin/bash npm run setup' app

# Start the project
docker compose up --detach --wait

docker compose logs -f
