@echo off
setlocal enabledelayedexpansion

REM Get short commit SHA
for /f "delims=" %%i in ('git rev-parse --short HEAD 2^>nul') do set SHORT_SHA=%%i
if "!SHORT_SHA!"=="" set SHORT_SHA=local

REM Get current date and time
for /f %%a in ('powershell -Command "Get-Date -Format yyyy-MM-dd"') do set DATE=%%a
for /f %%a in ('powershell -Command "Get-Date -Format HH:mm"') do set TIME=%%a

REM Check if .env.production exists
if exist .env.production (
    REM Use PowerShell to filter and rewrite the file
    powershell -Command "$content = Get-Content .env.production | Where-Object { $_ -notlike 'PUBLIC_BUILD_VERSION=*' }; $content += 'PUBLIC_BUILD_VERSION=%DATE% %TIME%EDT-!SHORT_SHA!'; Set-Content .env.production $content"
) else (
    REM Create new .env.production file
    (
        echo PUBLIC_BUILD_VERSION=%DATE% %TIME%EDT-!SHORT_SHA!
        echo TZ=America/New_York
    ) > .env.production
)

echo Set PUBLIC_BUILD_VERSION=%DATE% %TIME%-!SHORT_SHA! (America/New_York timezone)

endlocal
