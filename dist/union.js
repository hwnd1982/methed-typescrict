"use strict";
let count;
let obj = null;
count = 1;
obj = {
    name: 'Кирилл',
    age: 40,
};
const logger = (id) => {
    // сужение типов
    if (typeof id === 'string') {
        console.log(id.toLocaleUpperCase());
    }
    return undefined;
};
const loggerObj = (obj) => {
    // сужение типов
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
};
const loggerError = (err) => {
    if (Array.isArray(err)) {
        for (const str of err) {
            console.log(str);
        }
    }
    else if (err instanceof Error) {
        console.log(err.message);
    }
    else {
        console.log(err.toLocaleUpperCase());
    }
};
const error = (err) => {
    throw new Error(err);
};
const hole = null;
const vacuunFirst = undefined;
// не очень правильно, но нет ошибки
const vacuunSecond = undefined;
