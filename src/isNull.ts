/**
 * @description 判断是否为null
 * @param target
 */
export const isNull = (target: any) => {
  let result = false;
  target === null ? (result = true) : (result = false);
  return result;
};
