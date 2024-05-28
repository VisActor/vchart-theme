import type { IMarkPointTheme } from '@visactor/vchart';

export const markPoint: IMarkPointTheme = {
  itemContent: {
    autoRotate: false,
    offsetY: -16,
    text: {
      style: {
        fontSize: { type: 'token', key: 'l5FontSize' },
        fill: { type: 'palette', key: 'blackColors65' }
      }
    }
  },
  itemLine: {
    decorativeLine: {
      visible: false
    },
    startSymbol: {
      visible: true,
      size: 6,
      style: {
        fill: '#fff',
        stroke: { type: 'palette', key: 'bandColor' },
        lineWidth: 2
      }
    },
    endSymbol: {
      visible: false
    },
    line: {
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'blackColors25' }
      }
    }
  }
};
