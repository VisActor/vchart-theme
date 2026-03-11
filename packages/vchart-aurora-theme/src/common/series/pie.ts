import type { ISeriesTheme } from '@visactor/vchart';

export const pie: ISeriesTheme['pie'] = {
  outerRadius: 0.8,
  innerRadius: 0,
  pie: {
    style: {
      padAngle: 0,
      stroke: '#fff',
      lineWidth: 2,
      lineJoin: 'round',
      cornerRadius: 2
    },
    state: {
      hover: {
        outerRadius: 0.85,
        lineWidth: 2
      },
      selected: {
        outerRadius: 0.85,
        lineWidth: 2
      }
    }
  },
  label: {
    visible: true,
    position: 'outside',
    formatMethod: (label, data) => {
      return {
        type: 'rich',
        text: [
          {
            text: `${data?.value}\n`,
            fill: '#111',
            fontSize: 16,
            fontWeight: 500,
            fontFamily: 'douyinNumber',
            stroke: false
          },
          {
            text: data?.type,
            fill: '#606165',
            fontSize: 12,
            fontWeight: 400,
            stroke: false
          }
        ]
      };
    },
    line: {
      style: {
        lineWidth: 2
      }
    },
    style: {
      type: 'rich',
      boundsPadding: [6, 0, 6, 0]
    },
    legend: {
      visible: true,
      orient: 'bottom'
    }
  }
};
