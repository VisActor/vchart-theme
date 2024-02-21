import type { DataSchemeItem, ProgressiveDataScheme } from '@visactor/vchart';

/** 标准色板 */
export const dataScheme: ProgressiveDataScheme<DataSchemeItem> = [
  // 第一档颜色（数据项 <= 10）
  {
    maxDomainLength: 10,
    scheme: [
      '#5769FF',
      '#8ED4E7',
      '#F58700',
      '#DCB7FC',
      '#4A9CF7',
      '#F3CC35',
      '#FE8090',
      '#8BD7D2',
      '#83B023',
      '#E9A5E5'
    ]
  },
  // 第二档颜色（数据项 > 10）
  {
    scheme: [
      '#5769FF',
      '#8ED4E7',
      '#F58700',
      '#DCB7FC',
      '#4A9CF7',
      '#F3CC35',
      '#FE8090',
      '#8BD7D2',
      '#83B023',
      '#E9A5E5',
      '#30a7ce',
      '#f9c064',
      '#b171f9',
      '#77b6f9',
      '#c88f02',
      '#ffaab2',
      '#33b0ab',
      '#b6d781',
      '#d458d4',
      '#bcc6ff'
    ]
  }
];
