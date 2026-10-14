#!/usr/bin/env node
/**
 * Pre-launch check: fail on confirm-placeholders. Empty HIDE fields are skipped.
 * Empty halal.certifier is a soft warning, not a failure.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.cwd();
const dataPath = join(root, 'src/data/catering.json');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

const hide = new Set(Array.isArray(data.hide) ? data.hide : []);
const bad = [];
const warnings = [];

function isHidden(path) {
  return hide.has(path) || [...hide].some((h) => path === h || path.endsWith(`.${h}`));
}

function isPlaceholder(value) {
  return /\[CONFIRM\]|\bCONFIRM\b/.test(value);
}

function walk(value, path) {
  if (value === null || value === undefined) return;
  if (typeof value === 'string') {
    const hidden = isHidden(path);
    if (isPlaceholder(value)) {
      bad.push(`${path}: ${value}`);
      return;
    }
    if (value.trim() === '') {
      if (path === 'halal.certifier' || hidden) {
        warnings.push(`${path}: (empty, HIDE)`);
        return;
      }
      bad.push(`${path}: (empty string)`);
    }
    return;
  }
  if (typeof value === 'number' || typeof value === 'boolean') return;
  if (Array.isArray(value)) {
    if (path === 'unconfirmed' || path === 'hide') return;
    value.forEach((item, i) => walk(item, `${path}[${i}]`));
    return;
  }
  if (typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if (key === 'unconfirmed' || key === 'hide') continue;
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
      if (line.includes('[CONFIRM]') || /\bCONFIRM —/.test(line)) {
        hits.push(`${full.replace(`${root}/`, '')}:${i + 1}: ${line.trim()}`);
      }
    });
  }
}

const fileHits = [];
walkFiles(join(root, 'src'), fileHits);
walkFiles(join(root, 'scripts'), fileHits);

const unconfirmed = Array.isArray(data.unconfirmed) ? data.unconfirmed : [];
console.log('Unconfirmed catering fields:');
if (unconfirmed.length === 0) {
  console.log('  (none listed)');
} else {
  for (const field of unconfirmed) console.log(`  - ${field}`);
}

if (warnings.length) {
  console.log('\nSoft warnings (HIDE / empty certifier — not a failure):');
  for (const item of warnings) console.log(`  - ${item}`);
}

if (bad.length || fileHits.length) {
  console.error('\nCatering check failed. Placeholder values:');
  for (const item of bad) console.error(`  - ${item}`);
  for (const item of fileHits) console.error(`  - ${item}`);
  process.exit(1);
}

console.log('\nCatering check passed. No confirm-placeholders in published data.');
