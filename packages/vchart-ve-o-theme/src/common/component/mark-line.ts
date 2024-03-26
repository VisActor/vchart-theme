import type { IMarkLineTheme } from '@visactor/vchart';
import { VeOSymbolType } from '../constant';

export const markLine: IMarkLineTheme = {
  line: {
    style: {
      lineDash: [3, 3],
      lineWidth: 2,
      stroke: { type: 'palette', key: 'markLineStrokeColor' }
    }
  },
  startSymbol: {
    visible: true,
    symbolType: VeOSymbolType.triangleDown,
    size: 10,
    style: {
      fill: { type: 'palette', key: 'markLineStrokeColor' },
      stroke: null,
      lineWidth: 0
    }
  },
  endSymbol: {
    visible: false,
    symbolType: VeOSymbolType.triangleDown,
    size: 10,
    style: {
      fill: { type: 'palette', key: 'markLineStrokeColor' },
      stroke: null,
      lineWidth: 0
    }
  },
  label: {
    refY: 0,
    style: {
      fontSize: { type: 'token', key: 'l5FontSize' },
      fontWeight: 'normal',
      fontStyle: 'normal',
      fill: { type: 'palette', key: 'primaryFontColor' }
    },
    labelBackground: {
      visible: false
    }
  }
};
