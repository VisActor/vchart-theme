import type { IComponentTheme } from '@visactor/vchart';
import { VeOSymbolType } from '../constant';

export const legendTheme: IComponentTheme = {
  discreteLegend: {
    visible: true,
    position: 'start',
    padding: [16, 24],
    title: {
      visible: false
    },
    item: {
      visible: true,
      spaceCol: 10,
      spaceRow: 4,
      padding: 2,
      background: {
        state: {
          selectedHover: {
            fill: { type: 'palette', key: 'hoverBackgroundColor', a: 0.3 } // FIXME: 颜色和 crosshair 不同，需要排查
          },
          unSelectedHover: {
            fill: { type: 'palette', key: 'hoverBackgroundColor', a: 0.3 } // FIXME: 颜色和 crosshair 不同，需要排查
          }
        }
      },
      shape: {
        space: 8,
        style: {
          symbolType: VeOSymbolType.roundSpuare,
          size: 12
        },
        state: { unSelected: { fillOpacity: 0.2, opacity: 1 } }
      },
      label: {
        space: 6,
        style: {
          fill: {
            type: 'palette',
            key: 'secondaryFontColor',
            default: '#89909d'
          },
          fontSize: 14,
          lineHeight: '130%',
          opacity: 1
        },
        state: {
          unSelected: {
            fill: { type: 'palette', key: 'disableFontColor' },
            opacity: 1
          }
        }
      }
    },
    allowAllCanceled: false
  }
};
