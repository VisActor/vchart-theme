# @visactor/vchart-theme

## Description

The extension themes for [VChart](https://github.com/VisActor/VChart).

The list of themes included here is as follows, with links to the theme JSON files:

<!-- ThemeListBegin -->
<!-- 以下为自动生成 -->
- [arcoDesignLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-semi-theme/public/arcoDesignLight.json) Arco Design - light
- [arcoDesignDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-semi-theme/public/arcoDesignDark.json) Arco Design - dark
<!-- 以上为自动生成 -->
<!-- ThemeListEnd -->

## Usage

Import the full theme map and register them in sequence:

```typescript
import { allThemeMap } from '@visactor/vchart-theme';
import VChart from '@visactor/vchart';

// register themes
allThemeMap.forEach((theme, name) => {
  VChart.ThemeManager.registerTheme(name, theme);
});

// apply a theme
VChart.ThemeManager.setCurrentTheme('vScreenVolcanoBlue');
```

If you only use a specific theme, you can also obtain the specific theme JSON from this package and place it under your project for reference:

```typescript
import vScreenVolcanoBlue from 'xxx'; // your json path
import VChart from '@visactor/vchart';

// register the theme
VChart.ThemeManager.registerTheme('vScreenVolcanoBlue', vScreenVolcanoBlue);

// apply the theme
VChart.ThemeManager.setCurrentTheme('vScreenVolcanoBlue');
```

## Debug

Run the following command from any location in the project to start the dev server:

```
rush theme
```
