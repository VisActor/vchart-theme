import type { DataSchemeItem, ProgressiveDataScheme } from '@visactor/vchart';

/** 标准色板 */
export const dataScheme: ProgressiveDataScheme<DataSchemeItem> = [
  // 第一档颜色（数据项 <= 10）
  {
    maxDomainLength: 10,
    scheme: [
      '#4080FF',
      '#57A9FB',
      '#FF7D00',
      '#4CD263',
      '#A871E3',
      '#F7BA1E',
      '#9FDB1D',
      '#F979B7',
      '#0FC6C2',
      '#E865DF'
    ]
  },
  // 第二档颜色（数据项 > 10）
  {
    scheme: [
      '#4080FF',
      '#94BFFF',
      '#57A9FB',
      '#9FD4FD',
      '#FF7D00',
      '#FFCF8B',
      '#4CD263',
      '#7BE188',
      '#A871E3',
      '#C396ED',
      '#F7BA1E',
      '#FADC6D',
      '#9FDB1D',
      '#C9E968',
      '#F979B7',
      '#FB9DC7',
      '#0FC6C2',
      '#86E8DD',
      '#E865DF',
      '#F7BAEF'
    ]
  }
];
