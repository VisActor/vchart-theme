# @visactor/vchart-keystone-theme

Keystone Design theme package for VChart.

This package provides standard VChart themes based on the Keystone chart theme configuration. The chart theme source of truth is the Keystone chart theme package in the Byted Web Components repository. This package includes a Keystone design-token snapshot so it can be published externally without depending on internal packages.

## Install

```bash
npm install @visactor/vchart @visactor/vchart-keystone-theme
```

## Usage

```ts
import VChart from '@visactor/vchart';
import { initVChartKeystoneTheme } from '@visactor/vchart-keystone-theme';

initVChartKeystoneTheme();

const spec = {
  type: 'bar',
  data: [
    {
      id: 'data',
      values: [
        { type: 'A', value: 10 },
        { type: 'B', value: 20 }
      ]
    }
  ],
  xField: 'type',
  yField: 'value'
};

const chart = new VChart(spec, { dom: 'chart' });
chart.renderSync();
```

## Optional CSS variables

If your application already provides Keystone CSS variables, no CSS import is required.

If your application does not provide Keystone CSS variables, import the bundled snapshot CSS:

```ts
import '@visactor/vchart-keystone-theme/index.css';
```

The JavaScript entrypoint does not automatically import CSS.

## Direct theme usage

```ts
import { keystoneDesignLight, keystoneDesignDark } from '@visactor/vchart-keystone-theme';
```

## Token snapshot

This package exports a Keystone design-token snapshot for chart theme compatibility:

```ts
import { ks, getCSSVariableValue } from '@visactor/vchart-keystone-theme';
```

These exports are bundled with this theme package and are not intended to replace the Keystone design-token package.

## Scope

This package is a standard VChart theme package. It does not include Keystone chart spec helper APIs such as `createKsBarChartSpec`, `createKsLineChartSpec`, custom DOM tooltip rendering, RTL spec wrapping, or chart data formatting helpers.

## Theme JSON files

<!-- ThemeListBegin -->
<!-- 以下为自动生成 -->
- [keystoneDesignLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-keystone-theme/public/keystoneDesignLight.json) Keystone Design - light
- [keystoneDesignDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-keystone-theme/public/keystoneDesignDark.json) Keystone Design - dark
<!-- 以上为自动生成 -->
<!-- ThemeListEnd -->
