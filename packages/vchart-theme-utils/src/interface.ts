import type { ProgressiveDataScheme, BuiltinColorPalette } from '@visactor/vchart';

export type DataSchemeTokenMap = ProgressiveDataScheme<Token>;

export type PaletteTokenMap = Record<keyof BuiltinColorPalette, Token>;

export type Token =
  | string
  | {
      light?: string;
      dark?: string;
    };
