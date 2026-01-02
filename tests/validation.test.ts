import fs from 'fs';
import path from 'path';

describe('Build Output Validation', () => {
  test('should generate expected CSS files', () => {
    expect(fs.existsSync('dist/banglish.css')).toBe(true);
    expect(fs.existsSync('dist/banglish.min.css')).toBe(true);
    expect(fs.existsSync('dist/version.json')).toBe(true);
  });

  test('should contain Banglish class names in generated CSS', () => {
    const cssContent = fs.readFileSync('dist/banglish.css', 'utf8');
    
    // Check for some expected Banglish class patterns
    expect(cssContent).toContain('.bl-bhitor-'); // padding classes
    expect(cssContent).toContain('.bl-bahire-'); // margin classes
    expect(cssContent).toContain('.bl-pichhon-'); // background color classes
    expect(cssContent).toContain('.bl-likha-'); // text color classes
    expect(cssContent).toContain('.bl-simana-'); // border color classes
  });

  test('should contain responsive classes', () => {
    const cssContent = fs.readFileSync('dist/banglish.css', 'utf8');
    
    // Check for responsive breakpoints
    expect(cssContent).toContain('@media (min-width: 640px)'); // choto
    expect(cssContent).toContain('@media (min-width: 768px)'); // majhari
    expect(cssContent).toContain('@media (min-width: 1024px)'); // boro
    expect(cssContent).toContain('@media (min-width: 1280px)'); // khub-boro
  });

  test('should have valid version info', () => {
    const versionInfo = JSON.parse(fs.readFileSync('dist/version.json', 'utf8'));
    
    expect(versionInfo.version).toBeDefined();
    expect(versionInfo.generated).toBeDefined();
    expect(versionInfo.classesCount).toBeDefined();
    expect(typeof versionInfo.classesCount).toBe('number');
    expect(versionInfo.classesCount).toBeGreaterThan(0);
  });

  test('should have smaller minified file', () => {
    const fullSize = fs.statSync('dist/banglish.css').size;
    const minSize = fs.statSync('dist/banglish.min.css').size;
    
    expect(minSize).toBeLessThan(fullSize);
  });
});