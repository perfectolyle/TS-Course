// convert to more or less specific
let a = 'hello'; // more specific
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return `${a}${b}`;
};
let myVal = addOrConcat(1, 2, 'add');
let myVal2 = addOrConcat(1, 2, 'concat');
// 10 as string - error
const checkType = 10;
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
export {};
// img.src
// myImg.src
//# sourceMappingURL=main.js.map