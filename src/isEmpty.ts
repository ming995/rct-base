/**
 * @author ming995
 * @description 判空
 */

/**
 * @description 判断对象是否为空，空对象返回true否则返回false
 * @param obj 对象
 */
export const isEmptyObj = (obj: object) => {
  let result = false;
  Object.keys(obj).length === 0 ? (result = true) : (result = false);
  return result;
};
