import type { BuiltinColorPalette, IThemeColorScheme } from '@visactor/vchart';

const defaultColor = [
  // 定义分类主题色
  '#1443FF',
  '#33CCB2',
  '#FFD500',
  '#FFAA33',
  '#FF7733',
  '#F65656',
  '#E93DBD',
  '#9933FF',
  '#5533FF',
  '#A3ABC2'
];

const BLACK_COLORS = {
  100: '#000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0'
};

const WHITE_COLORS = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F'
};

const blackColorPalettes = {};
for (const key in BLACK_COLORS) {
  blackColorPalettes[`blackColors${key}`] = BLACK_COLORS[key];
}

const whiteColorPalettes = {};
for (const key in WHITE_COLORS) {
  whiteColorPalettes[`whiteColors${key}`] = WHITE_COLORS[key];
}

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme: defaultColor,
    palette: {
      bandColor: defaultColor[0],

      /** 背景色 */
      backgroundColor: 'transparent',

      /** 轴线颜色 */
      axisDomainColor: '#DCDEE1',
      /** 轴标签字色 */
      axisLabelFontColor: '#909199',
      /** 轴网格线颜色 */
      axisGridColor: '#E1E2E5',

      ...blackColorPalettes,
      ...whiteColorPalettes
    } as Partial<BuiltinColorPalette>
  }
};
