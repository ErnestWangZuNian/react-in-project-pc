import utils from 'wzn-utils';
export default {
    isArray: (target) => {
        return Object.prototype.toString.call(target)=='[object Array]';
    },
    isFunction: (target) => {
        return Object.prototype.toString.call(target)=='[object Function]';
    },
    isNumber: (target) => {
        return Object.prototype.toString.call(target)=='[object Number]';
    },
    isString: (target) => {
        return Object.prototype.toString.call(target)=='[object String]';
    },
    ...utils
}