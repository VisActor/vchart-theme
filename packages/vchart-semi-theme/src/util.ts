export * from '@visactor/vchart-theme-utils';

export const observeThemeSwitch = (callback: (mutation: MutationRecord, node: HTMLLinkElement) => void) => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length === 1) {
        const node = mutation.addedNodes[0] as HTMLLinkElement;
        if (node.tagName === 'LINK' && node.getAttribute?.('semi-theme-switcher') === 'true') {
          callback(mutation, node);
        }
      }
    });
  });
  observer.observe(document.body, { childList: true });
};
