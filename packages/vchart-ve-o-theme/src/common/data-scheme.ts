import type { DataSchemeItem, ProgressiveDataScheme } from '@visactor/vchart';

/** 标准色板 */
export const dataScheme: ProgressiveDataScheme<DataSchemeItem> = [
  // 第一档颜色（数据项 <= 10）
  {
    maxDomainLength: 10,
    scheme: [
      '#4080FF',
      '#55C5FD',
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
      '#BEDAFF',
      '#55C5FD',
      '#9CDCFC',
      '#FF7D00',
      '#FFCF8B',
      '#4CD263',
      '#AFF0B5',
      '#A871E3',
      '#DDBEF6',
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

export const veODataScheme: Record<
  string,
  {
    name: string;
    colors: string[];
  }
> = {
  finance: {
    name: '金融行业色板',
    colors: [
      '#E2B890',
      '#294C60',
      '#E04D43',
      '#324BCC',
      '#9CADC8',
      '#9D0800',
      '#AD7F45',
      '#3C4579',
      '#97A1A6',
      '#57A1B1'
    ]
  },
  government: {
    name: '政府行业色板',
    colors: [
      '#D03132',
      '#FFC330',
      '#0147B2',
      '#758D6C',
      '#801F1F',
      '#5476A9',
      '#3F4F3A',
      '#EA750A',
      '#87929F',
      '#CF9400'
    ]
  },
  consumer: {
    name: '大消费行业色板',
    colors: [
      '#4136B2',
      '#FF334E',
      '#FFA640',
      '#8A36FF',
      '#0BE0E0',
      '#FF4DCD',
      '#8ADB00',
      '#FE8700',
      '#FF999E',
      '#00A3A3'
    ]
  },
  automobile: {
    name: '汽车行业色板',
    colors: [
      '#1515DA',
      '#A9B6CF',
      '#142A5D',
      '#71D9D3',
      '#D9AC8C',
      '#749EFF',
      '#F95757',
      '#616C84',
      '#ABCCD1',
      '#AE2210'
    ]
  },
  culturalTourism: {
    name: '文旅行业色板',
    colors: [
      '#61BA95',
      '#335B4A',
      '#7A94BF',
      '#2E5599',
      '#B9A582',
      '#735A40',
      '#BC9B44',
      '#99533D',
      '#809E9D',
      '#2E8582'
    ]
  },
  medical: {
    name: '医疗行业色板',
    colors: [
      '#50D3D2',
      '#2A488C',
      '#F08EBB',
      '#DD3382',
      '#93B3FF',
      '#816CE2',
      '#FCC18F',
      '#398282',
      '#B3AFC5',
      '#4F68A1'
    ]
  },
  newEnergy: {
    name: '新能源行业色板',
    colors: [
      '#0BDB7D',
      '#133C7A',
      '#FFBE00',
      '#217185',
      '#7DD4EA',
      '#126FFE',
      '#B0C71B',
      '#8B4BFB',
      '#01C2C2',
      '#78808C'
    ]
  }
};
