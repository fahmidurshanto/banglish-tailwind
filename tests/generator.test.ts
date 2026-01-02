import { BanglishGenerator } from '../src/core/generator';
import { BanglishConfig } from '../src/core/types';

describe('BanglishGenerator', () => {
  let config: BanglishConfig;
  let generator: BanglishGenerator;

  beforeEach(() => {
    config = {
      theme: {
        colors: {
          lal: '#ef4444',
          sobuj: '#10b981',
          dhusor: {
            50: '#f9fafb',
            100: '#f3f4f6',
          },
        },
        spacing: {
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
        },
        screens: {
          choto: '640px',
          majhari: '768px',
        },
        fontSize: {
          choto: '0.875rem',
          majhari: '1rem',
        },
      },
      prefix: 'bl-',
      mode: 'jit',
      corePlugins: {
        preflight: true,
        container: true,
      },
    };

    generator = new BanglishGenerator(config);
  });

  test('should generate spacing utilities', () => {
    const css = generator.generateSpacingUtilities();
    
    expect(css).toContain('.bl-bhitor-1 { padding: 0.25rem; }');
    expect(css).toContain('.bl-bhitor-2 { padding: 0.5rem; }');
    expect(css).toContain('.bl-bahire-1 { margin: 0.25rem; }');
    expect(css).toContain('.bl-bahire-2 { margin: 0.5rem; }');
  });

  test('should generate color utilities', () => {
    const css = generator.generateColorUtilities();
    
    expect(css).toContain('.bl-pichhon-lal { background-color: #ef4444; }');
    expect(css).toContain('.bl-likha-sobuj { color: #10b981; }');
    expect(css).toContain('.bl-simana-dhusor-50 { border-color: #f9fafb; }');
  });

  test('should generate all utilities', () => {
    const css = generator.generateAll();
    
    expect(css).toContain('.bl-bhitor-1 { padding: 0.25rem; }');
    expect(css).toContain('.bl-pichhon-lal { background-color: #ef4444; }');
  });
});