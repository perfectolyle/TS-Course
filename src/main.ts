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

