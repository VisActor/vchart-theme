# @visactor/vchart-theme-converter

## Description

This plugin currently supports the mutual conversion between VChart themes and ECharts themes.
Currently supported features include():

- series theme config: line/area/bar/pie/funnel
- component theme config: axis/crosshair/tooltip/title/discreteLegend

It is important to note that the theme conversion tool cannot completely cover the visual differences between the two chart libraries.

## Usage

```typescript
import { echartsToVChart, vchartToEcharts } from '@visactor/vchart-theme-converter';
import { VChart } from '@visactor/vchart';


// convert echarts theme to vchart theme
{
  const echartsTheme = {...}
  const vchartTheme = echartsToVChart(echartsTheme);
}

// convert vchart runtime theme to echarts theme
{
  const vchartTheme = VChart.ThemeManager.getCurrentTheme()
  const echartsTheme = vchartToEcharts(echartsTheme);
}

// convert custom vchart theme to echarts theme
{
  /**
   * When registering a custom VChart theme, it merges with the default theme to form a complete theme
   * configuration;
   * Therefore, it is recommended to register the custom theme first and obtain the complete theme configuration
   * before converting a custom VChart theme.
   */
  const vchartTheme = {...};
  VChart.ThemeManager.registerTheme('myTheme', vchartTheme);
  const echartsTheme = vchartToEcharts(VChart.ThemeManager.getTheme('myTheme'));
}
```
