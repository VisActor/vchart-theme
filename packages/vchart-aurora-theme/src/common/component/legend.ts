import type { IComponentTheme } from '@visactor/vchart';

export const legend: Partial<IComponentTheme> = {
  discreteLegend: {
    visible: true,
    orient: 'top',
    position: 'middle',
    padding: [8, 8, 8, 8],
    maxRow: 1,
    title: {
      visible: false,
      textStyle: {
        fontSize: 12,
        lineHeight: 21
      }
    },
    item: {
      visible: true,
      spaceCol: 24,
      spaceRow: 12,
      padding: 0,
      background: {
        visible: false
      },
      shape: {
        space: 4,
        style: {
          size: 8,
          symbolType: 'circle'
        }
      },
      label: {
        space: 100,
        style: {
          fill: '#585858',
          fontSize: 12,
          lineHeight: 12,
          opacity: 1,
          fontWeight: 400
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
