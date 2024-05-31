import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: {
    line: {
      type: 'rect',
      visible: true,
      style: {
        fill: '#CCD7EB',
        fillOpacity: 0.4,
        lineDash: []
      }
    },
    label: {
      visible: false
    }
  },
  linearField: {
    visible: false,
    line: {
      type: 'line',
      style: {
        stroke: '#CCD7EB',
        lineWidth: 0.4,
        lineDash: []
      }
    },
    label: {
      visible: false
    }
  }
};
