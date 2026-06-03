import type { IComponentTheme } from '@visactor/vchart';

export const axis: IComponentTheme = {
  axisRadius: {
    domainLine: {
      visible: false
    },
    grid: {
      smooth: false,
      style: {
        lineDash: [4, 4]
      }
    }
  },
  axisAngle: {
    domainLine: {
      visible: true
    },
    tick: {
      visible: false
    },
    grid: {
      style: {
        lineDash: [0]
      }
    }
  }
};
