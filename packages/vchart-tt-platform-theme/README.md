# @visactor/vchart-tt-platform-theme

## Description

The extension TT Platform themes for [VChart](https://github.com/VisActor/VChart).

## Installing and Using VChart

In React projects, you can use the following command to install react-vchart:

```bash
# npm
npm install @visactor/react-vchart
# yarn
yarn add @visactor/react-vchart
```

The method of drawing charts and more detailed guidance can be found in [this tutorial](https://visactor.io/vchart/guide/tutorial_docs/Cross-terminal_and_Developer_Ecology/react).

## Chart Theme Package for TikTok Platform Design

### Dynamic Theme (RECOMMENDED solution, to be used in conjunction with `@semi-bot/semi-theme-ttpd-internal`)

In order to provide a better experience for VChart in the TikTok platform page environment, VisActor has launched an additional theme package called `@visactor/vchart-tt-platform-theme`. This package has the following features:

- Ready to use out of the box: With simple configuration, VChart styles can be automatically integrated into the TikTok platform design language and also automatically adapted to theme packages customized by users through Semi DSM.
- Responsive: `@visactor/vchart-tt-platform-theme` supports listening for changes of light/dark mode and theme switching on the page, and automatically updates the theme of the charts on the page.

#### DEMO

For a complete demo, please visit the [codeSandBox page](https://t8fxl7-5173.csb.app/).

#### Installation

[https://www.npmjs.com/package/@visactor/vchart-tt-platform-theme](https://www.npmjs.com/package/@visactor/vchart-tt-platform-theme)

```bash
# npm
npm install @visactor/vchart-tt-platform-theme

# yarn
yarn add @visactor/vchart-tt-platform-theme
```

#### Usage

To access the default functionality, simply execute the `initVChartTTPlatformTheme` method once globally for initialization. This statement can usually be placed in the entry file of a React project. As an example:

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import { initVChartTTPlatformTheme } from '@visactor/vchart-tt-platform-theme';

// initialization
initVChartTTPlatformTheme();

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<App />);
```

The `initVChartTTPlatformTheme` method supports passing in an object as a parameter, whose type declaration is:

```typescript
interface IInitVChartTTPlatformThemeOption {
  /** Initial light/dark mode */
  defaultMode?: 'light' | 'dark';
  /** Whether to listen for the light/dark mode switching and automatically change the chart theme. The default setting is true */
  isWatchingMode?: boolean;
  /** Whether to listen for theme switching and automatically change the chart theme. The default setting is false (applicable to the official theme switching interface of Semi: https://semi.design/dsm/install_switcher) */
  isWatchingThemeSwitch?: boolean;
  /** Specify a ThemeManager, usually not specified. If multiple versions of vchart coexist, it needs to be specified */
  themeManager?: typeof ThemeManager;
}
```

### Static Theme (Suitable for business parties who do not currently install `@semi-bot/semi-theme-ttpd-internal`, or semi version<2.53.0)

`@visactor/vchart-tt-platform-theme` also exports static themes in JSON format, with built-in default style values for TikTok Platform Design, eliminating the need for business parties to install `@semi-bot/semi-theme-ttpd-internal`.

#### Installation

[https://www.npmjs.com/package/@visactor/vchart-tt-platform-theme](https://www.npmjs.com/package/@visactor/vchart-tt-platform-theme)

```bash
# npm
npm install @visactor/vchart-tt-platform-theme

# yarn
yarn add @visactor/vchart-tt-platform-theme
```

#### Usage

Directly import the JSON file corresponding to the theme from the package, and globally execute it only once:

```ts
import ttPlatformLight from '@visactor/vchart-tt-platform-theme/public/ttPlatformLight.json';
import VChart from '@visactor/vchart';
// register the theme
VChart.ThemeManager.registerTheme('ttPlatformLight', ttPlatformLight);
// apply the theme
VChart.ThemeManager.setCurrentTheme('ttPlatformLight');
```

#### Static resources

This package contains both static theme JSON resources (static resources only apply to the default Semi theme), which can be used on demand.

<!-- ThemeListBegin -->
<!-- 以下为自动生成 -->

- [ttPlatformLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-tt-platform-theme/public/ttPlatformLight.json) TT Platform - light
- [ttPlatformDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-tt-platform-theme/public/ttPlatformDark.json) TT Platform - dark
  <!-- 以上为自动生成 -->
  <!-- ThemeListEnd -->

## Debug

Run the following command from any location in the project to start the dev server:

```bash
rush tt
```
