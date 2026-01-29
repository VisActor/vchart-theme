import type { ISeriesTheme } from '@visactor/vchart';

export const heatmap: ISeriesTheme['heatmap'] = {
  cell: {
    style: {
      stroke: { type: 'palette', key: 'whiteColors100' },
      lineWidth: 1
    },
    state: {
      hover: {
        zIndex: 100,
        stroke: '#000'
      }
    }
  },
  label: {
    position: 'inside',
    style: {
      fill: { type: 'palette', key: 'whiteColors100' },
      fontSize: 12
    }
  }
};
