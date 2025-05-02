#!/bin/bash

# Get short commit SHA
SHORT_SHA=$(echo $CF_PAGES_COMMIT_SHA | cut -c1-7)

# Get current date and time (in local time)
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)

# Check if .env.production exists
if [ -f .env.production ]; then
    # If it exists, read it and keep any lines that don't start with PUBLIC_BUILD_VERSION
    grep -v "^PUBLIC_BUILD_VERSION=" .env.production > .env.production.tmp
    
    # Add the new PUBLIC_BUILD_VERSION
    echo "PUBLIC_BUILD_VERSION=$DATE ${TIME}UTC-$SHORT_SHA" >> .env.production.tmp
    
    # Replace the original file
    mv .env.production.tmp .env.production
else
    # If it doesn't exist, create it with default values
    echo "PUBLIC_BUILD_VERSION=$DATE ${TIME}UTC-$SHORT_SHA" > .env.production
    echo "TZ=America/New_York" >> .env.production
fi

echo "Set PUBLIC_BUILD_VERSION=$DATE $TIME-$SHORT_SHA"