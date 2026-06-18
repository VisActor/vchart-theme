const styleProperties = new Map();

const style = {
  setProperty(name, value) {
    styleProperties.set(name, value);
  },
  removeProperty(name) {
    styleProperties.delete(name);
  }
};

global.document = {
  documentElement: {
    style
  }
};

global.getComputedStyle = () => ({
  getPropertyValue(name) {
    return styleProperties.get(name) || '';
  }
});
