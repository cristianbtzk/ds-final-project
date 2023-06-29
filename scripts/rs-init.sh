#!/bin/bash

mongosh <<EOF
var config = {
    "_id": "dbrs",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "food-order-mongo1:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "food-order-mongo2:27017",
            "priority": 1
        },
        {
            "_id": 3,
            "host": "food-order-mongo3:27017",
            "priority": 1
        }
    ]
};
rs.reconfig(config, { force: true });
rs.status()
EOF


