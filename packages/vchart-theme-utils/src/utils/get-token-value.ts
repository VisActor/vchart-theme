/** 从当前页面环境中读取 token 的值 */
export const getTokenValue = <T>(token: string, defaultValue?: T, chartContainer?: HTMLElement): T | string => {
  const value = getComputedStyle(chartContainer ?? document.body).getPropertyValue(token) || defaultValue;
  if (value && !isNaN(value[0])) {
    return `rgba(${value})`;
  }
  return value;
};
