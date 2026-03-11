import type { ICrosshairTheme } from '@visactor/vchart';

export const crosshair: ICrosshairTheme = {
  xField: {
    line: {
      type: 'rect', // 设置为矩形类型
      style: {
        fill: {
          gradient: 'linear', // 线性渐变
          x0: 0,
          y0: 0,
          x1: 0,
          y1: 1,
          stops: [
            { offset: 0, color: 'rgba(51, 119, 255, 0.1)' },
            { offset: 1, color: 'rgba(118, 164, 255, 0.1)' }
          ]
        }
      }
    }
  }
};
