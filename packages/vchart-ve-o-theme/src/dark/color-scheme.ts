import type { BuiltinColorPalette, IColorSchemeStruct, IThemeColorScheme } from '@visactor/vchart';

export const getColorScheme = (dataScheme: IColorSchemeStruct['dataScheme']): IThemeColorScheme => ({
  default: {
    dataScheme,
    palette: {
      /** 背景色 */
      backgroundColor: '#17171a',
      /** 图表边框色 */
      borderColor: '#333335',
      /** 默认阴影颜色 */
      shadowColor: 'rgba(0,0,0,0.1)',
      /** 鼠标 hover 项背景颜色 */
      hoverBackgroundColor: 'rgba(197,197,197,0.16)',
      /** 滑块类组件背景条填充颜色 */
      sliderRailColor: 'hsla(0,0%,100%,0.12)',
      /** 滑块类组件滑块填充颜色 */
      sliderHandleColor: '#232324',
      /** 滑块类组件已选范围填充颜色 */
      sliderTrackColor: 'rgba(60,126,255,1)',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: '#373739',

      /** 主要字色 */
      primaryFontColor: 'hsla(0,0%,100%,0.9)',
      /** 次要字色 */
      secondaryFontColor: 'hsla(0,0%,100%,0.7)',
      /** 第三字色 */
      tertiaryFontColor: 'hsla(0,0%,100%,0.5)',
      /** 轴标签字色 */
      axisLabelFontColor: 'hsla(0,0%,100%,0.5)',
      /** 禁用字色 */
      disableFontColor: 'hsla(0,0%,100%,0.3)',
      /** 轴高亮标记字色 */
      axisMarkerFontColor: '#17171a',

      /** 轴网格线颜色 */
      axisGridColor: '#333335',
      /** 轴线颜色 */
      axisDomainColor: 'rgba(72,72,73,1)',

      /** 缩略轴滑块描边颜色 */
      dataZoomHandleStrokeColor: 'rgba(120,120,122,1)',
      /** 缩略轴图表区域颜色 */
      dataZoomChartColor: 'hsla(0,0%,100%,0.16)',

      /** 播放器控制器填充颜色 */
      playerControllerColor: 'rgba(60,126,255,1)',

      /** 轴高亮标记背景色 */
      axisMarkerBackgroundColor: 'hsla(0,0%,100%,0.9)',
      /** 标注标签背景颜色 */
      markLabelBackgroundColor: '#333335',
      /** 标注线颜色 */
      markLineStrokeColor: 'hsla(0,0%,100%,0.7)',

      /** 危险色 */
      dangerColor: 'rgba(247,105,101,1)',
      /** 警告色 */
      warningColor: 'rgba(255,150,38,1)',
      /** 成功色 */
      successColor: 'rgba(39,195,70,1)',
      /** 信息色 */
      infoColor: 'rgba(60,126,255,1)'
    } as Partial<BuiltinColorPalette>
  }
});
