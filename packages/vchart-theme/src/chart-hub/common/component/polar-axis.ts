import type { IPolarAxisCommonTheme } from '@visactor/vchart';

const axisRadius: IPolarAxisCommonTheme = {
  domainLine: {},
  grid: {
    smooth: false,
    visible: true
  },
  subGrid: {
    smooth: false
  }
};

const axisAngle: IPolarAxisCommonTheme = {
  grid: {
    visible: true,
    smooth: false
  },
  label: {
    space: 4
  }
};

export const axisPolar = {
  axisRadius,
  axisAngle
};
