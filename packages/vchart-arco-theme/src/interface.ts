import type { ThemeManager } from '@visactor/vchart';

export interface IInitVChartArcoThemeOption {
  /** 初始亮暗色模式 */
  defaultMode?: 'light' | 'dark';
  /** 是否监听亮暗色模式自动更改图表主题 */
  isWatchingMode?: boolean;
  /** 指定 ThemeManager，一般不用指定，如果遇到多版本 vchart 共存时需要指定 */
  themeManager?: typeof ThemeManager;
  /** arco css 变量前缀，例如：原始变量名为`--color-data-1`，配置为`"arco"`后变为`--arco-color-data-1` */
  prefix?: string;
}
