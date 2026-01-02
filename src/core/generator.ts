import { BanglishConfig } from './types';

export class BanglishGenerator {
  private config: BanglishConfig;
  private prefix: string;
  
  constructor(config: BanglishConfig) {
    this.config = config;
    this.prefix = config.prefix || 'bl-';
  }
  
  // Generate spacing utilities (Margin/Padding)
  generateSpacingUtilities(): string {
    let css = '';
    const { spacing } = this.config.theme;
    
    // Padding utilities (bhitor = inside)
    Object.entries(spacing).forEach(([key, value]) => {
      css += `
.${this.prefix}bhitor-${key} { padding: ${value}; }
.${this.prefix}bhitor-x-${key} { padding-left: ${value}; padding-right: ${value}; }
.${this.prefix}bhitor-y-${key} { padding-top: ${value}; padding-bottom: ${value}; }
.${this.prefix}bhitor-ustu-${key} { padding-top: ${value}; }
.${this.prefix}bhitor-niche-${key} { padding-bottom: ${value}; }
.${this.prefix}bhitor-bam-${key} { padding-left: ${value}; }
.${this.prefix}bhitor-dan-${key} { padding-right: ${value}; }
      `;
    });
    
    // Margin utilities (bahire = outside)
    Object.entries(spacing).forEach(([key, value]) => {
      css += `
.${this.prefix}bahire-${key} { margin: ${value}; }
.${this.prefix}bahire-ustu-${key} { margin-top: ${value}; }
.${this.prefix}bahire-niche-${key} { margin-bottom: ${value}; }
.${this.prefix}bahire-bam-${key} { margin-left: ${value}; }
.${this.prefix}bahire-dan-${key} { margin-right: ${value}; }
      `;
    });
    
    return css;
  }
  
  // Generate color utilities
  generateColorUtilities(): string {
    let css = '';
    const { colors } = this.config.theme;
    
    const flattenColors = (obj: any, prefix = ''): Record<string, string> => {
      return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}-${key}` : key;
        if (typeof obj[key] === 'string') {
          acc[newKey] = obj[key];
        } else if (typeof obj[key] === 'object') {
          Object.assign(acc, flattenColors(obj[key], newKey));
        }
        return acc;
      }, {} as Record<string, string>);
    };
    
    const flatColors = flattenColors(colors);
    
    Object.entries(flatColors).forEach(([name, value]) => {
      css += `
.${this.prefix}pichhon-${name} { background-color: ${value}; }
.${this.prefix}likha-${name} { color: ${value}; }
.${this.prefix}simana-${name} { border-color: ${value}; }
      `;
    });
    
    return css;
  }
  
  // Generate all utilities
  generateAll(): string {
    return `
/* Banglish Tailwind Framework */
/* Generated automatically - Do not edit directly */

${this.generateSpacingUtilities()}
${this.generateColorUtilities()}
    `.trim();
  }
}