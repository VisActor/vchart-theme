// eslint-disable-next-line no-duplicate-imports
import type { IContinuousLegendTheme, ISizeLegendTheme } from '@visactor/vchart-types';
import { DEFAULT_CONTINUOUS_LEGEND_THEME } from './continuous';

const getHandlerTheme = (align?: 'top' | 'bottom' | 'left' | 'right'): IContinuousLegendTheme['handler'] => ({
  style: {
    symbolType: getSizeHandlerPath(align),
    fill: '#fff',
    lineWidth: 1,
    size: 10,
    stroke: '#ccc',
    outerBorder: false
  }
});

export const sizeLegend: ISizeLegendTheme = {
  horizontal: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    sizeBackground: {
      fill: '#cdcdcd'
    },
    track: {
      style: {
        fill: 'rgba(20,20,20,0.1)'
      }
    },
    rail: {
      width: 200,
      height: 4,
      style: {
        fill: 'rgba(0,0,0,0.04)'
      }
    },
    handler: getHandlerTheme('top')
  },
  vertical: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    sizeBackground: {
      fill: '#cdcdcd'
    },
    track: {
      style: {
        fill: 'rgba(20,20,20,0.1)'
      }
    },
    rail: {
      width: 4,
      height: 200,
      style: {
        fill: 'rgba(0,0,0,0.04)'
      }
    },
    handler: getHandlerTheme('right')
  }
};

export function getSizeHandlerPath(align: 'top' | 'bottom' | 'left' | 'right' = 'bottom') {
  let centerX = 0;
  const centerY = 0;
  const upperHalf = 3.5;
  const leftHalf = 2.5;
  const arrowY = 6;

  if (align === 'top') {
    return `
    M${centerX},${centerY - arrowY}L${centerX - upperHalf},${centerY - leftHalf}
    v${2 * leftHalf}
    h${2 * upperHalf}
    v${-2 * leftHalf}
    Z
`;
  }

  if (align === 'left') {
    centerX = 1;
    return `
    M${centerX - arrowY},${centerY}L${centerX - arrowY + leftHalf},${centerY - upperHalf}
    h${2 * leftHalf}
    v${2 * upperHalf}
    h${-2 * leftHalf}
    Z
`;
  }

  if (align === 'right') {
    centerX = -1;

    return `
    M${centerX + arrowY},${centerY}L${centerX + arrowY - leftHalf},${centerY - upperHalf}
    h${-2 * leftHalf}
    v${2 * upperHalf}
    h${2 * leftHalf}
    Z
  `;
  }

  return `
    M${centerX},${centerY + arrowY}L${centerX - upperHalf},${centerY + leftHalf}
    v${-2 * leftHalf}
    h${2 * upperHalf}
    v${2 * leftHalf}
    Z
`;
}
