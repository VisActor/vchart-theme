import type { BuiltinColorPalette, IColorSchemeStruct, IThemeColorScheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import { lightTheme } from '@visactor/vchart';

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme: (lightTheme.colorScheme.default as IColorSchemeStruct).dataScheme,
    palette: {
      /** 背景色 */
      backgroundColor: 'rgba(255,255,255,1)',
      /** 图表边框色 */
      borderColor: 'rgba(28,31,35,0.08)',

      lineColor0: '#757880',
      lineColor1: '#ACAFB6',
      lineColor2: '#CACCD1',

      /** 默认阴影颜色 */
      shadowColor: 'rgba(33,37,44,0.1)',
      /** 鼠标 hover 项背景颜色 */
      hoverBackgroundColor: 'rgba(55,58,67,0.05)',
      /** 滑块类组件背景条填充颜色 */
      sliderRailColor: '#f1f3f4',
      /** 滑块类组件滑块填充颜色 */
      sliderHandleColor: '#ffffff',
      /** 滑块类组件已选范围填充颜色 */
      sliderTrackColor: '#0040ff',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: 'rgba(255,255,255,1)',

      /** 主要字色 */
      primaryFontColor: 'rgba(37,39,46,1)',
      /** 次要字色 */
      secondaryFontColor: 'rgba(37,39,46,0.8)',
      /** 第三字色 */
      tertiaryFontColor: 'rgba(37,39,46,0.6)',
      /** 轴标签字色 */
      axisLabelFontColor: '#89909d',
      /** 禁用字色 */
      disableFontColor: '#bcc1cb',
      /** 轴高亮标记字色 */
      axisMarkerFontColor: 'rgba(255,255,255,1)',

      /** 轴网格线颜色 */
      axisGridColor: '#CACCD1', //用上边定义的lineColor2
      /** 轴线颜色 */
      axisDomainColor: '#ACAFB6', //用上边定义的lineColor1

      /** 十字准星背景色 */
      crosshairBackgroundColor: 'rgba(55,58,67,0.05)',

      /** 缩略轴滑块描边颜色 */
      dataZoomHandleStrokeColor: '#aeb5be',
      /** 缩略轴图表区域颜色 */
      dataZoomChartColor: '#c9ced8',

      /** 播放器控制器填充颜色 */
      playerControllerColor: '#0040ff',

      /** 轴高亮标记背景色 */
      axisMarkerBackgroundColor: '#21252c',
      /** 标注标签背景颜色 */
      markLabelBackgroundColor: '#f1f2f5',
      /** 标注线颜色 */
      markLineStrokeColor: '#757880', //用上边定义的lineColor0

      /** 危险色 */
      dangerColor: '#D63125',
      /** 警告色 */
      warningColor: '#F58700',
      /** 成功色 */
      successColor: '#2BA345',
      /** 信息色 */
      infoColor: '#1F80F5'
    } as Partial<BuiltinColorPalette>
  }
};
