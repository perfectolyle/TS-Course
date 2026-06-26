type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello'; // more specific
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';


const addOrConcat = (a: number, b: number, c: 'add' | 'concat') => {
    if(c === 'add') return a + b;
    return `${a}${b}`;
};


let myVal: string = addOrConcat(1, 2, 'add') as string;
let myVal2: number = addOrConcat(1, 2, 'concat') as number;

// 10 as string - error
const checkType = 10 as unknown as string;
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;

// img.src
// myImg.src