import type { BuiltinColorPalette, IThemeColorScheme } from '@visactor/vchart';
import { dataScheme } from '../common/data-scheme';

export const colorScheme: IThemeColorScheme = {
  default: {
    dataScheme,
    palette: {
      /** 背景色 */
      backgroundColor: 'rgba(255,255,255,1)',
      /** 图表边框色 */
      borderColor: 'rgba(229,230,235,1)',
      /** 默认阴影颜色 */
      shadowColor: 'rgba(0,0,0,0.1)',
      /** 鼠标 hover 项背景颜色 */
      hoverBackgroundColor: 'rgba(229,230,235,1)',
      /** 滑块类组件背景条填充颜色 */
      sliderRailColor: 'rgba(229,230,235,1)',
      /** 滑块类组件滑块填充颜色 */
      sliderHandleColor: 'rgba(255,255,255,1)',
      /** 滑块类组件已选范围填充颜色 */
      sliderTrackColor: 'rgba(22,93,255,1)',
      /** 浮层背景区域颜色 */
      popupBackgroundColor: 'rgba(255,255,255,1)',

      /** 主要字色 */
      primaryFontColor: 'rgba(29,33,41,1)',
      /** 次要字色 */
      secondaryFontColor: 'rgba(78,89,105,1)',
      /** 第三字色 */
      tertiaryFontColor: 'rgba(134,144,156,1)',
      /** 轴标签字色 */
      axisLabelFontColor: 'rgba(134,144,156,1)',
      /** 禁用字色 */
      disableFontColor: 'rgba(201,205,212,1)',
      /** 轴高亮标记字色 */
      axisMarkerFontColor: 'rgba(255,255,255,1)',

      /** 轴网格线颜色 */
      axisGridColor: 'rgba(229,230,235,1)',
      /** 轴线颜色 */
      axisDomainColor: 'rgba(229,230,235,1)',

      /** 缩略轴滑块描边颜色 */
      dataZoomHandleStrokeColor: 'rgba(169,174,184,1)',
      /** 缩略轴图表区域颜色 */
      dataZoomChartColor: 'rgba(201,205,212,1)',

      /** 播放器控制器填充颜色 */
      playerControllerColor: 'rgba(22,93,255,1)',

      /** 轴高亮标记背景色 */
      axisMarkerBackgroundColor: 'rgba(29,33,41,1)',
      /** 标注标签背景颜色 */
      markLabelBackgroundColor: 'rgba(229,230,235,1)',
      /** 标注线颜色 */
      markLineStrokeColor: 'rgba(78,89,105,1)',

      /** 危险色 */
      dangerColor: 'rgba(245,63,63,1)',
      /** 警告色 */
      warningColor: 'rgba(255,125,0,1)',
      /** 成功色 */
      successColor: 'rgba(0,180,42,1)',
      /** 信息色 */
      infoColor: 'rgba(22,93,255,1)'
    } as Partial<BuiltinColorPalette>
  }
};
