#!/bin/bash

TOTAL=2
PASSED=0
FAILED=0

echo "Running Navigation Test..."

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

echo "Navigation Test Completed"

echo "$TOTAL,$PASSED,$FAILED" > navigation-result.txt
