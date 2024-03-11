import type { IDataZoomTheme } from '@visactor/vchart-types';

export const dataZoom: IDataZoomTheme = {
  padding: [12, 0],
  middleHandler: {
    visible: false,
    background: {
      size: 6
    },
    icon: {
      style: {
        size: 4
      }
    }
  },
  background: {
    size: 20
  },
  startText: {
    padding: 8
  },
  endText: {
    padding: 8
  }
};
