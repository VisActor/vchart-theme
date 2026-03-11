import type { IComponentTheme } from '@visactor/vchart';

export const legend: Partial<IComponentTheme> = {
  discreteLegend: {
    visible: true,
    orient: 'top',
    position: 'middle',
    maxRow: 1,
    title: {
      visible: false
    },
    item: {
      visible: true,
      background: {
        visible: false
      },
      shape: {
        style: {
          size: 8,
          symbolType: 'circle'
        }
      },
      label: {
        style: {
          fill: '#585858'
        },
        state: {
          unSelected: {
            opacity: 1
          }
        }
      }
    },
    allowAllCanceled: false
  }
};
