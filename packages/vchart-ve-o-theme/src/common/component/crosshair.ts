import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: {
    line: {
      type: 'rect',
      visible: true
    }
  },
  linearField: {
    line: {
      type: 'line',
      visible: true,
      style: {
        stroke: { type: 'palette', key: 'axisDomainColor', a: 0.6 },
        opacity: 1,
        lineDash: [],
        lineWidth: 1
      }
    }
  }
};
