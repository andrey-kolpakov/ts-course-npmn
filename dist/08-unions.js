"use strict";
const statusExample = 'ok';
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person[0] + person[1]);
    }
    else {
        console.log('Hello ', person);
    }
}
welcome(['Имя', 'Фамилия']);
welcome('Имя и фамилия');
welcome('Имя');
