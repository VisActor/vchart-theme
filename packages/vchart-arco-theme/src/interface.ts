import type { IInitThemeOption } from '@visactor/vchart-theme-utils';

export interface IInitVChartArcoThemeOption extends IInitThemeOption {
  /** arco css 变量前缀，例如：原始变量名为`--color-data-1`，配置为`"arco"`后变为`--arco-color-data-1` */
  prefix?: string;
}
