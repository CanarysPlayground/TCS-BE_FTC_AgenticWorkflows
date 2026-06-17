#!/bin/bash

TOTAL=1
PASSED=0
FAILED=0

echo "Running Product API Test..."

if curl -f http://localhost:3000/products; then
    PASSED=1
    echo "Product Test Passed"
else
    FAILED=1
    echo "Product Test Failed"
fi

echo "$TOTAL,$PASSED,$FAILED" > product-result.txt
