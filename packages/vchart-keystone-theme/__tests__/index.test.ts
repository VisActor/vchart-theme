import { getCSSVariableValue, ks } from '../src/design-tokens';

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
