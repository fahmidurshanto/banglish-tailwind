import { BanglishBuildSystem } from '../src/core/build-system';
import { BanglishConfig } from '../src/core/types';

// Mock file system operations for testing
jest.mock('fs', () => ({
  existsSync: jest.fn(() => true),
  mkdirSync: jest.fn(),
  writeFileSync: jest.fn(),
  readFileSync: jest.fn(),
}));

describe('BanglishBuildSystem', () => {
  let config: BanglishConfig;
  let buildSystem: BanglishBuildSystem;

  beforeEach(() => {
    config = {
      theme: {
        colors: {
          lal: '#ef4444',
          sobuj: '#10b981',
        },
        spacing: {
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
        },
        screens: {
          choto: '640px',
        },
        fontSize: {
          choto: '0.875rem',
        },
      },
      prefix: 'bl-',
      mode: 'jit',
      corePlugins: {
        preflight: true,
        container: true,
      },
    };

    buildSystem = new BanglishBuildSystem(config);
  });

  test('should initialize correctly', () => {
    expect(buildSystem).toBeInstanceOf(BanglishBuildSystem);
  });

  test('should build CSS without throwing errors', async () => {
    // Mock console.log to avoid output during tests
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await expect(buildSystem.build('test-dist')).resolves.not.toThrow();

    expect(consoleSpy).toHaveBeenCalledWith('✅ Generated: dist/banglish.css');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Generated: dist/banglish.min.css');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Build completed successfully!');

    consoleSpy.mockRestore();
  });
});