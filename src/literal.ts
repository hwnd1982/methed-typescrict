import { LOCALE, locale, localeOMG, LOCALE_EN, LOCALE_RU } from "./locale";

// Литеральный тип :2
const a = 2;
// Тип number
let b = 2;
// Литеральный тип
let с: 2 | 3 = 2;
с = 3;

type httpMethod = 'GET' | 'POST';

const apiService = (url:string, method: httpMethod) => 
  fetch(url, {
    method,
  });

const method = 'GET';
// Ошибка тип стринг не литеральный!
// let method = 'GET';
apiService('https://jsonplaceholder.typicode.com/posts', method);

{
const translate = (lang: 'ru-RU' | 'en-US', text: string): string=> {
  console.log(`Перевод ${text} на ${lang}`);

  return text;
};

translate('ru-RU', 'text');
translate('en-US', 'текст');
}

{
const translate = (lang: 'ru-RU' | 'en-US', text: string): string=> {
  console.log(`Перевод ${text} на ${lang}`);

  return text;
};

translate(LOCALE_RU, 'text');
translate(LOCALE_EN, 'текст');
}

{
const translate = (lang: localeOMG, text: string): string=> {
  console.log(`Перевод ${text} на ${lang}`);

  return text;
};

translate(LOCALE.RU, 'text');
translate(LOCALE.EN, 'текст');
}

{
const translate = (lang: locale, text: string): string=> {
  console.log(`Перевод ${text} на ${lang}`);

  return text;
};

translate(locale.RU, 'text');
translate(locale.EN, 'текст');
}


{
enum TypeUser {
  admin,
  moderator,
  user,
}

console.log(TypeUser);
console.log(TypeUser[1], TypeUser.moderator);
}

{
enum TypeUser {
  admin = 4,
  moderator,
  user,
}

console.log(TypeUser);
console.log(TypeUser[1], TypeUser.moderator);
}

{
enum TypeUser {
  admin = 4,
  moderator = 1,
  user,
}

console.log(TypeUser);
console.log(TypeUser[1], TypeUser['moderator']);
}

{
enum TypeUser {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
}

console.log(TypeUser);
console.log(TypeUser.moderator);


// Используется как справочник, значение могут быть seccess, process, failed
enum statusCode {
  SUCCESS = 200,
  PROCESS = 100,
  FAILED = 403,
}

const res = {
  message: 'Успех',
  statusCode: statusCode.SUCCESS,
}

if (res.statusCode === statusCode.PROCESS) {
  // preloader
}

if (res.statusCode === statusCode.SUCCESS) {
  // render
}

if (res.statusCode === statusCode.FAILED) {
  // error
}

console.log(statusCode);

}

{
// нельзя вывести в консаль существует только в разработке, компилируются строки.
const enum statusCode {
  SUCCESS = 200,
  PROCESS = 100,
  FAILED = 403,
}

const res = {
  message: 'Успех',
  statusCode: statusCode.SUCCESS,
}

if (res.statusCode === statusCode.PROCESS) {
  // preloader
}

if (res.statusCode === statusCode.SUCCESS) {
  // render
}

if (res.statusCode === statusCode.FAILED) {
  // error
}
}