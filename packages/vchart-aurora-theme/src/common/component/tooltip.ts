import type { ITooltipTheme } from '@visactor/vchart';

export const tooltip: ITooltipTheme = {
  offset: { x: 16, y: 16 },
  panel: {
    padding: { top: 12, left: 12, right: 12, bottom: 12 },
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
      radius: 3
    },
    shadow: {
      x: 0,
      y: 0,
      blur: 10,
      spread: 0,
      color: '#aeaeae'
    }
  },
  spaceRow: 12,
  titleLabel: {
    fontSize: 12,
    lineHeight: 12,
    fontColor: '#1D1D2E',
    fontWeight: '500',
    textAlign: 'left',
    textBaseline: 'middle',
    spacing: 0
  },
  shape: { size: 8, spacing: 8 },
  keyLabel: {
    fontSize: 12,
    lineHeight: 12,
    fontColor: {
      type: 'palette',
      key: 'blackColors65'
    } as any,
    textAlign: 'left',
    textBaseline: 'middle',
    spacing: 12
  },
  valueLabel: {
    fontSize: 12,
    lineHeight: 12,
    fontColor: {
      type: 'palette',
      key: 'blackColors65'
    } as any,
    fontWeight: 'normal',
    textBaseline: 'middle',
    spacing: 0
  }
};
