import type { IContinuousLegendTheme } from '@visactor/vchart-types';

export const DEFAULT_CONTINUOUS_LEGEND_THEME: IContinuousLegendTheme = {
  orient: 'right',
  position: 'middle',
  padding: 30,
  title: {
    visible: false,
    padding: 0,
    textStyle: {
      fontSize: 14,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'titleFontColor' }
    },
    space: 12
  },
  handler: {
    visible: true
  },
  startText: {
    style: {
      fontSize: 14,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  },
  endText: {
    style: {
      fontSize: 14,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  },
  handlerText: {
    style: {
      fontSize: 14,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  }
};
