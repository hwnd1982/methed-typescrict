"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./modules/product");
const calc_1 = require("./modules/calc");
const const_1 = require("./modules/const");
const car_1 = require("./modules/car");
const result = (0, calc_1.calcTotalPrice)(product_1.product);
const route = const_1.city.filter(item => item !== 'Юрга')
    .map(item => item.toLocaleUpperCase())
    .reduce((acc, item) => acc + ' >> ' + item);
const carResult = (0, car_1.totalVerdict)(car_1.car);
const_1.arrTuple[0] = 25;
console.log(result);
console.log(const_1.arrTuple[0]);
console.log(route);
console.log(carResult);
{
    // Errors
    // тут пропускает не соотвествующий типу элемента!!! Нет ошибки;
    const_1.arrTuple.unshift('тест');
    console.log(const_1.arrTuple[0]);
    // const route = city.filter(item => item !== 'Юрга')
    //   .map(item => {})
    //   .reduce((acc, item) => acc + ' >> ' + item);
    // А так нельзя
    // arrAnyTuple[0] = 'тест';
    // Ошибка нельзя поменять данные
    // arrTupleReadOnly[0] = 25;
}
