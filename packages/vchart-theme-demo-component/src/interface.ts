import type { IInitOption } from '@visactor/vchart';

export interface IChartInfo {
  spec: any;
  title: string;
  fileName: string;
  option?: IInitOption;
  description?: string;
}
