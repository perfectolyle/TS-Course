let myName;
let userName;
userName = 'Dave';
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
    return message;
};
console.log(logMsg(add(1, 2)));
let subtract = function (a, b) {
    return a - b;
};
logMsg(subtract(1, 2));
// interface mathFunction {
//     (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(5, 10));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));
// default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 3));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4, 10));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const numberOrString = (value) => {
    if (typeof value === 'number') {
        return 'number';
    }
    return 'string';
};
export {};
//# sourceMappingURL=main.js.map