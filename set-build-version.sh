#!/bin/bash

# Trim the commit SHA to 7 characters
SHORT_SHA=$(echo $CF_PAGES_COMMIT_SHA | cut -c1-7)

# Get today's date
DATE=$(date +%Y-%m-%d)

# Write the value to .env.production
echo "PUBLIC_BUILD_VERSION=$DATE-$SHORT_SHA" > .env.production

echo "Set PUBLIC_BUILD_VERSION=$DATE-$SHORT_SHA"