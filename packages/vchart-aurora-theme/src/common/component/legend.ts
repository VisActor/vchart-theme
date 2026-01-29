import type { IComponentTheme } from '@visactor/vchart';

const commonColorLegendTheme = {
  handlerText: {
    space: 10,
    style: {
      fontSize: 12,
      fill: '#2C3542'
    }
  },
  title: {
    space: 5,
    style: {
      fontSize: 12,
      fill: '#2C3542'
    }
  }
};

export const legend: Partial<IComponentTheme> = {
  discreteLegend: {
    visible: true,
    orient: 'top',
    padding: [8, 8, 8, 8],
    maxRow: 1,
    title: {
      visible: false,
      textStyle: {
        fill: { type: 'palette', key: 'blackColors45' },
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
        },
        state: { unSelected: { fill: '#D8D8D8' } }
      },
      label: {
        space: 100,
        style: {
          fill: '#85878A',
          fontSize: 12,
          lineHeight: 12,
          opacity: 1,
          fontWeight: 400
        },
        state: {
          unSelected: {
            fill: '#D8D8D8',
            opacity: 1
          }
        }
      }
    },
    pager: {
      handler: {
        space: 8,
        style: {
          size: 10,
          fill: {
            type: 'palette',
            key: 'blackColors100'
          }
        }
      },
      textStyle: {
        fill: { type: 'palette', key: 'blackColors45' },
        fontSize: 10
      }
    },
    allowAllCanceled: false
  },
  colorLegend: {
    horizontal: {
      ...commonColorLegendTheme,
      handler: {
        style: {
          symbolType: 'rectRound',
          size: 16,
          scaleX: 0.5,
          fill: '#fff',
          lineWidth: 1,
          stroke: '#99B0F3',
          radius: 2,
          outerBorder: null
        }
      },
      rail: {
        height: 4,
        width: 100,
        style: {
          fill: '#DCDEE2'
        }
      }
    },
    vertical: {
      ...commonColorLegendTheme,
      handler: {
        style: {
          symbolType: 'rectRound',
          size: 16,
          scaleY: 0.5,
          fill: '#fff',
          lineWidth: 1,
          stroke: '#99B0F3',
          radius: 2,
          outerBorder: null
        }
      },
      rail: {
        width: 4,
        height: 100,
        style: {
          fill: '#DCDEE2'
        }
      }
    }
  }
};
