#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { BanglishGenerator } = require('../lib/core/generator');

function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (command === 'build') {
        console.log('🚀 Building Banglish Tailwind...');
        // Import and run the build system
        const { BanglishBuildSystem } = require('../lib/core/build-system');
        const config = require('../banglish.config');
        const buildSystem = new BanglishBuildSystem(config);
        buildSystem.build();
    } else if (command === 'init') {
        console.log('📁 Initializing Banglish config...');
        // Create a default configuration file
        const configContent = `// Banglish Tailwind Configuration
module.exports = {
  theme: {
    colors: {
      lal: '#ef4444',        // Red
      sobuj: '#10b981',      // Green
      nil: '#3b82f6',        // Blue
      holud: '#f59e0b',      // Yellow
      beguni: '#8b5cf6',     // Purple
      shada: '#ffffff',      // White
      kalo: '#000000',       // Black
      dhusor: {              // Gray scale
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      }
    },
    
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem'
    },
    
    screens: {
      choto: '640px',      // Small
      majhari: '768px',    // Medium
      boro: '1024px',      // Large
      'khub-boro': '1280px' // Extra large
    },
    
    fontSize: {
      choto: '0.875rem',
      majhari: '1rem',
      boro: '1.125rem',
      'khub-boro': '1.25rem',
      bishal: '1.5rem'
    }
  },

  prefix: 'bl-',
  mode: 'jit',
  corePlugins: {
    preflight: true,
    container: true
  }
};
`;

        fs.writeFileSync('banglish.config.js', configContent);
        console.log('✅ Configuration file created: banglish.config.js');
    } else if (command === 'version') {
        const packageJson = require('../package.json');
        console.log('Banglish Tailwind Framework v' + packageJson.version);
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