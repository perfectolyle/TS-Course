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
export {};
//# sourceMappingURL=main.js.map