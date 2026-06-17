#!/bin/bash

TOTAL=1
PASSED=0
FAILED=0

if curl -f http://localhost:3000/; then
    PASSED=1
else
    FAILED=1
fi

echo "SMOKE_TOTAL=$TOTAL" > smoke-result.txt
echo "SMOKE_PASSED=$PASSED" >> smoke-result.txt
echo "SMOKE_FAILED=$FAILED" >> smoke-result.txt
