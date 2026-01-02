export function generateSpacingAddonUtilities(prefix: string, spacing: Record<string | number, string>): string {
  let css = '';
  
  // Negative margin utilities
  Object.entries(spacing).forEach(([key, value]) => {
    if (key !== '0') { // Don't create negative of 0
      css += `
.${prefix}bahire-untu-${key} { margin-top: -${value}; }
.${prefix}bahire-niche-untu-${key} { margin-bottom: -${value}; }
.${prefix}bahire-bam-untu-${key} { margin-left: -${value}; }
.${prefix}bahire-dan-untu-${key} { margin-right: -${value}; }
      `;
    }
  });
  
  // Space between utilities
  css += `
.${prefix}space-between-x-0 > * + * { margin-left: 0; }
.${prefix}space-between-y-0 > * + * { margin-top: 0; }
  `;
  
  Object.entries(spacing).forEach(([key, value]) => {
    if (key !== '0') {
      css += `
.${prefix}space-between-x-${key} > * + * { margin-left: ${value}; }
.${prefix}space-between-y-${key} > * + * { margin-top: ${value}; }
      `;
    }
  });
  
  return css.trim();
}