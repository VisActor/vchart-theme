import type { IComponentTheme } from '@visactor/vchart';

export const axisTheme: IComponentTheme = {
  axis: {
    grid: {
      style: {
        lineWidth: 1,
        lineDash: [3, 2]
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
      autoRotateAngle: [0, 30, 45, 90]
    }
  },
  axisY: {
    label: {
      autoRotate: true,
      autoRotateAngle: [0, 30, 45, 90]
    }
  },
  axisBand: {
    domainLine: {
      visible: true
    }
  }
};
