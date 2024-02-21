import type { IComponentTheme } from '@visactor/vchart';

export const axisTheme: IComponentTheme = {
  axis: {
    grid: {
      style: {
        lineWidth: 1,
        lineDash: [4, 4]
      }
    },
    domainLine: {
      style: {
        lineWidth: 1,
        strokeOpacity: 1
      }
    }
  },
  axisX: {
    label: {
      autoRotate: true,
      autoRotateAngle: [0, -45]
    }
  },
  axisY: {
    label: {
      autoRotate: true,
      autoRotateAngle: [0, -45]
    }
  }
};
