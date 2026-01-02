import { generateLayoutUtilities } from '../src/utilities/layout';

describe('Layout Utilities', () => {
  test('should generate display utilities', () => {
    const css = generateLayoutUtilities('bl-');
    
    expect(css).toContain('.bl-dekha-none { display: none; }');
    expect(css).toContain('.bl-dekha-block { display: block; }');
    expect(css).toContain('.bl-dekha-flex { display: flex; }');
    expect(css).toContain('.bl-dekha-grid { display: grid; }');
  });

  test('should generate flex utilities', () => {
    const css = generateLayoutUtilities('bl-');
    
    expect(css).toContain('.bl-flex { display: flex; }');
    expect(css).toContain('.bl-flex-col { flex-direction: column; }');
    expect(css).toContain('.bl-justify-majhe { justify-content: center; }');
    expect(css).toContain('.bl-justify-shesh { justify-content: flex-end; }');
    expect(css).toContain('.bl-justify-shuru { justify-content: flex-start; }');
    expect(css).toContain('.bl-items-majhe { align-items: center; }');
    expect(css).toContain('.bl-items-shesh { align-items: flex-end; }');
  });

  test('should generate grid utilities', () => {
    const css = generateLayoutUtilities('bl-');
    
    expect(css).toContain('.bl-grid { display: grid; }');
    expect(css).toContain('.bl-grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }');
    expect(css).toContain('.bl-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }');
    expect(css).toContain('.bl-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }');
    expect(css).toContain('.bl-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }');
    expect(css).toContain('.bl-grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }');
  });

  test('should generate position utilities', () => {
    const css = generateLayoutUtilities('bl-');
    
    expect(css).toContain('.bl-relative { position: relative; }');
    expect(css).toContain('.bl-absolute { position: absolute; }');
    expect(css).toContain('.bl-fixed { position: fixed; }');
  });

  test('should generate width and height utilities', () => {
    const css = generateLayoutUtilities('bl-');
    
    expect(css).toContain('.bl-poth-0 { width: 0; }');
    expect(css).toContain('.bl-poth-full { width: 100%; }');
    expect(css).toContain('.bl-uchchai-0 { height: 0; }');
    expect(css).toContain('.bl-uchchai-full { height: 100%; }');
  });
});