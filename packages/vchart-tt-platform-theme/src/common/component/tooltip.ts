import type { ITooltipTheme } from '@visactor/vchart';

export const tooltip: ITooltipTheme = {
  offset: { x: 16, y: 16 },
  panel: {
    padding: { top: 20, left: 20, right: 20, bottom: 20 },
    backgroundColor: {
      type: 'palette',
      key: 'popupBackgroundColor'
    } as any,
    border: {
      color: {
        type: 'palette',
        key: 'popupBackgroundColor'
      } as any,
      width: 0,
      radius: 6
    },
    shadow: {
      x: 0,
      y: 4,
      blur: 14,
      spread: 0,
      color: {
        type: 'palette',
        key: 'shadowColor'
      } as any
    }
  },
  spaceRow: 8,
  titleLabel: {
    fontSize: 14,
    lineHeight: '150%',
    fontColor: {
      type: 'palette',
      key: 'primaryFontColor'
    } as any,
    fontWeight: 'bold',
    textAlign: 'left',
    textBaseline: 'middle',
    spacing: 0
  },
  shape: { size: 8, spacing: 8 },
  keyLabel: {
    fontSize: 14,
    lineHeight: '150%',
    fontColor: {
      type: 'palette',
      key: 'secondaryFontColor'
    } as any,
    textAlign: 'left',
    textBaseline: 'middle',
    spacing: 32
  },
  valueLabel: {
    fontSize: 14,
    lineHeight: '150%',
    fontColor: {
      type: 'palette',
      key: 'primaryFontColor'
    } as any,
    fontWeight: 'bold',
    textBaseline: 'middle',
    spacing: 0
  }
};
