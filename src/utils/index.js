import wznUtils from 'wzn-utils';

const util = {
  ...wznUtils,
  isArray: target => Object.prototype.toString.call(target) === '[object Array]',
  isFunction: target => Object.prototype.toString.call(target) === '[object Function]',
  isBoolean: target => Object.prototype.toString.call(target) === '[object Boolean]',
  isObject: target => Object.prototype.toString.call(target) === '[object Object]',
  isEmoptyObject: (target) => {
    let result = false;
    if (!Object.keys(target).length) {
      result = true;
    }
    return result;
  },
  isNumber: target => Object.prototype.toString.call(target) === '[object Number]',
  isString: target => Object.prototype.toString.call(target) === '[object String]',
  getRandomString: () => `${Math.random()
    .toString(36)
    .substr(2)}`,
  // equalValue: (a, b) => {
  //   const aProps = Object.getOwnPropertyNames(a);
  //   const bProps = Object.getOwnPropertyNames(b);
  //   let result = true;
  //   if (aProps.length !== bProps.length) {
  //     result = false;
  //   } else {
  //     aProps.map((item) => {
  //       if (typeof a[item] === 'object') {
  //         if (a[item] === null || a[item] === undefined) {
  //         } else {
  //           result = util.equalValue(a[item], b[item]);
  //         }
  //       } else if (a[item] !== b[item]) {
  //         result = false;
  //       }
  //     });
  //   }

  //   return result;
  // },
  // deleteValue: (targetArray, value) => {
  //   targetArray = targetArray.filter((item) => {
  //     if (typeof value === 'object') {
  //       return util.equalValue(item, value) === false;
  //     }
  //     return item !== value;
  //   });
  //   return targetArray;
  // },
  //
};
export default util;
