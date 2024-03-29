import type { IColorSchemeStruct, ITheme, IThemeColorScheme, ProgressiveDataScheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import { ThemeManager } from '@visactor/vchart';
import type { DataSchemeTokenMap, PaletteTokenMap, ThemeMode, IInitThemeOption, IThemeQueryOption } from './interface';
import { generateDataScheme, generatePalette } from './generator';
import { observeAttribute } from './utils';

export abstract class VChartExtendThemeHelper {
  abstract themeModeAttribute: string;
  abstract themeNamePrefix: string;

  abstract baseTheme: Record<ThemeMode, ITheme>;

  abstract tokenMap: {
    dataScheme?: DataSchemeTokenMap;
    palette?: PaletteTokenMap;
  };

  getCurrentMode() {
    return document.body.hasAttribute(this.themeModeAttribute) &&
      document.body.getAttribute(this.themeModeAttribute) === 'dark'
      ? 'dark'
      : 'light';
  }

  generateThemeName(option?: IThemeQueryOption) {
    const mode = option?.mode ?? this.getCurrentMode();
    return `${this.themeNamePrefix}${mode[0].toUpperCase()}${mode.slice(1)}`;
  }

  generateTheme(option?: IThemeQueryOption, chartContainer?: HTMLElement): ITheme {
    const mode = option?.mode ?? this.getCurrentMode();
    const baseTheme = this.baseTheme[mode];
    const { dataScheme, palette } = baseTheme.colorScheme.default as IColorSchemeStruct;
    const colorScheme: IThemeColorScheme = {
      default: {
        dataScheme: generateDataScheme(
          mode,
          this.tokenMap.dataScheme,
          dataScheme as ProgressiveDataScheme<string>,
          chartContainer
        ),
        palette: generatePalette(mode, this.tokenMap.palette, palette, chartContainer)
      }
    };
    return {
      ...baseTheme,
      colorScheme
    };
  }

  options: IInitThemeOption;
  themeManager: typeof ThemeManager;

  constructor(options: IInitThemeOption) {
    this.options = options;
    this.themeManager = options.themeManager ?? ThemeManager;
  }

  init() {
    const { defaultMode, isWatchingMode = true } = this.options ?? {};

    this.switchVChartTheme(false, {
      mode: defaultMode
    });

    if (isWatchingMode) {
      observeAttribute(document.body, this.themeModeAttribute, () => this.switchVChartTheme());
    }
  }

  switchVChartTheme(force?: boolean, option?: IThemeQueryOption, theme?: ITheme) {
    const themeName = this.generateThemeName(option);
    if (!force && this.themeManager.getCurrentTheme() === themeName) {
      return;
    } else if (force) {
      this.themeManager.removeTheme(themeName);
    }
    if (!this.themeManager.themeExist(themeName)) {
      const newTheme = theme ?? this.generateTheme(option);
      this.themeManager.registerTheme(themeName, newTheme);
    }
    this.themeManager.setCurrentTheme(themeName);
  }
}
