#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { BanglishGenerator } = require('./core/generator');

function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'build') {
    console.log('🚀 Building Banglish Tailwind...');
    // Build logic here
  } else if (command === 'init') {
    console.log('📁 Initializing Banglish config...');
    // Initialize config
  } else {
    console.log(`
Banglish Tailwind CLI

Commands:
  build     Generate CSS files
  init      Create configuration file
  version   Show version information
  help      Show this help message
    `);
  }
}

main();