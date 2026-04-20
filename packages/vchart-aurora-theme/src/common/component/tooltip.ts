import type { ITooltipTheme } from '@visactor/vchart';

export const tooltip: ITooltipTheme = {
  panel: {
    border: {
      radius: 8
    }
  },
  shape: {
    shapeType: 'circle',
    size: 8
  },
  mark: {
    visible: false // 关闭图元 (mark) 提示
  },
  dimension: {
    visible: true // 保留维度 (dimension) 提示
  }
};
