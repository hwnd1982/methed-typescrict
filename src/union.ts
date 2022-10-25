let count: number | void;
let obj: {} | null = null;

count = 1;
obj = {
  name: 'Кирилл',
  age: 40,
};

const logger = (id: string | number): void => {
  // сужение типов
  if (typeof id === 'string') {
    console.log(id.toLocaleUpperCase());
  }

  return undefined;
};

const loggerObj = (obj: {a: number} | {b: number}) => {
  // сужение типов
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
};

const loggerError = (err: string[] | string | Error) => {
  if (Array.isArray(err)) {
    for (const str of err) {
      console.log(str);
    }
  } else if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err.toLocaleUpperCase());
  }
};

const error = (err: string): never => {
  throw new Error(err);
};

const hole: null = null;
const vacuunFirst: undefined = undefined;
// не очень правильно, но нет ошибки
const vacuunSecond: void = undefined;