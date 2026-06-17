#!/bin/bash

TOTAL=1
PASSED=0
FAILED=0

if curl -f http://localhost:3000/products; then
    PASSED=1
else
    FAILED=1
fi

echo "PRODUCT_TOTAL=$TOTAL" > product-result.txt
echo "PRODUCT_PASSED=$PASSED" >> product-result.txt
echo "PRODUCT_FAILED=$FAILED" >> product-result.txt
