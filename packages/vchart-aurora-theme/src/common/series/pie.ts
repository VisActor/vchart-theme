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
      cornerRadius: 2,
      // @ts-ignore
      visible: datum => datum.value > 0 // 数据为0时隐藏柱子
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
  minAngle: 3,
  label: {
    visible: true,
    position: 'outside',
    formatMethod: (label, data) => {
      const midAngle = data.__VCHART_ARC_MIDDLE_ANGLE;
      const cos = Math.cos(midAngle);
      return {
        type: 'rich',
        text: [
          {
            text: `${data?.value}\n`,
            fill: '#111',
            fontSize: 16,
            fontWeight: 500,
            fontFamily: 'douyinNumber',
            stroke: false,
            textAlign: cos < 0 ? 'right' : 'left'
          },
          {
            text: data?.type,
            fill: '#606165',
            fontSize: 12,
            fontWeight: 400,
            stroke: false,
            textAlign: cos < 0 ? 'right' : 'left'
          }
        ]
      };
    },
    line: {
      style: {
        lineWidth: 2
      }
    },
    layout: {
      align: 'labelLine'
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
