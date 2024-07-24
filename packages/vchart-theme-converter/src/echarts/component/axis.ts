import type { IEChartsTheme } from './../index';
import type { IAxisCommonTheme, ITheme } from '@visactor/vchart';
import { isValid, merge } from '@visactor/vutils';
import { axisLineStyleMap, labelStyleMap } from '../convertMap';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';

export function toEChartsAxis(component: ITheme['component'], theme: ITheme) {
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
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.axisLine.show = visible;
    }
  }

  if (grid) {
    const { visible, style } = grid;
    categoryAxis.splitLine = {
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.splitLine.show = visible;
    }
  }

  if (subGrid) {
    const { visible, style } = subGrid;
    categoryAxis.minorSplitLine = {
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.minorSplitLine.show = visible;
    }
  }

  if (label) {
    const { visible, style, space } = label;
    categoryAxis.axisLabel = {
      margin: space,
      ...convertToItemStyle(style, labelStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.axisLabel.show = visible;
    }
  }

  if (tick) {
    const { visible, style, tickSize, alignWithLabel } = tick;
    categoryAxis.axisTick = {
      alignWithLabel,
      length: tickSize,
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.axisTick.show = visible;
    }
  }

  if (subTick) {
    const { visible, style, tickSize, tickCount } = subTick;
    categoryAxis.minorTick = {
      length: tickSize,
      splitNumber: tickCount,
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      categoryAxis.minorTick.show = visible;
    }
  }

  if (title) {
    const { style, space, position } = title;
    categoryAxis.nameLocation = position ?? 'middle';
    // nameGap 是标题到轴线的距离
    categoryAxis.nameGap = space + (categoryAxis.axisLabel?.margin ?? 0) + (categoryAxis.axisTick?.length ?? 0);
    categoryAxis.nameTextStyle = convertToItemStyle(style, labelStyleMap, theme);
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
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.axisLine.show = visible;
    }
  }

  if (grid) {
    const { visible, style } = grid;
    valueAxis.splitLine = {
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.splitLine.show = visible;
    }
  }

  if (subGrid) {
    const { visible, style } = subGrid;
    valueAxis.minorSplitLine = {
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.minorSplitLine.show = visible;
    }
  }

  if (label) {
    const { visible, style, space } = label;
    valueAxis.axisLabel = {
      margin: space,
      ...convertToItemStyle(style, labelStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.axisLabel.show = visible;
    }
  }

  if (tick) {
    const { visible, style, tickSize, alignWithLabel } = tick;
    valueAxis.axisTick = {
      alignWithLabel,
      length: tickSize,
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.axisTick.show = visible;
    }
  }

  if (subTick) {
    const { visible, style, tickSize, tickCount } = subTick;
    valueAxis.minorTick = {
      length: tickSize,
      splitNumber: tickCount,
      lineStyle: convertToItemStyle(style, axisLineStyleMap, theme)
    };
    if (isValid(visible)) {
      valueAxis.minorTick.show = visible;
    }
  }

  if (title) {
    const { style, space, position } = title;
    valueAxis.nameLocation = position ?? 'middle';
    // nameGap 是标题到轴线的距离
    valueAxis.nameGap = space + (valueAxis.axisLabel?.margin ?? 0) + (valueAxis.axisTick?.length ?? 0);
    valueAxis.nameTextStyle = convertToItemStyle(style, labelStyleMap, theme);
  }

  return valueAxis;
}

export function toVChartAxis(echartsTheme: IEChartsTheme): Partial<ITheme['component']> {
  if (!echartsTheme) {
    return {};
  }
  const { categoryAxis = {}, valueAxis = {} } = echartsTheme;
  const axis = (axisConfig: any): IAxisCommonTheme => {
    return {
      domainLine: {
        visible: axisConfig.axisLine?.show,
        style: convertToVChartGraphicStyle(axisConfig.axisLine?.lineStyle, axisLineStyleMap)
      },
      tick: {
        visible: axisConfig.axisTick?.show,
        style: convertToVChartGraphicStyle(axisConfig.axisTick?.lineStyle, axisLineStyleMap)
      },
      label: {
        visible: axisConfig.axisLabel?.show,
        style: convertToVChartGraphicStyle(axisConfig.axisLabel, labelStyleMap)
      },
      grid: {
        visible: axisConfig.splitLine?.show,
        style: convertToVChartGraphicStyle(axisConfig.splitLine?.lineStyle, axisLineStyleMap)
      },
      title: {
        visible: axisConfig.nameTextStyle?.show,
        style: convertToVChartGraphicStyle(axisConfig.nameTextStyle, labelStyleMap)
      }
    };
  };
  const axisBand: IAxisCommonTheme = axis(categoryAxis);
  const axisLinear: IAxisCommonTheme = axis(valueAxis);

  return { axisBand, axisLinear };
}
