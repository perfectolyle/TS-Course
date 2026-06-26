// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Jane';

userName = 'Dave';

const add = (a:number, b:number) => {
    return a + b;
};

const logMsg = (message: any)  => {
    console.log(message);
    return message
};


console.log(logMsg(add(1, 2)));

let subtract = function (a: number, b: number) {
    return a - b;
};

logMsg(subtract(1, 2));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
// }

let multiply: mathFunction = (a, b) => {
    return a * b;
};

logMsg(multiply(5, 10));


// optional parameters

const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));

// default parameters

const sumAll = (a: number, b: number, c: number = 2) => {
    return a + b + c;
};

logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 3));


// rest parameters

const total = (...nums: number[]) => {
    return nums.reduce((prev, current) => prev + current);
};

logMsg(total(1, 2, 3, 4, 10));

const createError = (errMsg: string) => {
    throw new Error(errMsg);
};

const numberOrString = (value: number | string ): string => {
    if (typeof value === 'number') {
        return 'number';
    }
    return 'string';
}
