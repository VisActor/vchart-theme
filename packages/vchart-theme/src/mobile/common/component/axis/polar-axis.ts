import type { IPolarAxisCommonTheme } from '@visactor/vchart-types';

export const axisRadius: IPolarAxisCommonTheme = {
  grid: {
    smooth: true,
    visible: true
  },
  subGrid: {
    smooth: true,
    visible: false
  }
};

export const axisAngle: IPolarAxisCommonTheme = {
  grid: {
    visible: true,
    style: {
      lineDash: [6, 6]
    }
  },
  label: {
    space: 4
  }
};
