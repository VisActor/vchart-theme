import type { IDataZoomTheme } from '@visactor/vchart';

export const dataZoom: IDataZoomTheme = {
  height: 44,
  middleHandler: {
    visible: false
  },
  startHandler: {
    style: {
      size: 22
    }
  },
  selectedBackground: {
    style: {
      fill: '#6699FF',
      fillOpacity: 0.2,
      opacity: 1,
      stroke: '#6699FF',
      lineWidth: 2,
      cornerRadius: 4
    }
  },
  background: {
    style: {
      fill: '#F3F4F6',
      fillOpacity: 0.2,
      cornerRadius: 4,
      stroke: '#EDEEF0',
      opacity: 1,
      lineWidth: 2
    }
  },
  endHandler: {
    style: {
      size: 22
    }
  },
  backgroundChart: {
    area: {
      style: {
        fill: false,
        stroke: '#6699FF'
      }
    },
    line: {
      style: {
        fill: false,
        stroke: '#6699FF'
      }
    }
  },
  startText: {
    visible: false
  },
  endText: {
    visible: false
  }
};
