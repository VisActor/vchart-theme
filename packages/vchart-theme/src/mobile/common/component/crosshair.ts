import type { ICrosshairTheme } from '@visactor/vchart';
import type { ICrosshairLabelSpec } from '@visactor/vchart-types/types/component/crosshair';

const getLabelSpec = (): ICrosshairLabelSpec => ({
  visible: false,
  labelBackground: {
    padding: {
      bottom: 0,
      top: 0,
      left: 2,
      right: 2
    }
  }
});

const getBandField = (): ICrosshairTheme['bandField'] => ({
  visible: false,
  label: getLabelSpec() as any
});

const getLinearField = (): ICrosshairTheme['linearField'] => ({
  visible: false,
  label: getLabelSpec() as any
});

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: getBandField(),
  linearField: getLinearField()
};
