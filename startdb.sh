#!/bin/bash

docker-compose up

sleep 5

docker exec food-order-mongo1 /scripts/rs-init.sh