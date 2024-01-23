import type { DataSchemeTokenMap, PaletteTokenMap } from '@visactor/vchart-theme-utils/esm/interface';

export const paletteTokenMap: PaletteTokenMap = {
  /** 背景色 */
  backgroundColor: '--color-bg-1',
  /** 图表边框色 */
  borderColor: '--color-border',
  /** 鼠标 hover 项背景颜色 */
  hoverBackgroundColor: '--color-secondary-hover',
  /** 滑块类组件背景条填充颜色 */
  sliderRailColor: '--color-fill-3',
  /** 滑块类组件滑块填充颜色 */
  sliderHandleColor: '--color-bg-2',
  /** 滑块类组件已选范围填充颜色 */
  sliderTrackColor: '--primary-6',
  /** 浮层背景区域颜色 */
  popupBackgroundColor: '--color-bg-popup',

  /** 主要字色 */
  primaryFontColor: '--color-text-1',
  /** 次要字色 */
  secondaryFontColor: '--color-text-2',
  /** 第三字色 */
  tertiaryFontColor: '--color-text-3',
  /** 轴标签字色 */
  axisLabelFontColor: '--color-text-3',
  /** 禁用字色 */
  disableFontColor: '--color-text-4',
  /** 轴高亮标记字色 */
  axisMarkerFontColor: '--color-bg-1',

  /** 轴网格线颜色 */
  axisGridColor: '--color-border',
  /** 轴线颜色 */
  axisDomainColor: '--color-neutral-3',
  /** 缩略轴滑块描边颜色 */
  dataZoomHandlerStrokeColor: '--color-neutral-5',
  /** 缩略轴图表区域颜色 */
  dataZoomChartColor: '--color-fill-4',

  /** 播放器控制器填充颜色 */
  playerControllerColor: '--primary-6',

  /** 轴高亮标记背景色 */
  axisMarkerBackgroundColor: '--color-text-1',
  /** 标注标签背景颜色 */
  markLabelBackgroundColor: '--color-border',
  /** 标注线颜色 */
  markLineStrokeColor: '--color-text-2',

  /** 危险色 */
  dangerColor: '--danger-6',
  /** 警告色 */
  warningColor: '--warning-6',
  /** 成功色 */
  successColor: '--success-6',
  /** 信息色 */
  infoColor: '--arcoblue-6'
};

export const dataSchemeTokenMap: DataSchemeTokenMap = [
  // 第一档颜色（数据项 <= 10）
  {
    maxDomainLength: 10,
    scheme: [
      '--color-data-1',
      '--color-data-3',
      '--color-data-5',
      '--color-data-7',
      '--color-data-9',
      '--color-data-11',
      '--color-data-13',
      '--color-data-15',
      '--color-data-17',
      '--color-data-19'
    ]
  },
  // 第二档颜色（数据项 > 10）
  {
    scheme: [
      '--color-data-1',
      '--color-data-2',
      '--color-data-3',
      '--color-data-4',
      '--color-data-5',
      '--color-data-6',
      '--color-data-7',
      '--color-data-8',
      '--color-data-9',
      '--color-data-10',
      '--color-data-11',
      '--color-data-12',
      '--color-data-13',
      '--color-data-14',
      '--color-data-15',
      '--color-data-16',
      '--color-data-17',
      '--color-data-18',
      '--color-data-19',
      '--color-data-20'
    ]
  }
];
