export function generateResponsiveUtilities(
  css: string, 
  screens: Record<string, string>, 
  prefix: string
): string {
  let responsiveCSS = '';
  
  Object.entries(screens).forEach(([breakpoint, size]) => {
    responsiveCSS += `@media (min-width: ${size}) {\n`;
    
    // Convert base classes to responsive variants
    const breakpointClasses = css
      .replace(new RegExp(`\\.${prefix}`, 'g'), `.${breakpoint}\\:${prefix}`)
      .replace(/\n/g, '\n  ');
    
    responsiveCSS += `  ${breakpointClasses}\n`;
    responsiveCSS += '}\n\n';
  });
  
  return responsiveCSS;
}