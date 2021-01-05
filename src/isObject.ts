/**
 * @description 判断是否是Object类型, true为Object类型否则为false
 * @param target 类型未知
 */
export const isObject = (target: any) => {
  let result = false;
  Object.prototype.toString.call(target) === "[object, Object]"
    ? (result = true)
    : (result = false);
  return result;
};
