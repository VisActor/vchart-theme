const cache: Map<string, string> = new Map();
let rootComputedStyle: CSSStyleDeclaration | null = null;

/**
 * Returns the value of CSS variable.
 *
 * @param varName - name of CSS variable, for example --ks-primary-fill or var(--ks-primary-fill).
 */
export function getCSSVariableValue(varName: string): string {
  if (cache.has(varName)) {
    return cache.get(varName)!;
  } else {
    if (!rootComputedStyle) rootComputedStyle = getComputedStyle(document.documentElement);
    let varNameWithoutVarCall = varName;
    if (varName.startsWith('var(')) {
      varNameWithoutVarCall = varName.substring(4, varName.length - 1);
    }
    const value = rootComputedStyle.getPropertyValue(varNameWithoutVarCall);
    cache.set(varNameWithoutVarCall, value);
    cache.set(`var(${varNameWithoutVarCall})`, value);
    return value;
  }
}
