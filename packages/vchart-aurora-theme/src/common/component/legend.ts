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
          symbolType: 'circle'
        }
      }
    },
    allowAllCanceled: false
  }
};

export const lineLegend: Partial<IComponentTheme> = {
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
          size: [8, 2],
          symbolType: 'rect'
        }
      }
    },
    allowAllCanceled: false
  }
};
