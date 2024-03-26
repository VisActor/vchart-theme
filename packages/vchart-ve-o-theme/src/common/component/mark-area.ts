import type { IMarkAreaTheme } from '@visactor/vchart';
import { VeOColor } from '../constant';

export const markArea: IMarkAreaTheme = {
  area: {
    style: {
      fill: VeOColor.critical,
      fillOpacity: 0.1
    }
  },
  label: {
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
