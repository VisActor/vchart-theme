const styleProperties = new Map();
const bodyAttributes = new Map();

const style = {
  setProperty(name, value) {
    styleProperties.set(name, value);
  },
  removeProperty(name) {
    styleProperties.delete(name);
  }
};

const body = {
  hasAttribute(name) {
    return bodyAttributes.has(name);
  },
  getAttribute(name) {
    return bodyAttributes.get(name) || null;
  },
  setAttribute(name, value) {
    bodyAttributes.set(name, value);
  },
  removeAttribute(name) {
    bodyAttributes.delete(name);
  }
};

global.document = {
  body,
  documentElement: {
    style
  }
};

global.MutationObserver = class MutationObserver {
  observe() {}
  disconnect() {}
};

global.getComputedStyle = () => ({
  getPropertyValue(name) {
    return styleProperties.get(name) || '';
  }
});
