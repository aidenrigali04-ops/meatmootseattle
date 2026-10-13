#!/usr/bin/env node
/**
 * Pre-launch check: fail the build if catering data still contains the
 * confirm-placeholder token or an empty string. Prints omitted fields.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.cwd();
const dataPath = join(root, 'src/data/catering.json');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

const bad = [];

function walk(value, path) {
  if (value === null || value === undefined) return;
  if (typeof value === 'string') {
    if (value.trim() === '' || value.includes('[CONFIRM]')) {
      bad.push(`${path}: ${value.trim() === '' ? '(empty string)' : value}`);
    }
    return;
  }
  if (typeof value === 'number' || typeof value === 'boolean') return;
  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(item, `${path}[${i}]`));
    return;
  }
  if (typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if (key === 'unconfirmed') continue;
      walk(child, path ? `${path}.${key}` : key);
    }
  }
}

walk(data, '');

const scanExt = new Set(['.ts', '.astro', '.js', '.mjs', '.json', '.css', '.html']);
const skipDir = new Set(['node_modules', 'dist', '.git', '.astro']);

function walkFiles(dir, hits) {
  for (const name of readdirSync(dir)) {
    if (skipDir.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      walkFiles(full, hits);
      continue;
    }
    if (!scanExt.has(extname(name))) continue;
    if (name === 'check-catering.mjs') continue;
    const text = readFileSync(full, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('[CONFIRM]')) {
        hits.push(`${full.replace(`${root}/`, '')}:${i + 1}: ${line.trim()}`);
      }
    });
  }
}

const fileHits = [];
walkFiles(join(root, 'src'), fileHits);
walkFiles(join(root, 'scripts'), fileHits);

const unconfirmed = Array.isArray(data.unconfirmed) ? data.unconfirmed : [];
console.log('Unconfirmed catering fields (omitted from public copy):');
if (unconfirmed.length === 0) {
  console.log('  (none listed)');
} else {
  for (const field of unconfirmed) console.log(`  - ${field}`);
}

if (bad.length || fileHits.length) {
  console.error('\nCatering check failed. Placeholder or empty values:');
  for (const item of bad) console.error(`  - ${item}`);
  for (const item of fileHits) console.error(`  - ${item}`);
  process.exit(1);
}

console.log('\nCatering check passed. No [CONFIRM] or empty strings in published data.');
