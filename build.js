const fs = require('fs');
const path = require('path');
const { BanglishGenerator } = require('./lib/core/generator');
const config = require('./banglish.config');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Initialize generator
const generator = new BanglishGenerator(config);

// Generate CSS
let cssContent = generator.generateAll();

// Add preflight (CSS reset)
const preflight = `
/*! Banglish Tailwind Preflight */
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
}
`;

cssContent = preflight + '\n\n' + cssContent;

// Write to files
fs.writeFileSync('dist/banglish.css', cssContent);
console.log('✅ Generated: dist/banglish.css');

// Create minified version
const minified = cssContent
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .trim();

fs.writeFileSync('dist/banglish.min.css', minified);
console.log('✅ Generated: dist/banglish.min.css');

// Create version info
const packageJson = require('./package.json');
const versionInfo = {
  version: packageJson.version || '1.0.0',
  generated: new Date().toISOString(),
  classesCount: (cssContent.match(/\.bl-/g) || []).length
};

fs.writeFileSync(
  'dist/version.json', 
  JSON.stringify(versionInfo, null, 2)
);
console.log('✅ Build completed successfully!');