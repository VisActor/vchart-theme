import type { IInitVChartArcoThemeOption } from '@visactor/vchart-arco-theme';
import type { IThemeQueryOption } from '@visactor/vchart-theme-utils';

export interface IInitVChartVeOThemeOption extends IInitVChartArcoThemeOption {
  /** 初始色板类型，默认为 'default' */
  colorScheme?: ColorSchemeType | string;
}

export interface IVeOThemeQueryOption extends IThemeQueryOption {
  colorScheme?: ColorSchemeType | string;
}

export enum ColorSchemeType {
  /** 通用色板 */
  default = 'default',
  /** 金融行业色板 */
  finance = 'finance',
  /** 政府行业色板 */
  government = 'government',
  /** 大消费行业色板 */
  consumer = 'consumer',
  /** 汽车行业色板 */
  automobile = 'automobile',
  /** 文旅行业色板 */
  culturalTourism = 'culturalTourism',
  /** 医疗行业色板 */
  medical = 'medical',
  /** 新能源行业色板 */
  newEnergy = 'newEnergy'
}
