import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: {
    line: {
      type: 'rect',
      visible: true,
      style: {
        fill: { type: 'palette', key: 'crosshairBackgroundColor' },
        opacity: 1,
        lineDash: []
      }
    }
  },
  linearField: {
    line: {
      type: 'line',
      visible: true,
      style: {
        stroke: { type: 'palette', key: 'lineColor2' },
        opacity: 1,
        lineDash: [2, 3]
      }
    }
  }
};
