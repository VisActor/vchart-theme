import type { DataSchemeTokenMap, PaletteTokenMap } from '@visactor/vchart-theme-utils/esm/interface';

export const getPaletteTokenMap = (prefix?: string): PaletteTokenMap => {
  const prefixStr = prefix ? `${prefix}${prefix[prefix.length - 1] === '-' ? '' : '-'}` : '';
  return {
    /** 背景色 */
    backgroundColor: `--${prefixStr}color-bg-1`,
    /** 图表边框色 */
    borderColor: `--${prefixStr}color-border`,
    /** 鼠标 hover 项背景颜色 */
    hoverBackgroundColor: `--${prefixStr}color-secondary-hover`,
    /** 滑块类组件背景条填充颜色 */
    sliderRailColor: `--${prefixStr}color-fill-3`,
    /** 滑块类组件滑块填充颜色 */
    sliderHandleColor: `--${prefixStr}color-bg-2`,
    /** 滑块类组件已选范围填充颜色 */
    sliderTrackColor: '--primary-6',
    /** 浮层背景区域颜色 */
    popupBackgroundColor: `--${prefixStr}color-bg-popup`,

    /** 主要字色 */
    primaryFontColor: `--${prefixStr}color-text-1`,
    /** 次要字色 */
    secondaryFontColor: `--${prefixStr}color-text-2`,
    /** 第三字色 */
    tertiaryFontColor: `--${prefixStr}color-text-3`,
    /** 轴标签字色 */
    axisLabelFontColor: `--${prefixStr}color-text-3`,
    /** 禁用字色 */
    disableFontColor: `--${prefixStr}color-text-4`,
    /** 轴高亮标记字色 */
    axisMarkerFontColor: `--${prefixStr}color-bg-1`,

    /** 轴网格线颜色 */
    axisGridColor: `--${prefixStr}color-border`,
    /** 轴线颜色 */
    axisDomainColor: `--${prefixStr}color-neutral-3`,
    /** 缩略轴滑块描边颜色 */
    dataZoomHandlerStrokeColor: `--${prefixStr}color-neutral-5`,
    /** 缩略轴图表区域颜色 */
    dataZoomChartColor: `--${prefixStr}color-fill-4`,

    /** 播放器控制器填充颜色 */
    playerControllerColor: '--primary-6',

    /** 轴高亮标记背景色 */
    axisMarkerBackgroundColor: `--${prefixStr}color-text-1`,
    /** 标注标签背景颜色 */
    markLabelBackgroundColor: `--${prefixStr}color-border`,
    /** 标注线颜色 */
    markLineStrokeColor: `--${prefixStr}color-text-2`,

    /** 危险色 */
    dangerColor: '--danger-6',
    /** 警告色 */
    warningColor: '--warning-6',
    /** 成功色 */
    successColor: '--success-6',
    /** 信息色 */
    infoColor: '--arcoblue-6'
  };
};

export const getDataSchemeTokenMap = (prefix?: string): DataSchemeTokenMap => {
  const prefixStr = prefix ? `${prefix}${prefix[prefix.length - 1] === '-' ? '' : '-'}` : '';
  return [
    // 第一档颜色（数据项 <= 10）
    {
      maxDomainLength: 10,
      scheme: [
        `--${prefixStr}color-data-1`,
        `--${prefixStr}color-data-3`,
        `--${prefixStr}color-data-5`,
        `--${prefixStr}color-data-7`,
        `--${prefixStr}color-data-9`,
        `--${prefixStr}color-data-11`,
        `--${prefixStr}color-data-13`,
        `--${prefixStr}color-data-15`,
        `--${prefixStr}color-data-17`,
        `--${prefixStr}color-data-19`
      ]
    },
    // 第二档颜色（数据项 > 10）
    {
      scheme: [
        `--${prefixStr}color-data-1`,
        `--${prefixStr}color-data-2`,
        `--${prefixStr}color-data-3`,
        `--${prefixStr}color-data-4`,
        `--${prefixStr}color-data-5`,
        `--${prefixStr}color-data-6`,
        `--${prefixStr}color-data-7`,
        `--${prefixStr}color-data-8`,
        `--${prefixStr}color-data-9`,
        `--${prefixStr}color-data-10`,
        `--${prefixStr}color-data-11`,
        `--${prefixStr}color-data-12`,
        `--${prefixStr}color-data-13`,
        `--${prefixStr}color-data-14`,
        `--${prefixStr}color-data-15`,
        `--${prefixStr}color-data-16`,
        `--${prefixStr}color-data-17`,
        `--${prefixStr}color-data-18`,
        `--${prefixStr}color-data-19`,
        `--${prefixStr}color-data-20`
      ]
    }
  ];
};
