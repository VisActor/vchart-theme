import { getCSSVariableValue, ks } from '../src/design-tokens';
import { getBarTheme, getTheme, theme } from '../src/common';
import {
  allThemeMap,
  initVChartKeystoneTheme,
  keystoneDesignDark,
  keystoneDesignLight,
  VChartKeystoneThemeHelper
} from '../src';

describe('vchart-keystone-theme design tokens', () => {
  beforeEach(() => {
    document.documentElement.style.setProperty('--ks-test-color', '#123456');
  });

  afterEach(() => {
    document.documentElement.style.removeProperty('--ks-test-color');
  });

  it('exports the Keystone token snapshot', () => {
    expect(ks.ref.color.neutral[500]).toBe('var(--ks-ref-color-neutral-500, #87898b)');
  });

  it('reads CSS variables by raw variable name', () => {
    expect(getCSSVariableValue('--ks-test-color').trim()).toBe('#123456');
  });

  it('reads cached CSS variables by var() call syntax', () => {
    expect(getCSSVariableValue('var(--ks-test-color)').trim()).toBe('#123456');
  });

  it('caches no-DOM fallback values for raw and var() names', () => {
    const originalDocument = global.document;
    const originalGetComputedStyle = global.getComputedStyle;

    try {
      (global as any).document = undefined;
      (global as any).getComputedStyle = undefined;

      jest.isolateModules(() => {
        const { getCSSVariableValue: getIsolatedCSSVariableValue } = require('../src/design-tokens/getCSSVariableValue');

        expect(getIsolatedCSSVariableValue('--ks-no-dom-cache')).toBe('var(--ks-no-dom-cache)');

        (global as any).document = originalDocument;
        (global as any).getComputedStyle = originalGetComputedStyle;
        document.documentElement.style.setProperty('--ks-no-dom-cache', '#abcdef');

        expect(getIsolatedCSSVariableValue('var(--ks-no-dom-cache)').trim()).toBe('var(--ks-no-dom-cache)');
      });
    } finally {
      (global as any).document = originalDocument;
      (global as any).getComputedStyle = originalGetComputedStyle;
      document.documentElement.style.removeProperty('--ks-no-dom-cache');
    }
  });
});

describe('vchart-keystone-theme common theme utilities', () => {
  it('exports the Keystone chart theme defaults', () => {
    expect(theme.component?.axis?.label?.style?.fontFamily).toBe('TikTok Sans Text');
    expect(theme.component?.discreteLegend?.item?.shape?.style?.symbolType).toBe('circle');
    expect(theme.chart?.pie?.mark?.arc?.style?.padAngle).toBe(0.01);
    expect(theme.markByName?.area?.style?.fillOpacity).toBe(0.2);
  });

  it('creates a theme with legend size and RTL settings', () => {
    const rtlTheme = getTheme({ legendSize: 'lg', isRtl: true });
    expect(rtlTheme.component?.discreteLegend?.position).toBe('start');
    expect(rtlTheme.component?.discreteLegend?.reversed).toBe(true);
    expect(rtlTheme.component?.discreteLegend?.item?.shape?.style?.size).toBe(8);
  });

  it('creates a bar theme with non-stacked corner radius', () => {
    const barTheme = getBarTheme({
      stack: false,
      size: 'md',
      direction: 'vertical',
      legendSize: 'md',
      isRtl: false
    });
    expect(barTheme.markByName?.bar?.style?.cornerRadius).toEqual([4, 4, 0, 0]);
  });
});

describe('vchart-keystone-theme public API', () => {
  it('exports light and dark Keystone themes', () => {
    expect(keystoneDesignLight.name).toBe('keystoneDesignLight');
    expect(keystoneDesignLight.type).toBe('light');
    expect(keystoneDesignLight.description).toBe('Keystone Design - light');
    expect(keystoneDesignLight.component?.axis?.label?.style?.fontFamily).toBe('TikTok Sans Text');

    expect(keystoneDesignDark.name).toBe('keystoneDesignDark');
    expect(keystoneDesignDark.type).toBe('dark');
    expect(keystoneDesignDark.description).toBe('Keystone Design - dark');
    expect(keystoneDesignDark.component?.axis?.label?.style?.fontFamily).toBe('TikTok Sans Text');
  });

  it('exports all themes in allThemeMap', () => {
    expect(allThemeMap.get('keystoneDesignLight')).toBe(keystoneDesignLight);
    expect(allThemeMap.get('keystoneDesignDark')).toBe(keystoneDesignDark);
  });

  it('initializes through the Keystone helper', () => {
    const helper = initVChartKeystoneTheme();
    expect(helper).toBeInstanceOf(VChartKeystoneThemeHelper);
    expect(VChartKeystoneThemeHelper.themeNamePrefix).toBe('keystoneDesign');
  });

  it('generates the Keystone light theme without rewriting its array color scheme', () => {
    const helper = new VChartKeystoneThemeHelper({ isWatchingMode: false });
    const generatedTheme = helper.generateTheme({ mode: 'light' });
    const generatedDefaultColorScheme = generatedTheme.colorScheme?.default;

    expect(generatedDefaultColorScheme).toBe(keystoneDesignLight.colorScheme?.default);
    expect(Array.isArray(generatedDefaultColorScheme)).toBe(true);
    expect(generatedDefaultColorScheme).toHaveLength(9);
    expect(generatedDefaultColorScheme).toEqual(
      Array.from({ length: 9 }, (_, index) => getCSSVariableValue(`--ks-color-data-data${index + 1}-fill`))
    );
  });
});
