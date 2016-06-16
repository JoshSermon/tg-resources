
export const isArray = Array.isArray || function (value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export const hasValue = function (value) {
    return typeof value !== 'undefined' && value !== null;
};

export const isFunction = function(value) {
    return (typeof window !== 'undefined' && value === window.alert) || Object.prototype.toString.call(value) === '[object Function]';
};

export const isObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
};

export const isString = function (value) {
    return Object.prototype.toString.call(value) === '[object String]';
};
