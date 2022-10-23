import { product } from "./modules/product";
import { calcTotalPrice } from "./modules/calc";
import { arrTuple, city } from "./modules/const";
import { car, totalVerdict } from "./modules/car";

const result: string = calcTotalPrice(product);
const route = city.filter(item => item !== 'Юрга')
  .map(item => item.toLocaleUpperCase())
  .reduce((acc, item) => acc + ' >> ' + item);
const carResult = totalVerdict(car);

arrTuple[0] = 25;

console.log(result);
console.log(arrTuple[0]);
console.log(route);
console.log(carResult);


{
// Errors

// тут пропускает не соотвествующий типу элемента!!! Нет ошибки;
arrTuple.unshift('тест');
console.log(arrTuple[0]);

// const route = city.filter(item => item !== 'Юрга')
//   .map(item => {})
//   .reduce((acc, item) => acc + ' >> ' + item);

// А так нельзя
// arrAnyTuple[0] = 'тест';

// Ошибка нельзя поменять данные
// arrTupleReadOnly[0] = 25;
}
