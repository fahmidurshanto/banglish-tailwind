// Simple CSS processing functions for the Banglish Tailwind build system

export class CSSProcessor {
  // Add vendor prefixes manually (simplified approach)
  static addVendorPrefixes(css: string): string {
    // This is a simplified approach - in a real system we'd use autoprefixer
    return css
      .replace(/(display:\s*flex;)/g, '$1\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;')
      .replace(/(box-shadow:\s*[^;]+;)/g, '$1\n  -webkit-box-shadow: $1;');
  }
  
  // Simple minification
  static minify(css: string): string {
    return css
      .replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single
      .trim();
  }
}