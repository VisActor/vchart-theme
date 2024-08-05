import type { IAxisCommonTheme } from '@visactor/vchart';

export const commonAxis: IAxisCommonTheme = {
  domainLine: {
    visible: true
  },
  grid: {
    visible: true
  },
  subGrid: {
    visible: false
  },
  tick: {
    visible: false,
    tickSize: 0
  },
  subTick: {
    visible: false,
    tickSize: 0
  },
  label: {
    visible: true,
    space: 6
  },
  title: {
    space: 6
  }
};
