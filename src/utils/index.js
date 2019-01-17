import utils from "wzn-utils";
export default {
   promisify : (fn, receiver) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        fn.apply(receiver, [...args, (...args1) => {
          console.log(receiver,'122333')
          return resolve(...args1);
        }]);
        // fn(...args,(...args1) => {
        //   return resolve(...args1);
        // })
      });
    };
  },
  isArray: target => {
    return Object.prototype.toString.call(target) == "[object Array]";
  },
  isFunction: target => {
    return Object.prototype.toString.call(target) == "[object Function]";
  },
  isNumber: target => {
    return Object.prototype.toString.call(target) == "[object Number]";
  },
  isString: target => {
    return Object.prototype.toString.call(target) == "[object String]";
  },
  getRanderSrting: () => {
    return `${Math.random().toString(36).substr(2)}`;
  },
  ...utils
};
