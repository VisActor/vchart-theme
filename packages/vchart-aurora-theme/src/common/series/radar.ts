import type { ISeriesTheme } from '@visactor/vchart';

export const radar: ISeriesTheme['radar'] = {
  point: {
    style: {
      visible: false,
      size: 12,
      lineWidth: 2,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowBlur: 3,
      stroke: '#fff'
    },
    state: {
      dimension_hover: {
        visible: true
      }
    }
  },
  area: {
    visible: true, // display area
    style: {
      fillOpacity: 0.1,
      lineDash: [2, 2]
    }
  },
  line: {
    style: {
      lineWidth: 2
    },
    state: {
      dimension_hover: {
        // 维度hover时线条变为实线
        lineDash: [0], // 取消虚线
        lineWidth: 2
      }
    }
  },
  outerRadius: 0.8
};
