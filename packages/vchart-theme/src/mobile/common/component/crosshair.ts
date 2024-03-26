import type { ICrosshairTheme } from '@visactor/vchart-types';
import type {
  ICrosshairCategoryFieldSpec,
  ICrosshairLabelSpec,
  ICrosshairValueFieldSpec
} from '@visactor/vchart-types/types/component/crosshair';

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

const getBandField = (): ICrosshairCategoryFieldSpec => ({
  visible: false,
  label: getLabelSpec()
});

const getLinearField = (): ICrosshairValueFieldSpec => ({
  visible: false,
  label: getLabelSpec()
});

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: getBandField(),
  linearField: getLinearField()
};
