import type { DataSchemeTokenMap, PaletteTokenMap } from '@visactor/vchart-theme-utils';

export const paletteTokenMap: PaletteTokenMap = {
  /** 背景色 */
  backgroundColor: '--semi-color-bg-0',
  /** 图表边框色 */
  borderColor: '--semi-color-border',

  lineColor0: '--semi-grey-5',
  lineColor1: '--semi-grey-3',
  lineColor2: '--semi-grey-2',

  /** 鼠标 hover 项背景颜色 */
  hoverBackgroundColor: '--semi-color-fill-0',
  /** 滑块类组件背景条填充颜色 */
  sliderRailColor: '--semi-color-fill-0',
  /** 滑块类组件滑块填充颜色 */
  sliderHandleColor: '--semi-white',
  /** 滑块类组件已选范围填充颜色 */
  sliderTrackColor: '--semi-color-primary',
  /** 浮层背景区域颜色 */
  popupBackgroundColor: {
    light: '--semi-color-bg-0',
    dark: '--semi-color-bg-3'
  },
  /** 主要字色 */
  primaryFontColor: '--semi-color-text-0',
  /** 次要字色 */
  secondaryFontColor: '--semi-color-text-1',
  /** 第三字色 */
  tertiaryFontColor: '--semi-color-text-2',
  /** 轴标签字色 */
  axisLabelFontColor: '--semi-color-text-2',
  /** 禁用字色 */
  disableFontColor: '--semi-color-disabled-text',
  /** 轴高亮标记字色 */
  axisMarkerFontColor: '--semi-color-bg-0',

  /** 轴网格线颜色 */
  axisGridColor: '--semi-grey-2', //用上边定义的lineColor2
  /** 轴线颜色 */
  axisDomainColor: '--semi-grey-3', //用上边定义的lineColor1

  /** 十字准星背景色 */
  crosshairBackgroundColor: '--semi-color-fill-0',

  /** 缩略轴滑块描边颜色 */
  dataZoomHandleStrokeColor: {
    light: '--semi-color-fill-2'
  },
  /** 缩略轴图表区域颜色 */
  dataZoomChartColor: '--semi-color-fill-1',

  /** 播放器控制器填充颜色 */
  playerControllerColor: '--semi-color-primary',

  /** 轴高亮标记背景色 */
  axisMarkerBackgroundColor: '--semi-color-text-0',
  /** 标注标签背景颜色 */
  markLabelBackgroundColor: '--semi-color-border',
  /** 标注线颜色 */
  markLineStrokeColor: '--semi-grey-5', //用上边定义的lineColor0

  /** 危险色 */
  dangerColor: '--semi-color-danger',
  /** 警告色 */
  warningColor: '--semi-color-warning',
  /** 成功色 */
  successColor: '--semi-color-success',
  /** 信息色 */
  infoColor: '--semi-color-info'
};

export const dataSchemeTokenMap: DataSchemeTokenMap = [
  // 20 色色板
  {
    scheme: [
      '--semi-color-data-0',
      '--semi-color-data-1',
      '--semi-color-data-2',
      '--semi-color-data-3',
      '--semi-color-data-4',
      '--semi-color-data-5',
      '--semi-color-data-6',
      '--semi-color-data-7',
      '--semi-color-data-8',
      '--semi-color-data-9',
      '--semi-color-data-10',
      '--semi-color-data-11',
      '--semi-color-data-12',
      '--semi-color-data-13',
      '--semi-color-data-14',
      '--semi-color-data-15',
      '--semi-color-data-16',
      '--semi-color-data-17',
      '--semi-color-data-18',
      '--semi-color-data-19'
    ]
  }
];
