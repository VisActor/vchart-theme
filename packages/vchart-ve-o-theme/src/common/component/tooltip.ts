import type { ITooltipTheme } from '@visactor/vchart';
import { VeOSymbolType } from '../constant';

export const tooltip: ITooltipTheme = {
  offset: { x: 16, y: 16 },
  panel: {
    padding: 12,
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
  spaceRow: 4,
  titleLabel: {
    fontSize: 14,
    lineHeight: '150%',
    fontColor: {
      type: 'palette',
      key: 'tertiaryFontColor'
    } as any,
    fontWeight: 'normal',
    textAlign: 'left',
    textBaseline: 'middle',
    spacing: 0
  },
  shape: {
    size: 10,
    spacing: 6,
    shapeType: VeOSymbolType.roundSpuare
  },
  keyLabel: {
    fontSize: 14,
    lineHeight: '150%',
    fontColor: {
      type: 'palette',
      key: 'secondaryFontColor'
    } as any,
    textAlign: 'left',
    fontWeight: 'normal',
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
    fontWeight: 'normal',
    textBaseline: 'middle',
    spacing: 0
  }
};
