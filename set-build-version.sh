#!/bin/bash

# Get short commit SHA
SHORT_SHA=$(echo $CF_PAGES_COMMIT_SHA | cut -c1-7)

# Get current date and time (in local time)
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)

# Compose version
echo "PUBLIC_BUILD_VERSION=$DATE $TIME-$SHORT_SHA" > .env.production

echo "Set PUBLIC_BUILD_VERSION=$DATE $TIME-$SHORT_SHA"