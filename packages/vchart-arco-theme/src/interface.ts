export interface IInitVChartSemiThemeOption {
  /** 初始亮暗色模式 */
  defaultMode?: 'light' | 'dark';
  /** 是否监听亮暗色模式自动更改图表主题 */
  isWatchingMode?: boolean;
  /** 是否监听主题变化自动更改图表主题（适用于 semi 官方主题切换接口：https://semi.design/dsm/install_switcher）*/
  isWatchingThemeSwitch?: boolean;
}
