export const city: string[] = ['Томск', 'Новосибирск', 'Юрга','Кемерово'];
export const counter: number[] = [25, 14, 74, 12];
export const arrAnyStrict: (string | number | boolean)[] = [15, 'react', true];
export const arrTuple: [number, string, boolean] = [15, 'react', true];
export const arrTupleReadOnly: readonly [number, string, boolean] = [15, 'react', true];
export const arrObj: {
  name: string,
  age: number,
}[] = [{name: 'Кирилл', age: 40}, {name: 'Макс', age: 35}];