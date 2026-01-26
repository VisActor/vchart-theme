import type { IMarkAreaTheme } from '@visactor/vchart';

export const markArea: IMarkAreaTheme = {
  area: {
    style: {
      fill: { type: 'palette', key: 'blackColors100', a: 0.06 }
    }
  },
  label: {
    style: {
      fontSize: { type: 'token', key: 'l5FontSize' },
      fill: { type: 'palette', key: 'blackColors65' }
    },
    labelBackground: {
      visible: false
    }
  }
};
