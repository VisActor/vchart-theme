import type { ICartesianAxisCommonTheme } from '@visactor/vchart';

export const axisX: ICartesianAxisCommonTheme = {
  label: {
    space: 4
  },
  title: {
    space: 4
  },
  unit: {
    visible: false
  }
};

export const axisY: ICartesianAxisCommonTheme = {
  label: {
    space: 6
  },
  title: {
    space: 6
  },
  unit: {
    visible: false
  }
};

export const axisZ: ICartesianAxisCommonTheme = {
  ...axisX,
  label: {
    space: 0
  }
};
