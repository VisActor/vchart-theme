import type { BuiltinColorPalette, IThemeColorScheme } from '@visactor/vchart';

export const colorList = [
  // 定义分类主题色
  '#3377FF',
  '#1FE7F9',
  '#53F3B3',
  '#FFCD50',
  '#ADB8D6',
  '#867AFF',
  '#FAA64D',
  '#FF8082',
  '#B46FF4'
];

export const barColorList = [
  // 定义分类主题色
  '#3377FF',
  '#1FE7F9',
  '#FFCD50',
  '#53F3B3',
  '#ADB8D6',
  '#867AFF',
  '#FAA64D',
  '#FF8082',
  '#B46FF4'
];

export const nestColorList = [
  ['#3377FF', '#5587FD', '#76A4FF', '#A0C0FF', '#BFD4FF', '#E5EEFF'],
  ['#1FE7F9', '#71F1FF', '#A2F5FF', '#BCF8FF', '#D2FAFF', '#E5FDFF'],
  ['#53F3B3', '#6BFFC4', '#9FFFD9', '#C1FFE6', '#DCFFF1', '#EBFFF7'],
  ['#FFCD50', '#FFD971', '#FFE395', '#FFEBB2', '#FEF2D1', '#FFF8E8'],
  ['#ADB8D6', '#BEC8E4', '#CBD3ED', '#D9E0F5', '#E7ECFB', '#F2F5FF'],
  ['#867AFF', '#9A8DFF', '#ACA1FF', '#C4BCFF', '#DBD6FF', '#EDEBFF'],
  ['#FAA64D', '#FFB96F', '#FECB94', '#FFD8AD', '#FFE5C9', '#FFF4E9'],
  ['#FF8082', '#FF99A0', '#FFBBBF', '#FFD4D7', '#FFE8EA', '#FFF7F8'],
  ['#B46FF4', '#BF80FF', '#D1A4FD', '#E0C1FF', '#EDDAFF', '#F5ECFF']
];

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme: colorList,
    palette: {
      bandColor: colorList[0],
      /** 背景色 */
      backgroundColor: 'transparent',

      /** 主要字色 */
      primaryFontColor: '#17171A',
      /** 次要字色 */
      secondaryFontColor: '#5E5F66',
      /** 第三字色 */
      tertiaryFontColor: '#888888',

      /** 轴线颜色 */
      axisDomainColor: '#DCDEE1',
      /** 轴标签字色 */
      axisLabelFontColor: '#888888',
      /** 轴网格线颜色 */
      axisGridColor: '#EFF0F2',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: '#ffffff'
    } as unknown as BuiltinColorPalette
  }
};
