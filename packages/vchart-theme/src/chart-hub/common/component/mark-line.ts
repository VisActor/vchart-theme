import type { IMarkLineTheme } from '@visactor/vchart';

export const markLine: IMarkLineTheme = {
  line: {
    style: {
      lineDash: [],
      lineWidth: 1,
      stroke: { type: 'palette', key: 'blackColors25' }
    }
  },
  startSymbol: {
    visible: false
  },
  endSymbol: {
    visible: false
  },
  label: {
    position: 'insideStartTop',
    refY: 0,
    autoRotate: true,
    style: {
      fontSize: { type: 'token', key: 'l5FontSize' },
      fill: { type: 'palette', key: 'blackColors65' }
    },
    labelBackground: {
      visible: false
    }
  }
};
