import type { ThemeManager } from '@visactor/vchart';

export interface IInitVChartTTPlatformThemeOption {
  /** 初始亮暗色模式 */
  defaultMode?: 'light' | 'dark';
  /** 是否监听亮暗色模式自动更改图表主题 */
  isWatchingMode?: boolean;
  /** 是否监听主题变化自动更改图表主题（适用于 semi 官方主题切换接口：https://semi.design/dsm/install_switcher）*/
  isWatchingThemeSwitch?: boolean;
  /** 指定 ThemeManager，一般不用指定，如果遇到多版本 vchart 共存时需要指定 */
  themeManager?: typeof ThemeManager;
}
