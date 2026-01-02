import { CSSProcessor } from '../src/processors/postcss-processor';

describe('CSSProcessor', () => {
  test('should add vendor prefixes correctly', () => {
    const css = '.test { display: flex; }';
    const processed = CSSProcessor.addVendorPrefixes(css);
    
    expect(processed).toContain('display: flex;');
    expect(processed).toContain('display: -webkit-box;');
    expect(processed).toContain('display: -ms-flexbox;');
  });

  test('should minify CSS correctly', () => {
    const css = `/* Comment */ .test { 
      display: flex; 
      color: red; 
    }`;
    const minified = CSSProcessor.minify(css);
    
    expect(minified).not.toContain('/* Comment */');
    // Check that multiple spaces are reduced to single spaces
    expect(minified).not.toMatch(/\s{2,}/); // Should not have 2 or more consecutive spaces
    expect(minified).toContain('.test { display: flex; color: red; }');
  });

  test('should handle complex CSS', () => {
    const css = `
      /* Test comment */
      .container {
        display: flex;
        padding: 1rem;
      }
      
      .item {
        color: blue;
        margin: 0.5rem;
      }
    `;
    const processed = CSSProcessor.addVendorPrefixes(css);
    const minified = CSSProcessor.minify(processed);
    
    expect(minified).not.toContain('/* Test comment */');
    expect(minified).toContain('.container');
    expect(minified).toContain('display: flex;');
    expect(minified).toContain('padding: 1rem;');
    expect(minified).toContain('.item');
    expect(minified).toContain('color: blue;');
    expect(minified).toContain('margin: 0.5rem;');
  });
});