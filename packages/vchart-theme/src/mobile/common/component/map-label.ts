import type { IComponentTheme } from '@visactor/vchart';

export const mapLabel: IComponentTheme['mapLabel'] = {
  visible: true,
  offset: 12,
  position: 'top',
  space: 10,
  nameLabel: {
    visible: true
  },
  valueLabel: {
    visible: true
  },
  background: {
    visible: true,
    padding: { top: 4, bottom: 4, left: 6, right: 6 }
  },
  leader: {
    visible: false
  }
};
