"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("./locale");
// Литеральный тип :2
const a = 2;
// Тип number
let b = 2;
// Литеральный тип
let с = 2;
с = 3;
const apiService = (url, method) => fetch(url, {
    method,
});
const method = 'GET';
// Ошибка тип стринг не литеральный!
// let method = 'GET';
apiService('https://jsonplaceholder.typicode.com/posts', method);
{
    const translate = (lang, text) => {
        console.log(`Перевод ${text} на ${lang}`);
        return text;
    };
    translate('ru-RU', 'text');
    translate('en-US', 'текст');
}
{
    const translate = (lang, text) => {
        console.log(`Перевод ${text} на ${lang}`);
        return text;
    };
    translate(locale_1.LOCALE_RU, 'text');
    translate(locale_1.LOCALE_EN, 'текст');
}
{
    const translate = (lang, text) => {
        console.log(`Перевод ${text} на ${lang}`);
        return text;
    };
    translate(locale_1.LOCALE.RU, 'text');
    translate(locale_1.LOCALE.EN, 'текст');
}
{
    const translate = (lang, text) => {
        console.log(`Перевод ${text} на ${lang}`);
        return text;
    };
    translate(locale_1.locale.RU, 'text');
    translate(locale_1.locale.EN, 'текст');
}
{
    let TypeUser;
    (function (TypeUser) {
        TypeUser[TypeUser["admin"] = 0] = "admin";
        TypeUser[TypeUser["moderator"] = 1] = "moderator";
        TypeUser[TypeUser["user"] = 2] = "user";
    })(TypeUser || (TypeUser = {}));
    console.log(TypeUser);
    console.log(TypeUser[1], TypeUser.moderator);
}
{
    let TypeUser;
    (function (TypeUser) {
        TypeUser[TypeUser["admin"] = 4] = "admin";
        TypeUser[TypeUser["moderator"] = 5] = "moderator";
        TypeUser[TypeUser["user"] = 6] = "user";
    })(TypeUser || (TypeUser = {}));
    console.log(TypeUser);
    console.log(TypeUser[1], TypeUser.moderator);
}
{
    let TypeUser;
    (function (TypeUser) {
        TypeUser[TypeUser["admin"] = 4] = "admin";
        TypeUser[TypeUser["moderator"] = 1] = "moderator";
        TypeUser[TypeUser["user"] = 2] = "user";
    })(TypeUser || (TypeUser = {}));
    console.log(TypeUser);
    console.log(TypeUser[1], TypeUser['moderator']);
}
{
    let TypeUser;
    (function (TypeUser) {
        TypeUser["admin"] = "admin";
        TypeUser["moderator"] = "moderator";
        TypeUser["user"] = "user";
    })(TypeUser || (TypeUser = {}));
    console.log(TypeUser);
    console.log(TypeUser.moderator);
    // Используется как справочник, значение могут быть seccess, process, failed
    let statusCode;
    (function (statusCode) {
        statusCode[statusCode["SUCCESS"] = 200] = "SUCCESS";
        statusCode[statusCode["PROCESS"] = 100] = "PROCESS";
        statusCode[statusCode["FAILED"] = 403] = "FAILED";
    })(statusCode || (statusCode = {}));
    const res = {
        message: 'Успех',
        statusCode: statusCode.SUCCESS,
    };
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
    const res = {
        message: 'Успех',
        statusCode: 200 /* statusCode.SUCCESS */,
    };
    if (res.statusCode === 100 /* statusCode.PROCESS */) {
        // preloader
    }
    if (res.statusCode === 200 /* statusCode.SUCCESS */) {
        // render
    }
    if (res.statusCode === 403 /* statusCode.FAILED */) {
        // error
    }
}
