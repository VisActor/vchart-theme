import type { ProgressiveDataScheme, BuiltinColorPalette, ThemeManager } from '@visactor/vchart';

export type DataSchemeTokenMap = ProgressiveDataScheme<Token>;

export type PaletteTokenMap = Record<keyof BuiltinColorPalette, Token>;

export type ThemeMode = 'light' | 'dark';

export type Token = string | Partial<Record<ThemeMode, string>>;

export interface IInitThemeOption {
  /** 初始亮暗色模式 */
  defaultMode?: ThemeMode;
  /** 是否监听亮暗色模式自动更改图表主题 */
  isWatchingMode?: boolean;
  /** 指定 ThemeManager，一般不用指定，如果遇到多版本 vchart 共存时需要指定 */
  themeManager?: typeof ThemeManager;
}
