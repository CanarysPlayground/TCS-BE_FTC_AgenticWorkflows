#!/bin/bash

TOTAL=1
PASSED=0
FAILED=0

echo "Running Smoke Test..."

if curl -f http://localhost:3000/; then
    PASSED=1
    echo "Smoke Test Passed"
else
    FAILED=1
    echo "Smoke Test Failed"
fi

echo "$TOTAL,$PASSED,$FAILED" > smoke-result.txt
