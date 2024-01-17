/** 监听 dom 元素 attribute 更新 */
export const observeAttribute = (
  element: HTMLElement,
  attribute: string,
  callback: (mutation: MutationRecord) => void
) => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === attribute) {
        callback(mutation);
      }
    });
  });
  observer.observe(element, { attributes: true });
};
