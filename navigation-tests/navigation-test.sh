#!/bin/bash

TOTAL=2
PASSED=0
FAILED=0

if curl -f http://localhost:3000/; then
    PASSED=$((PASSED+1))
else
    FAILED=$((FAILED+1))
fi

if curl -f http://localhost:3000/products; then
    PASSED=$((PASSED+1))
else
    FAILED=$((FAILED+1))
fi

echo "NAV_TOTAL=$TOTAL" > navigation-result.txt
echo "NAV_PASSED=$PASSED" >> navigation-result.txt
echo "NAV_FAILED=$FAILED" >> navigation-result.txt
