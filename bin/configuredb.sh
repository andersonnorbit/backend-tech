#!/bin/bash

export PGPASSWORD='node_password'

database="transactionsdb"

echo "Configuring database: $database"

dropdb -U node_user transactionsdb
createdb -U node_user transactionsdb

psql -U node_user transactionsdb < ./bin/sql/transactions.sql

echo "$database configured"
