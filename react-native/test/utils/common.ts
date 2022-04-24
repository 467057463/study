// 延时
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
  
// 获取对象类型
export function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

// 下划线转驼峰
export function toCamel(str) {
  return str.replace(/_([A-z])/g, (_, p1) => {
    return p1.toUpperCase();
  });
}
// 驼峰转下划线
export function toLine(str) {
  return str.replace(/[A-Z]/g, (p1) => {
    return `_${p1.toLowerCase()}`;
  });
}
// 转换 api 为驼峰风格
export function objectToCamel(obj) {
  const type = getType(obj);
  if (type === 'Object') {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [toCamel(key)]: objectToCamel(value),
      }),
      {}
    );
  }
  if (type === 'Array') {
    return obj.map((item) => objectToCamel(item));
  }
  return obj;
}

// 转换 api 驼峰为下划线
export function objectToLine(obj) {
  const type = getType(obj);
  if (type === 'Object') {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [toLine(key)]: objectToLine(value),
      }),
      {}
    );
  }
  if (type === 'Array') {
    return obj.map((item) => objectToLine(item));
  }
  return obj;
}
