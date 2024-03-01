import type { IInitThemeOption } from '@visactor/vchart-theme-utils';

export interface IInitVChartSemiThemeOption extends IInitThemeOption {
  /** 是否监听主题变化自动更改图表主题（适用于 semi 官方主题切换接口：https://semi.design/dsm/install_switcher）*/
  isWatchingThemeSwitch?: boolean;
}
