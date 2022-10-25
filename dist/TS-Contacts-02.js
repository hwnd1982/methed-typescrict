"use strict";
{
    const persons = [
        {
            role: 'пользователь',
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            role: 'пользователь',
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            name: 'Дмитрий Иванов',
            age: 25,
            role: 'администратор',
        }
    ];
    const logPerson = (user) => {
        if (user.role === 'пользователь') {
            console.log(`${user.name} - ${user.group}, ${user.age} лет`);
        }
        if (user.role === 'администратор') {
            console.log(`Администратор - ${user.name}, ${user.age} лет`);
        }
    };
    persons.forEach(logPerson);
}
