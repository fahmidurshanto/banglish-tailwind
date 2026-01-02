// Simple CSS processing functions for the Banglish Tailwind build system

export class CSSProcessor {
  // Add vendor prefixes manually (simplified approach)
  static addVendorPrefixes(css: string): string {
    // This is a simplified approach - in a real system we'd use autoprefixer
    return css
      .replace(/(display:\s*flex;)/g, 'display: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;')
      .replace(/(box-shadow:\s*[^;]+;)/g, '$1');
  }
  
  // Simple minification
  static minify(css: string): string {
    return css
      .replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single
      .trim();
  }
}