import type { BuiltinColorPalette, IThemeColorScheme } from '@visactor/vchart';

const defaultColor = [
  // 定义分类主题色
  '#3377FF',
  '#1FE7F9',
  '#53F3B3',
  '#FFCD50',
  '#ADB8D6',
  '#B46FF4',
  '#867AFF',
  '#FAA64D',
  '#F25E68'
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

const blackColorPalettes: Record<string, string> = {};
Object.entries(BLACK_COLORS).forEach(([key, value]) => {
  blackColorPalettes[`blackColors${key}`] = value;
});

const whiteColorPalettes: Record<string, string> = {};
Object.entries(WHITE_COLORS).forEach(([key, value]) => {
  whiteColorPalettes[`whiteColors${key}`] = value;
});

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
    } as unknown as BuiltinColorPalette
  }
};
