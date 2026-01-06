#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import * as path from 'path';

// Get short commit SHA
let shortSha = 'local';
try {
  shortSha = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
} catch (e) {
  console.log('Git not available, using placeholder SHA');
}

// Get current date and time in America/New_York timezone
const now = new Date();
const options = {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
};

const formatter = new Intl.DateTimeFormat('en-US', options);
const parts = formatter.formatToParts(now);

const year = parts.find(p => p.type === 'year').value;
const month = parts.find(p => p.type === 'month').value;
const day = parts.find(p => p.type === 'day').value;
const hour = parts.find(p => p.type === 'hour').value;
const minute = parts.find(p => p.type === 'minute').value;

const dateStr = `${year}-${month}-${day}`;
const timeStr = `${hour}:${minute}`;

// Check if .env.production exists
const envPath = '.env.production';

if (existsSync(envPath)) {
  // Read existing file and filter out PUBLIC_BUILD_VERSION lines
  const content = readFileSync(envPath, 'utf-8');
  const lines = content.split('\n');
  const filteredLines = lines.filter(line => !line.startsWith('PUBLIC_BUILD_VERSION='));

  // Add the new PUBLIC_BUILD_VERSION
  filteredLines.push(`PUBLIC_BUILD_VERSION=${dateStr} ${timeStr}EDT-${shortSha}`);

  // Write back to file
  writeFileSync(envPath, filteredLines.join('\n') + '\n');
} else {
  // Create new .env.production file
  writeFileSync(envPath, `PUBLIC_BUILD_VERSION=${dateStr} ${timeStr}EDT-${shortSha}\nTZ=America/New_York\n`);
}

console.log(`Set PUBLIC_BUILD_VERSION=${dateStr} ${timeStr}-${shortSha} (America/New_York timezone)`);
