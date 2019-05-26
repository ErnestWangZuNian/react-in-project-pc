import wznUtils from 'wzn-utils';

const util = {
  ...wznUtils,
  isArray: target => Object.prototype.toString.call(target) == '[object Array]',
  isFunction: target => Object.prototype.toString.call(target) == '[object Function]',
  isBoolean: target => Object.prototype.toString.call(target) == '[object Boolean]',
  isObject: target => Object.prototype.toString.call(target) == '[object Object]',
  isEmoptyObject: (target) => {
    let result = false;
    if (!Object.keys(target).length) {
      result = true;
    }
    return result;
  },
  isNumber: target => Object.prototype.toString.call(target) == '[object Number]',
  isString: target => Object.prototype.toString.call(target) == '[object String]',
  getRandomString: () => `${Math.random()
    .toString(36)
    .substr(2)}`,
  equalValue: (a, b) => {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
    let result = true;
    if (aProps.length !== bProps.length) {
      result = false;
    } else {
      aProps.map((item) => {
        if (typeof a[item] === 'object') {
          if (a[item] === null || a[item] === undefined) {
          } else {
            result = util.equalValue(a[item], b[item]);
          }
        } else if (a[item] !== b[item]) {
          result = false;
        }
      });
    }

    return result;
  },
  deleteValue: (targetArray, value) => {
    targetArray = targetArray.filter((item) => {
      if (typeof value === 'object') {
        return util.equalValue(item, value) === false;
      }
      return item !== value;
    });
    return targetArray;
  },
  storage: {
    getType: object => Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1],
    setItem: (key, value) => {
      if (
        util.storage.getType(value) === 'Object'
        || util.storage.getType(value) === 'Array'
      ) {
        // 如果是对象
        value = JSON.stringify(value);
      }
      sessionStorage.setItem(key, value);
    },
    getItem: (key) => {
      let value = sessionStorage.getItem(key);
      if (value === null) {
        // 如果不存在
        return false;
      }
      if (
        (value && value.substring(0, 1) === '{')
        || value.substring(0, 1) === '['
      ) {
        value = JSON.parse(value); // 把字符串转为对象
      }
      return value;
    },
    removeItem: (key) => {
      util.storage.getItem(key) && sessionStorage.removeItem(key);
    },
    clear: () => {
      sessionStorage.clear();
    },
  },
};
export default util;
