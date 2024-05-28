import type { IComponentTheme } from '@visactor/vchart-types';

export const axis: Pick<
  IComponentTheme,
  'axis' | 'axisAngle' | 'axisBand' | 'axisLinear' | 'axisRadius' | 'axisX' | 'axisY'
> = {
  axis: {
    domainLine: {
      visible: true,
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'axisDomainColor' }
      }
    },
    grid: {
      visible: true,
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'axisGridColor' },
        lineDash: [4, 4]
      }
    },
    subGrid: {
      visible: false,
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'axisGridColor' },
        lineDash: [4, 4]
      }
    },
    tick: {
      visible: true,
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'blackColors25' }
      }
    },
    subTick: {
      visible: false,
      tickSize: 2,
      style: {
        lineWidth: 1,
        stroke: { type: 'palette', key: 'blackColors15' }
      }
    },
    label: {
      visible: true,
      space: 8,
      style: {
        fontSize: 12,
        fill: { type: 'palette', key: 'blackColors45' },
        fontWeight: 'normal',
        fillOpacity: 1
      }
    },
    title: {
      visible: false,
      style: {
        fill: { type: 'palette', key: 'blackColors65' },
        fontSize: 12,
        lineHeight: 12
      }
    }
  }
};
