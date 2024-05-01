#!/bin/sh

docker compose build --no-cache
docker compose up --detach
docker compose logs -f
