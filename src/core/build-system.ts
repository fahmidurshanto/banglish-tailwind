import { BanglishGenerator } from './generator';
import { BanglishConfig } from './types';
import { CSSProcessor } from '../processors/postcss-processor';

export class BanglishBuildSystem {
  private generator: BanglishGenerator;
  private config: BanglishConfig;

  constructor(config: BanglishConfig) {
    this.config = config;
    this.generator = new BanglishGenerator(config);
  }

  async build(outputDir: string = 'dist'): Promise<void> {
    // Ensure output directory exists
    if (typeof require !== 'undefined') {
      const fs = require('fs');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
    }

    // Generate CSS
    let cssContent = this.generator.generateAll();

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

    // Process CSS (add vendor prefixes, etc.)
    const processedCSS = CSSProcessor.addVendorPrefixes(cssContent);

    // Write full CSS file
    if (typeof require !== 'undefined') {
      const fs = require('fs');
      fs.writeFileSync(`${outputDir}/banglish.css`, processedCSS);
      console.log('✅ Generated: dist/banglish.css');

      // Create minified version
      const minifiedCSS = CSSProcessor.minify(processedCSS);
      fs.writeFileSync(`${outputDir}/banglish.min.css`, minifiedCSS);
      console.log('✅ Generated: dist/banglish.min.css');

      // Create version info
      const packageJson = require('../../package.json');
      const versionInfo = {
        version: packageJson.version || '1.0.0',
        generated: new Date().toISOString(),
        classesCount: (processedCSS.match(/\.bl-/g) || []).length
      };

      fs.writeFileSync(
        `${outputDir}/version.json`,
        JSON.stringify(versionInfo, null, 2)
      );
      console.log('✅ Build completed successfully!');
    }
  }
}