#!/bin/bash

# Get short commit SHA
if [ -z "$CF_PAGES_COMMIT_SHA" ]; then
    # If CF_PAGES_COMMIT_SHA is not available, try to get it from git
    if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        SHORT_SHA=$(git rev-parse --short HEAD)
    else
        # Use a placeholder if git is not available
        SHORT_SHA="local"
    fi
else
    SHORT_SHA=$(echo $CF_PAGES_COMMIT_SHA | cut -c1-7)
fi

# Get current date and time in America/New_York timezone
DATE=$(TZ='America/New_York' date +%Y-%m-%d)
TIME=$(TZ='America/New_York' date +%H:%M)

# Check if .env.production exists
if [ -f .env.production ]; then
    # If it exists, read it and keep any lines that don't start with PUBLIC_BUILD_VERSION
    grep -v "^PUBLIC_BUILD_VERSION=" .env.production > .env.production.tmp
    
    # Add the new PUBLIC_BUILD_VERSION with EDT/EST timezone indicator
    echo "PUBLIC_BUILD_VERSION=$DATE ${TIME}EDT-$SHORT_SHA" >> .env.production.tmp
    
    # Replace the original file
    mv .env.production.tmp .env.production
else
    # If it doesn't exist, create it with default values
    echo "PUBLIC_BUILD_VERSION=$DATE ${TIME}EDT-$SHORT_SHA" > .env.production
    echo "TZ=America/New_York" >> .env.production
fi

echo "Set PUBLIC_BUILD_VERSION=$DATE $TIME-$SHORT_SHA (America/New_York timezone)"