#!/bin/sh

docker compose exec -it app npm run -- "$@"
if [ "$1" = 'user:changePassword' ] || [ "$1" = 'user:create' ]; then
    echo 'Admin Login URL: https://localhost:3000/admin'
fi
