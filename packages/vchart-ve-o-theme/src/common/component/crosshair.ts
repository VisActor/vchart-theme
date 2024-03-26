import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: {
    line: {
      type: 'rect',
      visible: true,
      style: {
        stroke: { type: 'palette', key: 'axisDomainColor', a: 0.6 },
        fill: { type: 'palette', key: 'axisGridColor', a: 0.7 },
        opacity: 1,
        lineDash: [],
        lineWidth: 0
      }
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
