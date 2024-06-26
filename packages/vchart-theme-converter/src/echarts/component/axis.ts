import type { IAxisCommonTheme, ITheme } from '@visactor/vchart';
import { merge } from '@visactor/vutils';
import { covertThemeItem } from '../../util/token';
import { axisLineStyleMap, labelStyleMap, lineStyleMap, postProcessors } from '../convertMap';

export function axisConverter(component: ITheme['component'], theme: ITheme) {
  const axisTheme = {} as any;

  axisTheme.categoryAxis = convertCategoryAxis(component, theme);
  axisTheme.valueAxis = convertLinearAxis(component, theme);
  return axisTheme;
}

function convertCategoryAxis(component: ITheme['component'], theme: ITheme) {
  const { axis, axisBand } = component;

  // TODO: how to process axisX/axisY
  const bandAxisTheme_VChart: IAxisCommonTheme = merge({}, axis, axisBand);
  const { grid, subGrid, domainLine, label, title, tick, subTick } = bandAxisTheme_VChart;
  // @ts-ignore
  const { trimPadding = false } = bandAxisTheme_VChart;
  const categoryAxis = {
    boundaryGap: !trimPadding
  } as any;

  if (domainLine) {
    const { visible, style } = domainLine;
    categoryAxis.axisLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      categoryAxis.axisLine.lineStyle[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (grid) {
    const { visible, style } = grid;
    categoryAxis.splitLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      categoryAxis.splitLine.lineStyle[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (subGrid) {
    const { visible, style } = subGrid;
    categoryAxis.minorSplitLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      categoryAxis.minorSplitLine[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (label) {
    const { visible, style, space } = label;
    categoryAxis.axisLabel = {
      show: visible,
      margin: space
    };
    for (const key in style) {
      categoryAxis.axisLabel[labelStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }
  if (tick) {
    const { visible, style, tickSize, alignWithLabel } = tick;
    categoryAxis.axisTick = {
      show: visible,
      alignWithLabel,
      length: tickSize
    };
    for (const key in style) {
      categoryAxis.axisTick[lineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (subTick) {
    const { visible, style, tickSize, tickCount } = subTick;
    categoryAxis.minorTick = {
      show: visible,
      length: tickSize,
      splitNumber: tickCount
    };
    for (const key in style) {
      categoryAxis.minorTick[lineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (title) {
    const { style, space, position } = title;
    categoryAxis.nameLocation = position ?? 'middle';
    // nameGap 是标题到轴线的距离
    categoryAxis.nameGap = space + (categoryAxis.axisLabel?.margin ?? 0) + (categoryAxis.axisTick?.length ?? 0);
    categoryAxis.nameTextStyle = {};
    for (const key in style) {
      const styleValue = covertThemeItem(style[key], theme);
      if (key === 'lineHeight' && styleValue.includes('%')) {
        // 百分比 lineHeight 在 echarts 不支持
        // TODO: 支持百分比 lineHeight 解析
        // categoryAxis.nameTextStyle.lineHeight = 18; // fontSize * percent
      } else {
        categoryAxis.nameTextStyle[labelStyleMap[key] ?? key] = styleValue;
      }
    }
  }

  return categoryAxis;
}

function convertLinearAxis(component: ITheme['component'], theme: ITheme) {
  const { axis, axisLinear } = component;

  // TODO: how to process axisX/axisY
  const linearAxisTheme_VChart: IAxisCommonTheme = merge({}, axis, axisLinear);
  const { grid, subGrid, domainLine, label, title, tick, subTick } = linearAxisTheme_VChart;
  // @ts-ignore
  const valueAxis = {} as any;

  if (domainLine) {
    const { visible, style } = domainLine;
    valueAxis.axisLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      valueAxis.axisLine.lineStyle[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (grid) {
    const { visible, style } = grid;
    valueAxis.splitLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      valueAxis.splitLine.lineStyle[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (subGrid) {
    const { visible, style } = subGrid;
    valueAxis.minorSplitLine = {
      show: visible,
      lineStyle: {}
    };
    for (const key in style) {
      valueAxis.minorSplitLine[axisLineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (label) {
    const { visible, style, space } = label;
    valueAxis.axisLabel = {
      show: visible,
      margin: space
    };
    for (const key in style) {
      valueAxis.axisLabel[labelStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }
  if (tick) {
    const { visible, style, tickSize, alignWithLabel } = tick;
    valueAxis.axisTick = {
      show: visible,
      alignWithLabel,
      length: tickSize
    };
    for (const key in style) {
      valueAxis.axisTick[lineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (subTick) {
    const { visible, style, tickSize, tickCount } = subTick;
    valueAxis.minorTick = {
      show: visible,
      length: tickSize,
      splitNumber: tickCount
    };
    for (const key in style) {
      valueAxis.minorTick[lineStyleMap[key] ?? key] = covertThemeItem(style[key], theme);
    }
  }

  if (title) {
    const { style, space, position } = title;
    valueAxis.nameLocation = position ?? 'middle';
    // nameGap 是标题到轴线的距离
    valueAxis.nameGap = space + (valueAxis.axisLabel?.margin ?? 0) + (valueAxis.axisTick?.length ?? 0);
    valueAxis.nameTextStyle = {};
    for (const key in style) {
      let styleValue = covertThemeItem(style[key], theme);
      if (key === 'lineHeight') {
        styleValue = postProcessors[key](styleValue);
      }
      valueAxis.nameTextStyle[labelStyleMap[key] ?? key] = styleValue;
    }
  }

  return valueAxis;
}
