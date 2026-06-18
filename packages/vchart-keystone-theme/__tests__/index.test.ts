import { getCSSVariableValue, ks } from '../src/design-tokens';
import { getBarTheme, getTheme, theme } from '../src/common';

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
