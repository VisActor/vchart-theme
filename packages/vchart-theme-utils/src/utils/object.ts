import { get, isNil } from '../vutil';

export const setProperty = <T>(target: T, path: Array<string | number>, value: any): T => {
  if (isNil(path)) {
    return target;
  }
  const key = path[0];
  if (isNil(key)) {
    return target;
  }
  if (path.length === 1) {
    target[key] = value;
    return target;
  }
  if (isNil(target[key])) {
    if (typeof path[1] === 'number') {
      target[key] = [];
    } else {
      target[key] = {};
    }
  }
  return setProperty(target[key], path.slice(1), value);
};

export const getProperty = <T>(target: any, path: Array<string | number>, defaultValue?: T): T => {
  if (isNil(path)) {
    return undefined;
  }
  return get(target, path as string[], defaultValue) as T;
};
