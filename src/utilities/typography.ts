export function generateTypographyUtilities(prefix: string, fontSize: Record<string, string | [string, { lineHeight: string }]>): string {
  let css = '';
  
  // Font size utilities
  Object.entries(fontSize).forEach(([name, size]) => {
    // Handle both string and tuple formats
    const fontSizeValue = typeof size === 'string' ? size : size[0];
    css += `
.${prefix}likha-${name} { font-size: ${fontSizeValue}; }
    `;
  });
  
  // Text alignment utilities
  css += `
.${prefix}likha-shuru { text-align: left; }
.${prefix}likha-majhe { text-align: center; }
.${prefix}likha-shesh { text-align: right; }
.${prefix}likha-justified { text-align: justify; }
  `;
  
  // Font weight utilities
  css += `
.${prefix}gahna-normal { font-weight: 400; }
.${prefix}gahna-bold { font-weight: 700; }
.${prefix}gahna-bolder { font-weight: 900; }
  `;
  
  // Line height utilities
  css += `
.${prefix}line-height-normal { line-height: 1.5; }
.${prefix}line-height-compact { line-height: 1.25; }
.${prefix}line-height-loose { line-height: 1.75; }
  `;
  
  // Letter spacing utilities
  css += `
.${prefix}space-between-compact { letter-spacing: -0.05em; }
.${prefix}space-between-normal { letter-spacing: 0; }
.${prefix}space-between-loose { letter-spacing: 0.05em; }
  `;
  
  return css.trim();
}