#!/bin/bash

echo "Running Navigation Test..."

curl -f http://localhost:3000/

curl -f http://localhost:3000/products

echo "Navigation Test Passed"
