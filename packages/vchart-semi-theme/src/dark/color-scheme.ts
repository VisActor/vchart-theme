import type { BuiltinColorPalette, IThemeColorScheme } from '@visactor/vchart';
import { dataScheme } from '../common/data-scheme';

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme,
    palette: {
      /** 背景色 */
      backgroundColor: '#16161a',
      /** 图表边框色 */
      borderColor: 'rgba(255,255,255,0.08)',

      lineColor0: 'rgba(136, 141, 146, 1)',
      lineColor1: 'rgba(85, 91, 97, 1)',
      lineColor2: 'rgba(65, 70, 76, 1)',

      /** 默认阴影颜色 */
      shadowColor: 'rgba(0,0,0,0.25)',
      /** 鼠标 hover 项背景颜色 */
      hoverBackgroundColor: 'rgba(255,255,255,0.12)',
      /** 滑块类组件背景条填充颜色 */
      sliderRailColor: 'rgba(255,255,255,0.12)',
      /** 滑块类组件滑块填充颜色 */
      sliderHandleColor: '#e4e7f5',
      /** 滑块类组件已选范围填充颜色 */
      sliderTrackColor: 'rgba(84,169,255,1)',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: '#43444a',

      /** 主要字色 */
      primaryFontColor: 'rgba(249,249,249,1)',
      /** 次要字色 */
      secondaryFontColor: 'rgba(249,249,249,0.8)',
      /** 第三字色 */
      tertiaryFontColor: 'rgba(249,249,249,0.6)',
      /** 轴标签字色 */
      axisLabelFontColor: 'rgba(249,249,249,0.6)',
      /** 禁用字色 */
      disableFontColor: 'rgba(249,249,249,0.35)',
      /** 轴高亮标记字色 */
      axisMarkerFontColor: '#16161a',

      /** 轴网格线颜色 */
      axisGridColor: 'rgba(65, 70, 76, 1)', //用上边定义的lineColor2
      /** 轴线颜色 */
      axisDomainColor: 'rgba(85, 91, 97, 1)', //用上边定义的lineColor1

      /** 十字准星背景色 */
      crosshairBackgroundColor: 'rgba(55,58,67,0.05)',

      /** 缩略轴滑块描边颜色 */
      dataZoomHandleStrokeColor: 'rgba(46,50,56,0.13)',
      /** 缩略轴图表区域颜色 */
      dataZoomChartColor: 'rgba(255,255,255,0.16)',

      /** 播放器控制器填充颜色 */
      playerControllerColor: 'rgba(84,169,255,1)',

      /** 轴高亮标记背景色 */
      axisMarkerBackgroundColor: 'rgba(249,249,249,1)',
      /** 标注标签背景颜色 */
      markLabelBackgroundColor: 'rgba(255,255,255,0.08)',
      /** 标注线颜色 */
      markLineStrokeColor: 'rgba(249,249,249,0.8)', //用上边定义的lineColor0

      /** 危险色 */
      dangerColor: 'rgba(252,114,90,1)',
      /** 警告色 */
      warningColor: 'rgba(255,174,67,1)',
      /** 成功色 */
      successColor: 'rgba(93,194,100,1)',
      /** 信息色 */
      infoColor: 'rgba(84,169,255,1)'
    } as Partial<BuiltinColorPalette>
  }
};
