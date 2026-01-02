export interface BanglishConfig {
  theme: {
    colors: Record<string, string | Record<number, string>>;
    spacing: Record<string | number, string>;
    screens: Record<string, string>;
    fontSize: Record<string, string | [string, { lineHeight: string }]>;
  };
  prefix?: string;
  mode: 'jit' | 'aot';
  corePlugins: Record<string, boolean>;
}